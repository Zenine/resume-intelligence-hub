<!--
  Translation status:
  Source file : README.md
  Source commit: f5f491c
  Translated  : 2026-04-21
  Status      : up-to-date
-->

> **Language**: [English](README.md) · **简体中文** · [日本語](README.ja.md) · [繁體中文](README.zh-TW.md)

# resume-intelligence-hub

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/Docs-online-6366f1?style=flat&logo=vitepress&logoColor=white)](https://zenine.github.io/resume-intelligence-hub/)
[![Skills.sh](https://img.shields.io/badge/skills.sh-listed-f59e0b?style=flat)](https://skills.sh/Zenine/resume-intelligence-hub)

> **[📖 文档站 & 落地页 →](https://zenine.github.io/resume-intelligence-hub/)**

> 一个有主见的 AI agent **skill**，帮你搭起个人职业中枢——一个私人 Git 仓库作为简历、面试准备、课题申报、投递前核查的单一事实来源。任何能读 `AGENTS.md` 的 AI IDE 都能用（Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot……）。

生态里多数职业类 skill 都是一次性工具（"贴 JD 出简历"），这个不是。它是一套**框架**：先搭出一个持久、版本化的 hub，然后基于它支撑长期的求职、面试、课题申报和事实核查。

## 适合谁用

- 想把分散在各处的简历整合到一个单一事实来源里的人
- 高阶专业人士（总监 / VP / CTO / 合伙人 / PI），不常投但每次都很关键
- 中英双语求职者（两边 hub 都支持，初始化时选一个）
- 需要同时做科研和求职的人（可选双轨：求职 + 课题申报）
- 想帮朋友或家人也搭一套同样系统的人

**不挑行业**——软件、医疗、金融、法律、设计、学术、销售、制造业都能用。框架本身是行业无关的，具体术语在初始化问答时定制。

## 你会得到什么

### 1. 一个带这种结构的私人 Git 仓库
```
.
├── profiles/              # 单一事实来源
│   ├── master.md          # 求职简历数据源
│   ├── research.md        # 课题申报数据源（可选）
│   ├── skills.md          # 能力矩阵
│   └── stories.md         # STAR 故事库
├── jobs/
│   ├── templates/
│   ├── market-watch/      # 目标公司 + 招聘信号
│   └── applications/{company}-{role}-{YYYY-MM-DD}/
├── verification/          # 投递前事实核查
│   ├── credentials/       # 非敏感原件
│   ├── references.md      # 路径引用索引（敏感原件留本地）
│   └── {date}-web-check.md
├── assessments/           # 性格测评、360 反馈
├── resumes-archive/
├── research-archive/      # （可选）
├── todo.md / changelog.md
└── AGENTS.md              # AI agent 行为指南
```

### 2. Agent 在 hub 上执行的五种工作流
- **JD 搜寻** — 主动按拉伸目标搜合适岗位，或对手头 JD 做筛分
- **JD 定制简历** — 根据 profiles/master.md 针对具体 JD 生成定制简历
- **面试准备** — 预判问题、准备 STAR 答案、技术复习、行为面试策略
- **投递前核查** — 把每条承重声明对照公开来源交叉核查
- **课题申报** — 按国自然 / NIH / 省级 / 行业格式生成研究申报书（可选）

### 3. 引用的方法论
Skill 点出每一条方法论的名字和出处，方便你想深挖时自己顺藤摸瓜：
- **Google XYZ 公式**（Laszlo Bock）— 简历要点结构
- **STAR** — 行为面试回答
- **BEI**（McClelland）— 行为面试方法论
- **Heilmeier Catechism**（DARPA）— 科研申报框架
- **T 型 / π 型人才** — 职业定位
- **Career capital**（Cal Newport）— 差距分析
- **Stretch target heuristic**（高 1-2 级、1.2-3 倍薪、70% 匹配）— 投递目标
- **Triangulation** — 尽调 / 核查

## 安装

通过 Skills CLI（推荐，等发布到 skills.sh 后）：
```bash
npx skills add <owner>/resume-intelligence-hub -g -y
```

或手动 clone + 建软链：
```bash
git clone https://github.com/<owner>/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## 使用方式

在 AI IDE 里说任意一句：
- "帮我搭个简历库" / "build my career repo" — 从零开一个 hub
- "帮我针对这个 JD 生成简历" / "tailor my resume for this JD" — 定制简历
- "看看有什么合适的机会" / "what's out there for me" — 主动搜岗位
- "针对这个职位帮我准备面试" / "prep me for this interview" — 面试辅导
- "投递前帮我核查一下公开资料" / "run a pre-submission verification" — 事实核查
- "帮我生成国自然基金简历" / "generate an NIH application profile" — 课题申报（需开启研究线）

Skill 的 `SKILL.md` 文件指示 agent 完整的初始化流程：7 问访谈（语言、现有材料、行业、职级、是否开研究线、简历输出语言、仓库位置）→ 生成脚手架 → 写入"接下来要做什么"清单。

## 设计哲学（不太直觉的选择）

1. **单一事实来源**在 `profiles/`；archives 只读
2. **定位锁**在 `AGENTS.md` 顶部——目标写一次，之后每份简历都按这个偏置
3. **双轨分离**开启时——求职档案和科研档案完全分开
4. **敏感原件走路径引用**——仓库保持可分享，原件留本地
5. **高风险投递前做公开资料交叉核查**
6. **todo.md / changelog.md 拆分**——todo 只放未做的，完成的挪去 changelog
7. **每次投递一个带日期的文件夹**——同公司投两次 = 两个文件夹
8. **STAR 故事与事实分开**——加工过的讲法 vs. 原始数据
9. **单语 hub**——初始化时选中文或英文，别混着来
10. **AI IDE 无关**——用 `AGENTS.md` 跨 IDE 约定

## 生态里互补的 skill

这是个框架。针对具体一次性任务，可以叠加这些：

| Skill | 用途 |
|-------|------|
| [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) | ATS 深度优化 |
| [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) | LinkedIn 档案 |
| [`composiohq/awesome-claude-skills@tailored-resume-generator`](https://skills.sh/composiohq/awesome-claude-skills/tailored-resume-generator) | 另一款 JD 定制简历生成器 |
| [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) | Anthropic 官方面试准备 |
| [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) | Lenny 的职业转型 |
| [`aradotso/trending-skills@awesome-phd-cv`](https://skills.sh/aradotso/trending-skills/awesome-phd-cv) | 博士 CV（科研线） |

## 隐私

本 skill **不含任何个人数据**。所有模板都是"待填充"占位文本（没有硬编码的个人信息），由 AI 在对话中和每个用户逐一填入。`templates/{cn,en}/profiles/stories.md` 里的 STAR 故事样例都是通用虚构场景，清楚标注为匿名化格式参考。

Hub 本身填充后才会含真实个人数据——它设计就是要放在**私人** Git 仓库里的，永远不该公开。

## License

MIT。见 [LICENSE](LICENSE)。

## 贡献

欢迎 PR——尤其这些方向：
- 增加语言支持（目前是中文 + 英文）
- 更多行业术语在模板里体现
- 新工作流（比如薪酬谈判、薪酬 benchmarking、网络激活 playbook）
- 地区性的 JD 搜寻渠道（现覆盖：中国、美国、英国、欧盟、全球科技；缺口：东南亚、印度、日本、韩国、拉美）

## 引用说明

本 skill 引用的方法论都是各自作者的工作：Laszlo Bock（Google）、David McClelland（BEI）、George Heilmeier（DARPA）、Cal Newport（*So Good They Can't Ignore You*）。Skill 只是点名并应用——想深入建议直接读原著。
