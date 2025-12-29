=== FILE 1: NEO_BUSINESS_MASTER_OS_v2.0.md (PART 1/2) ===

# NEO BUSINESS · OPERATING SYSTEM

**version:** 2.0
**auteur:** Néo
**dernière_mise_a_jour:** 2025-12-12
**status:** Production Ready

---

## 1. VISION

**Objectif final:**
- Portefeuille de mini-sites automatisés
- 1 000 sites actifs
- 10 000 €/mois récurrents
- Mix revenus: 40% display, 40% affiliate, 20% produits/leads

**Contraintes:**
- 100% white hat
- Respect RGPD et mentions d'affiliation
- Marge nette visée: coûts totaux < 50% des revenus

---

## 2. ARCHITECTURE MULTI-AGENTS

### Niveau 1: CEO (Vous)
- Orchestration globale
- Allocation de capital
- Priorisation des branches business
- Daily decision loop (7am)

### Niveau 2: C-Level (7 agents)
- **CMO:** Trafic, SEO, contenu
- **CFO:** Finance, compta, fiscalité
- **CTO:** Infra, déploiement, APIs
- **CRO:** Growth, expérimentation, RPM optimization
- **COO:** Opérations, réduction coûts
- **Chief Risk Officer:** Conformité et risques
- **NEO-TRENDS-HFT:** Veille haute fréquence et tendances rentables

### Niveau 3: Suna Domains (11 agents opérationnels)

#### Domain 1: Lead Generation (4 agents)
- Research Leads: Identifier targets
- Analysis Leads: Score & segment
- Execution Outreach: Contact & conversion
- Reporting ROI: Track results

#### Domain 2: Content SEO (3 agents)
- Research Content: Keyword + topics
- Planner & Writer: Briefs + rédaction
- SEO Auditor: Quality + optimization

#### Domain 3: Analytics & Reporting (1 agent)
- Analytics Reporter: KPI collection + Notion update

#### Domain 4: Finance & Tax (1 agent)
- Finance Optimizer: P&L, taxes, optimization

#### Domain 5: Compliance & QA (1 agent)
- Compliance & QA: Legal, quality, UX

### Principe d'architecture:
- Indépendance par mission
- Communication structurée (JSON)
- Pattern manager/workers
- Boucles d'auto-évolution

---

## 3. SOUS-SYSTÈMES

### 3.1 AI NESTED DOMAINS

**Rôle:** Créer, déployer et gérer portefeuille de mini-sites rentables

**Cadrage:**
- Zones: Europe (FR, DE, ES, EN)
- KPIs:
  - Time-to-market: <48h par site
  - Croissance portefeuille: +20% par mois
  - RPM cible: €30-60 per site
  - Profitabilité: +6-8 semaines post-launch

### 3.2 SYSTÈME AGENTS SUNA + N8N

**Suna:** Exécution des agents, décisions, actions
**n8n:** Orchestration, webhooks, intégrations externes

**Phases d'activation:**
- Phase 1 (W1): CEO agent + Lead Gen domain (validation)
- Phase 2 (W2-3): Add Content + Analytics domains
- Phase 3 (W4+): Add Finance + Compliance, scale to 5 domains

### 3.3 FUNNEL INVISIBLE & AFFILIÉS

**Acquisition:** Contenus, TikTok, shorts, mini-sites
**Conversion:** Google Docs, systèmes, formations
**Armée d'affiliés:** Notion base (suivi closers/affiliés)

---

## 4. BOUCLES D'AUTO-ÉVOLUTION

### Daily Cycle (7am - 8pm)

**7:00 AM - Collection:**
- Suna CEO agent collects KPIs from all sources
- Analytics: GA4, AdSense, affiliate APIs, n8n logs

**7:15 AM - Diagnosis:**
- Top 5 problems identified
- Top 5 opportunities spotted
- Risks flagged

**7:30 AM - Decision & Assignment:**
- CEO reviews (5 min)
- Assigns to C-level agents
- Sets deadlines

**8:00 AM - 8:00 PM - Execution:**
- Agents work on assigned tasks
- n8n orchestrates workflows
- Mid-day check-in (optional)

**8:00 PM - Reporting:**
- Analytics agent updates Notion dashboards
- Anomalies highlighted
- KPIs logged

**9:00 PM - Reflection:**
- Quick note on day's results
- Update decision journal

### Weekly Cycle (Friday 5pm)

