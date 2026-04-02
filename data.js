// === awoo BD War Room — 蔡阿達個人會議戰情室 ===
// 每日 19:00 由排程任務自動更新此檔案
// 結構：專案卡片為核心，同一專案被多次討論時更新同一張卡片

window.WAR_ROOM_DATA = {
  lastUpdated: "2026-04-02T20:00:00",
  dateLabel: "2026/04/02（四）",
  stats: {
    meetings: 23,
    projects: 24,
    partners: 10,
    internal: 5,
    clientCompany: 7,
    todos: 90
  },

  projects: [
    // ====== P1: 天下雜誌 ======
    {
      id: "tianxia",
      name: "天下雜誌 — 媒體 GEO 經銷合作",
      icon: "📰",
      category: "partner",
      lastUpdated: "2026-03-24",
      summary: "媒體端 GEO 經銷全新模式 — 關鍵字計價 + POC 試點",
      keyPoints: [
        "<strong>20 關鍵字 ≈ NT$35,000/月</strong>，延伸 60 個 Prompt 追蹤",
        "不採年約，兩個月為一期計算 MRR",
        "雙方同意<strong>先小規模 POC</strong>，至少半年追蹤期",
        "天下痛點：AU 式廣編缺 AI 成效追蹤工具",
        "awoo 提供監控儀表板：品牌提及率、AI 引用率、聲量占比"
      ],
      chips: [
        { icon: "💰", text: "35,000/月" },
        { icon: "🔑", text: "20 關鍵字" },
        { icon: "💬", text: "60 Prompt" },
        { icon: "⏱️", text: "POC ≥ 2 個月" }
      ],
      todos: [
        { owner: "蔡阿達", text: "提供正式報價方案（含計價模式）", priority: "week" },
        { owner: "蔡阿達", text: "設計合作公版 brief 格式", priority: "week" },
        { owner: "周峯玉", text: "盤點客戶量體，挑選 POC 試點客戶", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "awoo × 天下",
          time: "10:03-11:04",
          duration: "1h01m",
          participants: "蔡阿達、周峯玉、Angelline",
          docUrl: "https://docs.google.com/document/d/1AdMWjGjL5uY2SkfFvi2Qkjbi1OCZQ52eFRn_lpJDJpQ/edit",
          dialogues: [
            {
              topic: "雙方合作需求釐清",
              exchanges: [
                { speaker: "周峯玉", role: "other", label: "天下", text: "我們最大困擾是，客戶在我們這邊下廣編，成效是坐在我們家，那我要怎麼證明在天下下廣編對它的 AI 聲量提升是有幫助的？" },
                { speaker: "蔡阿達", role: "ada", text: "現在想要去追蹤 AI 的指標，幾乎沒有一套工具可以追蹤得出來，也沒有值得拿出來證明的第三方數據。我們就幫你建構監控平台跟儀表板。" },
                { speaker: "蔡阿達", role: "ada", text: "我們就是想要幫你做出成績給你們客戶看，讓你們做的每一件事情，讓客戶都看得到。" }
              ]
            },
            {
              topic: "收費與合作模式",
              exchanges: [
                { speaker: "周峯玉", role: "other", label: "天下", text: "如果要大量合作的話，這個確實有點貴。不過我覺得先盤一下數量，然後來談比較 make sense。" },
                { speaker: "蔡阿達", role: "ada", text: "如果真的要試的話，我覺得最少要抓半年，因為不管是搜尋引擎還是 AI，都需要時間去累積你的信任程度。" },
                { speaker: "周峯玉", role: "other", label: "天下", text: "合作就是要 win-win，不可能只有我的需求被滿足但你們做不下去。我們希望能夠用經銷的方式來思考合作量與價格。" },
                { speaker: "蔡阿達", role: "ada", text: "合作可能會更單純一點，就是以客戶為單位，我們針對他那篇廣編文的關鍵字來做追蹤，然後來提出建議。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P2: 凱鈿 ======
    {
      id: "kdan",
      name: "凱鈿點點簽 — GEO Suite 全球化串接",
      icon: "✒️",
      category: "partner",
      lastUpdated: "2026-03-24",
      summary: "策略夥伴合作 — 繁中語系三個月免費試用",
      keyPoints: [
        "聚焦日本、美國、馬來西亞、泰國，<strong>英/日/中三大語系</strong>",
        "雙方同意<strong>先從繁中語系開始</strong>，英文語系投報率最大但競爭激烈",
        "凱鈿痛點：缺 AI 觀測工具，SEMRush/Ahrefs 對台灣/日本不夠深",
        "合作模式：<strong>策略夥伴、免費試用 3 個月</strong>，換 Logo 露出"
      ],
      chips: [
        { icon: "🆓", text: "3 個月免費" },
        { icon: "🔑", text: "20 關鍵字" },
        { icon: "💬", text: "60 Prompt" },
        { icon: "📄", text: "報價 3/25" }
      ],
      todos: [
        { owner: "蔡阿達", text: "3/25 晚間前交付免費試用報價單", priority: "today" },
        { owner: "蔡阿達", text: "用點點簽完成電子簽署", priority: "today" },
        { owner: "Albert", text: "建立溝通群組", priority: "waiting" },
        { owner: "蔡阿達", text: "規劃 20 關鍵字 + 60 Prompt（繁中）", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "凱鈿 × awoo GEO Suite 合作洽談",
          time: "15:02-15:43",
          duration: "41m",
          participants: "蔡阿達、Albert Chang、Christy Huang、Clare Lo、Emily Lin",
          docUrl: "https://docs.google.com/document/d/15ozY-ilUs6JTa-e_Gdf3W8EojZPoY3Sbl-7vUpRtI34/edit",
          dialogues: [
            {
              topic: "市場策略討論",
              exchanges: [
                { speaker: "Albert Chang", role: "other", label: "凱鈿", text: "我們面臨的挑戰是，過去操作很多 SEO、關鍵字、campaign，現在世界開始轉換了，我們在新的世界裡怎麼被 AI 看到？" },
                { speaker: "蔡阿達", role: "ada", text: "語系比國家更重要，我們只要確定好語系就好。整個地球是平的，只要有共同語言，不管在什麼地區都可以被看見。" },
                { speaker: "Christy Huang", role: "other", label: "凱鈿", text: "我們缺少的是觀測工具，比較感興趣的是怎麼觀測我們自己做的 AEO 優化。SEMRush、Ahrefs 這些對台灣跟日本的著墨沒有你們那麼多。" }
              ]
            },
            {
              topic: "合作模式確認",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我會出一個簡單的報價單，但沒有價格，就是一個免費試用三個月的合作關係。我們也有個小期待，就是讓你們成為我們網站上的一員，有點像策略夥伴。" },
                { speaker: "Christy Huang", role: "other", label: "凱鈿", text: "策略夥伴這個可以，可以再談。我們可以先從繁中開始看。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P3: SeaMeet ======
    {
      id: "seameet",
      name: "SeaMeet — 全公司 AI 會議助理導入",
      icon: "🎙️",
      category: "partner",
      lastUpdated: "2026-03-24",
      summary: "採購 30 帳號七折年約，確認三層階層管理架構",
      keyPoints: [
        "團隊 22-23 人，每位 PM 配備 AI 會議助理",
        "支援<strong>三層階層管理</strong>（組長→部門主管→老闆）",
        "逐字稿自動存放 Google Drive，工程師可直接分析商情",
        "<strong>30 帳號、七折優惠、年約方案</strong>"
      ],
      chips: [
        { icon: "👥", text: "30 帳號" },
        { icon: "💰", text: "七折" },
        { icon: "💵", text: "$49.9×10mo×0.7" },
        { icon: "🏢", text: "3 層管理" }
      ],
      todos: [
        { owner: "蔡阿達", text: "建立 LINE 群組協調採購事宜", priority: "today" },
        { owner: "Shao Ho", text: "提供正式報價單", priority: "waiting" },
        { owner: "藍文甫", text: "與老闆確認年約 vs 月付", priority: "waiting" },
        { owner: "藍文甫", text: "設定 Google Drive 資料夾整合", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "SeaMeet 產品會議",
          time: "17:01-17:26",
          duration: "24m",
          participants: "蔡阿達、Shao Ho、藍文甫",
          docUrl: "https://docs.google.com/document/d/1Ii2hevYJz8feGiHXOOxi5vxy-RHV-oujGAzbNpBhJsM/edit",
          dialogues: [
            {
              topic: "階層管理 & 採購",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "我的團隊大概 22、23 個人，我會配給每一個專案經理一隻 AI 會議 agent，資料應該要分 tier，組長、部門主管、老闆逐級往上集中。" },
                { speaker: "Shao Ho", role: "other", label: "SeaMeet", text: "系統支援階層式管理，用工作區域分組，管理者可收到每日彙整報表。" },
                { speaker: "蔡阿達", role: "ada", text: "他們的服務有個功能，每場會議會自動存放在設定好的 Google Drive 資料夾當中，所有會議資料都在那裡。" },
                { speaker: "蔡阿達", role: "ada", text: "我們可不可以拉一個 LINE 群？現在公司要買 30 位的名額，要怎麼定價？" },
                { speaker: "Shao Ho", role: "other", label: "SeaMeet", text: "阿達這邊跟我們支持很久，你們的採購我們都是給七折。年繳的話是 $49.9 x 10 個月 = $199，再打七折。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "我會跟老闆講月付跟年付的差異，我會說服他年繳，一次吃下去。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P4: 獎金制度改革 ======
    {
      id: "bonus-reform",
      name: "獎金制度改革 & 業績目標調整",
      icon: "💰",
      category: "company",
      lastUpdated: "2026-03-26",
      summary: "獎金基準升至 60、季度加權係數確定，下週阿達與業務佈達",
      keyPoints: [
        "<strong>個人目標下修約 20%</strong>，團隊目標約 4,800 萬",
        "獎金制度調整 — 發展金門檻降低，業績獎金預期增加",
        "AE 與 CS <strong>獎金邏輯統一</strong>，由 SS 團隊負責，避免重疊",
        "GO 產品獎金比例高於 AMP",
        "達成率低於 60% 進入 PIP",
        "獎金基準由 50 調升為 <strong>60</strong>，淘汰級距 30-59；達 80 則獎金翻倍",
        "季度加權係數定案：<strong>第一個月 ×1.1 / 第二個月 ×1.0 / 第三個月 ×0.9</strong>，鼓勵提前衝刺",
        "獎金指標改為<strong>季度 MRR（營業額）</strong>，刪除半年獎金及跨售重疊",
        "獎金預算約 430 萬，最高不超過 200 萬",
        "預計<strong>下週阿達與業務佈達</strong>新方案，週一預算會議報告"
      ],
      chips: [
        { icon: "📉", text: "目標 -20%" },
        { icon: "💰", text: "4,800萬/年" },
        { icon: "⚠️", text: "PIP < 60%" },
        { icon: "🎯", text: "基準 60" },
        { icon: "⚖️", text: "加權 1.1/1.0/0.9" },
        { icon: "💵", text: "預算 ≤200萬" }
      ],
      todos: [
        { owner: "蔡阿達", text: "與 Mike、小偉確認獎金邏輯統一細節", priority: "week" },
        { owner: "Leo", text: "調整獎金方案版本，刪除跨售重疊及半年獎金，淘汰基準改為 60", priority: "week" },
        { owner: "Winny Chiang", text: "修改阿達獎金辦法 wording，確保內容清楚並同步群組", priority: "week" },
        { owner: "蔡阿達", text: "下週與業務佈達新獎金方案", priority: "week" },
        { owner: "蔡阿達", text: "準備週一（3/30）預算會議報告", priority: "today" }
      ],
      meetingHistory: [
        {
          date: "2026-03-26",
          title: "獎金辦法討論",
          time: "14:11",
          duration: "19m",
          participants: "Winny Chiang、廖郁芳、Anne Chang、藍文甫、Leo、蔡阿達",
          docUrl: "",
          dialogues: [
            {
              topic: "獎金基準與加權係數確定",
              exchanges: [
                { speaker: "Winny Chiang", role: "other", label: "管理層", text: "老闆決定將業務獎金基準由 50 調整為 60，將獎金級距改為 60 到 79，淘汰級距為 30 到 59。為避免業務只在季末衝刺，提出依季度月份給予不同加權係數。" },
                { speaker: "廖郁芳", role: "other", label: "內部", text: "加權係數建議為 1.1、1.0、0.9，保持總和為 3，讓業務有衝勁。" },
                { speaker: "Anne Chang", role: "other", label: "內部", text: "若業務在第三個月無望，可能會推遲到下一季第一個月簽約以獲得較高加成。" },
                { speaker: "Winny Chiang", role: "other", label: "管理層", text: "仍鼓勵提前完成，第三個月獎金不會有加權，就是要扣減 0.1 避免季末衝刺。" }
              ]
            },
            {
              topic: "獎金指標改為營業額",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "續約率指標不準確，因客戶專案數量及品質不一，改以營業額作為獎金指標，涵蓋所有收入，包含新客戶開發及帳款回收。" },
                { speaker: "Anne Chang", role: "other", label: "內部", text: "客戶流失可由新客戶收入補足，營業額指標更能反映整體業績。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "業務需管理好帳款，避免續約但帳款未收回的情況。ST 組以獎勵方式發放，CW 組獨立計算，均以營業額為基準。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE Team 週會",
          time: "11:31-12:22",
          duration: "51m",
          participants: "蔡阿達、Bryan、Rebecca、Leon、Aiden、馬愛雲",
          docUrl: "https://docs.google.com/document/d/1XPfYH6koiUxtLHztkHmiXL4HP5s8HIa4Q-7xuhkcJI0/edit",
          dialogues: [
            {
              topic: "業績目標調整",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "個人的目標會大幅的下降，因為我發現到之前你們的目標好像都太高。我會把大家的業績目標拉成同樣的一條水平，我們就是一起來面對這個部門的業績目標。應該會滑個 20% 左右，可是同時發展金的水平也會再降低，所以你們今年的業績獎金一定會領更多。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE ↔ BA Meeting",
          time: "16:01-16:59",
          duration: "58m",
          participants: "蔡阿達、Leon、楊舒涵、Anne Chang、藍文甫",
          docUrl: "https://docs.google.com/document/d/1cz50wIZwJra59dCQ4b1wPImwfPibfhroM_6DLeRc9KI/edit",
          dialogues: [
            {
              topic: "獎金邏輯統一",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我這邊只要收到有廣告需求的，我就直接 pass 給賽斯。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "獎金邏輯全部統一，不要再分獎金了，不讓它重疊，由 SS 直接負責。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P5: 媒體經銷新模式 ======
    {
      id: "media-resell",
      name: "媒體經銷新商業模式（赫斯特 + 天下）",
      icon: "📺",
      category: "internal",
      lastUpdated: "2026-03-24",
      summary: "以經銷方式銷售工具 + Prompt + 追蹤結果，MRR 兩個月一期",
      keyPoints: [
        "與赫斯特（時尚）及天下（財經）兩大媒體合作",
        "不採年約，<strong>兩個月為一期計算 MRR</strong>",
        "不影響季度業績目標",
        "業務遇到客戶想簽短約時可積極推廣"
      ],
      chips: [],
      todos: [
        { owner: "蔡阿達", text: "持續推動赫斯特、天下合作案", priority: "week" },
        { owner: "蔡阿達", text: "制定經銷模式標準流程 SOP", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "AE Team 週會",
          time: "11:31-12:22",
          duration: "51m",
          participants: "蔡阿達、Bryan、Rebecca、Leon、Aiden、馬愛雲",
          docUrl: "https://docs.google.com/document/d/1XPfYH6koiUxtLHztkHmiXL4HP5s8HIa4Q-7xuhkcJI0/edit",
          dialogues: [
            {
              topic: "媒體經銷新模式",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們跟媒體的合作可能會幫我們開創一個全新的商業模式。我們有可能是用一種經銷的方式，去賣我們的工具、Prompt、追蹤結果。兩個月兩個月來買，MRR 就是兩個月兩個月來算。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P6: AI 文章產製 ======
    {
      id: "ai-content",
      name: "AI 文章產製系統 & 品質控管",
      icon: "🤖",
      category: "internal",
      lastUpdated: "2026-04-01",
      summary: "文案 n8n 流程啟動 — AI 初稿工具半自動化、素材查證責任歸客戶、精緻文章 vs AI 文章雙軌定價",
      keyPoints: [
        "文案團隊撰寫 10 篇（人類），7 篇 AI 輔助生成再經人類審核",
        "藍文甫堅持<strong>先內部測試</strong>，不可拿客戶當白老鼠",
        "Leon 建議保留 <strong>25% 人工補強</strong>，維持文章品質與人情味",
        "合約揭露時機：蔡阿達主張合約階段再說明 AI 文章性質",
        "英文文章需等<strong>五月招募</strong>具英文能力的 writer",
        "🆕 4/01 文案 n8n：蔡阿達開發<strong>爬蟲工具一鍵生成初稿</strong>，可同時處理多客戶網站",
        "合約新增條款：<strong>素材查證責任歸客戶</strong>，awoo 僅提供參考內容，不負查證義務",
        "雙軌定價策略：<strong>精緻文章</strong>（價格較高）+ <strong>AI 輔助文章</strong>（較低費用）",
        "工具付費模式：公司共用帳號共享 AI API 月費，以節省成本",
        "資料管理：客戶資料以<strong>客戶名稱分類資料夾</strong>，方便文案搜尋管理"
      ],
      chips: [
        { icon: "📝", text: "17篇/月" },
        { icon: "👤", text: "25% 人工" },
        { icon: "🗓️", text: "英文 Writer 五月" },
        { icon: "⚠️", text: "素材查證→客戶責任" },
        { icon: "🤖", text: "一鍵生成初稿工具" }
      ],
      todos: [
        { owner: "藍文甫", text: "內部先測試 AI 文章品質", priority: "waiting" },
        { owner: "蔡阿達", text: "開發一鍵 AI 初稿工具，教導文案組使用", priority: "week" },
        { owner: "蔡阿達", text: "持續優化爬蟲流程，支援同時多客戶處理", priority: "week" },
        { owner: "蔡阿達", text: "共同撰寫 AI 文章相關合約條款（含素材查證責任條款）", priority: "week" },
        { owner: "蔡阿達", text: "持續測試英文 AI 工具，改善文法與句型品質", priority: "week" },
        { owner: "廖淑芬", text: "協助統籌現有及新客戶資料整理，以客戶名稱分類資料夾", priority: "week" },
        { owner: "藍文甫", text: "每週與廖淑芬開會，持續優化文案產出流程（4/15 起）", priority: "waiting" },
        { owner: "藍文甫", text: "合約新增素材查證責任條款，並確認 AI 文章相關說明", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "AE Team 週會",
          time: "11:31-12:22",
          duration: "51m",
          participants: "蔡阿達、Bryan、Rebecca、Leon、Aiden、馬愛雲",
          docUrl: "https://docs.google.com/document/d/1XPfYH6koiUxtLHztkHmiXL4HP5s8HIa4Q-7xuhkcJI0/edit",
          dialogues: [
            {
              topic: "文章產製模式",
              exchanges: [
                { speaker: "Aiden", role: "other", label: "AE", text: "所以就是十篇是現在的模式撰寫，七篇是 AI 協助撰寫對不對？" },
                { speaker: "蔡阿達", role: "ada", text: "對。你可以跟客戶說清楚，17 篇都是用我們人類來撰寫規劃，其中 10 篇由人類寫出來，7 篇是拿規劃去輔助用 AI 生成，再透過人類來潤飾。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE ↔ BA Meeting",
          time: "16:01-16:59",
          duration: "58m",
          participants: "蔡阿達、Leon、楊舒涵、Anne Chang、藍文甫",
          docUrl: "https://docs.google.com/document/d/1cz50wIZwJra59dCQ4b1wPImwfPibfhroM_6DLeRc9KI/edit",
          dialogues: [
            {
              topic: "AI 文章品質控管",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "不是你賣的同時拿客戶來測，這會出事，等於把客戶當白老鼠。我是說內部先測。" },
                { speaker: "蔡阿達", role: "ada", text: "對我跟 AI 的了解，我真的覺得它的產出品質已經沒有什麼好擔心的了。我們就是事先跟客戶講好，我們幫他規劃文章，用 AI 輔助生成。" },
                { speaker: "Leon", role: "other", label: "AE", text: "人的價值是 AI 產完之後，人看過，語句通順。人的價值在這裡。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "留點人情味，人工補強大概 25%，去限制它。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-31",
          title: "AE Team 週會",
          time: "11:43",
          duration: "28m",
          participants: "蔡阿達、呂紹平（Leon）、蔡毓倫（Aiden）、Rebecca Chen",
          docUrl: "",
          dialogues: [
            {
              topic: "Prompt 産生器優化需求",
              exchanges: [
                { speaker: "蔡毓倫", role: "other", label: "AE", text: "客戶多使用簡短 prompt，長句反而造成困擾，建議簡化。客戶看到那麼多字，還是就是會讓他糾結更久。" },
                { speaker: "蔡阿達", role: "ada", text: "目前産生器已符合用戶需求，計劃調整增加多元性。我不太確定那邊有沒有比較簡潔的版本。" },
                { speaker: "Rebecca", role: "other", label: "AE", text: "工具可輔助 prompt 決策，我會開始使用相關流程。" },
                { speaker: "蔡阿達", role: "ada", text: "同意將關鍵字延伸 prompt 納入系統，方便顧問案與客戶查看。" }
              ]
            }
          ]
        },
        {
          date: "2026-04-01",
          title: "文案 n8n 產出流程優化會議",
          time: "15:00",
          duration: "1h05m",
          participants: "蔡阿達、藍文甫（Leo）、廖淑芬（小花）、Anne Chang、Rica",
          docUrl: "",
          dialogues: [
            {
              topic: "爬蟲一鍵工具介紹",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我做了一個爬蟲工具，可以一鍵抓取客戶網站資料，直接生成文章初稿。可以同時處理多個客戶的網站，不用每次都手動複製貼上。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "這樣文案的效率應該可以提高不少，那品質管控怎麼做？" },
                { speaker: "蔡阿達", role: "ada", text: "AI 生成之後還是需要人工審核，我們定位是半自動化，不是全自動。人工的部分就是確保語氣和客戶品牌調性吻合。" }
              ]
            },
            {
              topic: "素材查證責任歸屬",
              exchanges: [
                { speaker: "廖淑芬", role: "other", label: "小花", text: "如果客戶提供的資料有誤，AI 又把它寫進文章裡，這個責任是誰的？" },
                { speaker: "蔡阿達", role: "ada", text: "合約要加一條：素材查證責任歸客戶。我們是根據客戶提供的資料來生成，我們只是工具，不負責查證資料正確性。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "這個合理，我來協助把這條加進標準合約裡。" }
              ]
            },
            {
              topic: "雙軌定價策略",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我建議分兩種文章：精緻文章跟 AI 輔助文章，定價不一樣。讓客戶自己選，透明一點。" },
                { speaker: "Anne Chang", role: "other", label: "文案", text: "那精緻文章是指完全人工撰寫嗎？還是還是有 AI 輔助？" },
                { speaker: "蔡阿達", role: "ada", text: "精緻文章也可以用 AI 輔助，但人工投入比例更高，定價反映那個差異。重點是跟客戶說清楚。" }
              ]
            },
            {
              topic: "資料管理與工具費用共攤",
              exchanges: [
                { speaker: "廖淑芬", role: "other", label: "小花", text: "現在文案的客戶資料都是散的，很難找。" },
                { speaker: "蔡阿達", role: "ada", text: "以後用客戶名稱建立資料夾，所有相關素材都放在裡面。我跟小花確認一下現有客戶的整理方式。" },
                { speaker: "蔡阿達", role: "ada", text: "AI API 費用公司共用一個帳號，月費大家分攤，不用每個人都買，這樣最省。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P7: NOUVA ======
    {
      id: "nouva",
      name: "NOUVA — 語系轉向 & SEO 策略調整",
      icon: "🌍",
      category: "client",
      lastUpdated: "2026-03-24",
      summary: "從法文課轉攻英語課市場，網站語系大調整 + 合約變更",
      keyPoints: [
        "英語市場規模比法文大<strong>10-20 倍</strong>，決定優先推動英語課程",
        "定位「主題式英語口說」（Workshop / EMI），非傳統補習班",
        "中文內容需搬移至新站（MARS），做 <strong>301 轉址</strong>移轉權重",
        "原兩年法文 SEO 合約需暫停調整方向"
      ],
      chips: [
        { icon: "📊", text: "市場差距 10-20x" },
        { icon: "📄", text: "合約 2 年" },
        { icon: "🌐", text: "新站本週上線" }
      ],
      todos: [
        { owner: "蔡阿達", text: "與瑞恩、MAX 溝通合約暫停及調整方案", priority: "week" },
        { owner: "蔡阿達", text: "與五樓討論中文語系網站技術細節", priority: "week" },
        { owner: "蔡阿達", text: "重新挑選中文關鍵字（英語口說 / EMI）", priority: "week" },
        { owner: "蔡阿達", text: "協助 301 轉址（舊站→新站）", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "NOUVA 官網 GEO 方案合作狀況同步",
          time: "13:00-13:46",
          duration: "45m",
          participants: "蔡阿達、Janet Lin",
          docUrl: "https://docs.google.com/document/d/1YLedJXV_V0t6qrgh3zz2oPH1LyoATdPFxPvVp0opmlg/edit",
          dialogues: [
            {
              topic: "語系轉向決策",
              exchanges: [
                { speaker: "Janet Lin", role: "other", label: "NOUVA", text: "英語的市場規模跟其他語言實在差太多，雖然全世界最多人學的第二語言是法語，可是跟第一名差了十倍二十倍。我們一直很難賺錢，雖然東西很好。" },
                { speaker: "蔡阿達", role: "ada", text: "你不管想要換到哪一個語言都 OK，反正我們原本找 MARS 就是為了要先建置好一個彈性的體質。" },
                { speaker: "Janet Lin", role: "other", label: "NOUVA", text: "台灣人需要的不是英文課，需要的其實是一個環境，然後你可以用英文去輸出。" }
              ]
            },
            {
              topic: "SEO 排名困惑",
              exchanges: [
                { speaker: "Janet Lin", role: "other", label: "NOUVA", text: "我的網站有那麼爛嗎？那些競爭對手的網站，有的就只有一張圖耶，一張圖，然後就出現在第一頁。" },
                { speaker: "蔡阿達", role: "ada", text: "有時候不是自己做得太爛，是有些人先天優勢比較強。他們牌子夠老，做很久，先天就比你有優勢。" },
                { speaker: "蔡阿達", role: "ada", text: "現在有 AI 了，你不用去在意那個排名，你只要把事情做好做對，你的目標族群在問 AI 問題的時候，AI 會直接把你推舉在前面。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P9: MKT 四月聯合 Webinar ======
    {
      id: "mkt-webinar-apr",
      name: "MKT 四月聯合 Webinar — GEO × OneAd × 比幣",
      icon: "📣",
      category: "events",
      lastUpdated: "2026-03-25",
      summary: "四月聯合 Webinar 演講準備 — 4/13 交簡報、4/16 錄影、4/28 Shopline 場",
      keyPoints: [
        "與 OneAd（數位廣告 AI 應用）、比幣（CRM 會員管理）三方聯合 Webinar",
        "蔡阿達主講 GEO 相關 AI 搜尋趨勢（30 分鐘）+ 三方 Panel 對談",
        "錄影流程：先個人演講錄製，再 Panel 錄製；線上彩排先熟悉問答方向",
        "名單共享、行銷資源交換，每月固定舉辦",
        "<strong>4/28 Shopline 客戶場</strong>，下午 2:30-4:00，面向 Shopline 既有客戶"
      ],
      chips: [
        { icon: "📅", text: "4/13 簡報初稿" },
        { icon: "🎬", text: "4/16 實體錄影" },
        { icon: "🏪", text: "4/28 Shopline" },
        { icon: "⏱️", text: "30min 演講" }
      ],
      todos: [
        { owner: "蔡阿達", text: "4/13 前提供四月活動演講簡報初稿給 Iris Tsai", priority: "week" },
        { owner: "蔡阿達", text: "4/16 參與實體錄影（個人演講 + Panel 錄製）", priority: "week" },
        { owner: "蔡阿達", text: "確認 4/28 Shopline 演講是否需夥伴支援", priority: "week" },
        { owner: "Iris Tsai", text: "提供最新一次活動完整簡報範本給蔡阿達", priority: "waiting" },
        { owner: "Iris Tsai", text: "安排線上彩排，提前告知講師問答方向", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-25",
          title: "MKT webinar 流程說明 - with Ada",
          time: "10:00-10:21",
          duration: "21m",
          participants: "蔡阿達、Libby Cheng、Iris Tsai",
          docUrl: "",
          dialogues: [
            {
              topic: "四月活動合作模式",
              exchanges: [
                { speaker: "Libby Cheng", role: "other", label: "MKT", text: "活動是公司每月固定舉辦，與夥伴共同合辦並共享名單，活動主題緊扣行銷與AI應用，提供行銷資源交換機會。" },
                { speaker: "Iris Tsai", role: "other", label: "MKT", text: "本次三大議題：GEO相關AI搜尋與趨勢、OneAd數位廣告AI應用及比幣CRM會員管理。每位講師30分鐘演講後，進行三方Panel對談。" },
                { speaker: "蔡阿達", role: "ada", text: "我比較希望在4月13日之前收到簡報範本，因為技術變化很快，需要保留調整空間。" }
              ]
            },
            {
              topic: "錄影與彩排安排",
              exchanges: [
                { speaker: "Iris Tsai", role: "other", label: "MKT", text: "彩排時先溝通問題與回答方向，避免錄影當天出現意外狀況。錄影當天先錄製個人演講，再進行Panel錄製。" },
                { speaker: "Libby Cheng", role: "other", label: "MKT", text: "彩排為線上軟性會議，讓講師彼此熟悉並促進交流，減少錄影時的生疏感。" },
                { speaker: "蔡阿達", role: "ada", text: "我理解，我會隨機應變並配合安排。" }
              ]
            },
            {
              topic: "4/28 Shopline 演講確認",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "4月28日我在Shopline辦公室有演講。" },
                { speaker: "Iris Tsai", role: "other", label: "MKT", text: "那場是面向Shopline既有客戶，時間是下午2:30至4:00，我先行預訂時間。若有衝突會協調夥伴支援。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P8: HubSpot 流程優化 ======
    {
      id: "hubspot-flow",
      name: "HubSpot Deal 流程 & GEO 資料標記",
      icon: "⚙️",
      category: "company",
      lastUpdated: "2026-03-24",
      summary: "新增 Deal Type + Uncategorized 通知 + 副詞審字自動化",
      keyPoints: [
        "新增自訂欄位標記 GEO 相關客戶（品牌、代理商、發布會）",
        "新增 Deal Type：<strong>GO 顧問方案 / GO 工具方案</strong>",
        "Uncategorized pipeline 通知發到 <strong>Slack 公共頻道</strong>",
        "Deal 到 30% 時自動建立 Ticket 給副詞團隊審字",
        "工具月費不低於 3 萬，<strong>90 個 Prompt 為甜蜜點</strong>",
        "後台預計三個月內開發客戶自助改 Prompt 功能"
      ],
      chips: [
        { icon: "📊", text: "GEO Deal 15筆" },
        { icon: "💬", text: "90 Prompt" },
        { icon: "🏷️", text: "月費 ≥ 3萬" }
      ],
      todos: [
        { owner: "楊舒涵", text: "新增 Deal Type 選項（GO 顧問 / GO 工具）", priority: "waiting" },
        { owner: "楊舒涵", text: "Uncategorized pipeline 通知發到 Slack 公共頻道", priority: "waiting" },
        { owner: "蔡阿達", text: "與副詞團隊約時間討論審字流程", priority: "week" },
        { owner: "蔡阿達", text: "整理客戶常見問題 FAQ 表格", priority: "week" },
        { owner: "蔡阿達", text: "確認帳號共用與資料匯出功能的技術限制", priority: "week" },
        { owner: "Anne", text: "約時間討論 CS 相關流程與條款細節", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-24",
          title: "AE ↔ BA Meeting",
          time: "16:01-16:59",
          duration: "58m",
          participants: "蔡阿達、Leon、楊舒涵、Anne Chang、藍文甫",
          docUrl: "https://docs.google.com/document/d/1cz50wIZwJra59dCQ4b1wPImwfPibfhroM_6DLeRc9KI/edit",
          dialogues: [
            {
              topic: "GEO 資料標記 & Uncategorized",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "是不是跟 GEO 相關有很重要嗎？現在幾乎不是都跟 GEO 相關嗎？" },
                { speaker: "Leon", role: "other", label: "AE", text: "對於 AE 來講，我們自己其實不用清楚它是需要 AMP、SEO 還是 GO。主要是看最後成交。" },
                { speaker: "蔡阿達", role: "ada", text: "我們再加一個好了，就叫它 GO。" },
                { speaker: "蔡阿達", role: "ada", text: "Uncategorized 的東西理論上應該要一直發通知，盡可能保持淨空。發到 Slack 公共頻道，全部人都看得到。" }
              ]
            }
          ]
        },
        {
          date: "2026-03-24",
          title: "AE Team 週會",
          time: "11:31-12:22",
          duration: "51m",
          participants: "蔡阿達、Bryan、Rebecca、Leon、Aiden、馬愛雲",
          docUrl: "https://docs.google.com/document/d/1XPfYH6koiUxtLHztkHmiXL4HP5s8HIa4Q-7xuhkcJI0/edit",
          dialogues: [
            {
              topic: "工具定價與客戶維護",
              exchanges: [
                { speaker: "Bryan", role: "other", label: "AE", text: "到了 30 個關鍵字以上，八折就沒辦法涵蓋了。有沒有機會像 SEO 那樣隨著 package 越大有價格曲線？" },
                { speaker: "蔡阿達", role: "ada", text: "這個費用不是量變多就會降的，大語言模型的成本就是用數量來算。但我們可以不要追那麼多 Prompt，90 個是一個很好的甜蜜點。另外如果客戶願意讓我們放 Logo，工具就不用跟他收錢。" },
                { speaker: "Leon", role: "other", label: "AE", text: "到時候如果客戶一多起來，AE 就每天在維護，沒有時間開發了。" },
                { speaker: "蔡阿達", role: "ada", text: "現階段如果真的要維護，就一律讓我來也可以。後台會開發客戶自助改 Prompt 功能，應該也是這三個月過渡而已。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P10: Jerry 後端主管晉升 & AI 工具商業化 ======
    {
      id: "str-promotion",
      name: "人事評議 & AI 工具商業化流程",
      icon: "🏗️",
      category: "company",
      lastUpdated: "2026-03-25",
      summary: "Jerry 晉升後端主管通過人評，同步討論 AI 文案審核機制、多品牌帳號管理及過渡期服務設計",
      keyPoints: [
        "Jerry 晉升後端主管，四位委員全票通過，HR 啟動後續人事作業",
        "Team B 人力三人，短期集中 GU 需求，不細分分工",
        "<strong>AI 文案審核</strong>：建立驗證模式，以簡易介面過渡，避免客戶素材爭議",
        "<strong>多品牌帳號管理系統</strong>：以統編為主，目標<strong>五月中</strong>完成設計與測試",
        "過渡期人工處理追蹤設定、Prompt 數量限制與結案報告"
      ],
      chips: [
        { icon: "✅", text: "Jerry 晉升通過" },
        { icon: "🗓️", text: "多品帳號 5月中" },
        { icon: "🤖", text: "AI 文案審核" },
        { icon: "⏱️", text: "過渡期人工支援" }
      ],
      todos: [
        { owner: "蔡阿達", text: "與藍文甫設計 AI 輔助文案審核的驗證模式與流程", priority: "week" },
        { owner: "蔡阿達", text: "與團隊建立客戶素材 AI 比對簡易介面", priority: "week" },
        { owner: "蔡阿達", text: "與力友討論 AI 工具商業模式與 CS 服務銜接", priority: "week" },
        { owner: "蔡阿達", text: "制定追蹤網址與 Prompt 數量限制的遊戲規則", priority: "week" },
        { owner: "蔡阿達", text: "負責過渡期人工設定追蹤項目及結案報告整理", priority: "week" },
        { owner: "何建彤", text: "多品牌帳號管理系統設計與開發，目標五月中完成", priority: "waiting" },
        { owner: "黃郁雯", text: "Jerry 晉升結果呈報 Mike，啟動人事作業", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-25",
          title: "人評會-STR",
          time: "14:31-15:44",
          duration: "1h13m",
          participants: "蔡阿達、何建彤、Steven、Jerry、林思吾、黃郁雯",
          docUrl: "",
          dialogues: [
            {
              topic: "Jerry 晉升簡報 & 委員提問",
              exchanges: [
                { speaker: "Jerry", role: "other", label: "後端工程師", text: "團隊目標需貼齊公司願景，避免成員感覺工作無意義。我強調的是知識分享，避免關鍵技術集中於個別成員。" },
                { speaker: "Steven", role: "other", label: "管理層", text: "Jerry 在阿物及前兩家公司均有後端主管經驗，管理規模約五至十人，技術上負責大流量效能優化，風格適合穩定現有團隊。" },
                { speaker: "林思吾", role: "other", label: "委員", text: "我們會補足團隊人力，先透過評議程序認識 Jerry，投票結果四位委員均同意晉升。" }
              ]
            },
            {
              topic: "AI 文案審核 & 商業化流程",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我建議以人工設定帳號及追蹤網址，設定固定期限結案，減少頻繁調整造成的管理負擔。現階段先以人工方式過渡，業務端與客戶溝通限制與規則。" },
                { speaker: "何建彤", role: "other", label: "彤²", text: "多品牌管理複雜度高，需考慮客戶頻繁調整需求的操作難度，建議未來以 API 或資料探索介面提升管理效率。" },
                { speaker: "蔡阿達", role: "ada", text: "先以人工方式處理過渡期，確保服務可行且成本可控。AI 產出英文初稿需驗證品質，避免客戶因 AI 生成內容不符而產生爭議。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P12: 行銷渠道數據整合 & 預算會議 ======
    {
      id: "mkt-data-report",
      name: "行銷渠道數據整合 & 預算會議準備",
      icon: "📊",
      category: "internal",
      lastUpdated: "2026-03-26",
      summary: "跨部門協作 Q1 報告 — 依渠道拆分 MQL/SQL 轉換率，支援週一預算會議",
      keyPoints: [
        "麥可要求跨部門協作製作<strong>1-3月行銷漏斗報告</strong>，週一前需完成",
        "需依渠道區分 MQL 與 SQL 數量及轉換率（GO 建檢 / GO Switch / 官網聯絡等）",
        "Angelline 承諾<strong>3/27 中午前</strong>提供 summary table + raw data",
        "蔡阿達確認只需各渠道 MQL 轉 SQL 數量與比例，無需完整 raw data",
        "Angelline 請假，<strong>Libby 代為參加週一預算會議</strong>",
        "數據量約 300 筆，與 Hotspot 數據人工比對確認正確性"
      ],
      chips: [
        { icon: "📅", text: "3/27 中午 deadline" },
        { icon: "📈", text: "MQL→SQL 轉換率" },
        { icon: "🗂️", text: "渠道拆分" },
        { icon: "📋", text: "週一預算會議" }
      ],
      todos: [
        { owner: "Angelline", text: "3/27 中午前完成各渠道 MQL、SQL 數量及轉換比例整理，提供 summary table + raw data", priority: "today" },
        { owner: "Libby", text: "3/27 早上與蔡阿達溝通細節，準備週一（3/30）預算會議", priority: "today" },
        { owner: "蔡阿達", text: "確認 Angelline 數據格式與內容，提供回饋", priority: "today" },
        { owner: "蔡阿達", text: "週一（3/30）前完成報告準備並參與預算會議", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-26",
          title: "1:1 Meeting_Libby",
          time: "17:09",
          duration: "19m",
          participants: "蔡阿達、Angelline、Libby",
          docUrl: "",
          dialogues: [
            {
              topic: "行銷渠道數據拆分需求",
              exchanges: [
                { speaker: "Angelline", role: "other", label: "MKT", text: "我建議將 GO 建檢與 GO Switch 產品線拆分，方便後續報告細化。目前已有類似表格但未細拆產品線，需與 Hotspot 數據比對驗證，承諾明日中午前完成並提供給蔡阿達。" },
                { speaker: "蔡阿達", role: "ada", text: "我只需要各渠道 MQL 及轉成 SQL 的數量與比例，無需完整 Raw Data，方便快速追蹤與分析。官網聯絡跟建檢可以合併，但同意拆分有助於分析。" },
                { speaker: "Angelline", role: "other", label: "MKT", text: "麥可關注的重點是從源頭開始追蹤各渠道的 Lead 轉換至 SQL 及結單情況，強調需從行銷漏斗上層開始分析。" }
              ]
            },
            {
              topic: "預算會議與跨部門協作",
              exchanges: [
                { speaker: "Angelline", role: "other", label: "MKT", text: "麥可首次要求跨部門協作報告，時間較晚通知，造成行銷端時間壓力。我因個人行程無法全程參與，將由 Libby 協助完成報告製作，並安排明日上午與蔡阿達溝通細節。" },
                { speaker: "蔡阿達", role: "ada", text: "行銷端負責 MQL 轉 SQL 的任務，我願意協助解答問題。雙方約週一前完成報告準備。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P13: Q1 預算 Review & 續約率優化 ======
    {
      id: "budget-review-q1",
      name: "Q1 預算 Review & 續約率優化策略",
      icon: "📉",
      category: "company",
      lastUpdated: "2026-03-31",
      summary: "Q1 掉失率 40%（目標 H2 降至 20%），三大主因：成效、預算、政策；推動軟體顧問轉型",
      keyPoints: [
        "Q1 續約率 60%（10 掉 4），<strong>目標 H2 降至掉失 20%</strong>（8/10 續約）",
        "三大不續約主因：<strong>營運政策調整（最大）</strong>、預算問題（25%）、成效不彰（25-30%）",
        "推動顧問模式 → <strong>軟體顧問模式</strong>，導入 More Sweet & GEO Suite 提升客戶黏著度",
        "文案産出瓶頸：目前 2-3 週/篇，目標批量産出，積極導入 AI 産文工具",
        "蔡阿達 AI 産文流程：先收集客戶品牌核心資訊 → AI 生成初稿 → 客戶參與修改",
        "MQL→SQL 轉換率 <strong>63%</strong>，但 SQL→成交率僅 <strong>10%</strong>，需強化提案品質",
        "Event 700 個 account 僅 10 件成交（1.4% 轉換率），遠低於 Google Ads 8%",
        "報價單需拆分顧問費 vs 工具費，提升續約透明度",
        "Master Concept 有<strong>跨區域（台港新馬）GEO 方案需求</strong>，潛在年約 100 萬以上"
      ],
      chips: [
        { icon: "📊", text: "續約率 60%" },
        { icon: "🎯", text: "目標 80%" },
        { icon: "⚠️", text: "SQL→成交 10%" },
        { icon: "📝", text: "文案 2-3週/篇" },
        { icon: "🔥", text: "Master Concept 跨國" }
      ],
      todos: [
        { owner: "蔡阿達", text: "親自檢視 Master Concept 跨區域方案報價，避免流失跨國客戶", priority: "today" },
        { owner: "蔡阿達", text: "持續推動 AI 産文機制，先收集客戶核心資訊，邀請客戶參與修改提升內容符合度", priority: "week" },
        { owner: "蔡阿達", text: "與業務說明報價單拆分（顧問費 vs 工具費分開），避免續約時價格爭議", priority: "week" },
        { owner: "蔡阿達", text: "追蹤銷售漏斗數據，分析 SQL 後流失原因，提出改善方案", priority: "week" },
        { owner: "林思吾", text: "下週三前召開文案産出對齊會議（蔡阿達、Amber、小花），明確産出標準與速度目標", priority: "week" },
        { owner: "林思吾", text: "請 Anne Chang 統計不續約客戶中成效不彰/預算/期待落差三項問題絕對數字", priority: "week" },
        { owner: "Amber Liao", text: "與 Leo 討論文案産出流程，優化産出速度與規格", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-31",
          title: "預算 Review_pt. 2",
          time: "14:11",
          duration: "1h10m",
          participants: "蔡阿達、林思吾（麥可）、Amber Liao、藍文甫（Leo）、Anne Chang、Libby Cheng",
          docUrl: "",
          dialogues: [
            {
              topic: "不續約原因分析 & 軟體顧問轉型",
              exchanges: [
                { speaker: "林思吾", role: "other", label: "麥可", text: "我們目前 Q1 統計下來是 40%，10 個掉 4 個。我們能夠把它降成是 2 個，也就是掉失率是 20%。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "我希望把大的痛點抓出來，我們就一塊一塊去想辦法把它解決掉。" },
                { speaker: "Amber Liao", role: "other", label: "內部", text: "預算不足客戶多為成效平穩但無法增加投入，綠藤為跨預算與營運政策的特殊案例。" },
                { speaker: "蔡阿達", role: "ada", text: "行銷提供的潛在客戶數量充足，但服務方案及文案品質不足影響轉換。" }
              ]
            },
            {
              topic: "AI 産文流程 & 文案加速",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我的 AI 産文流程是先向客戶收集品牌核心及問題，再由 AI 生成初稿，客戶參與修改，確保內容解決訪客問題。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "我們在出文章的速度，可不可以就是一次，不要只是一篇兩三週，一篇兩三週。" },
                { speaker: "藍文甫", role: "other", label: "Leo", text: "需減少精緻文章數量但保持品質，利用 AI 工具提升産出速度。" }
              ]
            },
            {
              topic: "報價單拆分 & 跨部門協作",
              exchanges: [
                { speaker: "藍文甫", role: "other", label: "Leo", text: "拆分報價單可避免客戶對總價産生疑慮，並利於財務認列。" },
                { speaker: "蔡阿達", role: "ada", text: "業務習慣以牌價報價，我會向同仁說明拆分原因。" },
                { speaker: "林思吾", role: "other", label: "麥可", text: "大家部門的考量，好的事情有時候會這樣掉了，這掉球是非常可惜的。" },
                { speaker: "蔡阿達", role: "ada", text: "我一直很在意說他們不是站在解決問題的角度在跟我談事情，他們是站在想要否決我的提案的前提下。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P14: 創造力互動媒體 × GEO Suite 合作 ======
    {
      id: "chuanglili-partner",
      name: "創造力互動媒體 — 網站建置 × GEO Suite 策略聯盟",
      icon: "🎨",
      category: "partner",
      lastUpdated: "2026-03-31",
      summary: "網頁設計公司 + awoo GEO Suite，在建站初期即導入 AI 優化，ROGO Suite 3 個月免費試用",
      keyPoints: [
        "陳致祥公司主做客製化網頁設計，平均建置 3-4 個月",
        "客戶常在建站後才提出 SEO/AI 優化需求 → <strong>二次調整成本高</strong>",
        "蔡阿達提議從<strong>建站初期即導入 AI 優化建議</strong>，節省客戶時間成本",
        "合作模式：策略聯盟 + 互換品牌 Logo + <strong>ROGO Suite 3 個月免費試用</strong>",
        "陳致祥客戶多為大型企業，重視持續服務品質與優化",
        "六月 ROGO Suite 第二階段發表，後續擴展代理商合作",
        "雙方同意先交換合作意向書，挑選 1-2 個試點專案"
      ],
      chips: [
        { icon: "🆓", text: "ROGO Suite 3 個月免費" },
        { icon: "🏢", text: "大型企業客戶群" },
        { icon: "⏱️", text: "建置 3-4 個月" },
        { icon: "📄", text: "合作意向書 pending" }
      ],
      todos: [
        { owner: "蔡阿達", text: "擬定合作意向書並寄送給陳致祥", priority: "week" },
        { owner: "蔡阿達", text: "提供 ROGO Suite 試用方案 + 五大能見度指標文字資料給陳致祥", priority: "week" },
        { owner: "陳致祥", text: "提供公司名片電子檔給蔡阿達，以便填寫合作意向書", priority: "waiting" },
        { owner: "雙方", text: "建立策略聯盟合作關係，互換品牌 Logo，對外宣稱合作", priority: "waiting" },
        { owner: "雙方", text: "挑選 1-2 個客戶專案進行 AI SEO 優化試點", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-31",
          title: "創造力互動媒體 × awoo GEO Suite 工具/技術串接合作初談",
          time: "15:30",
          duration: "32m",
          participants: "蔡阿達、陳致祥（創造力互動媒體）",
          docUrl: "",
          dialogues: [
            {
              topic: "合作痛點 & 模式討論",
              exchanges: [
                { speaker: "陳致祥", role: "other", label: "創造力互動媒體", text: "我們公司主要為客製化網頁設計，平均建置時間約 3 至 4 個月，客戶常在建站後提出 SEO 及 AI 搜尋優化需求，導致需二次調整，增加客戶負擔。" },
                { speaker: "蔡阿達", role: "ada", text: "我們就幫你從建站初期就導入 AI 優化建議，避免後續重複修改。策略聯盟方案是互換品牌標誌，提升雙方信任與市場認知。" },
                { speaker: "陳致祥", role: "other", label: "創造力互動媒體", text: "認同合作能提升客戶附加價值，客戶多為大型企業，重視服務品質與持續優化，合作可節省客戶與雙方時間成本。" }
              ]
            },
            {
              topic: "ROGO Suite 介紹 & 試用方案",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們以 SEO 起家，並研發 ROGO Suite，能追蹤指定關鍵字與 prompt，分析 AI 對網站的正負面回應，協助優化內容。提出三個月免費試用方案。" },
                { speaker: "陳致祥", role: "other", label: "創造力互動媒體", text: "希望未來能有更多類似合作，讓客戶在初期即能同步考量 AI 優化需求，減少後續調整成本。" },
                { speaker: "蔡阿達", role: "ada", text: "六月會有第二階段發表，未來將擴展代理商合作。先交換合作意向書，視試用情況再進一步討論。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P15: 展匠 × 101 標案 ======
    {
      id: "101-tender",
      name: "展匠 × 台北 101 標案合作",
      icon: "🏛️",
      category: "client",
      lastUpdated: "2026-03-31",
      summary: "展匠承接 101 標案，awoo 提供金融業/百貨/精品旅遊客戶案例佐證，去識別化報價單為主",
      keyPoints: [
        "展匠標案需提供：<strong>金融業、百貨業、精品旅遊</strong>相關客戶案例 + 合約影本或證明文件",
        "蔡阿達建議使用<strong>去識別化報價單</strong>證明合作關係，避免機密洩露",
        "合作模式：展匠統一簽約，awoo 以顧問/技術角色參與",
        "Leon（呂紹平）有兩間時尚百貨合作經驗可作為佐證材料",
        "廣告投放預算及目標客群待確認，Leon 提供簡報給蔡阿達審閱"
      ],
      chips: [
        { icon: "🏗️", text: "展匠統一簽約" },
        { icon: "🏦", text: "金融業案例需要" },
        { icon: "🛍️", text: "時尚百貨 2 案" },
        { icon: "📄", text: "去識別化報價單" }
      ],
      todos: [
        { owner: "蔡阿達", text: "確認可提供哪些客戶的去識別化報價單或中性證明文件", priority: "week" },
        { owner: "Leon（呂紹平）", text: "提供 101 標案簡報給蔡阿達審閱，評估是否需對外說明", priority: "waiting" },
        { owner: "Leon（呂紹平）", text: "準備金融業及高端精品客戶案例合約影本或其他證明文件", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-03-31",
          title: "AE Team 週會（101 標案討論）",
          time: "11:43",
          duration: "28m",
          participants: "蔡阿達、呂紹平（Leon）、蔡毓倫（Aiden）、Rebecca Chen",
          docUrl: "",
          dialogues: [
            {
              topic: "101 標案客戶案例佐證",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "展匠標案需提供金融業、百貨及精品旅遊相關客戶案例及合約影本或證明文件，增加 101 對公司的信任度。我有跟兩間時尚百貨的合作經驗。" },
                { speaker: "蔡阿達", role: "ada", text: "提供資料合理，建議使用去識別化報價單證明合作關係。我來確認是否可提供中性報價單或去識別化資料。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "合作由展匠統一簽約，我提供簡報給你參考，後續評估是否需要對外說明。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P11: Jack En 攝影 × 網站建置 × AI 影像 ======
    {
      id: "jack-en-partner",
      name: "Jack En 攝影 × 網站建置 × AI 影像合作",
      icon: "📸",
      category: "partner",
      lastUpdated: "2026-03-25",
      summary: "攝影師 Jack En 洽談個人作品集網站建置，同步介紹客戶引線機會，並探索 AI 影像技術合作",
      keyPoints: [
        "Jack En 主業企業活動即時拍攝，客戶含高雄大型營造廠（合作逾 6 年）",
        "網站需求：作品集集中管理 + 線上預約，以<strong>模板 + AI 排版</strong>為主",
        "MarsZ Chen 提供模板版與客製化版兩種報價方案",
        "<strong>蔡阿達協助引介</strong>有即時拍攝需求的企業活動客戶",
        "同步推進<strong>奇美博物館網站改版</strong>報價（MarsZ Chen 負責）",
        "計劃邀請 AI 生成內容廠商來分享，探索合作機會"
      ],
      chips: [
        { icon: "💰", text: "基本出場 3,000" },
        { icon: "⏱️", text: "時薪 2,000" },
        { icon: "🌐", text: "單語系架設" },
        { icon: "🤖", text: "AI 影像技術" }
      ],
      todos: [
        { owner: "蔡阿達", text: "協助留意並推介有即時拍攝需求的企業活動客戶給 Jack En", priority: "week" },
        { owner: "蔡阿達", text: "下週安排邀請 AI 生成內容廠商來賓分享", priority: "week" },
        { owner: "蔡阿達", text: "協助 MarsZ Chen 與奇美博物館客戶溝通報價方案", priority: "week" },
        { owner: "Jack En", text: "整理網站各頁面 section 及排版需求，提供參考範例給 MarsZ Chen", priority: "week" },
        { owner: "MarsZ Chen", text: "製作 Jack En 網站報價單（模板版 + 客製化版）", priority: "waiting" },
        { owner: "MarsZ Chen", text: "完成奇美博物館網站改版報價單", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-03-25",
          title: "Jack En × awoo 網站建置洽談",
          time: "12:59-14:14",
          duration: "1h15m",
          participants: "蔡阿達、Jack En、MarsZ Chen",
          docUrl: "",
          dialogues: [
            {
              topic: "攝影業務 & 客戶開發策略",
              exchanges: [
                { speaker: "Jack En", role: "other", label: "攝影師", text: "我客戶多為有自己網站的企業，近期簽約一間高雄大型營造廠，合作超過六年，主要承接公共工程標案。我主打的是企業活動拍攝，尤其是需即時提供照片以利社群曝光的客戶。" },
                { speaker: "蔡阿達", role: "ada", text: "你主打的 AI 推薦優化跟 SEO 有差異，仍有切入機會。我願意協助推廣與留意相關客戶，有即時拍攝需求的企業活動我幫你介紹。" }
              ]
            },
            {
              topic: "網站架設需求討論",
              exchanges: [
                { speaker: "Jack En", role: "other", label: "攝影師", text: "我希望把分散的作品集中於一個網站，考慮加入線上預約功能。照片可壓縮至 3-5MB，之後再討論容量與存放成本。" },
                { speaker: "MarsZ Chen", role: "other", label: "MAS", text: "先提供需求與喜好範例，利用 AI 協助排版。以模板為主可降低成本，後台操作我會教導你自行上稿管理，除非涉及排版或配色調整才需技術支援。" },
                { speaker: "蔡阿達", role: "ada", text: "先確認單語系架設，多語系未來再評估擴充，把基礎做好最重要。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P12: 全網行銷 × awoo GEO ======
    {
      id: "quanwang-geo",
      name: "全網行銷 × awoo GEO 顧問合作",
      icon: "🌐",
      category: "client",
      lastUpdated: "2026-04-01",
      summary: "生活娛樂網/全網行銷洽談 GEO 顧問服務，預算 60-100 萬/年，5 或 7 月 UX 初版後介入",
      keyPoints: [
        "客戶：游怡嘉（全網行銷）代理 生活娛樂網，主業網站流量變現",
        "預算規模 <strong>60-100 萬/年</strong>，正式進場時機待 UX 初版完成（5 或 7 月）",
        "蔡阿達以 <strong>GEO 顧問身份</strong>切入，不走傳統 SEO 套件",
        "客戶現況：SEO 有在做但成效不確定，對 AI 搜尋趨勢有疑慮",
        "下一步：提供 GEO 診斷報告 + 顧問方案報價"
      ],
      chips: [
        { icon: "💰", text: "60-100萬/年" },
        { icon: "📅", text: "介入時機 5/7月" },
        { icon: "🎯", text: "GEO 顧問" },
        { icon: "🌟", text: "生活娛樂網" }
      ],
      todos: [
        { owner: "蔡阿達", text: "準備 GEO 診斷報告，針對生活娛樂網分析 AI 搜尋曝光現況", priority: "week" },
        { owner: "蔡阿達", text: "提供顧問方案報價（對應 60-100 萬預算區間）", priority: "week" },
        { owner: "蔡阿達", text: "與游怡嘉確認 UX 初版完成時程（5 月或 7 月），排定正式會議", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-01",
          title: "全網行銷 × awoo GEO 洽談",
          time: "10:00",
          duration: "45m",
          participants: "蔡阿達、游怡嘉（全網行銷）",
          docUrl: "",
          dialogues: [
            {
              topic: "客戶需求與預算確認",
              exchanges: [
                { speaker: "游怡嘉", role: "other", label: "全網行銷", text: "我們現在網站流量有在做 SEO，但不確定 AI 搜尋時代有沒有影響。預算大概在 60 到 100 萬這個區間，看服務內容而定。" },
                { speaker: "蔡阿達", role: "ada", text: "我建議從 GEO 顧問的角度切入，先幫你做一份診斷報告，看你現在在 AI 搜尋裡的曝光狀況，再來討論要做什麼。" }
              ]
            },
            {
              topic: "進場時機討論",
              exchanges: [
                { speaker: "游怡嘉", role: "other", label: "全網行銷", text: "我們的 UX 還在改版，可能 5 月或 7 月才有初版，那時候再正式開始比較合適。" },
                { speaker: "蔡阿達", role: "ada", text: "沒問題，UX 初版出來我們再來談細節。現在可以先讓我看一下你們現在的網站，我幫你預先診斷一下。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P13: BNI 行銷小聚 ======
    {
      id: "bni-marketing-chain",
      name: "BNI 行銷小聚 — 行銷開店產業鏈",
      icon: "🤝",
      category: "bni",
      lastUpdated: "2026-04-01",
      summary: "BNI 行銷產業鏈每週三午餐小聚，串連攝影/影片/設計/開店等夥伴，互相引薦合作機會",
      keyPoints: [
        "固定週三 13:00，代號 ogz-rugx-nkt（Google Meet）",
        "核心成員：蔡阿達、遙空映畫、張張（設計）、楊翔淵、June Enter",
        "目標：行銷產業鏈互相引薦，累積合作案例",
        "蔡阿達為<strong>主要召集人</strong>，負責維持節奏與主題引導"
      ],
      chips: [
        { icon: "📅", text: "每週三 13:00" },
        { icon: "👥", text: "5 位核心成員" },
        { icon: "🔗", text: "產業鏈串接" }
      ],
      todos: [
        { owner: "蔡阿達", text: "持續召集每週行銷小聚，輪流分享近期合作案例", priority: "week" },
        { owner: "蔡阿達", text: "整理可引薦機會清單，主動媒合成員專長與客戶需求", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-01",
          title: "BNI 行銷小聚 04/01",
          time: "13:00",
          duration: "45m",
          participants: "蔡阿達、遙空映畫、張張、楊翔淵、June Enter",
          docUrl: "",
          dialogues: [
            {
              topic: "近期合作機會分享",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "這週有幾個客戶有攝影需求，我幫大家記著，有合適的就互相引薦。" },
                { speaker: "遙空映畫", role: "other", label: "影片", text: "我最近接了幾個企業宣傳影片，有幾個客戶也在問有沒有文案可以配合，可以互相介紹。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P20: 崴浤（威宏）× awoo GEO Suite 合作 ======
    {
      id: "wai-hong-partner",
      name: "崴浤（威宏）× awoo GEO Suite 合作洽談",
      icon: "🏢",
      category: "partner",
      lastUpdated: "2026-04-02",
      summary: "數位行銷代理商崴浤初次接觸，以威宏自家網站試用 GEO Suite，目標建立代理商合作模式",
      keyPoints: [
        "蔡富傑（威宏）表示市場少見類似工具，對推廣及服務有幫助",
        "<strong>五大 AI 能見度指標</strong>：品牌提及次數、提及機率、佔比、情緒分析、網站引用",
        "初步共識：<strong>威宏自家網站免費試用</strong>，再討論客戶推廣模式",
        "合作分工：awoo 主攻技術工具面，威宏專注業務行銷，避免重複人力",
        "合作初期零元試用，後續再討論報價與利潤分配",
        "計劃成立專案小組（Slack 或 Line），awoo 即時回應需求"
      ],
      chips: [
        { icon: "🆓", text: "零元試用" },
        { icon: "📊", text: "5 大 AI 指標" },
        { icon: "🤝", text: "技術+業務分工" },
        { icon: "💬", text: "專案小組 pending" }
      ],
      todos: [
        { owner: "蔡阿達", text: "提供崴浤 GEO Suite 詳細使用簡報與功能說明", priority: "week" },
        { owner: "蔡阿達", text: "開放崴浤自家網站使用 GEO Suite 工具（零元試用）", priority: "week" },
        { owner: "蔡阿達", text: "協助崴浤挑選關鍵字及提示詞，提供網站健檢建議", priority: "week" },
        { owner: "蔡阿達", text: "建立專案小組（Slack 或 Line），保持即時溝通", priority: "week" },
        { owner: "雙方", text: "討論合作方案報價結構及利潤分拆細節", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "崴浤 × awoo GEO Suite 合作初談",
          time: "09:59-10:39",
          duration: "40m",
          participants: "蔡阿達、蔡富傑（威宏/崴浤）",
          docUrl: "",
          dialogues: [
            {
              topic: "GEO Suite 介紹與合作意向",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "GEO Suite 核心是追蹤五大 AI 能見度指標，包含品牌被 AI 提及次數、提及機率、佔比、情緒分析及網站被引用數，協助業主了解 AI 推薦狀況。" },
                { speaker: "蔡富傑", role: "other", label: "崴浤", text: "這個工具在市場上少見，對我們推廣及服務有幫助，如果自行開發需投入大量人力，願意嘗試合作。" },
                { speaker: "蔡阿達", role: "ada", text: "合作初期先以零元試用讓你體驗工具功能，後續再討論報價及利潤分配細節，我們保持開放態度。" }
              ]
            },
            {
              topic: "合作模式與分工討論",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們主攻技術及工具面，你們專注業務行銷，避免重複投入人力，提升市場推廣效率。" },
                { speaker: "蔡富傑", role: "other", label: "崴浤", text: "B2B 客戶雖品牌需求較低，但更需 AI 推薦背書，我們可以互補各自客群。" },
                { speaker: "蔡阿達", role: "ada", text: "我提議先成立專案小組，透過 Slack 或 Line 保持溝通，隨時回應你們需求並協助開發支援。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P21: 赫斯特 技術/廣告交換合作 ======
    {
      id: "hearst-partner",
      name: "赫斯特 — AIO 健檢技術/廣告交換合作",
      icon: "📰",
      category: "partner",
      lastUpdated: "2026-04-02",
      summary: "合作報價單確認，分階段交付 AIO 健檢，L Taiwan 品牌授權條款定稿，Harry Wen 4/2 下午回簽",
      keyPoints: [
        "Harry Wen 老闆擔心三個月後才有報告，影響總部決策 → <strong>分階段交付</strong>，每週/兩週回報",
        "蔡阿達承諾合作開始後 <strong>30 天內完成完整建議書</strong>，持續陪伴調整 AIO 引用問題",
        "合作案例定義：<strong>合作案例</strong>（非成功案例），避免其他廠商疑慮",
        "品牌授權限定 <strong>L Taiwan 商標</strong>，每次使用前甲方事前確認",
        "社群媒體宣傳採<strong>事前審核機制</strong>，避免法務擔憂頻率無法掌控",
        "電子簽核系統，Harry Wen 預計 4/2 下午完成回簽",
        "待確認 GEO Suite 中 GPT Gemini 是否包含 Google AIO 模組"
      ],
      chips: [
        { icon: "📅", text: "30 天內建議書" },
        { icon: "⚖️", text: "L Taiwan 商標" },
        { icon: "✍️", text: "4/2 回簽" },
        { icon: "🔄", text: "分階段交付" }
      ],
      todos: [
        { owner: "蔡阿達", text: "調整報價單，加入分階段交付機制（每週/兩週回報進度）", priority: "today" },
        { owner: "蔡阿達", text: "合作開始後 30 天內完成完整建議書", priority: "week" },
        { owner: "蔡阿達", text: "調整授權條款：L Taiwan 商標授權範圍及社群媒體事前審核流程", priority: "today" },
        { owner: "蔡阿達", text: "確認 GEO Suite 中 GPT Gemini 是否包含 Google AIO 模組，並回覆 Harry Wen", priority: "week" },
        { owner: "Harry Wen", text: "4/2 下午完成報價單修正並電子回簽", priority: "today" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "赫斯特 技術/廣告交換合作細節確認",
          time: "11:30-11:49",
          duration: "19m",
          participants: "蔡阿達、Harry Wen（赫斯特）",
          docUrl: "",
          dialogues: [
            {
              topic: "分階段交付與報價單調整",
              exchanges: [
                { speaker: "Harry Wen", role: "other", label: "赫斯特", text: "老闆擔心三個月後才有 AI overview 引用與障礙技術分析報告，可能導致總部調整延遲，建議分階段交付，每週或每兩週回報進度。" },
                { speaker: "蔡阿達", role: "ada", text: "我們在簽約前已持續提供建議，願意配合提前交付。我提議合作起30天內完成完整建議書，並承諾持續陪伴調整，直到問題有效解決。" }
              ]
            },
            {
              topic: "合作案例定義與品牌授權",
              exchanges: [
                { speaker: "Harry Wen", role: "other", label: "赫斯特", text: "法務建議品牌商標授權限定為 L Taiwan 商標，每次使用前需甲方事前確認。合作案例建議稱為合作案例而非成功案例，避免其他廠商質疑。" },
                { speaker: "蔡阿達", role: "ada", text: "沒問題，我來協助修正文件。社群媒體宣傳採事前審核機制，我們設定文件連結共同修正，盡快完成電子簽核。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P22: Groundhog × awoo 技術合作探索 ======
    {
      id: "groundhog-partner",
      name: "Groundhog × awoo — Martech 站外數據技術合作探索",
      icon: "🦔",
      category: "partner",
      lastUpdated: "2026-04-02",
      summary: "Groundhog 利用 DSP 廣告請求收集站外瀏覽數據，探索與 awoo SEO/GEO 服務的整合可能性",
      keyPoints: [
        "Groundhog（Josh Chen）透過 DSP 廣告請求收集用戶<strong>站外瀏覽行為</strong>，萃取關鍵字與興趣",
        "每日處理<strong>數十億筆資料</strong>，可揭露用戶常瀏覽站外網站，協助品牌尋找合作部落格",
        "蔡阿達質疑：如何將潛在意圖直接轉化為客戶眼前可見的 ROI？",
        "雙方討論 SEO 從被搜尋到<strong>被 AI 推薦</strong>的轉變，Groundhog 也在朝此方向思考",
        "蔡阿達建議：提供受眾包中的<strong>額外興趣</strong>，增加甲方客戶合作意願",
        "合作重點在解決客戶問題與提供獨特價值，價格非首要考量"
      ],
      chips: [
        { icon: "📊", text: "數十億筆/日" },
        { icon: "🎯", text: "站外行為分析" },
        { icon: "🤝", text: "合作 TBD" },
        { icon: "💡", text: "AI 推薦趨勢同向" }
      ],
      todos: [
        { owner: "Josh Chen", text: "整理 Martech 產品技術原理與具體案例，提供完整解決方案介紹", priority: "waiting" },
        { owner: "蔡阿達", text: "評估雙方客戶重疊與合作切入點，提出具體合作需求", priority: "week" },
        { owner: "雙方", text: "安排後續會議，針對合作方案與技術資源整合深入討論", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "Groundhog × awoo 技術合作洽談",
          time: "14:29-14:58",
          duration: "29m",
          participants: "蔡阿達、Josh Chen（Groundhog）",
          docUrl: "",
          dialogues: [
            {
              topic: "Martech 站外數據技術介紹",
              exchanges: [
                { speaker: "Josh Chen", role: "other", label: "Groundhog", text: "我們透過 DSP 廣告投遞過程收集用戶站外瀏覽行為，分析用戶興趣並萃取關鍵字，協助品牌在 SEO 及內容撰寫上擴展長尾關鍵字與主題參考。每日處理數十億筆資料。" },
                { speaker: "蔡阿達", role: "ada", text: "我在想如何從多樣的站外瀏覽行為中，篩選出與品牌產品相關的興趣？客戶最關心的是投資報酬率和合作績效。" }
              ]
            },
            {
              topic: "合作價值定位討論",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "目前難以將潛在意圖直接轉化為客戶眼前的成效。但可以提供受眾包中除預期需求外的額外興趣，增加甲方客戶的興趣與合作意願。" },
                { speaker: "Josh Chen", role: "other", label: "Groundhog", text: "認同，只要 ID 能匹配即可提供此類受眾包，也希望藉由 SEO 專家的回饋來調整產品，更符合客戶需求。" },
                { speaker: "蔡阿達", role: "ada", text: "廣告聯播網的去識別化數據非常珍貴，但如何與客戶需求連結仍需進一步思考。合作重點在於解決客戶問題，價格非首要考量。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P23: Leon BD 同步 — 娛樂城代理商 ======
    {
      id: "leon-bd-sync",
      name: "Leon BD 同步 — 娛樂城代理商 + 四月業務更新",
      icon: "📋",
      category: "internal",
      lastUpdated: "2026-04-02",
      summary: "Ada 與 Leon 內部同步：娛樂城代理商見面約定 4/8、文章篇數調整、AEMU 四月新單、網站架設",
      keyPoints: [
        "娛樂城代理商客戶：代理商信任 Leon，蔡阿達說服後<strong>約 4/8（三）下午5點</strong>復興北路167號見面",
        "提案策略：<strong>先做好 SEO，再做關鍵字廣告</strong>，Leon 主導跟進",
        "文章篇數問題：客戶麥可發現簡報20篇 vs 實際17篇差異，需提至下週 Go-to-Market/AECS 週會",
        "AEMU 四月新單：有新單尚未填報，代理商直接委託<strong>拓字研究</strong>，麥可已簽約",
        "網站架設外包：委由季輝負責，費用控制在<strong>10 萬以下</strong>，細節待確認"
      ],
      chips: [
        { icon: "📅", text: "4/8 見面" },
        { icon: "📍", text: "復興北路167號" },
        { icon: "💰", text: "網站 ≤10萬" },
        { icon: "📝", text: "拓字研究委託" }
      ],
      todos: [
        { owner: "Leon（呂紹平）", text: "4/8 下午5點至復興北路167號，與代理商及其客戶會面，準備 SEO 提案", priority: "week" },
        { owner: "Leon（呂紹平）", text: "下週一/二 Go-to-Market 或 AECS 週會提出文章篇數調整至20篇議題", priority: "week" },
        { owner: "Leon（呂紹平）", text: "確認代理商是否需要正式簽約，並通知蔡阿達網站架設預算細節", priority: "week" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "Ada × Leon 內部 BD 同步（李盎灣昂萬會議）",
          time: "16:32-16:45",
          duration: "13m",
          participants: "蔡阿達、呂紹平（Leon）",
          docUrl: "",
          dialogues: [
            {
              topic: "娛樂城代理商客戶提案安排",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "這個娛樂城代理商原本不打算找我們提案，但我說服了他，他現在願意帶他的客戶來跟我們見面。提案重點就是先做好 SEO，才能有效進行關鍵字廣告。" },
                { speaker: "呂紹平", role: "other", label: "Leon", text: "好，我負責跟進，我們下週三下午五點，在復興北路167號見面。" }
              ]
            },
            {
              topic: "四月業務動態",
              exchanges: [
                { speaker: "呂紹平", role: "other", label: "Leon", text: "四月有新單但我還沒填報。代理商對我信任，直接委託拓字研究案。麥可已完成簽約，後續代理商可能有合約需求，會再通知你。" },
                { speaker: "蔡阿達", role: "ada", text: "好，我可以協助資料整理。文章篇數那個問題，下週一或二的週會提出來討論一下，確保跟客戶認知一致。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P24: 艾勝渼 × awoo GO Suite ======
    {
      id: "ai-sheng-mi-partner",
      name: "艾勝渼 — GO Suite AI 能見度分析合作探索",
      icon: "✨",
      category: "partner",
      lastUpdated: "2026-04-02",
      summary: "張莉欣（艾勝渼）尋找平台合作機會，蔡阿達介紹 GO Suite，主聚焦 AI 能見度，SEO 細節為附加",
      keyPoints: [
        "awoo 台灣、日本設有辦公室，約 130 人，<strong>近二十年 SEO 深耕</strong>",
        "GO Suite 兩週前發表，細分<strong>五大 AI 能見度指標</strong>：品牌提及佔比、聲量好壞、是否被引用",
        "工具透過爬蟲評估網站 SEO 現況與內容結構，提供優化建議",
        "艾勝渼目前主要尋找<strong>平台合作機會</strong>，對 GO Suite 運作模式感興趣",
        "GO Suite 主要呈現 AI 能見度結果，SEO 細節為附加服務",
        "合作模式待評估，單純訂閱工具價值有限，需探索更具體模式"
      ],
      chips: [
        { icon: "📊", text: "5 大 AI 指標" },
        { icon: "🤝", text: "平台合作探討" },
        { icon: "🆓", text: "合作模式 TBD" },
        { icon: "⏱️", text: "15 min 初談" }
      ],
      todos: [
        { owner: "蔡阿達", text: "若艾勝渼有客戶需求，請對方提供網址以便後續協助跟進", priority: "waiting" },
        { owner: "蔡阿達", text: "評估與艾勝渼的具體合作模式與收費方式", priority: "waiting" }
      ],
      meetingHistory: [
        {
          date: "2026-04-02",
          title: "艾勝渼 × awoo GO Suite 技術合作洽談",
          time: "16:45-17:00",
          duration: "15m",
          participants: "蔡阿達、張莉欣（艾勝渼）",
          docUrl: "",
          dialogues: [
            {
              topic: "GO Suite 介紹與合作可能性",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我們公司近二十年專注 SEO 技術，近年因應 AI 趨勢轉向 AI 能見度分析。GO Suite 兩週前發表，能細分五大 AI 能見度指標，協助客戶了解品牌在 AI 上的曝光狀況。" },
                { speaker: "張莉欣", role: "other", label: "艾勝渼", text: "我目前主要尋找平台合作機會，對 GO Suite 的運作模式感興趣，想了解它是否包含 SEO 其他資訊？" },
                { speaker: "蔡阿達", role: "ada", text: "GO Suite 平台主要呈現 AI 能見度結果，SEO 細節屬附加服務，若需深入報告可另行製作。若有客戶需求，請提供網址，我們後續協助跟進。" }
              ]
            }
          ]
        }
      ]
    },

    // ====== P14 (舊): GEM 關鍵字研究工具 ======
    {
      id: "gem-keyword-tool",
      name: "GEM 關鍵字研究工具 — 自動爬蟲生成背景報告",
      icon: "🔑",
      category: "tools",
      lastUpdated: "2026-04-01",
      summary: "從貝卡灣昂萬會議衍生的內部工具需求：一鍵爬取客戶網站，自動生成關鍵字研究背景報告",
      keyPoints: [
        "蔡阿達在 貝卡灣昂萬 會議中現場 Demo GEM 工具，獲客戶正面回饋",
        "工具流程：輸入客戶網址 → 爬取網站內容 → 生成關鍵字研究背景報告",
        "目標用戶：AE 顧問在提案前快速建立客戶背景知識",
        "費用明確化：工具費 <strong>9,000 元</strong>，獨立列於報價單",
        "下一步：完善爬蟲穩定性，擴展支援英文網站"
      ],
      chips: [
        { icon: "💰", text: "工具費 9K" },
        { icon: "🤖", text: "一鍵爬蟲" },
        { icon: "📊", text: "背景報告生成" },
        { icon: "🎯", text: "AE 提案輔助" }
      ],
      todos: [
        { owner: "蔡阿達", text: "完善 GEM 爬蟲工具穩定性，確保多客戶同時處理不出錯", priority: "week" },
        { owner: "蔡阿達", text: "制定工具費報價標準（9K 基礎），更新至報價單模板", priority: "week" },
        { owner: "蔡阿達", text: "測試英文網站爬取能力，改善英文關鍵字研究報告品質", priority: "week" },
        { owner: "Rebecca", text: "將 GEM 工具費 9K 明確寫入貝卡灣昂萬報價單", priority: "today" }
      ],
      meetingHistory: [
        {
          date: "2026-04-01",
          title: "貝卡灣昂萬 × Rebecca × 蔡阿達 — GEM 工具介紹",
          time: "14:00",
          duration: "30m",
          participants: "蔡阿達、Rebecca Chen、貝卡灣昂萬客戶",
          docUrl: "",
          dialogues: [
            {
              topic: "GEM 工具 Demo 與報價明確化",
              exchanges: [
                { speaker: "蔡阿達", role: "ada", text: "我來示範一下 GEM 工具，輸入你們的網址，它自動去爬你們的網站，然後生成一份關鍵字研究的背景報告，這樣我們提案的時候可以更快速、更有針對性。" },
                { speaker: "Rebecca", role: "other", label: "AE", text: "客戶之前有提到拓字流程延誤，這個工具可以解決一部分問題，我建議把工具費獨立列出來，不要包在服務費裡面，這樣比較清楚。" },
                { speaker: "蔡阿達", role: "ada", text: "對，工具費就是 9,000 元，單獨列在報價單，客戶看得清楚，我們也方便解釋工具的價值。英文文章的部分我們也在持續推動，後續再更新。" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
