# Workflow: Career Planning & Gap Analysis

> The hub isn't just for outputting resumes — it's for naming where you're going. Most job-search failures aren't resume quality or interview prep; they're applying to the wrong seat because the user never articulated which seat they're actually hunting for. This workflow is the "compass reset" that every other workflow bends toward.

## When to run this

**Prerequisite**: the hub must already exist. If the user invokes this phrase without a hub on disk, run the **bootstrap interview** from `SKILL.md` first; come back here only after `profiles/master.md` has enough substance to diff against.

- **First time, right after bootstrap** — before any `jd-sourcing` or `jd-tailored-resume` run. You can't source or tailor toward an undefined target.
- **Every quarter** — the default cadence. Market moves, user's skill capital accumulates, and stale targets drift.
- **After a major life event** — promotion, layoff, visa shift, new family constraint, funding round at current company, a mentor's exit. Any of these can reset the target.
- **When `workflows/jd-sourcing.md` Step 1 ("Confirm stretch target") returns vague answers** — don't bolt on; run this workflow properly.
- **User says things like**: "不知道下一步该往哪走" / "想跳但不知道跳去哪" / "plan my next 1-2 years" / "我这个方向还能往哪走" / "gap analysis" / "help me figure out what to aim for next".

## The four-gap frame

Anchor the analysis on four dimensions. Don't let it wander into generic "life coaching" — the hub is specifically about the career vector.

1. **Skill gap** — what craft, tools, domain knowledge does the target seat expect that the user doesn't yet have? (Source: `profiles/skills.md` × JD-scraped requirements from 3-5 real postings at the target level.)
2. **Scope gap** — what **scale** does the target seat operate at? Team size, budget ownership, P&L, cross-org reach, external voice. Often the bigger gap, because scope is earned not studied.
3. **Credential / title gap** — does the target seat typically require a title, degree, certification, or public-visible artifact (talks, publications, shipped products, board seats) the user doesn't have? If so, what's the fastest legitimate path?
4. **Network gap** — who's 1-2 degrees away from the target seat that the user hasn't activated? Warm-intro paths are disproportionately decisive for senior moves (~10x conversion per the stretch-target heuristic).

Optional fifth dimension when relevant:

5. **Comp / timing gap** — current comp vs. stretch floor (1.2-1.5x) vs. stretch ceiling (2-3x). Runway: how many months of job search can the user afford? This bounds how aggressive the stretch can be.

## Steps

### 1. Read current state from the hub

- `profiles/master.md` — trajectory, recent scope, quantified outcomes
- `profiles/skills.md` — current capability matrix (T-shape / π-shape self-assessment)
- `profiles/stories.md` — the STAR stories already captured (these reveal what the user considers their strongest signals)
- `AGENTS.md` positioning section — the existing stretch target, if any
- `changelog.md` — what's happened in the last quarter that might shift the target

If any of these are thin or absent, flag it. A gap analysis built on a half-populated `profiles/` will be garbage-in, garbage-out — pause and seed profiles first.

### 2. Name the stretch target (or re-examine the existing one)

Apply the **stretch target heuristic** from `workflows/jd-sourcing.md`:

- **Level**: 1-2 levels above current. Not same-level (no growth); not 3+ levels (delusional unless founder path).
- **Comp**: 1.2-1.5x floor on external moves; 2-3x ceiling when simultaneously leveling up AND shifting company type.
- **Match**: aim for ~70% of requirements, not 100%.

**Critical**: don't accept a target stated in the abstract ("I want to be a VP"). Force concreteness on four axes:

- **Title** — exact title, not a category ("VP Engineering at a Series B-C healthcare AI startup", not "senior tech leadership")
- **Company stage / type** — enterprise vs. startup, YC-stage vs. growth-stage, domestic vs. international, etc.
- **Scope** — headcount owned, budget, geography, product surface
- **Horizon** — realistic arrival window: 6-12 mo / 12-24 mo / 24-36 mo?

If the user can't pin these down, that's the signal — spend this session **just** on target-setting, defer gap analysis.

### 3. Triangulate the target seat against market reality

Gap analysis in a vacuum produces wishlist fiction. Before diffing, ground the target in data:

- Run `workflows/jd-sourcing.md` Mode A with the newly-named stretch target — surface 3-5 live JDs for that exact seat
- If none exist, the target may be mis-named (wrong title vocabulary, wrong geography) or genuinely rare — adjust, don't power through
- Extract the **required** and **preferred** qualifications from each JD; deduplicate. This becomes the target-seat capability fingerprint.

For research-track users, substitute: grant calls of the target tier (NSFC 面上 → 优青 → 杰青; NIH R01 → R35; ERC Starting → Consolidator) and typical PI-profile characteristics of successful applicants at that tier.