**Retrospective (1h):**
1. Review all week's decisions (decision journal)
2. Analyze what worked (wins) - replicate
3. Analyze what failed (misses) - avoid
4. Capture learnings (what we learned)
5. Update prompts/checklists if needed
6. Plan next week's 3 priorities

---

## 5. STRATÉGIE DE MONÉTISATION

### Ordre d'activation par site:

**Phase 1 (Rapide) - Semaine 1-2:**
- AdSense (si eligible)
- Amazon (si produits pertinents)
- Basic affiliate (highest commission)

**Phase 2 (Optimisation) - Semaine 3-4:**
- Test ad placements (A/B)
- Add affiliate networks (top 3 per niche)
- Optimize copy/placement

**Phase 3 (Scaling) - Semaine 5+:**
- Premium display networks (si RPM > $20)
- Lead gen forms (email capture)
- Produits digitaux (Google Docs, courses)

### Critères de désactivation:
- Conversion très faible (2 semaines)
- Revenu < €5 par mois
- Dégradation UX/bounce rate >75%

### Revenue Model Detail:

**Display (40% revenue):**
- CPM range: $1-50 (avg $5-15)
- RPM: $30-60 per site (target)
- Setup: Google AdSense day 1, Ezoic if > 10K visits/month

**Affiliate (40% revenue):**
- Amazon: 1-10% commission (avg 3%)
- Awin/CJ: 5-20% per program
- Conversion: 0.5-5% (niche dependent)
- Best: Product reviews, comparison content

**Products (20% revenue):**
- Google Docs systems: €27-97 (one-time)
- Email nurture: 3-email funnel
- Upsells: €297-997
- Conversion: 1-5% cold, 5-20% warm

---

## 6. NOTION ARCHITECTURE

### Database 1: Mini-Sites Portfolio

Properties:
- **Domaine** (text): weight-loss-tips.fr
- **Niche** (select): Health, Tech, Finance, Lifestyle
- **Statut** (select): Idée, En cours, Live, Pivot, Arrêté
- **Date création** (date): 2025-12-01
- **Trafic (mois)** (number): 5000
- **Revenue (mois)** (currency): €150
- **RPM** (formula): Revenue × 1000 ÷ Trafic
- **Tier** (formula): Auto-category (Top/Prometteur/Laggard)
- **Contenu #** (number): 18
- **Top keyword** (text): perte poids rapide
- **Ad networks** (multi-select): AdSense, Ezoic, Mediavine
- **Affiliate networks** (multi-select): Amazon, Awin, CJ
- **Lead magnet** (checkbox): ✅
- **Owner** (select): CMO/CRO
- **Status health** (select): 🟢 Green

Views:
- Kanban (by Status)
- Table (all sites, sort by RPM desc)
- Gallery (revenue leaders)
- Timeline (creation schedule)

### Database 2: Affiliés & Closers Network

Properties:
- Nom/Pseudo (text)
- Rôle (select): Affilié, Closer, Influencer
- Email (email), Telegram (text)
- Lien affilié (URL)
- TikToks postés (number)
- Conversions (number)
- Commission gagnée (currency)
- Performance tier (formula)
- Status (select): Actif, Pause, Arrêté
- Prochaine review (date)

Views:
- Kanban (by Performance: Top/Mid/Low)
- Table (revenue leaders, sort by commission desc)
- Gallery (star performers)

### Database 3: Decision Journal

Properties:
- Decision ID (text): dec_20251212_001
- Date (date): 2025-12-12
- Decision (text): Scale site1.fr
- Context (text): Why it matters
- Owner (select): CEO/CMO/CFO/CTO/CRO/COO
- Deadline (date): 2025-12-19
- Success metric (text): Traffic +30%
- Status (select): Planning, In Progress, Completed
- Result (text): What happened
- Learning (text): What we learned
- Tags (multi-select): Growth, Cost, Risk

Views:
- Timeline (by date)
- By Status (Planning, In Progress, Completed)
- By Owner

### Database 4: Content Calendar

Properties:
- Title (text)
- Keyword (text)
- Niche (select)
- Status (select): Ideation, Draft, Review, Published
- Site/Domain (relation)
- SEO score (number): 0-100
- Publish date (date)
- Trafic 30j (number)
- Conversions (number)
- Internal links (text)

Views:
- Kanban (publishing pipeline)
- Table (performance by traffic)

---

## 7. KPIs & METRICS

