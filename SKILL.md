---
name: resume-intelligence-hub
description: Bootstrap and operate a personal career intelligence hub — a private Git repo that is both the single source of truth (resumes, interview prep, research/grant applications, pre-submission verification) and a career compass (stretch target, capability gap, quarterly plan). Works for any industry and any seniority. Use when a user wants to set up an AI-driven resume/career management system, consolidate scattered resumes, run a gap analysis against a stretch target, generate JD-tailored applications, prepare interviews, or adopt this methodology for themselves or a friend. Trigger phrases include "帮我搭个简历库", "resume hub", "career intelligence", "build my career repo", "JD 定制简历", "面试教练", "盘一下差距" / "gap analysis", "课题申报简历" (research track only).
---

# Resume Intelligence Hub

An opinionated methodology + scaffolding for a personal, AI-driven career management repository. Industry-agnostic, seniority-agnostic, and available in both Chinese and English. The research/grant track is **optional** — most users won't need it.

## When to use this skill

**Use when:**
- User wants to create a personal resume/CV management system from scratch
- User has scattered resumes/CVs and wants to consolidate into a single source of truth
- User needs to **name a stretch target** and **run a gap analysis** between their current position and that target (the career-compass use case)
- User needs JD-tailored resume generation
- User wants interview coaching backed by their actual experience library
- User is applying for academic grants / research funding and needs a research-profile track (**optional**)
- User asks to adopt this methodology for someone else (friend, family member, colleague)

**Don't use when:**
- User just wants one resume written once (no hub needed — write it directly)
- User wants generic resume tips without infrastructure

## Core philosophy (the non-obvious design decisions)

These are what make the hub work. Preserve them when bootstrapping.

1. **Single source of truth** — `profiles/` holds factual data; generated resumes are derivatives. Historical resumes are archive-only, never edited.
2. **Positioning lock in AGENTS.md** — the target role level / industry is declared once at the top of AGENTS.md; every generated resume biases toward it. Change target = edit one file, not reprompt each time.
3. **Dual-track separation (if enabled)** — recruitment and research/grant applications have entirely different formats, languages, and emphasis. Their data sources are split: `profiles/master.md` vs `profiles/research.md`. Do not merge.
4. **Verification system, path-references only** — sensitive originals (IDs, contracts, certificates, appointment letters, diplomas) are NOT copied into Git. `verification/references.md` holds a path-reference index to local/cloud/public-URL locations. The repo stays shareable; originals stay out of version control.
5. **Public-source cross-check before high-stakes submissions** — before senior-role interviews or grant applications, run a `verification/{date}-web-check.md` pass to cross-check every load-bearing claim.
6. **todo.md vs changelog.md** — todo is only pending work; completed items migrate to changelog, dated, reverse-chronological. No stale `[x]` marks accumulating.
7. **Per-application folders** — each attempt lives at `jobs/applications/{company}-{role}-{YYYY-MM-DD}/`. Same company, second attempt = second folder.
8. **STAR stories are a separate asset** — `profiles/stories.md` holds interview-ready narratives, distinct from factual `master.md`.
9. **Monolingual output** — the hub is either all Chinese or all English. Pick one at bootstrap; don't mix.

## Referenced frameworks (cite these by name when coaching)

The hub's workflows are built on established frameworks. Use the framework **name** explicitly when guiding the user — it gives them vocabulary to research further and signals craft.

**Bullet writing — Google's XYZ formula** (from Laszlo Bock, former Google SVP People Ops):
> "Accomplished [X] as measured by [Y], by doing [Z]."
> Each bullet answers: what did you do, how was the impact measured, and what actions produced it.

**Quantification — the one-number rule**: every bullet should contain at least one number (headcount, percentage, dollar, timeframe, scale). Bullets without numbers get cut in rewrite.

**Experience narration — STAR** (Situation, Task, Action, Result): the dominant format for behavioral interviews and case-study writing. Used in `profiles/stories.md`.
- **CAR / PAR** (Challenge-Action-Result / Problem-Action-Result) — simpler alternatives when STAR feels over-structured for short bullets.

**Behavioral interviews — BEI** (Behavioral Event Interviewing, David McClelland): the methodology underlying "tell me about a time when..." questions. Past behavior predicts future behavior — prepare specific events, not generalities.

**Positioning — T-shaped skills** (McKinsey/IDEO): deep expertise in one vertical + broad fluency across adjacent areas. For senior roles, sometimes π-shaped or M-shaped (multiple depths). Use when helping a user explain their unique value.

