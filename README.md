> **Language**: **English** · [简体中文](README.zh.md) · [日本語](README.ja.md) · [繁體中文](README.zh-TW.md)

# resume-intelligence-hub

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/Docs-online-6366f1?style=flat&logo=vitepress&logoColor=white)](https://zenine.github.io/resume-intelligence-hub/)
[![Skills.sh](https://img.shields.io/badge/skills.sh-listed-f59e0b?style=flat)](https://skills.sh/Zenine/resume-intelligence-hub)

> **[📖 Documentation & landing page →](https://zenine.github.io/resume-intelligence-hub/)**

> An opinionated AI-agent **skill** that bootstraps a personal career intelligence hub — a private Git repo that is **both (a) your single source of truth** (resumes, interview prep, grant applications, pre-submission verification) **and (b) your career compass** — the seat you want 1–2 levels up, the explicit gap between you and that seat, and what to close this quarter. Works in any AI IDE that reads `AGENTS.md` (Claude Code, Cursor, Codex, Cline, Windsurf, GitHub Copilot, ...).

Unlike most career skills in the ecosystem — which are one-shot generators ("paste a JD, get a resume") — this one is a **framework**. It scaffolds a persistent, version-controlled hub and then powers ongoing job search, interview prep, grant applications, and fact-checking on top of it. **Output is only half the value — the other half is direction**: the hub forces you to name a stretch target, surface the capability gap (skills, title, scope, comp), and revisit it every time you apply, so your applications compound toward a destination instead of drifting.

## Who is this for?

- Anyone consolidating scattered resumes/CVs into a single source of truth
- Anyone aiming to jump **1–2 levels up** but hasn't yet laid out the capability gap between their current seat and the target seat, or doesn't yet know which target seat to aim for
- Senior professionals (director / VP / CTO / partner / PI) who apply infrequently but each submission is high-stakes
- Bilingual job searchers (Chinese / English hubs both supported, pick one at bootstrap)
- Researchers who also job-hunt (optional dual track: recruitment + grant applications)
- Anyone helping a friend or family member set up the same system

Works for any industry — software, healthcare, finance, law, design, academia, sales, manufacturing, etc. The framework is industry-agnostic; vocabulary customizes via bootstrap Q&A.

## What you get

### 1. A private Git repo with this structure
```
.
├── profiles/              # Single source of truth
│   ├── master.md          # Job-resume source
│   ├── research.md        # Grant-application source (optional)
│   ├── skills.md          # Competency matrix
│   └── stories.md         # STAR story library
├── jobs/
│   ├── templates/
│   ├── market-watch/      # Target companies + hiring signals
│   └── applications/{company}-{role}-{YYYY-MM-DD}/
├── verification/          # Pre-submission fact-checking
│   ├── credentials/       # Non-sensitive originals
│   ├── references.md      # Path-reference index (sensitive originals stay local)
│   └── {date}-web-check.md
├── assessments/           # Personality tests, 360 feedback
├── resumes-archive/
├── research-archive/      # (optional)
├── todo.md / changelog.md
└── AGENTS.md              # AI agent behavior guide
```

### 2. Six workflows the agent executes on the hub
- **Career planning & gap analysis** — name a stretch target 1-2 levels up, diff the capability gap (skill / scope / credential / network), turn it into a quarterly SMART plan. Run first after bootstrap, re-run every ~quarter.
- **JD sourcing** — find good JDs (active web search by stretch target, or triage a JD you have)
- **JD-tailored resume** — generate a custom resume from `profiles/master.md` against a specific JD
- **Interview prep** — predict questions, prep STAR answers, tech review, behavioral strategy
- **Pre-submission verification** — cross-check every load-bearing claim against public sources
- **Grant application** — generate research proposals in NSFC / NIH / provincial / industry formats (optional)

### 3. Referenced frameworks
The skill cites established career frameworks by name so users have vocabulary to research further:
- **Google's XYZ formula** (Laszlo Bock) — resume bullet structure
- **STAR** — behavioral interview answers
- **BEI** (McClelland) — behavioral interviewing methodology
- **Heilmeier Catechism** (DARPA) — research proposal framing
- **T-shaped / π-shaped skills** — positioning
- **Career capital** (Cal Newport) — career capital + gap analysis against the target seat
- **Stretch target heuristic** (1-2 levels up, 1.2-3x comp, 70% match) — application targeting
- **Triangulation** — due diligence / verification

## Install

Via the Skills CLI (recommended):
```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

Or clone manually into your IDE's skills directory (Claude Code path shown — adjust for Cursor / Codex / Cline / Windsurf):
```bash
git clone https://github.com/Zenine/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## Use

In your AI IDE, say any of:
- "I've got 5 resumes across different folders — consolidate them into one hub" — **bootstrap**
- "I want to jump Senior→Staff — diff the gap and give me a plan for this quarter" — **career planning & gap analysis**
- "A friend sent me this Staff PM JD — triage it, and if it's worth applying, tailor my resume against it" — **JD triage + tailored resume**
- "I'm aiming Senior→Staff — surface stretch-target roles posted in the last two weeks" — **active JD sourcing**
- "Onsite this Thursday — predict likely questions from this JD and drill me on STAR answers" — **interview prep**
- "Before I hit submit, cross-check every load-bearing claim in my resume against my GitHub, papers, and LinkedIn" — **pre-submission verification**
- "Draft an NSFC / NIH grant application profile" — **grant application** (if research track enabled)

The skill's `SKILL.md` file instructs the agent on the full bootstrap flow: 7-question interview (language, existing materials, industry, seniority, research track yes/no, resume output language, repo location), then scaffold, then next-steps punch list.

## Design philosophy (the non-obvious choices)

1. **Single source of truth** in `profiles/`; archives are read-only
2. **Positioning lock** in `AGENTS.md` top — change target once, every resume biases to it
3. **Dual-track separation** when enabled — recruitment profile and research profile are distinct
4. **Path-references for sensitive originals** — repo stays shareable, originals stay local
5. **Pre-submission public-source cross-check** for high-stakes submissions
6. **todo.md / changelog.md split** — todo is pending-only, completed items migrate
7. **Per-application folders** dated — same company twice = two folders
8. **STAR stories separate from facts** — crafted retelling vs. raw data
9. **Monolingual output** — pick one of Chinese / English at bootstrap, don't mix
10. **AI-IDE agnostic** — uses `AGENTS.md` cross-IDE convention

## Complementary skills in the ecosystem

This is a framework. For specific one-shot tasks, compose these on top:

| Skill | Purpose |
|-------|---------|
| [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) | ATS deep optimization |
| [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) | LinkedIn profile |
| [`composiohq/awesome-claude-skills@tailored-resume-generator`](https://skills.sh/composiohq/awesome-claude-skills/tailored-resume-generator) | Alternative JD-tailored generator |
| [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) | Anthropic official interview prep |
| [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) | Lenny's career transitions |
| [`aradotso/trending-skills@awesome-phd-cv`](https://skills.sh/aradotso/trending-skills/awesome-phd-cv) | PhD CV (research track) |

## Privacy

This skill contains **no personal data**. All templates use placeholder-free prose ("to be filled" markers) that AI fills through conversation with each user. The example STAR stories in `templates/{cn,en}/profiles/stories.md` are generic fictional scenarios, clearly labeled as anonymized format references.

The hub itself, once populated, contains real personal data — it's designed to live in a **private** Git repo, never public.

## License

MIT. See [LICENSE](LICENSE).

## Contributing

PRs welcome — especially for:
- Additional language support (currently Chinese + English)
- More industry-specific vocabulary in templates
- New workflows (e.g., salary negotiation, compensation benchmarking, networking playbook)
- Regional JD-sourcing channels (current coverage: China, US, UK, EU, global tech; gaps: SE Asia, India, Japan, Korea, Latam)

## Attribution

The frameworks referenced in this skill are the work of their respective authors: Laszlo Bock (Google), David McClelland (BEI), George Heilmeier (DARPA), Cal Newport (*So Good They Can't Ignore You*). The skill merely cites and applies them — original works should be consulted directly for depth.