### Global KPIs (Daily)
- Revenue (€/day): €150-300 (Phase 1)
- Traffic (visitors/day): 3,000-5,000
- Sites live: 1 → 10 (Phase 1)
- Decision loop health: ✅ Running?

### Per-Site KPIs (Weekly)
- RPM (revenue per 1K visitors)
- Traffic trend (% vs last week)
- Bounce rate (target <60%)
- Pages per session (target >2)
- Conversion rate (% to affiliate/lead/product)

### Financial KPIs (Weekly)
- P&L by channel (display/affiliate/products)
- Cost per acquisition
- Customer lifetime value
- Burn rate

### Quality KPIs (Weekly)
- Plagiarism score (target 0%)
- Content freshness (% updated >3 months)
- RGPD compliance (✅ all sites)
- Support response time (<24h)

---

## 8. ROADMAP

### Phase 1: Validate & Optimize (W1-4)
**Goal:** 10 sites, €1K revenue, proof of concept

- W1: 
  - Daily decision loop live ✅
  - CEO + Lead Gen agents active ✅
  - Notion dashboards working ✅
  - 2 mini-sites deployed
  
- W2-3:
  - 8 more sites deployed (total 10)
  - Add Analytics + Content agents
  - First revenue flowing
  
- W4:
  - Retrospective + learnings
  - Optimize best performers
  - Move to Phase 2

**Output:** Repeatable playbook

### Phase 2: Scale Operations (W5-12)
**Goal:** 50-100 sites, €3K revenue, proven system

- W5-8:
  - Launch 5-10 new sites/week
  - Add Finance + Compliance agents
  - Full Suna orchestration
  
- W9-12:
  - Reach 50-100 sites
  - Optimize affiliate mix
  - Build affiliate army (100+)

**Output:** Scalable architecture

### Phase 3: Accelerate Growth (W13+)
**Goal:** 300-1000 sites, €10K+/month

- By site tier:
  - Top tier (RPM €50+): Scale aggressively
  - Mid tier (RPM €20-50): Optimize
  - Low tier (RPM <€20): Pivot or kill
  
- By geography:
  - FR → DE → ES → EN expansion
  - Localize top performers
  
- By revenue:
  - Display optimization (premiums networks)
  - Affiliate network expansion (top 20)
  - Product development (own products)

**Output:** Multi-million €/year potential

---

## 9. DECISION RULES

### When to Scale a Site
- RPM > €40 + growth +30%
- Bounce rate <55%
- Content quality score >85
- Age >2 weeks post-launch

**Action:** Add budget + content (2x/week → 5x/week)

### When to Optimize a Site
- RPM €20-40 + steady traffic
- Bounce rate 55-70%
- Content OK, placement needs work

**Action:** A/B test placements, optimize copy, add affiliate

### When to Pivot a Site
- RPM €10-20 + plateau (2 weeks no growth)
- Content issue (bounce >70%)
- Niche saturation evident

**Action:** New niche test, different format, or kill

### When to Kill a Site
- RPM <€10 after 4 weeks
- Zero traffic (2 weeks)
- Compliance issue
- Negative brand impact

**Action:** Redirect domain or let expire

---

## 10. WEEKLY CHECKLISTS

### CEO Weekly Checklist

**Monday 9am:**
- [ ] Review weekend analytics
- [ ] Check affiliate payouts
- [ ] Review decision journal (learnings)
- [ ] Set weekly priorities (top 3)

**Daily (7am):**
- [ ] Decision loop runs
- [ ] Review output (3 min)
- [ ] Assign tasks (2 min)
- [ ] Log decision (1 min)

**Friday 5pm:**
- [ ] Retrospective (1h)
  - [ ] Review week's decisions
  - [ ] Capture wins
  - [ ] Capture misses
  - [ ] Update learnings
  - [ ] Plan next week

### CMO Weekly Checklist

**Daily:**
- [ ] 20-30 keywords researched
- [ ] 10+ article briefs created
- [ ] Suna content domain status

**Weekly:**
- [ ] 50-100 articles published
- [ ] 3 underperforming sites audited
- [ ] SEO health check (5 random sites)
- [ ] Report: traffic sources + top keywords

### CFO Weekly Checklist

**Daily:**
- [ ] Monitor affiliate payouts
- [ ] Check Ad network revenue

**Weekly:**
- [ ] P&L reconciliation
- [ ] Tax calculations updated
- [ ] Budget vs actual (variance >10% flag)
- [ ] Cost per acquisition analysis
- [ ] Report: profitability by site

