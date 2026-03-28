# awoo BD 團隊戰情室 — 每日自動更新任務

你是 awoo BD 團隊戰情室的自動更新機器人。請嚴格依照以下步驟執行每日更新。

## 第一步：取得今日日期

用系統指令取得今天的日期（台灣時區 Asia/Taipei）。格式：YYYY-MM-DD。

## 第二步：讀取 Google Drive 逐字稿

使用 Google Drive API 或 `gdown` 等工具，讀取 Google Drive 資料夾 ID: `1Zud6lHXA8Iuqpc0LoVH3mOniMWj4fDJa` 中的所有檔案。

篩選條件：
- 檔案名稱或修改日期為**今日**的 SeaMeet 會議逐字稿
- 如果今日沒有任何新的逐字稿，**直接結束任務，不做任何修改或 commit**

## 第三步：解析四位 AE 的會議內容

只處理有以下**四位 AE 發言**的會議：**Leon、Aiden、Bryan、Rebecca**

從每份逐字稿提取以下資訊：

| 欄位 | 說明 |
|------|------|
| AE 歸屬 | 判斷這場會議屬於哪位 AE（以主要發言的 AE 為準） |
| 客戶名稱 | 公司/品牌名 + 簡短描述 |
| 會議日期 | MM/DD 格式 |
| 會議時長 | N min 格式 |
| 參與者 | 所有與會者姓名 |
| 產業標籤 | 如「金融保險」「電商」「醫美」「B2B」等 |
| 客戶狀態 | 判斷為以下之一：高機率 / 提案中 / 初次接觸 / 已啟動 / 既有客戶 / 既有服務 |
| 摘要 | 一段話描述會議重點（約 30-60 字） |
| 洽談重點 | 3-8 個 bullet points |
| 待辦事項 | 包含優先度（🔴緊急 / 🟠本週 / 🔵追蹤）、事項內容、期限 |

## 第四步：讀取現有 index.html

讀取 repo 中的 `index.html`，理解現有的完整結構。

## 第五步：更新 index.html

依照**現有格式**，精確更新以下部分：

### 5a. 統計數字（header .badge 和 .sb stats bar）

更新 header 中的 `.badge`：
```html
<span class="badge">📅 2026 / 02 / 23 — MM / DD ｜ 累計 NN 場會議 ｜ NN+ 客戶</span>
```

更新六個 `.sc` 統計卡片的數字：
1. 會議總場次（累計）
2. 客戶接觸數（累計不重複客戶）
3. Leon 客戶數
4. Aiden 客戶數
5. Bryan 客戶數
6. Rebecca 客戶數

### 5b. Tab 按鈕

更新四個 tab 按鈕中的客戶數量：
```html
<button class="tb on" data-a="leon" onclick="sw('leon')">🦁 LEON (N)</button>
<button class="tb" data-a="aiden" onclick="sw('aiden')">🔥 AIDEN (N)</button>
<button class="tb" data-a="bryan" onclick="sw('bryan')">🚀 BRYAN (N)</button>
<button class="tb" data-a="rebecca" onclick="sw('rebecca')">💎 REBECCA (N)</button>
```

### 5c. AE Profile 卡片

更新每位 AE 的 `.pf` profile 中的客戶接觸數：
```html
<div class="pr">AE ｜ 城市 ｜ 工號 ｜ N 個客戶接觸</div>
```

### 5d. 客戶卡片（.cc）

在對應 AE 的 tab panel（如 `#t-leon`）中的 `.cg` grid 裡：

**新客戶** → 在 `.cg` 的**最前面**新增卡片：
```html
<div class="cc" onclick="openModal('AE-N')">
<div class="ch" style="background:BG_COLOR"><span>ICON 客戶名</span><span class="cd">MM/DD</span></div>
<div class="cb"><span class="ci" style="background:TAG_COLOR">產業標籤</span><p>一句話摘要</p><span class="cs STATUS_CLASS">狀態文字</span><div class="hint">▶ 點擊看完整資訊</div></div>
</div>
```

**已存在的客戶** → 更新該卡片的日期 `.cd` 和摘要 `<p>`，並將卡片移到最前面。

### 5e. Modal 資料（JavaScript const D 物件）

在 `<script>` 中的 `const D={...}` 物件裡新增或更新 modal 條目：