### 4. Diff across the four (or five) gaps

For each dimension, write one line per missing item, with two annotations:

- **Severity** — is this blocking (can't apply without it) or weighting (changes odds)?
- **Closable-by-when** — realistic timeline to close. Some gaps close in a quarter (a cert, a specific tool); some take 18 months (a first direct-report team); some won't close without a seat change (title can't be self-awarded).

Example row (senior IC → first-line engineering manager):

| Gap | Item | Severity | Closable |
|-----|------|----------|----------|
| Scope | Direct-report team (3+ reports) | blocking | can't close in current seat; requires internal promotion or external stretch hire |
| Skill | 1:1 / perf-review framework | weighting | 1 quarter (reading + shadowing current manager) |
| Credential | Public talk / writing on engineering leadership | weighting | 2 quarters (1 conference talk + 1 blog series) |
| Network | 5+ engineering managers at target-stage startups in network | weighting | continuous — start now |

### 5. Turn the gap into a SMART quarterly plan

Not the whole 24-month plan — that becomes inert. Just **this quarter**:

- Pick 2-4 items from the gap table where action this quarter is possible
- Rewrite each as **SMART** (Specific, Measurable, Achievable, Relevant, Time-bound)
- Each item gets owner = user, deadline = within the quarter, success criterion = observable artifact (a talk accepted, a cert earned, 5 warm intros captured in `jobs/market-watch/`)

Record the full 24-month view separately in `jobs/market-watch/{YYYY-MM-DD}-gap-plan.md` so the rest of the plan doesn't get lost — but only the quarterly slice lands in `todo.md`.

### 6. Write back to the hub

Four files get updated. **If the session runs short, write them in this order — `AGENTS.md` first is non-negotiable, since it's the only one that biases every subsequent workflow:**

1. **`AGENTS.md` positioning section** — refreshed stretch target (title, stage, scope, horizon, comp band). This is what biases every subsequent resume / interview-prep / JD-sourcing run. If the target changed materially, say so in the commit message.
2. **`todo.md`** — this quarter's SMART items, under a dated "Quarter focus" heading. Don't bury them among tactical tasks.
3. **`profiles/skills.md`** — mark the skill-gap items with a "target-seat gap" tag or short note, so the capability matrix visibly reflects what's missing, not just what's present.
4. **`jobs/market-watch/{YYYY-MM-DD}-gap-plan.md`** — the full gap table + 24-month horizon, as an archived snapshot. Next quarter's run references this to check what shifted.

### 7. Schedule the re-visit

At the end of the session, tell the user: "Re-run this workflow in {{~3 months}}. I'll re-read the hub, diff against the snapshot you just wrote, and surface whether the target still fits."

If the hub has `todo.md` review cadence (recommended: weekly tactical + quarterly strategic), slot the career-planning re-run into the quarterly review.

## Relationship to other workflows

- **Feeds** `workflows/jd-sourcing.md` — the stretch target this workflow lands is the input to sourcing channels, query construction, and JD triage
- **Feeds** `workflows/jd-tailored-resume.md` — the target seat's required/preferred capabilities bias which `profiles/master.md` bullets get surfaced for any given JD
- **Feeds** `workflows/interview-prep.md` — when prepping for a stretch-target role, practice questions should probe the **gap** dimensions (the user needs the strongest STAR answers exactly where they're stretchiest)
- **Independent of** `workflows/verification.md` and `workflows/grant-application.md` — those are execution-phase, this is direction-setting

## Anti-patterns

- **Don't run this in the abstract.** Anchor on 3-5 real JDs (or grant calls) of the target level. Without market data, gap analysis becomes a wishlist.
- **Don't turn it into lifestyle coaching.** Keep it tight around the four-gap frame. "Do I want to be a VP or have a family?" is a real question but it isn't what this hub is for.
- **Don't let the gap plan go static.** Re-run quarterly. The fastest-moving quadrant is usually the market (target-seat fingerprint shifts), not the user's capital.
- **Don't set a stretch target without triangulating.** Capital + market reality + user's energy/life stage must all hold. If one's off, the plan won't survive contact.
- **Don't over-commit this quarter's SMART items.** 2-4 is the right count. 10 means nothing will happen.
- **Don't skip Step 1.** A gap analysis on a thin `profiles/master.md` produces plausible-sounding fiction. Fill profiles first.

## Output

When coaching the user through this workflow:

- Deliver an updated `AGENTS.md` positioning block (or a diff of it)
- Deliver a dated `jobs/market-watch/{YYYY-MM-DD}-gap-plan.md` with the full four-gap table
- Deliver 2-4 SMART items in `todo.md` under a "Quarter focus" heading
- If the user's stretch target changed materially from the previous one, say so explicitly and note the re-calibration reason
- Tell the user: re-run in ~3 months