### CTO Weekly Checklist

**Daily:**
- [ ] Monitor uptime (99.9%+)
- [ ] Check deployment pipeline
- [ ] Verify analytics accuracy

**Weekly:**
- [ ] 2-3 new sites deployed
- [ ] n8n workflows health (0 errors)
- [ ] Report: technical metrics

### CRO Weekly Checklist

**Daily:**
- [ ] Monitor A/B tests (5-10 active)
- [ ] Track winner/loser performance

**Weekly:**
- [ ] 2-3 winners scaled
- [ ] 1-2 losers killed
- [ ] RPM optimization analysis
- [ ] 2-3 new trends validated
- [ ] Report: growth wins

### COO Weekly Checklist

**Daily:**
- [ ] Monitor tool costs
- [ ] Vendor SLA tracking

**Weekly:**
- [ ] Cost reduction audit (-5% target)
- [ ] Process documentation (1 process)
- [ ] Vendor renegotiation if miss
- [ ] Report: operational efficiency

### Chief Risk Officer Weekly Checklist

**Daily:**
- [ ] Support emails (<48h response)
- [ ] Flag critical issues

**Weekly:**
- [ ] QA audit (5 random sites)
- [ ] RGPD compliance check
- [ ] UX review (bounce rates)
- [ ] All issues remediated <24h
- [ ] Report: 0 critical issues

---

**CONTINUE TO PART 2 →**

---

=== FILE 2: NEO_BUSINESS_SUNA_PROMPTS_v1.0.md ===

# NEO BUSINESS — SUNA AGENT PROMPTS LIBRARY

**version:** 1.0
**date:** 2025-12-12
**format:** Ready to copy-paste into Suna

---

## PROMPT 1: CEO DAILY DECISION LOOP

```
[SYSTEM ROLE]
Tu es le CEO de Neo Business. 
Tu prends les décisions stratégiques basées sur les données.
Tu orchestre 7 C-level agents (CMO, CFO, CTO, CRO, COO, Chief Risk, Trends).
Tu fais tourner la boucle quotidienne: collect → diagnose → decide → assign → log.

[CONTEXT]
Neo Business: Portfolio de 1000 mini-sites (objectif) → €10K+/mois.
Actuellement: Phase 1 (W1-4 target: 10 sites, €1K/mois).
Architecture: Suna orchestration + n8n automation + Notion tracking.
Discipline: Daily loop 7am, weekly retrospective, monthly review.

[INPUT DATA - Expect daily at 7am]
- KPIs from last 24h:
  - Traffic: X visitors
  - Revenue: €Y
  - New sites: Z
  - Conversion rate: A%
- Trends from NEO-TRENDS-HFT agent
- Issues flagged by agents
- Decision journal from previous days

[YOUR TASK]
1. COLLECT: Summarize last 24h data
2. DIAGNOSE: Top 5 problems + top 5 opportunities
3. PRIORITIZE: Impact × Probability × Speed matrix
4. DECIDE: Top 3 actions for today
5. ASSIGN: To which C-level agent (with deadline)
6. LOG: To Notion decision journal (auto)

[OUTPUT FORMAT]
```json
{
  "decision_id": "dec_YYYYMMDD_XXX",
  "timestamp": "2025-12-13T07:00:00Z",
  "summary": "Top 3 actions for today",
  "kpi_snapshot": {
    "traffic_24h": "X",
    "revenue_24h": "€Y",
    "sites_live": "Z"
  },
  "problems_identified": [
    { "rank": 1, "problem": "...", "impact": "high/med/low", "owner": "CMO/CFO/etc" }
  ],
  "opportunities": [
    { "rank": 1, "opportunity": "...", "impact": "€/traffic/growth", "timeline": "<48h/1w/etc" }
  ],
  "actions_assigned": [
    { "action": "...", "owner": "CMO/CFO/etc", "deadline": "EOD today/tomorrow/etc", "success_metric": "..." }
  ],
  "confidence": 85,
  "notes": "..."
}
```

[TONE]
- Direct, no fluff
- Data-driven, not opinion
- Actionable, not theoretical
- French preferred, English acceptable
- Emoji for clarity (✅ 🔴 🟡 🟢)

[RULES]
- Decisions must be logged to Notion (decision journal table)
- Max 3 actions per day (focus)
- All actions must have success metric
- If data missing: estimate + flag for tomorrow
- If conflict: CEO decides (you)
- No hedging: "We should" → "We will"
```

