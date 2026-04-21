# 简历 & 职业发展库

AI 驱动的个人简历库与职业发展平台。

## 第一次用？看这里

本仓库的核心上下文文件是 **`AGENTS.md`**（跨 IDE 通用标准，Claude Code / Cursor / Codex / Cline / Windsurf / GitHub Copilot 等都能读）。

选一个你用的 AI IDE：

- **Claude Code**：直接在本目录执行 `claude`，自动加载 `AGENTS.md`（旧版若只认 `CLAUDE.md`，建一个 symlink：`ln -s AGENTS.md CLAUDE.md`）
- **Cursor**：把 `AGENTS.md` 内容复制到 `.cursor/rules/agents.mdc`，或建 symlink 指过去
- **Windsurf**：复制到 `.windsurfrules` 或建 symlink
- **GitHub Copilot**：复制到 `.github/copilot-instructions.md`
- **Cline / Continue / Aider**：各自的 rules 文件（`.clinerules` / `.continue/config.json` / `CONVENTIONS.md`），把 `AGENTS.md` 内容指过去即可

**开始使用**（任一 IDE 都适用）：
1. 在终端 `cd` 到本目录
2. 启动你的 AI IDE
3. 直接说"帮我针对这个 JD 生成简历" / "帮我准备面试" 等，AI 会引导后续
4. **几乎所有字段由 AI 帮你填**：不用手填 profiles 里的空白，直接告诉 AI 事实，它结构化写入

## 定位

服务于（bootstrap 时填入）领域的（目标角色层级）求职。定位细节见 `AGENTS.md` 顶部。

## 功能

### 招聘应聘
- **JD 定制简历生成** — 根据目标职位，从个人经历库中匹配、重组生成定制化简历
- **面试教练** — 基于 JD 和简历进行模拟面试、STAR 故事准备、专业问答训练
- **职业咨询** — 能力差距分析、职业路径规划、市场趋势解读
- **个人品牌** — Cover Letter / 自荐信、自我介绍话术生成

<!-- 科研轨启用时保留 -->

### 课题 / 基金申报
- **申报简历生成** — 按基金类型生成符合格式要求的科研简历
- **研究基础撰写** — 基于科研成果自动生成"研究基础"段落
- **成果筛选** — 按申报方向筛选最相关成果

<!-- 结束 -->

### 佐证与核查
- **佐证材料索引** — 关键证明文件的本机/同步盘/公开 URL 路径引用（敏感原件不入仓）
- **公开资料核查** — 投递/申报前对关键事实进行公开来源交叉验证

## 目录结构

```
.
├── profiles/              # 个人资料（结构化的经历、能力、作品数据）
│   ├── master.md          # 主档案：工作经历、项目/作品、能力（招聘数据源）
│   ├── research.md        # 仅科研轨：论文、专利、标准、课题
│   ├── skills.md          # 能力矩阵
│   └── stories.md         # STAR 故事库（用于面试）
├── 简历/                   # 历史招聘简历归档（只读）
├── 科研/                   # 仅科研轨：历史科研简历归档（只读）
├── jobs/
│   ├── templates/         # 简历模板（不同风格）
│   ├── market-watch/      # 目标单位观察记录
│   └── applications/      # 每次投递的 JD + 生成结果
│       └── {单位}-{职位}-{date}/
│           ├── jd.md
│           ├── resume.md
│           ├── cover.md
│           └── prep.md
├── verification/          # 佐证材料与公开资料核查
│   ├── 证书资质/           # 可入仓的证明原件归档
│   ├── references.md      # 佐证材料索引（路径引用）
│   └── {date}-web-check.md # 公开资料核查记录
├── assessments/           # 性格测评、360 反馈等（面试准备参考，可选）
├── todo.md                # 当前待办
├── changelog.md           # 已完成事项归档
├── AGENTS.md              # AI Agent 行为指南（跨 IDE 通用）
└── readme.md
```

## 使用方式

在仓库根目录通过任意 AI IDE 交互：

```
> 帮我针对这个 JD 生成简历：[粘贴 JD]
> 针对这个职位帮我准备面试
> 分析我当前的能力和市场需求的差距
> 投递前帮我核查一下公开资料
```

<!-- 科研轨启用时保留 -->

```
> 帮我生成国自然面上项目的申报简历，方向是：[方向描述]
```

<!-- 结束 -->

## 隐私说明

本仓库为 **私有仓库**，包含个人敏感信息，请勿公开。
