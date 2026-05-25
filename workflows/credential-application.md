# Workflow: Credential / Promotion Dossier

## When to run

Use this for evidence-heavy applications that are not ordinary job applications:

- Professional title or senior-title review
- Licensing or board certification
- Internal promotion packets
- Exceptional-track / signature-achievement applications
- Any dossier where eligibility rules, proof materials, and wording risk matter as much as the narrative

## Core rule

Do not start by writing the application text. Start by decomposing the rulebook into an evidence matrix. The output must make it obvious which claims are proven, which are pending, and which should be softened.

## Steps

### 1. Read the rulebook and existing hub context

Read, in order:

1. The official eligibility / evaluation rulebook supplied by the user
2. Any existing assessment or action plan in `credential-applications/` (or `职称/`)
3. `profiles/master.md`
4. `profiles/research.md` if research outputs matter
5. `verification/references.md`
6. `todo.md` and `changelog.md`

If the rulebook is missing, ask for it or search official sources. Do not infer requirements from memory.

### 2. Classify the application path

Separate:

- Normal eligibility path
- Exceptional / accelerated path
- Signature-achievement path
- Supporting bonus items
- Hard blockers

This prevents the agent from treating a normal-track requirement as the user's only route when an exceptional-track route is possible.

### 3. Build the evidence matrix

Create or update a file under `credential-applications/{credential-name}/`:

```markdown
| Requirement | Current evidence | Missing evidence | Risk | Suggested wording |
|---|---|---|---|---|
| 5 years in role | appointment letter path | annual review proof | Medium | "served in..." |
```

Evidence categories to check:

- Appointment / employment / title documents
- Annual reviews or performance records
- Continuing education or required hours
- Product / project ownership proof
- Contracts, acceptance reports, revenue, users, deployment scope
- Patents, standards, papers, awards, certifications
- Public-source corroboration
- Third-party letters or organization statements

### 4. Separate attribution levels

Every major achievement must be tagged:

- **Personal owner** — direct accountable owner, principal author, PI, first inventor, project lead
- **Team / department** — meaningful contribution, but shared ownership
- **Company / institution** — useful context, not personal achievement

Never turn a company-wide metric into personal P&L. Never turn a price quote, pipeline, market sizing, or forecast into actual revenue.

### 5. Produce the writing packet

Depending on the dossier, generate:

- Personal summary / professional contribution narrative
- Requirement-by-requirement response
- Project/product achievement sheets
- Evidence checklist
- Risk log
- Reviewer-facing concise version

Use conservative wording for pending evidence. Mark placeholders plainly instead of guessing.

### 6. Update task state

- Put only unresolved missing evidence into `todo.md`
- Move completed collection / drafting tasks into `changelog.md`
- Add public-source checks to `verification/{date}-web-check.md` when claims are externally verifiable

## Anti-patterns

- Do not write a polished dossier before the evidence matrix exists
- Do not hide missing proof inside confident prose
- Do not reuse job-resume exaggeration in a formal credential application
- Do not mix normal and exceptional paths without labeling them
- Do not leave completed evidence-collection tasks in `todo.md`