---

## PROMPT 2: LEAD GENERATION DOMAIN (4 agents)

### Agent 2a: Research Leads

```
[SYSTEM ROLE]
Tu es le Research Leads agent.
Tu identifies et qualifies potentiels clients pour Neo Business.

[INPUT]
- ICP (Ideal Customer Profile): [À confirmer - entrepreneurs? agencies? SaaS?]
- Budget: [À confirmer]
- Use case: [Lead gen / Content / Automation / Mini-sites]

[TASK]
1. Find 20-50 qualified leads per jour
2. Score chaque lead (1-10)
3. Segment par use case
4. Output: CSV ready pour outreach

[OUTPUT]
CSV: Email | Company | Use Case | Score | Notes

[SUCCESS METRIC]
50 leads/jour, avg score 7+, 0 duplicates
```

### Agent 2b: Analysis Leads

```
[SYSTEM ROLE]
Tu es le Analysis Leads agent.
Tu analyses et segments les leads pour maximiser conversion.

[INPUT]
CSV from Research agent (50 leads)

[TASK]
1. Deep dive sur chaque lead (LinkedIn, website, recent news)
2. Identify pain point (related to Neo Business offering)
3. Identify buying signal (hiring/fundraising/growth spike)
4. Assign tier: A (hot), B (warm), C (cold)
5. Write 1-line personalization angle

[OUTPUT]
CSV with: Email | Company | Pain Point | Buying Signal | Tier | Angle

[SUCCESS METRIC]
100% leads analyzed, 20%+ tier A, personalization angles clear
```

### Agent 2c: Execution Outreach

```
[SYSTEM ROLE]
Tu es le Execution Outreach agent.
Tu envoies messages et suive les leads.

[INPUT]
Analyzed leads (prioritized by tier)

[TASK]
1. Compose message (short, personalized, CTA)
2. Send via email/DM (track opens)
3. Follow-up after 3 days (if no reply)
4. Follow-up after 7 days (if no reply)
5. Move to nurture if interested

[OUTPUT]
Tracking: Email | Sent | Opened | Clicked | Replied | Status

[SUCCESS METRIC]
30%+ open rate, 10%+ click rate, 5%+ reply rate
```

### Agent 2d: Reporting ROI

```
[SYSTEM ROLE]
Tu es le Reporting ROI agent.
Tu mesures l'impact de la lead gen.

[INPUT]
All outreach data from week

[TASK]
1. Calculate funnel: Sent → Opened → Clicked → Replied → Qualified
2. Conversion rate par stage
3. Cost per lead (assume €50/month Suna)
4. Revenue impact (assume €500 per conversion)
5. ROI: Revenue ÷ Cost

[OUTPUT]
Report: Funnel | Conversion Rates | Cost | Revenue | ROI

[SUCCESS METRIC]
ROI >10x, 100+ leads processed, <20€ cost per qualified lead
```

---

## PROMPT 3: CONTENT SEO DOMAIN (3 agents)

### Agent 3a: Research Content

```
[SYSTEM ROLE]
Tu es le Research Content agent.
Tu identifies les meilleurs topics et keywords pour les mini-sites.

[INPUT]
- Niche: [À confirmer - health/tech/finance/etc]
- Volume target: 20-30 keywords par jour
- Methodology: Search volume + competition + monetization potential

[TASK]
1. Find 20-30 keywords (long-tail, 300-1000 vol/month)
2. Analyze competition (top 3 results)
3. Identify content angle (review/comparison/guide/news)
4. Estimate traffic potential (conservative)
5. Estimate RPM potential

[OUTPUT]
CSV: Keyword | Volume | Competition | Angle | Traffic Est | RPM Est

[SUCCESS METRIC]
30 keywords/day, avg competition low-med, traffic potential 500+ visitors/month per keyword
```

### Agent 3b: Content Planner & Writer

```
[SYSTEM ROLE]
Tu es le Content Planner & Writer agent.
Tu plans et rédiges les articles.

[INPUT]
Keywords from Research Content agent (30/day)

[TASK]
1. Create brief (angle, structure, CTA, length)
2. Write article (2000-3000 words, SEO optimized)
3. Include affiliate links (natural placement)
4. Internal linking strategy
5. Featured image prompt

[OUTPUT]
Article (markdown) + Brief + Image prompt

[SUCCESS METRIC]
30 articles/day, avg 2500 words, SEO score 85+, affiliate integration natural
```

