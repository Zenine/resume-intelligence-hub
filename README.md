# resume-intelligence-hub

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/Docs-online-6366f1?style=flat&logo=vitepress&logoColor=white)](https://zenine.github.io/resume-intelligence-hub/)
[![Skills.sh](https://img.shields.io/badge/skills.sh-listed-f59e0b?style=flat)](https://skills.sh/Zenine/resume-intelligence-hub)

> **[📖 Documentation & landing page →](https://zenine.github.io/resume-intelligence-hub/)**

> An opinionated AI-agent **skill** that bootstraps a personal career intelligence hub — a private Git repo that acts as the single source of truth for resumes, interview prep, grant applications, and pre-submission verification. Works in any AI IDE that reads `AGENTS.md` (Claude Code, Cursor, Codex, Cline, Windsurf, GitHub Copilot, ...).

Unlike most career skills in the ecosystem — which are one-shot generators ("paste a JD, get a resume") — this one is a **framework**. It scaffolds a persistent, version-controlled hub and then powers ongoing job search, interview prep, grant applications, and fact-checking on top of that hub.

## Who is this for?

- Anyone consolidating scattered resumes/CVs into a single source of truth
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

### 2. Five workflows the agent executes on the hub
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
- **Career capital** (Cal Newport) — gap analysis
- **Stretch target heuristic** (1-2 levels up, 1.2-3x comp, 70% match) — application targeting
- **Triangulation** — due diligence / verification

## Install

Via the Skills CLI (recommended once published to skills.sh):
```bash
npx skills add <owner>/resume-intelligence-hub -g -y
```

Or clone + symlink manually:
```bash
git clone https://github.com/<owner>/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## Use

In your AI IDE, say any of:
- "帮我搭个简历库" / "build my career repo" — bootstrap a new hub
- "帮我针对这个 JD 生成简历" / "tailor my resume for this JD" — generate custom resume
- "看看有什么合适的机会" / "what's out there for me" — active JD sourcing mode
- "针对这个职位帮我准备面试" / "prep me for this interview" — interview coaching
- "投递前帮我核查一下公开资料" / "run a pre-submission verification" — fact-check
- "帮我生成国自然基金简历" / "generate an NIH application profile" — grant application (if research track enabled)

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
