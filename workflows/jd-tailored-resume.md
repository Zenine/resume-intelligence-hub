# Workflow: JD-Tailored Resume Generation

## Input
- A job description (text, URL, or PDF)

## Steps

### 1. Parse the JD
Extract:
- Company / organization name, role title
- Seniority signals (senior / staff / lead / director / VP / partner / PI keywords)
- **Hard requirements** (must-haves)
- **Nice-to-haves** (bonus)
- Core responsibilities (3-5)
- Subtext (soft skills emphasized, culture cues)

### 2. Match profile entries
From `profiles/master.md`:
- Mark experiences directly aligned with hard requirements
- Mark projects/cases/works relevant to nice-to-haves
- Using AGENTS.md's positioning lock, pick the 5-8 strongest highlights

### 3. Strategy (don't skip this)
Write down (internal reasoning, not necessarily shown to user):
- **Emphasize**: 2-3 core selling points
- **De-emphasize**: what to gloss over or cut
- **Keyword alignment**: which JD words to mirror in the resume (ATS optimization)
- **Narrative thread**: the through-line that connects all experiences

### 4. Generate the resume

Use **Google's XYZ formula** for every bullet (Laszlo Bock): *"Accomplished [X] as measured by [Y], by doing [Z]."* Each bullet = impact + metric + action.

- Verb-first (drove / built / led / designed / advised / negotiated)
- **One-number rule**: every bullet must have at least one quantified element (number / %, dollar, timeframe, scale). Bullets with no number get cut in review.
- JD keywords naturally embedded (ATS alignment)
- Length: 1-2 pages (senior roles may warrant 2; IC and early-career usually 1)
- Language: per AGENTS.md config + JD language

**Before/after example of XYZ applied:**
- Weak: "Led team to improve platform performance."
- XYZ: "Cut platform P95 latency from 2.4s to 380ms (-84%) over 2 quarters by leading a team of 6 through profile-guided caching and query rewrites."

### 5. Cover letter (optional)
- Opening hook: why **this company** for **this role**
- Three paragraphs: strongest relevant evidence / what you'd bring / problems you'd solve
- Close with a next step

### 6. Save
Create `jobs/applications/{company}-{role}-{YYYY-MM-DD}/`:
- `jd.md` — original JD, archived
- `resume.md` — generated resume
- `cover.md` — cover letter
- `prep.md` — predicted interview questions (see interview-prep.md)

### 7. Pre-submission review
For every **load-bearing claim** in the resume (degrees, titles, project IDs, quantified numbers):
- Is there supporting evidence? Where? (check `verification/references.md`)
- Does it match public sources? (mandatory for senior roles — see `verification.md`)