### Agent 3c: SEO Auditor

```
[SYSTEM ROLE]
Tu es le SEO Auditor agent.
Tu assures la qualité SEO de tous les articles.

[INPUT]
Published articles (weekly audit of 50+ articles)

[TASK]
1. Check on-page SEO (title, meta, H1-H3)
2. Check internal linking (3+ per article, contextual)
3. Check external links (high authority, relevant)
4. Check plagiarism (target 0%)
5. Check readability (avg grade 8-10)
6. Flag issues: plagiarism, broken links, poor meta, thin content

[OUTPUT]
Report: Issues by severity (critical/major/minor) + fixes

[SUCCESS METRIC]
<5% articles with critical issues, 100% plagiarism check, avg readability 8+
```

---

## PROMPT 4: ANALYTICS & REPORTING

```
[SYSTEM ROLE]
Tu es le Analytics Reporter agent.
Tu collects, analyses et reports tous les KPIs.

[INPUT DATA SOURCES]
- Google Analytics 4 (via webhook)
- Google AdSense API
- Affiliate networks (Amazon, Awin, CJ)
- n8n execution logs
- Notion databases

[TASK - Daily 8pm]
1. Fetch KPIs from all sources
2. Calculate: Revenue, Traffic, RPM, Growth %
3. Update Notion dashboards (auto)
4. Highlight anomalies (>20% variance)
5. Report to CEO agent

[OUTPUT - JSON]
```json
{
  "date": "2025-12-13",
  "kpis": {
    "revenue": {"today": 150, "week_avg": 180, "trend": "-17%"},
    "traffic": {"today": 5000, "week_avg": 5200, "trend": "-4%"},
    "rpm": {"today": 30, "target": 35, "variance": "-14%"},
    "sites_live": 10,
    "anomalies": []
  },
  "notion_updated": true
}
```

[SUCCESS METRIC]
100% data accuracy, <1h latency, 0 anomalies missed, 100% uptime
```

---

## PROMPT 5: FINANCE & TAX OPTIMIZATION

```
[SYSTEM ROLE]
Tu es le Finance & Tax Optimization agent.
Tu optimizes taxes et tracks P&L.

[INPUT]
- Revenue by source (display, affiliate, products)
- Costs (hosting, tools, contractors)
- Tax jurisdiction [À confirmer - FR/DE/ES/etc]

[TASK]
1. Calculate P&L (Revenue - Costs = Profit)
2. Calculate tax obligation (estimate)
3. Identify tax optimizations (deductions, structure)
4. Track cashflow
5. Report to CFO agent

[OUTPUT]
Report: P&L | Tax Estimate | Optimizations | Cashflow

[SUCCESS METRIC]
100% accuracy, proactive tax savings, <5% variance forecasted vs actual
```

---

## PROMPT 6: COMPLIANCE & QA

```
[SYSTEM ROLE]
Tu es le Compliance & QA agent.
Tu assures conformité légale et qualité.

[INPUT]
- All published content
- User complaints/feedback
- Regulatory updates

[TASK]
1. Check RGPD compliance (privacy policy, cookie consent, data handling)
2. Check affiliate disclosures (all links properly marked)
3. Check content quality (plagiarism, factual accuracy)
4. Check UX (accessibility, mobile-friendly, fast)
5. Investigate complaints

[OUTPUT]
Report: Issues by severity + remediation plan

[SUCCESS METRIC]
0 critical compliance issues, 100% affiliate disclosures, <24h response to issues
```

---

**ALL PROMPTS READY TO COPY-PASTE INTO SUNA**

Simply create a new agent per prompt and paste the [SYSTEM ROLE] section.

---

=== FILE 3: NEO_BUSINESS_TEMPLATES_CHECKLISTS_v1.0.md ===

# NEO BUSINESS — NOTION TEMPLATES & CHECKLISTS

**version:** 1.0
**date:** 2025-12-12
**format:** Copy-paste into Notion

---

## NOTION DATABASE SCHEMAS (Copy-paste these)

### Database 1: Mini-Sites Portfolio

**Create new Database with these properties:**

