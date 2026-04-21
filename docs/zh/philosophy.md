# 设计哲学

十条非显而易见的设计选择。扩展 skill 时保留这些决定。

## 1. 单一事实来源

`profiles/` 是唯一的事实数据层。`master.md` 服务招聘，`research.md` 服务课题（可选）。历史简历在 `resumes-archive/` 或 `简历/` 里，**只读**——不编辑、不当数据源，除非需要补回尚未迁移到 profiles 的信息。

## 2. AGENTS.md 里的定位锁

`AGENTS.md` 顶部声明目标职级与行业。所有生成的简历都以此为偏向。改目标 = 改一个文件。不用每次会话重新解释。

## 3. 双轨分离（启用时）

招聘简历和课题申报书是两种完全不同的文档——格式、语气、侧重、甚至事实权重都不一样。数据源分开：`master.md` vs `research.md`。不要合并。

## 4. 敏感原件用路径引用

敏感文档（身份证、合同、任命函、毕业证、税单）**不入仓**。`verification/references.md` 是一个路径索引，指向本机路径、云同步盘、公开 URL。仓库保持可分享，原件留本地。

## 5. 高阶投递前必做公开资料核查

高阶岗面试或课题申报前，跑一次 `workflows/verification.md`：对简历/申报书里每一条承重声明做公开来源交叉核查。**Triangulation**（至少 2 个独立来源）是标准。结果写进 `verification/{date}-web-check.md`。高风险项要么找佐证，要么改写，不要忽视。

## 6. todo.md 与 changelog.md 分离

- `todo.md` **只放待办**，不留 `[x]` 完成项
- `changelog.md` 接收完成的条目，按日期倒序归档

做完了就告诉 Agent 归档，别让 `[x]` 在 todo 里堆积。这样 todo 始终是一份真实的 punch list。

## 7. 每次投递独立文件夹，带日期

每次投递活在 `jobs/applications/{公司}-{职位}-{YYYY-MM-DD}/` 里，含 `jd.md`、`resume.md`、`cover.md`、`prep.md`。同一家公司投两次 = 两个文件夹。日期不可省——它反映速率，也让你能回看某一次具体尝试。

## 8. STAR 故事库独立于事实库

`profiles/stories.md` 存面试用 STAR 故事。`master.md` 存原始事实。故事是**为讲述优化过的版本**，事实是**原始数据**。不要混淆。

## 9. 每个 hub 只用一种语言

hub 要么全中文，要么全英文。bootstrap 时选一个。不要混——模板、Agent 指令、工作流叙述都假设单一语言。简历**输出**本身仍可按投递单位选中英。

## 10. 通过 AGENTS.md 实现 AI IDE 无关

正式上下文文件是 `AGENTS.md`——跨 IDE 通用标准。为特定 IDE 建 symlink 或复制（`.cursor/rules/`、`.windsurfrules` 等）。不要绑死在某个厂商。

---

## 引用的方法论

Skill 按名引用多个成熟框架，让你有进一步研究的抓手。完整列表见 [方法论](/zh/frameworks)。
