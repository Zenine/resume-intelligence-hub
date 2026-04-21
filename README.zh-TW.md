<!--
  Translation status:
  Source file : README.md
  Source commit: 476e325
  Translated  : 2026-04-21
  Status      : up-to-date
-->

> **Language**: [English](README.md) · [简体中文](README.zh.md) · [日本語](README.ja.md) · **繁體中文**

# resume-intelligence-hub

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/Docs-online-6366f1?style=flat&logo=vitepress&logoColor=white)](https://zenine.github.io/resume-intelligence-hub/)
[![Skills.sh](https://img.shields.io/badge/skills.sh-listed-f59e0b?style=flat)](https://skills.sh/Zenine/resume-intelligence-hub)

> **[📖 文件站 & 落地頁 →](https://zenine.github.io/resume-intelligence-hub/)**

> 一個有主見的 AI agent **skill**，幫你搭起個人職涯中樞——一個私人 Git 儲存庫，**既是 (a) 你的單一事實來源**（履歷、面試準備、研究計畫申報、投遞前查核），**也是 (b) 你的職涯羅盤**：往上 1–2 級你想坐的那把椅子是哪把、你和那把椅子之間明確的差距是什麼、這個季度打算先補哪一塊。任何能讀 `AGENTS.md` 的 AI IDE 都能用（Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot……）。

生態圈裡多數職涯類 skill 都是一次性工具（「貼 JD 出履歷」），這個不是。它是一套**框架**：先搭出一個持久、版本化的 hub，然後基於它支撐長期的求職、面試、研究計畫申報和事實查核。**出履歷只是一半價值——另一半是方向**：這個 hub 逼你先寫下一個 stretch 目標，把能力差距（技能、title、scope、薪酬）攤開來看，每次投遞前都回顧一次，讓你的每次投遞都在往一個明確的終點靠攏，而不是隨機遊走。

## 適合誰使用

- 想把分散在各處的履歷整合到一個單一事實來源的人
- 想往上跳 **1–2 級**、但還沒把落差和路徑攤開來的人，或者還沒想清楚下一步要瞄準哪個位子的人
- 資深專業人士（總監 / VP / CTO / 合夥人 / PI），不常投但每次都很關鍵
- 中英雙語求職者（兩邊 hub 都支援，初始化時選一個）
- 需要同時做研究和求職的人（可選雙軌：求職 + 研究計畫申報）
- 想幫朋友或家人也搭一套同樣系統的人

**產業無關**——軟體、醫療、金融、法律、設計、學術、業務、製造業都能用。框架本身是產業無關的，具體術語在初始化問答時客製。

## 你會得到什麼

### 1. 一個帶這種結構的私人 Git 儲存庫
```
.
├── profiles/              # 單一事實來源
│   ├── master.md          # 求職履歷資料來源
│   ├── research.md        # 研究計畫申報資料來源（可選）
│   ├── skills.md          # 能力矩陣
│   └── stories.md         # STAR 故事庫
├── jobs/
│   ├── templates/
│   ├── market-watch/      # 目標公司 + 招聘訊號
│   └── applications/{company}-{role}-{YYYY-MM-DD}/
├── verification/          # 投遞前事實查核
│   ├── credentials/       # 非敏感原件
│   ├── references.md      # 路徑參照索引（敏感原件留本機）
│   └── {date}-web-check.md
├── assessments/           # 性格測驗、360 回饋
├── resumes-archive/
├── research-archive/      # （可選）
├── todo.md / changelog.md
└── AGENTS.md              # AI agent 行為指南
```

### 2. Agent 在 hub 上執行的六種工作流程
- **職涯規劃 & 差距盤點** — 定一個向上 1-2 級的 stretch 目標，按四維框架（技能 / 範圍 / 背書 / 人脈）攤落差，轉成這一季的 SMART 計畫。初始化後第一個跑，之後每季再跑一次。
- **JD 搜尋** — 主動按延伸目標搜合適職缺，或對手頭 JD 做篩選
- **JD 客製履歷** — 依據 profiles/master.md 針對具體 JD 生成客製履歷
- **面試準備** — 預判問題、準備 STAR 答案、技術複習、行為面試策略
- **投遞前查核** — 把每條承重聲明對照公開來源交叉查核
- **研究計畫申報** — 按 NSFC / NIH / 省級 / 產業格式生成研究申報書（可選）

### 3. 引用的方法論
Skill 點出每一條方法論的名字和出處，方便你想深挖時自己順藤摸瓜：
- **Google XYZ 公式**（Laszlo Bock）— 履歷要點結構
- **STAR** — 行為面試回答
- **BEI**（McClelland）— 行為面試方法論
- **Heilmeier Catechism**（DARPA）— 研究提案框架
- **T 型 / π 型技能** — 職涯定位
- **Career capital**（Cal Newport）— 職涯資本與目標位子的落差盤點
- **Stretch target heuristic**（高 1-2 級、1.2-3 倍薪、70% 匹配）— 投遞目標
- **Triangulation** — 盡調 / 查核

## 安裝

透過 Skills CLI（推薦）：
```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

或手動 clone 到你 IDE 的 skills 目錄（下面給的是 Claude Code 的路徑，Cursor / Codex / Cline / Windsurf 各自路徑不同，自行調整）：
```bash
git clone https://github.com/Zenine/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## 使用方式

在 AI IDE 裡說任意一句：
- "把散落在幾個資料夾的履歷合併成一個庫"（consolidate scattered resumes into one hub）— **bootstrap**
- "想從 Senior 跳 Staff，盤一下我跟那個位子的落差，排個這一季的計畫"（diff the gap, ship this quarter's plan）— **職涯規劃 & 差距盤點**
- "朋友傳了個 Staff PM 的 JD，值得投嗎？值得就順手客製一版履歷"（JD triage + tailored resume）— **JD 篩選 + 客製履歷**
- "掃一下最近兩週市面上適合我背景的 stretch 職缺"（active JD sourcing）— **主動 JD 搜尋**
- "週四有個現場面試，對著這份 JD 幫我預測題目並排練一遍"（predict questions + STAR rehearsal）— **面試準備**
- "投出去前，把履歷裡的數字跟我 GitHub、論文、LinkedIn 對一遍，別有出入"（pre-submission fact-check）— **投遞前查核**
- "幫我生成國科會（NSTC）研究計畫的申報履歷"（draft an NSTC / NIH grant profile）— **研究計畫申報**（需開啟研究軌）

Skill 的 `SKILL.md` 檔案指示 agent 完整的初始化流程：7 問訪談（語言、現有資料、產業、職級、是否開研究軌、履歷輸出語言、儲存庫位置）→ 生成架構 → 寫入「接下來要做什麼」清單。

## 設計哲學（非直覺的選擇）

1. **單一事實來源**在 `profiles/`；archives 唯讀
2. **定位鎖**在 `AGENTS.md` 頂部——目標寫一次，之後每份履歷都按這個偏置
3. **雙軌分離**開啟時——求職檔案和研究檔案完全分開
4. **敏感原件走路徑參照**——儲存庫保持可分享，原件留本機
5. **高風險投遞前做公開來源交叉查核**
6. **todo.md / changelog.md 拆分**——todo 只放未做的，完成的挪去 changelog
7. **每次投遞一個帶日期的資料夾**——同公司投兩次 = 兩個資料夾
8. **STAR 故事與事實分開**——加工過的講法 vs. 原始資料
9. **單語 hub**——初始化時選中文或英文，別混著來
10. **AI IDE 無關**——用 `AGENTS.md` 跨 IDE 約定

## 生態圈的互補 skill

這是個框架。針對具體一次性任務，可以疊加這些：

| Skill | 用途 |
|-------|------|
| [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) | ATS 深度優化 |
| [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) | LinkedIn 檔案 |
| [`composiohq/awesome-claude-skills@tailored-resume-generator`](https://skills.sh/composiohq/awesome-claude-skills/tailored-resume-generator) | 另一款 JD 客製履歷生成器 |
| [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) | Anthropic 官方面試準備 |
| [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) | Lenny 的職涯轉型 |
| [`aradotso/trending-skills@awesome-phd-cv`](https://skills.sh/aradotso/trending-skills/awesome-phd-cv) | 博士 CV（研究軌） |

## 隱私

本 skill **不含任何個人資料**。所有範本都是「待填充」佔位文字（沒有寫死的個人資訊），由 AI 在對話中和每個使用者逐一填入。`templates/{cn,en}/profiles/stories.md` 裡的 STAR 故事範例都是通用虛構場景，清楚標註為匿名化格式參考。

Hub 本身填充後才會含真實個人資料——它設計就是要放在**私人** Git 儲存庫裡的，永遠不該公開。

## License

MIT。見 [LICENSE](LICENSE)。

## 貢獻

歡迎 PR——尤其這些方向：
- 增加語言支援（目前是中文 + 英文）
- 更多產業術語在範本裡體現
- 新工作流程（例如薪酬談判、薪酬 benchmarking、網絡啟用 playbook）
- 地區性的 JD 搜尋管道（現涵蓋：中國、美國、英國、歐盟、全球科技；缺口：東南亞、印度、日本、韓國、拉美）

## 引用說明

本 skill 引用的方法論都是各自作者的成果：Laszlo Bock（Google）、David McClelland（BEI）、George Heilmeier（DARPA）、Cal Newport（*So Good They Can't Ignore You*）。Skill 只是點名並應用——想深入建議直接讀原著。