| Property Name | Type | Description | Example |
|---------------|------|-------------|---------|
| Domaine | Text | Full domain URL | weight-loss-tips.fr |
| Niche | Select | Content category | Health / Tech / Finance |
| Statut | Select | Lifecycle stage | Idée / En cours / Live / Pivot / Arrêté |
| Date création | Date | Launch date | 2025-12-01 |
| Trafic (mois) | Number | Monthly unique visitors | 5000 |
| Revenue (mois) | Currency | Monthly € revenue | €150 |
| RPM | Formula | Revenue per 1K visitors | =prop("Revenue (mois)") * 1000 / prop("Trafic (mois)") |
| Tier | Formula | Auto-category | =if(prop("RPM") > 40, "Top", if(prop("RPM") > 20, "Prometteur", "Laggard")) |
| Contenu # | Number | Article count | 18 |
| Top keyword | Text | Main ranking keyword | perte poids rapide |
| Ad networks | Multi-select | Display ad networks | AdSense / Ezoic / Mediavine |
| Affiliate networks | Multi-select | Affiliate platforms | Amazon / Awin / CJ |
| Lead magnet | Checkbox | Has funnel | ✅ |
| Owner | Select | Responsible agent | CMO / CRO |
| Status health | Select | Red/Yellow/Green | 🟢 Green |
| Notes | Text | Action items | Test new affiliate, RPM up |
| Prochaine review | Date | Next checkpoint | 2025-12-31 |

**Views to create:**
1. **Kanban - By Status:** Columns = Statut
2. **Table - All Sites:** Sort by RPM (descending), filter Statut = Live
3. **Gallery - Revenue Leaders:** Sort by Revenue (desc), top 10
4. **Timeline - Creation Schedule:** Timeline by Date création

---

### Database 2: Affiliés & Closers Network

**Properties:**

| Property Name | Type | Description | Example |
|---------------|------|-------------|---------|
| Nom / Pseudo | Text | Full name or username | Alice Dupont |
| Rôle | Select | Job classification | Affilié / Closer / Influencer |
| Email | Email | Email address | alice@email.com |
| Telegram | Text | Telegram handle | @alice_123 |
| Lien affilié | URL | Tracking link | https://ref.neo.com/alice |
| TikToks postés | Number | Posts published | 45 |
| Conversions | Number | Sales/leads generated | 12 |
| Commission gagnée | Currency | Total earnings | €450 |
| Performance tier | Formula | Auto-ranked | =if(prop("Conversions") > 10, "Top", if(prop("Conversions") > 5, "Mid", "Low")) |
| Status | Select | Activity status | Actif / Pause / Arrêté |
| Prochaine review | Date | Check-in date | 2025-12-31 |

**Views:**
1. **Kanban - By Performance:** Columns = Performance tier
2. **Table - Revenue Leaders:** Sort by Commission gagnée (desc)

---

### Database 3: Decision Journal

**Properties:**

| Property Name | Type | Description | Example |
|---------------|------|-------------|---------|
| Decision ID | Text | Auto-ID | dec_20251212_001 |
| Date | Date | Decision date | 2025-12-12 |
| Decision | Text | What was decided | Scale site1.fr traffic |
| Context | Text | Why it matters | RPM €60, growing +35% |
| Owner | Select | Who owns it | CEO / CMO / CFO / CTO / CRO / COO |
| Deadline | Date | When to execute | 2025-12-19 |
| Success metric | Text | How to measure | Traffic +20% by deadline |
| Status | Select | Progress | Planning / In Progress / Completed |
| Result | Text | What happened | Achieved +35% traffic |
| Learning | Text | What we learned | High RPM sites scale fast |

**Views:**
1. **Timeline - By Date:** See decisions chronologically
2. **Table - By Status:** Filter Planning = Today's actions

---

### Database 4: Content Calendar

**Properties:**

| Property Name | Type | Description | Example |
|---------------|------|-------------|---------|
| Title | Text | Article title | 10 Ways to Find B2B SaaS Leads |
| Keyword | Text | Target keyword | find b2b saas leads |
| Niche | Select | Category | B2B SaaS / Growth |
| Status | Select | Stage | Ideation / Draft / Review / Published |
| Site/Domain | Relation | Which site | Linked to Mini-Sites |
| SEO score | Number | Quality 0-100 | 92 |
| Publish date | Date | When published | 2025-12-15 |
| Trafic 30j | Number | Visitors | 2500 |
| Conversions | Number | Clicks/leads | 45 |

**Views:**
1. **Kanban - Publishing Pipeline:** Columns = Status
2. **Table - Performance:** Sort by Trafic 30j (desc)

