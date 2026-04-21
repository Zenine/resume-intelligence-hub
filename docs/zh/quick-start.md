# 快速开始

三步启动一个可用的职业 hub。

## 1. 安装 skill

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

或者直接 clone：

```bash
git clone https://github.com/Zenine/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## 2. Bootstrap 你的 hub

打开你的 AI IDE（Claude Code、Cursor、Codex、Cline、Windsurf，任何能读 `AGENTS.md` 的都行）。`cd` 到 hub 要放的位置（**私有目录**，不要用公开 repo）。然后说：

> **帮我搭个简历库**

Agent 会用 7 个问题引导你：

1. **语言** — 中文还是英文（选一个，别混搭）
2. **现有材料** — 把手头已有的简历/CV 喂给它（后续问题都会因此更准）
3. **行业 / 领域** — 软件、医疗、设计、法律、学术……
4. **目标职级** — 初级到 VP / 创始人 / PI
5. **是否启用科研轨** — 只有需要申报课题 / 基金时才开
6. **简历输出语言** — 中文、英文或双语
7. **仓库位置** — 硬盘上哪个路径

问完 Agent 会：搭好目录结构、把定位写进 `AGENTS.md`、把旧简历归入归档、在 `todo.md` 写一份「下一步清单」。

## 3. 日常使用

Hub 搭好后，用自然语言触发五条工作流：

| 你说 | 触发的工作流 |
|------|--------------|
| 帮我针对这个 JD 生成简历 | [JD 定制简历](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/jd-tailored-resume.md) |
| 看看有什么合适的机会 | [主动搜寻 JD](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/jd-sourcing.md) |
| 针对这个职位帮我准备面试 | [面试准备](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/interview-prep.md) |
| 投递前帮我核查公开资料 | [投递前核查](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/verification.md) |
| 帮我生成 XX 基金申报简历 | [课题申报](https://github.com/Zenine/resume-intelligence-hub/blob/main/workflows/grant-application.md)（仅科研轨） |

## 常见问题

**「AI 没读到我的 AGENTS.md」**

- Claude Code：老版本只认 `CLAUDE.md`，建 symlink：`ln -s AGENTS.md CLAUDE.md`
- Cursor：把 `AGENTS.md` 内容复制到 `.cursor/rules/agents.mdc` 或 symlink
- Windsurf：用 `.windsurfrules`
- GitHub Copilot：用 `.github/copilot-instructions.md`
- 其它 IDE：查一下它的上下文文件约定

**「我已经有一堆散乱的简历了，能迁移吗？」**

能。把 Agent 指向你现有的 `简历/` 目录（或其它路径），说"把这些迁移到 resume-intelligence-hub 结构里"——bootstrap 流程会做合并整理。

**「我需要其它语言」**

目前支持中文和英文模板。欢迎 [GitHub PR](https://github.com/Zenine/resume-intelligence-hub) 贡献其它语言。
