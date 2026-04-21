# Workflow: Pre-Submission Public-Source Verification

## When to run
- Before submitting to **senior roles** (director / VP / executive / partner / founder-level)
- Before any **grant / research proposal** submission
- The first time a "load-bearing claim" is written into a resume

## Why it's mandatory
A single claim that fails a public-source check can sink an entire application. Interviewers and reviewers will Google. Get there first.

## Steps

### 1. Enumerate load-bearing claims
Scan the outgoing resume.md / proposal and list every:
- **Education**: institution, program, degree, year
- **Employer**: legal name, ownership relationship (watch "subsidiary" / "joint venture" phrasing), tenure dates
- **Title**: role, reporting line, scope
- **Projects / funded work**: IDs (grants, standards), dollar amounts, role (PI vs. contributor)
- **Numbers**: quantified outcomes (revenue, users, headcount, AUM, clients, caseload)
- **Third-party endorsements**: credentials, awards, honors, references

### 2. Cross-check each claim
For every item, check at least 2 independent public sources. Common channels by region / field:

**Corporate / business registration**
- US: SEC EDGAR, state Secretary of State filings, OpenCorporates
- UK: Companies House
- EU: national business registries
- China: Tianyancha / Qichacha / QiXinBao
- Global: LinkedIn company page, official website, annual reports

**Academic**
- Google Scholar, Scopus, Web of Science, ORCID, institutional pages
- China: CNKI (知网), Wanfang
- Preprint servers, DOI resolver

**Standards**
- ISO / IEEE / IETF / W3C publication records
- National standards bodies (ANSI, BSI, DIN, JIS, 全国标准信息公共服务平台, etc.)

**Funded projects**
- US: NIH RePORTER, NSF awards search
- EU: CORDIS
- China: NSFC project inquiry, 科技部 announcements
- Industry: company press releases, investor relations pages

**Company / organization**
- Official site, press releases, annual report, regulatory filings (for public companies), reputable news coverage

**Individuals**
- LinkedIn, GitHub, academic homepages, media profiles, conference speaker lists

### 3. Triage
Produce `verification/{YYYY-MM-DD}-web-check.md`:

```markdown
## ✅ Confirmed (safe to use)
- [the claim] — source: [URL or file path]

## 🟡 Insufficient public evidence — supporting docs needed
- [the claim] — not publicly findable; need: [type of evidence, e.g., appointment letter / contract / award certificate / funder notice]

## 🔴 High risk — must resolve before submission
- [the claim] — public record doesn't match / phrasing may be overstated / key entity unfindable
  - Suggested rewrite: [safer phrasing]
```

### 4. Handle high-risk items
Three options — the user picks:
1. **Find supporting evidence**: add to `verification/references.md`, keep the claim
2. **Rewrite phrasing**: change to a version public sources can support (e.g., "subsidiary" → "affiliated innovation entity")
3. **Remove**: if rewriting kills the value, drop the claim

### 5. Archive the verification record
- The verification log itself is evidence of due diligence
- Filename: `{YYYY-MM-DD}-web-check.md` or `{YYYY-MM-DD}-{scenario}-check.md`
- Keep all research notes — reusable for future submissions