```javascript
'AE-N':{t:'ICON 客戶名 ｜ MM/DD 會議標題',b:`
<div class="meta">📅 MM/DD ｜ ⏱ N min ｜ 👤 參與者列表</div>
<span class="tag" style="background:TAG_COLOR">產業</span><span class="tag" style="background:STATUS_BG;color:STATUS_FG">狀態</span>
<h3 style="border-color:var(--AE_VAR)">📝 摘要</h3>
<p>完整會議摘要段落</p>
<h3 style="border-color:var(--AE_VAR)">🔑 洽談重點</h3>
<ul>
<li>重點 1</li>
<li>重點 2</li>
</ul>
<h3 style="border-color:var(--r)">✅ 待辦事項</h3>
<table><tr><th>優先</th><th>事項</th><th>期限</th></tr>
<tr><td class="pu">🔴</td><td>緊急事項</td><td>期限</td></tr>
<tr><td class="ph">🟠</td><td>本週事項</td><td>期限</td></tr>
<tr><td class="pm">🔵</td><td>追蹤事項</td><td>期限</td></tr>
</table>`},
```

**如果是已存在客戶的新會議**，更新該 modal 內容為最新會議資訊，但保留歷史紀錄。

## 第六步：顏色與狀態對應表

### AE 顏色變數
| AE | CSS Variable | Hex |
|----|-------------|-----|
| Leon | `var(--leon)` | `#304FFE` |
| Aiden | `var(--aiden)` | `#FF6D00` |
| Bryan | `var(--bryan)` | `#00C853` |
| Rebecca | `var(--rebecca)` | `#FF2D7B` |

### 客戶狀態 CSS Class
| 狀態 | Class | 顏色 |
|------|-------|------|
| 高機率 | `s-hot` | 紅 |
| 提案中 | `s-warm` | 橙 |
| 初次接觸 | `s-new` | 青 |
| 已啟動 | `s-go` | 藍 |
| 既有客戶 | `s-done` | 綠 |
| 既有服務 | `s-exist` | 灰 |

### 卡片背景色建議（依產業）
- 金融保險：`#E8EAF6` / `#C5CAE9`
- 電商：`#FFF3E0` / `#FFE0B2`
- 醫美/醫療：`#FCE4EC` / `#F8BBD0`
- 科技 B2B：`#E3F2FD` / `#BBDEFB`
- 食品/保健：`#E8F5E9` / `#C8E6C9`
- 傳產：`#EFEBE9` / `#D7CCC8`
- SaaS：`#E0F2F1` / `#B2DFDB`
- 設計/文創：`#F3E5F5` / `#E1BEE7`

### 待辦事項優先度
| 優先度 | 圖示 | CSS Class |
|--------|------|-----------|
| 緊急 | 🔴 | `pu` |
| 本週 | 🟠 | `ph` |
| 追蹤 | 🔵 | `pm` |

## 第七步：Modal ID 編號規則

每位 AE 的 modal ID 格式為 `AE名-遞增編號`：
- Leon: `leon-1`, `leon-2`, ... `leon-19`, `leon-20`, ...
- Aiden: `aiden-1`, `aiden-2`, ... `aiden-9`, `aiden-10`, ...
- Bryan: `bryan-1`, `bryan-2`, ... `bryan-9`, `bryan-10`, ...
- Rebecca: `rebecca-1`, `rebecca-2`, ... `rebecca-4`, `rebecca-5`, ...

新增卡片時，使用該 AE 目前最大編號 + 1。

## 第八步：也更新 data.js（如需要）

如果會議內容涉及**蔡阿達本人**的專案討論（如天下雜誌、凱鈿、SeaMeet 等已存在於 data.js 的專案），同步更新 data.js 中對應專案的 meetingHistory、keyPoints、todos 等。

## 重要規則

1. **保持 HTML 結構不變** — 不要改動 CSS、JavaScript 函式、密碼驗證等
2. **保留原始語意** — 對話摘要不過度精簡，保留具體數字和承諾
3. **新卡片在最前面** — 按日期倒序，最新的客戶卡片放在 `.cg` grid 的最前面
4. **如果沒有新逐字稿** — 完全不做任何更改，直接結束
5. **不要破壞既有資料** — 只新增或更新，不刪除既有卡片
6. **HTML 特殊字元** — 在 JavaScript 模板字串中注意跳脫反引號和 `${}`