---

## CEO DAILY DASHBOARD

**Create a Page called "CEO Dashboard" with:**

**Row 1 - KPI Cards:**
```
Total Revenue (Month): €6,250
Target: €10,000
Status: -38% 🔴

Total Traffic: 125,000
vs Last month: +22% 🟢

New Sites: 12
Target: 20
Status: -40% 🟡

Avg RPM: €50
Target: €35
Status: +43% 🟢
```

**Row 2 - Chart:**
- Revenue breakdown (pie): Display 40%, Affiliate 45%, Products 15%

**Row 3 - Top 5 Sites Table:**
```
Rank | Site | Traffic | Revenue | RPM | Status
1    | site1.fr | 75K | €4.5K | €60 | 🟢 Scale
2    | site2.de | 30K | €900 | €30 | 🟡 Optimize
3    | site3.es | 15K | €450 | €30 | 🟡 Monitor
4    | site4.uk | 3K | €30 | €10 | 🔴 Kill?
5    | site5.fr | 2K | €20 | €10 | 🔴 Kill?
```

**Row 4 - Alerts:**
- ⚠️ site2.de bounce rate 75%
- ⚠️ Affiliate payout delayed (CJ)
- ✅ New affiliate approved (Tradedoubler)

---

## WEEKLY EXECUTION CHECKLISTS

### CMO Weekly Checklist

**Every Day:**
- [ ] 20-30 keywords researched & scored
- [ ] 10+ article briefs created
- [ ] Suna content domain status check

**Weekly:**
- [ ] 50-100 articles published
- [ ] Top 3 underperforming sites audited
- [ ] SEO health check (5 random sites)
- [ ] Report: traffic sources & top keywords

**Actions This Week:**
- [ ] Scale content for site1.fr
- [ ] Fix content on site2.de
- [ ] Research 5 new trending niches

### CFO Weekly Checklist

**Every Day:**
- [ ] Monitor affiliate payouts
- [ ] Check Ad network revenue

**Weekly:**
- [ ] P&L reconciliation
- [ ] Tax calculations updated
- [ ] Budget vs actual (>10% variance = flag)
- [ ] Cost per acquisition analysis
- [ ] Report: profitability by site

### CRO Weekly Checklist

**Every Day:**
- [ ] Monitor active A/B tests (5-10 running)
- [ ] Track winner/loser performance

**Weekly:**
- [ ] 2-3 winners scaled
- [ ] 1-2 losers killed
- [ ] RPM optimization analysis
- [ ] 2-3 new trends validated
- [ ] Report: growth wins & metrics

---

## DECISION JOURNAL TEMPLATE

Create entries in Decision Journal database like:

```
Decision ID: dec_20251212_001
Date: 2025-12-12
Decision: Scale site1.fr traffic by 50%

Context:
- Site1.fr: RPM €60, traffic 75K/month, growing +35%
- Highest RPM in portfolio, proven model
- Capacity to scale

Owner: CMO
Deadline: 2025-12-19
Success metric: Achieve +40-50% traffic increase

Status: Planning → In Progress → Completed
Result: [TBD after execution]
Learning: [TBD after execution]
```

---

## KPI TRACKING TEMPLATE

**Monthly KPI Review:**

```
MONTH: December 2025

GLOBAL METRICS:
├─ Revenue: €6,250 (Target: €10,000, Variance: -38% 🔴)
├─ Traffic: 125,000 (Target: 200,000, Variance: -37% 🔴)
├─ New Sites: 12 (Target: 20, Variance: -40% 🟡)
├─ Avg RPM: €50 (Target: €35, Variance: +43% 🟢)
└─ Net Margin: 60% (Target: >50%, Variance: +20% 🟢)

TOP 5 SITES:
1. site1.fr: €4.5K revenue, RPM €60, trend +35% 🟢
2. site2.de: €900 revenue, RPM €30, trend -5% 🟡
3. site3.es: €450 revenue, RPM €30, trend +10% 🟢
4. site4.uk: €30 revenue, RPM €10, trend -40% 🔴
5. site5.fr: €20 revenue, RPM €10, trend 0% 🔴

ACTIONS FOR NEXT MONTH:
☐ Scale top 3 sites
☐ Kill or pivot site4.uk & site5.fr
☐ Optimize affiliate network mix
☐ Test new lead gen model
```

---

**ALL TEMPLATES READY TO USE - Copy-paste into Notion**

