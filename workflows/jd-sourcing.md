# Workflow: JD Sourcing & Market Research

> Before the user can apply to a JD, they need to find one. Most job-search failures aren't about resume quality — they're about pipeline quality.

## Stretch target heuristic (the "1-2 levels, 1.2-3x" rule)

A widely-used recruiter heuristic for external moves:

- **Seniority**: target roles **1-2 levels above** current title. Not same-level (no growth, rarely worth the switching cost). Not 3+ levels above (usually delusional unless founder path).
- **Compensation**: floor of **1.2-1.5x** current total comp (external moves command a premium — if you're not getting that, stay put unless non-comp reasons); stretch ceiling **2-3x** when you're simultaneously leveling up AND shifting company type (e.g., established firm → fast-growing startup with equity, or management IC → executive with meaningful carry).
- **Match threshold**: apply to roles where you meet **~70% of requirements**. Waiting for 100% match = you're applying for lateral or downward moves. Recruiters expect senior hires to grow into the role.
- **Channel weight**: warm intro >>> cold apply for senior roles. Rule of thumb: a warm referral is ~10x more likely to convert. Invest in network activation before mass-applying.

### When the heuristic doesn't apply
- **Career pivot** (industry or role type change): accept 10-30% pay cut is normal; the upside is optionality 2-3 years out
- **Downshift by choice** (lifestyle / location / work-life): explicit trade-off, don't force salary growth
- **At market ceiling** (e.g., CTO of unicorn → ?): moves are driven by scope/equity/mission, not multiplier
- **Early career (0-3 years)**: multipliers are smaller (1.1-1.3x typical); level-up matters more than comp

Record the user's specific stretch target in their positioning section — the numbers change how aggressively the agent filters JDs.

## Where to source JDs (by region × seniority × field)

Don't dump every link — pick 3-5 channels fitting the user's profile.

### China — Tech / Engineering
- **BOSS 直聘** — highest volume, all levels. Best for mid-level IC/manager
- **拉勾** — tech-focused, junior-to-senior IC
- **猎聘** — 中高端，HR/猎头接触面大，管理岗首选
- **100Offer Max** — senior tech (总监+), curated, 被动 offer 为主
- **脉脉** — 内推/八卦/口碑，用于 JD 验证（公司是否真在招、老板口碑）
- **LinkedIn 中国** — 跨国企业、海外背景岗位
- **目标公司官网 + 微信公众号** — 直接投递，加内推权重

### China — Medical / Biotech
- **丁香园人才频道** — 医疗信息化 / 医生 / 药械
- **健康界招聘** — 医院管理 / 医政
- **生物谷 / 医药魔方** — 药企研发 / BD
- **医械汇 / Meditrec** — 医疗器械 / IVD

### China — Finance / Law / Consulting
- **猎聘高端** — 投行 / 咨询 / 律所
- **金融老谋子 / 券商圈（微信）** — 金融细分
- **无讼 / 智合法律新媒体** — 法律行业垂直

### Global — Tech
- **LinkedIn** — default senior+，美英欧首选
- **Levels.fyi** — 薪酬透明度神器 + 大厂岗
- **Otta / Built In / Hired** — tech 岗位 curation
- **Hacker News "Who is Hiring?"** — 每月 1 号热帖，startup CTO/staff+ 机会
- **Y Combinator Work at a Startup** — YC 系 startup
- **AngelList / Wellfound** — startup 通用

### Global — Executive / Senior
- **Korn Ferry / Spencer Stuart / Heidrick & Struggles / Egon Zehnder / Russell Reynolds** — top 5 executive search firms (联系其 China practice partner)
- **ExecThread** — senior confidential listings
- **The Ladders** — $100K+ US

### Academic / Research (研究轨启用时)
- **Nature Careers / Science Careers**
- **HigherEdJobs / ChronicleVitae** — 美欧高校
- **ResearchGate Jobs**
- **中国：高校/研究所 RHO 官网、青年千人项目公示、各省"双一流"招聘专项**

### Universal
- **公司官网 Careers 页** — 直招（薪资 / 上下级关系信息最准确）
- **前 同事 / 导师 / 校友网络** — 最高转化率，投 5 个 warm intro ≈ 投 50 个冷申请

## Two modes

### Mode A — Active discovery (user has no specific JD yet)

Default when the user says things like "看看有什么合适的机会" / "帮我找工作" / "what's out there for me" without bringing a specific JD in hand.

Steps:
1. Read `profiles/master.md` + `profiles/skills.md` + positioning section of `AGENTS.md` to build an internal profile
2. Confirm / recalibrate stretch target with user (see Step 1 below)
3. **Actively search** using available web tools (WebSearch / web fetch / your IDE's equivalent) across 3-5 most-fit channels for the user's region × seniority × field. Construct queries that reflect stretch target, not current title:
   - Include target title(s) 1-2 levels up (e.g., if user is 研发总监, search "CTO 医疗 AI" / "VP Engineering healthcare AI" / "技术副总裁 医疗大数据")
   - Include geography constraint (city or remote preference)
   - Filter company stage / size matching stretch comp target
4. **Present top 3-5 candidates** as a ranked shortlist. For each, surface:
   - Title, company, location, posted date
   - Stretch fit: Level ✅/⚠/❌, Comp (if disclosed) ✅/⚠/❌, Skill ~% match
   - 1-sentence why-this-one hook
   - Direct link to the JD source
   - Known warm-intro paths (if discoverable from user's network context)
5. User picks 1-3 → each triggers `workflows/jd-tailored-resume.md`
6. Unpicked candidates → save to `jobs/market-watch/{YYYY-MM-DD}-shortlist.md` for future revisit

**Tool caveat**: capability to actively search the web varies by IDE (Claude Code has WebSearch; Cursor has web tools via MCP; Aider needs plugins). If web search isn't available, ask the user to paste 3-5 JD URLs they've come across — still surface the ranking + fit table, just without the search step.

### Mode B — Specific JD on hand

When the user brings a JD (pasted text / URL / PDF), skip straight to step 1 below for target calibration, then jump to `workflows/jd-tailored-resume.md`.

## Steps

### 1. Confirm stretch target

**First, check `AGENTS.md` positioning section.** If a stretch target is already locked there (from a prior `workflows/career-planning.md` run), read it and proceed to Step 2 — don't re-litigate. If the positioning section is empty, vague, or materially stale (>1 quarter old, or the user's situation obviously shifted), **stop and run `workflows/career-planning.md` first**. A gap-analyzed target beats an inline-rescued one; don't try to do career planning as a sidebar to JD sourcing.

If a quick calibration is all that's needed (target exists, just verify numbers), confirm with the user:
- Current title + total comp range
- Stretch target title (1-2 levels up per the heuristic, with caveats)
- Stretch target comp (1.2-1.5x floor, up to 2-3x if also changing company type)
- Match threshold: aim for ~70% fit; don't wait for 100%

Write this into `AGENTS.md` positioning section if not already there.

### 2. Pick 3-5 channels
Based on region × seniority × field. Don't spread across 10+ boards — it fragments effort. Pick the channels most likely to carry the stretch target and monitor them weekly.

### 3. Build a watchlist
In `jobs/market-watch/`, maintain a list of target companies (15-30 for active search). For each, track:
- Company name + basic scale (headcount / revenue / funding stage)
- Known in-network contacts (warm intro path)
- Why-this-company rationale (fit to positioning)
- Last observed hiring signal (JD posted / exec left / funding round)

Filename pattern: `{YYYY-MM-DD}-{theme}.md` (e.g., `2026-04-18-round2-gap.md`, `2026-05-companies-seriesC-medai.md`)

### 4. Triage JDs
When a JD arrives (channel push, friend forward, direct find):
- Quick-read against stretch target: **level match? comp match? ~70% skill match?**
- If all three: proceed to `workflows/jd-tailored-resume.md`
- If only 1-2 match: save to market-watch as "watch but don't apply yet" — sometimes worth revisiting in 3-6 months
- If 0 match: discard, don't sink time

### 5. Warm-intro protocol
For target roles at target companies:
- Check in-network first (LinkedIn 1st/2nd-degree, 脉脉 内推, alumni)
- If intro exists: request **before** cold applying — recruiter sees name twice (warm + application), conversion jumps
- No intro? Post to "who's hiring" threads, reach out to hiring manager on LinkedIn with a 3-sentence pitch, or cold apply with a strong cover letter targeting the hiring manager by name

## Output

When coaching the user through this workflow:
- Suggest the 3-5 most-fit channels (don't list all)
- Generate / update a `jobs/market-watch/{date}-{theme}.md` with the watchlist
- Flag any in-network warm-intro paths you can see from context
- If the user's stretch target is unclear or mis-calibrated (too conservative or too aggressive), say so
