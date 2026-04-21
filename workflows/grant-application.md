# Workflow: Grant / Research Proposal Profile

> **Only relevant if the research track is enabled.** Skip this file entirely otherwise.

## Input
- Grant / funding type (varies widely — see step 1)
- Research direction (core problem, keywords)

## Steps

### 1. Confirm the grant format
Formats differ significantly. Examples (ask the user which applies):
- **NSFC (China National Natural Science Foundation)** — general / youth / key programs: education → work history → last-5-year projects → representative outputs (capped 5-10 items)
- **Provincial / regional foundations** — follow the specific call for proposals
- **National key R&D programs** — PI + team table, representative works + preliminary work relevant to the proposed project
- **NIH (US) / ERC (EU) / other national funders** — biosketch formats vary; always check the latest template
- **Industry / contract research** — emphasizes engineering outcomes, standards, commercialization
- **Corporate R&D proposals** — business case + technical feasibility more than pure academic output

**Never default to one format.** Confirm with the user.

### 2. Load research.md
From `profiles/research.md`, pull:
- Publications (complete list)
- Patents (granted + pending)
- Standards authored
- Funded projects
- Software / IP, academic service, mentorship, research directions

### 3. Filter by direction
The key move is **filtering**, not dumping everything:
- Publications: pick direction-relevant, last 5 years, representative — 5-10 typical
- Patents: prioritize first/corresponding/primary inventor, direction-aligned
- Projects: highlight PI roles, large budgets, direction-aligned
- Standards: list all if they exist — standards are strong signal of authority

### 4. Draft the "research basis" paragraph

Frame the narrative around the **Heilmeier Catechism** (DARPA's 9 questions every research proposal should answer). Even when the grant template doesn't ask them explicitly, the paragraph is more persuasive when it addresses:

1. What are you trying to do? (no jargon)
2. How is it done today, and what's the limit?
3. What's new in your approach, why will it succeed?
4. Who cares — what difference does success make?
5. What are the risks and payoffs?
6. How much? 7. How long? 8. How do we measure progress? 9. What's the exit strategy?

Then structure 3-5 paragraphs around:
- **Technical accumulation**: depth already built in this direction (addresses Q3)
- **Relevant funded work**: prior/ongoing projects in the space (addresses Q5, Q7)
- **Representative outputs**: 2-3 strongest (publications / patents / standards / real-world deployments) (addresses Q4)
- **Team and conditions**: lab / equipment / collaborators (addresses Q6, Q8)
- **Link to the proposed project**: why prior work supports this proposal (ties back to Q1, Q3)

### 5. Cross-check (stricter than a job submission)
Peer review will fact-check everything. Verify:
- Every project ID is retrievable from the funder's public records
- Every standard number is published and in effect
- Every publication's author order, impact factor, and venue tier is accurate
- Co-author / affiliated institution names match the official registrations

Produce `verification/{date}-web-check.md`, flagging high-risk items.

### 6. Save
Save to `research-archive/` (or `科研/` for Chinese hubs). Filename pattern: `{YYYY}-{grant-type}-{direction-keyword}.md`.
