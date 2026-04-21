---
layout: home

hero:
  name: "Resume Intelligence Hub"
  text: "你的私人职业操作系统"
  tagline: "一个 Git 仓库做单一事实来源 + 一套方法论 + 一个会干重活的 AI Agent——从找岗位到课题申报全覆盖。"
  image:
    src: /hero.svg
    alt: Resume Intelligence Hub
  actions:
    - theme: brand
      text: 快速开始 →
      link: /zh/quick-start
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/Zenine/resume-intelligence-hub

features:
  - icon:
      src: /icons/compass.svg
      width: 48
      height: 48
    title: 单一事实来源
    details: profiles/ 是唯一权威数据层。所有生成的简历、求职信、申报书都从这里派生——永不手工编辑副本。

  - icon:
      src: /icons/target.svg
      width: 48
      height: 48
    title: 定位锁
    details: 目标职级、行业一次性写进 AGENTS.md 顶部。后续所有产出都自动向它倾斜，不用每次重复交代。

  - icon:
      src: /icons/fork.svg
      width: 48
      height: 48
    title: 双轨支持
    details: 招聘应聘和课题 / 基金申报是两种完全不同的文档。数据源分开，格式分开——bootstrap 时按需开启科研轨。

  - icon:
      src: /icons/shield.svg
      width: 48
      height: 48
    title: 投递前核查
    details: 高阶岗面试或基金申报前，对简历里每一条承重声明做公开来源交叉验证。用证据说话，而不是靠断言。

  - icon:
      src: /icons/globe.svg
      width: 48
      height: 48
    title: 通过 AGENTS.md 跨 IDE
    details: Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot 全支持。symlink 一次，处处可用。

  - icon:
      src: /icons/book.svg
      width: 48
      height: 48
    title: 成熟方法论背书
    details: Google XYZ 公式、STAR、BEI、Heilmeier 9 问、stretch target、triangulation——每个都点名到位，方便你深挖。
---

<div class="vp-doc" style="max-width: 960px; margin: 48px auto 96px; padding: 0 24px;">

## 安装

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

然后在你的 AI IDE 里，说下面任一句：

```
> 帮我搭个简历库                           # 初始化一个新 hub
> 帮我针对这个 JD 生成简历                 # 定制简历
> 看看有什么合适的机会                     # 主动搜寻 JD
> 针对这个职位帮我准备面试                 # 面试教练
> 投递前帮我核查一下公开资料               # 投递前核查
```

## 与其它简历 skill 的区别

生态里大多数简历 skill 是**一次性生成器**——贴个 JD、出个简历。本 skill 不是生成器，是**持续使用的私人仓库**：你在上面做几个月的求职、面试、（可选的）课题申报，Agent 每次对话都读这个仓库，且会被顶部的定位锁约束。完整方法论见 [SKILL.md](https://github.com/Zenine/resume-intelligence-hub/blob/main/SKILL.md)。

## 互补 skill

一次性任务可以叠加生态里的专精 skill：

- [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) — ATS 深度优化
- [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) — LinkedIn 档案
- [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) — Anthropic 官方面试准备
- [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) — Lenny 职业转型框架

</div>