**Grant proposals — Heilmeier Catechism** (George Heilmeier, former DARPA director): nine questions every research proposal should answer. Use when drafting the "research basis" and project-narrative sections:
1. What are you trying to do? (Articulate objectives with no jargon.)
2. How is it done today, and what are the limits?
3. What's new in your approach, and why will it succeed?
4. Who cares? If you succeed, what difference does it make?
5. What are the risks and payoffs?
6. How much will it cost?
7. How long will it take?
8. What are the midterm and final "exams" to check for success?
9. What's your exit strategy?

**Career planning — career capital** (Cal Newport, *So Good They Can't Ignore You*): rare-and-valuable skills build leverage. When doing gap analysis, ask: "What capital do you have? What's worth investing in?"

**Goal framing — SMART** (Specific, Measurable, Achievable, Relevant, Time-bound): used in `todo.md` to make priorities concrete.

**Due diligence — triangulation**: every load-bearing claim needs ≥2 independent public sources before submission. Foundation of `workflows/verification.md`.

**Stretch target heuristic — "1-2 levels up, 1.2-3x comp, 70% match"**:
- Target roles **1-2 levels above current title**. Same-level switches rarely earn the switching cost; 3+ levels is usually delusional.
- External moves command a premium: **floor 1.2-1.5x current total comp**; **stretch ceiling 2-3x** when simultaneously leveling up AND shifting company type (e.g., enterprise → fast-growing startup with equity).
- Apply at **~70% match**, not 100%. Senior hires are expected to grow into the role.
- **Warm intro >> cold apply** (~10x conversion). Invest in network activation before mass-applying.
- Exceptions: career pivots (pay cut normal), downshift by choice, at market ceiling, early-career (smaller multipliers).
- Foundation of `workflows/jd-sourcing.md`.

## AI IDE compatibility

The canonical instruction file is **`AGENTS.md`** — the cross-IDE standard (Claude Code, Cursor, Codex, Cline, Windsurf, and others read it). The hub works with any AI IDE that loads a markdown context file. The onboarding section of `readme.md` walks users through wiring it to their specific IDE (symlink for Claude Code legacy, copy/symlink into `.cursor/rules/`, `.windsurfrules`, `.github/copilot-instructions.md`, etc.).


## Intent routing: which flow to run

Before doing anything, figure out whether a hub already exists in the user's working directory and what the user is actually asking for:

| Hub exists? | User intent | Action |
|-------------|-------------|--------|
| No | Build a hub / consolidate resumes | **Run the bootstrap interview below** (Q1–Q7, then Steps 2–7) |
| No | Gap analysis / JD tailoring / interview prep | Run bootstrap first — you can't analyze or tailor against an empty `profiles/`. Tell the user; then run the interview |
| Yes | Direction-setting / "where should I aim next" / gap analysis | Go to `workflows/career-planning.md`. Skip this section |
| Yes | Anything else (JD sourcing / tailoring / interview / verification / grant) | Go to the corresponding `workflows/*.md`. Skip this section |
| Yes, but `profiles/master.md` is thin | Any workflow request | Pause the requested workflow; seed profiles from existing materials first (see `workflows/career-planning.md` Step 1 "garbage-in" warning) |

Detecting an existing hub: look for `AGENTS.md` + `profiles/master.md` in the current directory (or the directory the user pointed you at).

## Setup workflow: the bootstrap interview

When a user invokes this skill to create a new hub, run this interview **before** creating any files. Ask one at a time — don't dump all questions at once.

### Question 1 — Language
"This hub will be in Chinese or English? Pick one — the templates don't mix languages."
- `cn` → use `templates/cn/`
- `en` → use `templates/en/`

### Question 2 — Existing materials (ask this early, before positioning)
"Do you have existing resumes, CVs, portfolios, or bio documents? Point me at the files, or drop them into a folder. I'll read them first — it makes every other question easier to answer."

Most users already have 1-5 old resumes. Reading these **before** asking about positioning is critical because:
- The agent can infer industry, seniority, and career arc from real content
- The user rarely describes their own positioning well in the abstract
- Old resumes seed `profiles/master.md` in Step 4, saving hours of typing

Accept any format (PDF, DOCX, Markdown, pasted text). If provided, convert to Markdown and hold them aside — they'll move into the hub's archive directory in Step 2.

If the user has nothing yet, that's fine — proceed. Just note it will take longer to fill in profiles.

### Question 3 — Field / Industry
"What field or industry do you work in? (e.g., software engineering, finance, healthcare, design, academia, law, marketing, manufacturing, sales…)"

If Q2 materials were provided, propose an answer based on what you read and confirm ("Looks like you're in {{field}} — right?"). **Do not assume tech.** A designer's hub looks different from a lawyer's which looks different from a manufacturing engineer's.

### Question 4 — Target role / seniority
"What roles are you targeting? (e.g., entry-level, mid-level IC, senior IC, first-line manager, director, VP/executive, founder, academic PI)"

This becomes the "positioning lock" in AGENTS.md. Also ask what should be **emphasized** vs **de-emphasized** for that level. Example prompts to offer:
- For senior management: emphasize team size, budget, P&L, cross-org, external influence; de-emphasize individual execution detail
- For senior IC: emphasize depth, craft quality, ownership; de-emphasize people-management if not relevant
- For career pivot: emphasize transferable skills and motivation narrative

### Question 5 — Research / grant track?
"Do you also apply for academic grants, research funding, or need a publication/patent track? (If you just do job applications, answer no — it's optional.)"

- `no` (most users) → skip `profiles/research.md`, skip `科研/` or `research-archive/`, skip grant-application workflow, remove "dual-track" language from AGENTS.md
- `yes` → include research.md, research archive, grant workflow. Ask follow-up: "Which grant types do you typically apply for?" (affects the template's header examples)

### Question 6 — Output language for resumes
"What language will your resumes/CVs be in?"
- Chinese only / English only / both (bilingual by target market)

If bilingual, the hub language from Q1 is the **management** language; resume output language is picked per application.

### Question 7 — Repo location
"Where should the repo live? (Suggest `~/github/<username>-career` or `~/Documents/career-hub`. It must be a private location — never push to a public remote.)"

### Step 2 — Create the directory structure
Based on answers, copy from `templates/cn/` or `templates/en/`. Remove research-track files if Q5 = no. Apply answers to the positioning section of `AGENTS.md` — other template files are structured so the agent fills them through conversation, not mail-merge (see "Template conventions for filling content" below).

**Directory skeleton (Chinese version):**
```
.
├── profiles/
│   ├── master.md          # 招聘数据源
│   ├── research.md        # 仅科研轨启用时
│   ├── skills.md
│   └── stories.md
├── jobs/
│   ├── templates/
│   ├── market-watch/
│   └── applications/
├── verification/
│   ├── references.md
│   └── 证书资质/            # 或 credentials/（英文）
├── assessments/            # 性格测评、360 反馈等（可选，interview-prep 工作流引用）
├── 简历/                    # 或 resumes-archive/（英文）
├── 科研/                    # 仅科研轨启用时
├── AGENTS.md
├── readme.md
├── todo.md
└── changelog.md
```

**English version:** translate directory names (`简历/` → `resumes-archive/`, `科研/` → `research-archive/`, `证书资质/` → `credentials/`). `assessments/` stays the same.

**Why no `output/` or `prompts/`:** the per-application folder (`jobs/applications/{company}-{role}-{date}/`) already stores generated resume/cover/prep — a top-level `output/` is redundant. Add `prompts/` on demand if the user starts curating reusable prompt templates.

### Step 3 — Move imported materials into the archive
If Q2 provided existing resumes/CVs, copy them into `简历/` (or `resumes-archive/`) and, if relevant, `科研/` (or `research-archive/`). Keep originals + add a Markdown conversion next to each.

### Step 4 — Seed AGENTS.md
This is the most important file. Walk through `templates/<lang>/AGENTS.md` filling in the positioning-lock section from answers to Q3 + Q4. If Q5 = no, remove the research-track section.

### Step 5 — Seed starter profiles
Open `profiles/master.md`. Two scenarios:
- **If Q2 provided materials**: propose a first draft by consolidating the archived resumes into `master.md`, then ask the user to fill gaps (contacts, quantified outcomes, recent roles not on old resumes).
- **If no materials**: walk through section by section, starting with the most recent role.

### Step 6 — Initialize git
```
git init
echo '.DS_Store' > .gitignore
echo '*.tmp' >> .gitignore
# do NOT gitignore resume content
git add . && git commit -m "Initial hub scaffold"
```
Remind user: **private remote only**. Never push to a public GitHub repo.

### Step 7 — Present the next-steps checklist
Don't leave the user staring at a half-empty hub. Scan the seeded profiles and write a prioritized punch list into `todo.md` under "本周优先" / "This week's priorities". Typical items right after bootstrap:
- Add P&L / budget / headcount numbers for the most recent 3 years
- Fill in LinkedIn / personal site link
- Drop certificate/credential PDFs into `verification/credentials/` (or `证书资质/`) and update `references.md`
- Write the first 2-3 STAR stories in `profiles/stories.md` (examples already provided as format reference)
- If research track enabled: populate at least one row in each of the publications/patents/projects tables

Tell the user: "You have a working hub. The natural next step is **`workflows/career-planning.md`** — say '盘一下差距' / 'diff the gap' and I'll help you name a stretch target and turn it into this quarter's SMART plan. Or just say '继续完善档案' to keep filling in profiles first."

## Template conventions for filling content

All templates use **plain-prose instructions instead of `{{placeholder}}` tokens**. Reason: the user will always have an AI agent fill profiles, not hand-type them — `{{}}` adds visual noise and parsing ambiguity without helping. The conventions:

- **Blank field after a colon** (`- **Name**:`) — agent writes the value after the colon
- **Italicized `_待补充_` / `_To be filled_`** — agent replaces this line with generated content
- **Blockquote `> ...`** — guidance that stays as context even after content is filled; don't delete it
- **Parenthetical `(example or format hint)`** — inline hint the agent replaces with the real value
- **Table with only a header row** — agent appends data rows through conversation
- **Example sections** (like the two demo stories in `stories.md`) — stay as format reference; don't remove when filling the user's real stories

## Workflows after setup

Once the hub exists and AGENTS.md is loaded, the agent handles these. See workflow files next to this SKILL.md:

- `workflows/career-planning.md` — **direction-setting**. Name the stretch target, diff the four-gap frame (skill / scope / credential / network), write back a quarterly SMART plan into `todo.md`. Run first after bootstrap, re-run every ~quarter.
- `workflows/jd-sourcing.md` — **find** good JDs (before you can tailor one) — channel selection by region/seniority/field, stretch-target calibration, warm-intro protocol
- `workflows/jd-tailored-resume.md` — generate a custom resume for a specific JD
- `workflows/interview-prep.md` — predict questions, prepare STAR answers, tech review
- `workflows/verification.md` — pre-submission public-source cross-check
- `workflows/grant-application.md` — **only if research track enabled**

## Complementary skills from the ecosystem

This hub is a **framework** — a methodology + repo structure for long-term career management. For specific one-shot tasks, several community skills compose well on top of it. Suggest them to the user when the corresponding use case comes up:

- **ATS deep optimization**: [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) (1.2K installs) — beyond the keyword alignment in the JD workflow, runs deeper ATS heuristic checks on the generated resume.
- **LinkedIn profile**: [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) (1.2K installs) — derives a polished LinkedIn profile from `profiles/master.md`.
- **High-volume JD generator**: [`composiohq/awesome-claude-skills@tailored-resume-generator`](https://skills.sh/composiohq/awesome-claude-skills/tailored-resume-generator) (3.3K installs) — most popular tailored-resume skill. Can cross-check the output of this hub's workflow.
- **Interview prep (Anthropic official)**: [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) (891 installs) — complements this hub's `workflows/interview-prep.md` with Anthropic's official BEI framing.
- **Career transitions**: [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) (996 installs) — Lenny's Newsletter career-transition frameworks. Useful for users pivoting industries or role types.
- **Academic / PhD CV (research track only)**: [`aradotso/trending-skills@awesome-phd-cv`](https://skills.sh/aradotso/trending-skills/awesome-phd-cv) (405 installs) — deeper format guidance for academic CVs; pair with this hub's `profiles/research.md`.

Install any of the above with `npx skills add <owner/repo@skill> -g -y`. They coexist — the hub remains the source of truth; specialized skills consume or augment it.

## Adaptation notes

**Non-tech fields:** the framework works identically. Adjust vocabulary — a chef's `skills.md` lists cuisines and techniques; a lawyer's lists practice areas and jurisdictions; a designer's lists tools, mediums, and portfolio pieces. The **structure** (single source of truth, positioning lock, verification, todo/changelog split) is invariant.

**Early-career users:** the "positioning lock" still applies — it just targets different levels. Scale the profile depth to the user's experience; don't force placeholders they can't fill.

**Users applying internationally:** if they need both Chinese and English resumes, keep the **hub** in whichever language they manage better, and pick resume output language per application.

**Syncing across devices:** private GitHub repo or self-hosted Gitea. Do NOT use only cloud sync (Dropbox/OneDrive/iCloud) — you lose the Git diff history that makes profile evolution trackable.

## Anti-patterns to avoid

- **Don't** assume tech/engineering context. Infer from Q2 materials; confirm in Q3. A marketing manager and a mechanical engineer need very different keyword vocabularies.
- **Don't** force the research track on users who don't need it. Ask Q5 first and default to `no` if they hesitate.
- **Don't** mix Chinese and English in the hub. The framework supports both, but pick one per hub.
- **Don't** copy sensitive originals (IDs, contracts, salary slips) into the repo. Use `verification/references.md` path-references.
- **Don't** let `todo.md` accumulate `[x]` completed items. Move to `changelog.md` each session.
- **Don't** generate a resume by rewriting an old resume. Always regenerate from `profiles/master.md` against the specific JD.
- **Don't** merge recruitment and research profiles into one. The separation is load-bearing when both tracks exist.
- **Don't** skip verification before high-stakes submissions. One unverifiable claim can sink a whole application.

## Template index

- `templates/cn/` — Chinese template set (all files in Chinese)
- `templates/en/` — English template set (all files in English)
- `workflows/` — workflow guides (English, agent-facing; apply to both languages)
