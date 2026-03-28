#!/usr/bin/env python3
"""
從 Google Drive 資料夾下載指定日期的 SeaMeet 會議逐字稿。
遞迴掃描所有子資料夾，以修改日期和檔名比對目標日期。
"""
import argparse
import os
import re
from datetime import datetime, timedelta, timezone

from google.oauth2 import service_account
from googleapiclient.discovery import build

TW_TZ = timezone(timedelta(hours=8))

SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]


def get_drive_service():
    creds_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if not creds_path:
        raise RuntimeError("GOOGLE_APPLICATION_CREDENTIALS not set")
    creds = service_account.Credentials.from_service_account_file(creds_path, scopes=SCOPES)
    return build("drive", "v3", credentials=creds)


def list_all_files(service, folder_id, depth=0):
    """遞迴列出資料夾中所有檔案（含子資料夾）"""
    files = []
    page_token = None
    while True:
        resp = service.files().list(
            q=f"'{folder_id}' in parents and trashed=false",
            fields="nextPageToken, files(id, name, mimeType, createdTime, modifiedTime)",
            pageSize=200,
            pageToken=page_token,
        ).execute()
        for f in resp.get("files", []):
            files.append(f)
            # 遞迴進入子資料夾
            if f["mimeType"] == "application/vnd.google-apps.folder" and depth < 5:
                files.extend(list_all_files(service, f["id"], depth + 1))
        page_token = resp.get("nextPageToken")
        if not page_token:
            break
    return files


def matches_date(file_info, target_date_str):
    """檢查檔案是否符合目標日期（寬鬆比對）"""
    # target_date_str: "2026-03-27"
    td = datetime.strptime(target_date_str, "%Y-%m-%d")
    mm = f"{td.month:02d}"
    dd = f"{td.day:02d}"
    yyyy = str(td.year)

    # 比對檔名中的日期（各種格式）
    name = file_info.get("name", "")
    date_patterns = [
        f"{yyyy}-{mm}-{dd}",     # 2026-03-27
        f"{yyyy}/{mm}/{dd}",     # 2026/03/27
        f"{mm}/{dd}/{yyyy}",     # 03/27/2026
        f"{mm}-{dd}-{yyyy}",     # 03-27-2026
        f"{mm}/{dd}",            # 03/27
        f"{mm}{dd}",             # 0327
    ]
    for pattern in date_patterns:
        if pattern in name:
            return True

    # 比對 createdTime / modifiedTime（轉換為台灣時區）
    for time_field in ["createdTime", "modifiedTime"]:
        ts = file_info.get(time_field)
        if ts:
            dt = datetime.fromisoformat(ts.replace("Z", "+00:00")).astimezone(TW_TZ)
            if dt.strftime("%Y-%m-%d") == target_date_str:
                return True

    return False


def export_file(service, file_info, output_dir, index):
    """匯出檔案為純文字"""
    file_id = file_info["id"]
    mime = file_info["mimeType"]
    name = file_info["name"]
    safe_name = re.sub(r'[^\w\u4e00-\u9fff\-]', '_', name)
    out_path = os.path.join(output_dir, f"{index:02d}_{safe_name}.txt")

    try:
        if mime == "application/vnd.google-apps.document":
            # Google Doc → 純文字
            content = service.files().export(
                fileId=file_id, mimeType="text/plain"
            ).execute()
            if isinstance(content, bytes):
                content = content.decode("utf-8")
        else:
            # 其他檔案嘗試直接下載
            content = service.files().get_media(fileId=file_id).execute()
            if isinstance(content, bytes):
                content = content.decode("utf-8", errors="replace")

        # 在開頭加入檔案元資訊
        header = (
            f"=== 檔案名稱: {name} ===\n"
            f"=== 建立時間: {file_info.get('createdTime', 'N/A')} ===\n"
            f"=== 修改時間: {file_info.get('modifiedTime', 'N/A')} ===\n"
            f"=== 檔案 ID: {file_id} ===\n"
            f"{'=' * 50}\n\n"
        )
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(header + content)

        print(f"  ✅ Downloaded: {name} → {out_path}")
        return True
    except Exception as e:
        print(f"  ❌ Failed: {name} — {e}")
        return False


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--folder-id", required=True)
    parser.add_argument("--target-date", required=True, help="YYYY-MM-DD")
    parser.add_argument("--output-dir", default="transcripts")
    args = parser.parse_args()

    os.makedirs(args.output_dir, exist_ok=True)
    service = get_drive_service()

    print(f"📂 Scanning folder: {args.folder_id}")
    print(f"📅 Target date: {args.target_date}")

    all_files = list_all_files(service, args.folder_id)
    print(f"\n📋 Total files found: {len(all_files)}")

    for f in all_files:
        print(f"  - {f['name']} | {f['mimeType']} | modified: {f.get('modifiedTime', 'N/A')}")

    # 篩選目標日期的檔案
    matched = [f for f in all_files if matches_date(f, args.target_date)]
    # 排除資料夾本身
    matched = [f for f in matched if f["mimeType"] != "application/vnd.google-apps.folder"]

    print(f"\n🎯 Matched files for {args.target_date}: {len(matched)}")

    if not matched:
        print("No transcripts found for target date.")
        return

    downloaded = 0
    for i, f in enumerate(matched):
        if export_file(service, f, args.output_dir, i + 1):
            downloaded += 1

    print(f"\n✅ Downloaded {downloaded} transcripts to {args.output_dir}/")


if __name__ == "__main__":
    main()
