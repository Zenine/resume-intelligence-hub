# Resume & Career Hub

An AI-driven personal resume library and career-development hub.

## First time here? Start here

The core context file is **`AGENTS.md`** (the cross-IDE standard — Claude Code, Cursor, Codex, Cline, Windsurf, GitHub Copilot, and others all read it).

Pick your AI IDE:

- **Claude Code**: run `claude` in this directory — it auto-loads `AGENTS.md`. If you're on an older Claude Code that only reads `CLAUDE.md`, symlink: `ln -s AGENTS.md CLAUDE.md`
- **Cursor**: copy `AGENTS.md` content into `.cursor/rules/agents.mdc`, or symlink
- **Windsurf**: copy into `.windsurfrules` or symlink
- **GitHub Copilot**: copy into `.github/copilot-instructions.md`
- **Cline / Continue / Aider**: point the tool's rules file (`.clinerules` / `.continue/config.json` / `CONVENTIONS.md`) at `AGENTS.md`

**Get started** (works with any of the above):
1. `cd` into this repo from the terminal
2. Launch your AI IDE
3. Say things like "tailor my resume for this JD" or "prep me for this interview" — the agent guides the next steps
4. **Let the AI fill most of this for you**: don't hand-type the blank fields in `profiles/`. Just tell the agent the facts, and it structures them into the right files.

## Positioning

Targeting (fill at bootstrap — target seniority) roles in (industry / domain). See `AGENTS.md` for positioning details.

## Features

### Job applications
- **JD-tailored resume generation** — match and reassemble from the experience library to produce custom resumes for a specific role
- **Interview coaching** — simulated interviews, STAR story prep, technical/craft review based on the JD and generated resume
- **Career consulting** — gap analysis, path planning, market-trend insights
- **Personal branding** — cover letters, self-introduction scripts, LinkedIn summaries

<!-- Research track enabled -->

### Grant / research applications
- **Application profile generation** — format-compliant research CVs per grant type
- **Research-basis drafting** — auto-generate the "research basis" section from the research archive
- **Output filtering** — surface the most relevant publications/patents/standards/projects for each direction

<!-- End -->

### Verification & fact-checking
- **Supporting-materials index** — path references to local, cloud-synced, and public-URL evidence (sensitive originals stay out of Git)
- **Public-source cross-check** — verify load-bearing claims before high-stakes submissions

## Directory structure

```
.
├── profiles/              # Personal data (structured experience, competencies, portfolio)
│   ├── master.md          # Master profile: work history, projects, competencies (job-resume source)
│   ├── research.md        # Research track only: publications, patents, standards, projects
│   ├── skills.md          # Competency matrix
│   └── stories.md         # STAR story library (for interviews)
├── resumes-archive/       # Historical resumes (read-only)
├── research-archive/      # Research track only: historical research CVs (read-only)
├── jobs/
│   ├── templates/         # Resume templates (styles)
│   ├── market-watch/      # Target-employer research
│   └── applications/      # JD + generated artifacts per submission
│       └── {company}-{role}-{date}/
│           ├── jd.md
│           ├── resume.md
│           ├── cover.md
│           └── prep.md
├── verification/          # Supporting materials and fact-checking
│   ├── credentials/       # Non-sensitive originals that can be committed
│   ├── references.md      # Supporting-materials index (path references)
│   └── {date}-web-check.md # Public-source verification logs
├── assessments/           # Personality tests, 360 feedback, etc. (optional, for interview prep)
├── todo.md                # Current pending work
├── changelog.md           # Archive of completed items
├── AGENTS.md              # AI agent behavior guide (cross-IDE)
└── readme.md
```

## Usage

In the repo root, work through your AI IDE of choice:

```
> Tailor my resume for this JD: [paste JD]
> Prepare me for this interview
> Analyze the gap between my competencies and this role
> Run a public-source check on my resume before I submit
```

<!-- Research track enabled -->

```
> Generate an NIH R01 application profile for direction: [description]
```

<!-- End -->

## Privacy

This repo is **private**. It contains sensitive personal information — do not make it public.
