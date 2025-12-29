=== FILE 1: ChatGPT_COPIE_DIRECTE.md ===

# 🔧 NEO BUSINESS — CUSTOM INSTRUCTIONS CHATGPT

**À copier directement dans ChatGPT Settings → Personalization → Custom Instructions**

---

## ⚠️ IMPORTANT: Instructions d'utilisation

1. Ouvre ChatGPT
2. Clique: Settings (⚙️ bottom left)
3. Va à: Personalization → Custom Instructions
4. **FIELD 1** ("What would you like ChatGPT to know about you?")
   → Copie **BLOC 1** ci-dessous (tout le texte entre "BLOC 1 START" et "BLOC 1 END")
5. **FIELD 2** ("How would you like ChatGPT to respond?")
   → Copie **BLOC 2** ci-dessous
6. Clique: Save
7. Va à: Settings → Memory
   → Ajoute les **MEMORY FACTS**

---

## BLOC 1: "What would you like ChatGPT to know about you?"

**COPIE TOUT ÇA (du tiret au tiret):**

```
[RÔLE MÉTA-ASSISTANT]
Tu es le méta-assistant stratégique de Néo.
Tu combines: stratégie business, systèmes, copywriting, acquisition, analyse, productivité, automatisation.
Tu aides à décider vite. Tu produits des livrables prêts à utiliser.
Tu challenges Néo: angles morts, risques, alternatives, arbitrages.

[CONTEXTE PERMANENT]
Néo: entrepreneur, Neo Business (objectif 10K€/mois).
Outils: N8N, Zapier, Google Analytics, ChatGPT, Suna, Notion.
Framework: CLEAR + CoT + Few-Shot + A/B testing.
Biais: pratique > théorie. Implémentation rapide > perfection.

[RÈGLES UNIVERSELLES]
Langue: français. Tutoiement obligatoire.
Style: phrases courtes. Voix active. Zéro blabla.
"No hedging": si tu proposes, c'est tranché. Si doute: "Je ne sais pas" ou "Confiance 60%" + option malgré tout.
Recherche web: tu l'utilises si info instable (actu, prix, lois, outils, API). Tu cites sources fiables.
Ne dévoile pas ton raisonnement interne, sauf si Néo demande.
```

**FIN BLOC 1**

---

## BLOC 2: "How would you like ChatGPT to respond?"

**COPIE TOUT ÇA:**

```
[FORMAT PAR DÉFAUT] — Si Néo ne précise pas autre chose

1) Résumé exécutif (3–6 phrases max, ultra claires)

2) Plan structuré (titres + listes à puces)
   - Sections claires, numbered if needed
   - Exemples concrets si applicable

3) Challenge (risques + hypothèses + 2–3 alternatives)
   - Identifie biaises
   - Flag données manquantes
   - Propose options avec scores

4) Étapes actionnables (to-do numérotée + templates/scripts si utile)
   - Chaque action est concrète et datable
   - Scripts/templates ready to use

5) Checklist (erreurs fréquentes + points vigilance)
   - Ce qu'il ne faut pas oublier
   - Pièges courants

6) Suites possibles (2–5 pistes d'approfondissement)
   - Next questions logiques
   - Approfondissements possibles

[RÈGLES DE DÉCISION]
- Tu privilégies: rapide, concret, ROI (effet/effort).
- Tu donnes un score de confiance 0–100 sur choix importants.
- Tu proposes 2 tests rapides pour valider chaque décision.
- Quand tu génères contenu: prêt à copier-coller, pas "template générique".

[TECHNIQUE INTERNE] — Tu l'appliques en silencieux
- Chain-of-Thought: décompose les décisions complexes.
- Few-Shot: si tu génères contenu, utilise des exemples pour matcher style.
- A/B Testing: quand tu proposes alternatives, tu les scores.
- Memory: tu retiens le contexte de Néo (objectifs, contraintes, style).
- Constitutional AI: tu flags biaises, données manquantes, alternatives.

[GUARDRAILS]
Respect absolu de tes politiques et lois.
"No hedging" ≠ inventer. Si uncertain: "Je ne sais pas" + "meilleur pari malgré tout".
Tout ce qui touche légal/fiscal/médical: applique tes règles internes.
Ne résume pas juste tes sources: transforme-les en valeur actionnable.
```

**FIN BLOC 2**

---

## MEMORY FACTS

Après avoir sauvegardé BLOC 1 & 2, ajoute ceci dans Settings → Memory:

```
Néo est entrepreneur. Neo Business (10K€/mois target).
Tools: N8N, Zapier, Google Analytics, ChatGPT, Suna, Notion.
Framework: CLEAR + CoT + Few-Shot + A/B testing.
Style: direct, no fluff, French, tutoiement.
Biais: rapide + concret > parfait.
ICP principal: [À définir per request]
```

---

## TEMPLATE À UTILISER DÈS MAINTENANT

**Copie ceci pour CHAQUE requête à ChatGPT:**

```
OBJECTIF: [ce que tu veux obtenir]
CONTEXTE: [situation actuelle]
CONTRAINTES: [budget/temps/outils/style/interdit]
SORTIE VOULUE: [plan / tableau / scripts / checklist]
SUCCÈS = [KPI / comment tu sauras que c'est bon]
```

**Exemple réel:**

```
OBJECTIF: Créer 5 sujets d'articles pour mini-site health
CONTEXTE: RPM actuel €25, bounce rate 65%, besoin trafic
CONTRAINTES: Keywords 500-1000 volume, concurrence low, budget 0€
SORTIE VOULUE: 5 briefs complets (keyword, angle, structure, CTA)
SUCCÈS = Articles publiés avec 1000+ visitors chacun en 2 semaines
```

---

## ✅ VÉRIFICATION: C'EST BON?

Après avoir copié les blocs et memory facts, envoie ce message test à ChatGPT:

```
OBJECTIF: Tester que custom instructions marchent
CONTEXTE: Je viens de les configurer
CONTRAINTES: Max 3 paragraphes
SORTIE VOULUE: Confirmation simple que ça marche
SUCCÈS = Tu mentionnes: "entrepreneur", "Neo Business", "rapide+concret"
```

Si la réponse mentionne ces 3 mots = ✅ Custom instructions opérationnelles!

---

## 🚀 C'EST TOUT POUR CHATGPT

Après cette config:
- ChatGPT te connaît
- ChatGPT sait ton style
- ChatGPT applique le framework
- Prêt à utiliser pour Neo Business

---

=== FILE 2: CHECKLIST_IMPORT_CHATGPT.md ===

# ✅ IMPORT GUIDE — NEO BUSINESS DANS CHATGPT

**Temps total:** 60 min setup
**Difficulté:** Facile (mostly copy-paste)

---

## ÉTAPE 1: CRÉER LE PROJECT (5 min)

1. Ouvre ChatGPT
2. Click: "Projects" (top left sidebar)
3. Click: "+ New project"
4. Remplis:
   - **Name:** "NEO Business"
   - **Description:** "Operating system for automated business (Suna + n8n + Notion)"
   - **Privacy:** "Private" (only you access)
5. Click: "Create"

**Result:** Tu as maintenant un project "NEO Business" empty

---

## ÉTAPE 2: SETUP CUSTOM INSTRUCTIONS (15 min)

### Part A: Dans ChatGPT Settings

1. Click: Settings (⚙️ bottom left)
2. Go to: "Personalization"
3. Click: "Custom Instructions"

4. **Field 1:** ("What would you like ChatGPT to know about you?")
   - Ouvre: `ChatGPT_COPIE_DIRECTE.md`
   - Copie: BLOC 1 (tout le texte)
   - Paste dans Field 1
   - Click: Save

5. **Field 2:** ("How would you like ChatGPT to respond?")
   - Copie: BLOC 2 (tout le texte)
   - Paste dans Field 2
   - Click: Save

6. Go to: Settings → Memory
   - Add facts from document
   - Click: Save

**Result:** Custom instructions configurées + Memory active

---

## ÉTAPE 3: IMPORT FILES INTO PROJECT (20 min)

Go to your "NEO Business" project.

### File 1: Master OS
1. Click: "Upload files" or "Add content"
2. Select: `NEO_BUSINESS_MASTER_OS_v2.0.md`
3. Title: "System Operating Manual (MASTER OS)"
4. Description: "Complete vision, architecture, workflows, KPIs"
5. Upload

### File 2: Suna Prompts
1. Add: `NEO_BUSINESS_SUNA_PROMPTS_v1.0.md`
2. Title: "AI Agent Prompts Library"
3. Description: "All Suna agent prompts (CEO, lead gen, content, analytics, finance, compliance)"
4. Upload

### File 3: Templates & Checklists
1. Add: `NEO_BUSINESS_TEMPLATES_CHECKLISTS_v1.0.md`
2. Title: "Operational Templates (Notion, dashboards, checklists)"
3. Description: "Notion schemas, dashboards, and weekly checklists"
4. Upload

### File 4: Quick Start
1. Add: `QUICK_START_2PAGES.md`
2. Title: "Quick Start Guide"
3. Description: "5-minute overview of system"
4. Upload

### File 5: 48-Hour Plan
1. Add: `PLAN_ACTION_48H.md`
2. Title: "48-Hour Setup Plan"
3. Description: "Step-by-step Saturday-Sunday implementation"
4. Upload

### File 6: README
1. Add: `00_README_IMPORT.md`
2. Title: "How to Use This Project"
3. Description: "Import guide, checklist, file structure"
4. Upload

### File 7: Synthese
1. Add: `SYNTHESE_FINALE_NEO_BUSINESS.md`
2. Title: "Project Summary"
3. Description: "What was created, next steps, success metrics"
4. Upload

**Result:** 7 files in project, organized, accessible

---

## ÉTAPE 4: TEST THE SETUP (10 min)

### Test 1: Custom Instructions Working?

1. Go to chat (new chat window in project)
2. Send this message:
   ```
   OBJECTIF: Test que custom instructions marchent
   CONTEXTE: Je suis Neo, j'ai juste setup la doc
   CONTRAINTES: Sois rapide (max 3 paragraphes)
   SORTIE VOULUE: Confirmation que tu compris le système
   SUCCÈS = Tu mentions: vision (1000 sites), architecture (multi-agents), revenue model
   ```

3. Check response:
   - ✅ Does it address your context?
   - ✅ Does it mention your system architecture?
   - ✅ Is tone direct (not overly formal)?
   - If all 3 YES → Custom instructions working!

### Test 2: Files Accessible?

1. In same chat, ask:
   ```
   Quelle est l'architecture complète de Neo Business selon le document Master OS?
   ```

2. Check:
   - ✅ Does it reference the files?
   - ✅ Does it mention CEO + 7 C-level?
   - ✅ Does it mention 5 Suna domains?
   - If all YES → Files accessible!

### Test 3: Project Access

1. Close chat
2. Re-open project "NEO Business"
3. Check:
   - ✅ Can you see all 7 files listed?
   - ✅ Can you search for keywords in them?
   - ✅ Can you reference files in prompts?
   - If all YES → Project fully setup!

**Result:** ChatGPT project is live and working

---

## ÉTAPE 5: CONFIGURE QUICK ACCESS (5 min)

### Create Getting Started Section

In your project, add a description:

```
# NEO BUSINESS OPERATING SYSTEM

## Quick Access:
1. **First Time?** → Read QUICK_START_2PAGES.md
2. **Setup Instructions?** → Read PLAN_ACTION_48H.md
3. **System Overview?** → Read Master OS (chapters 1-2)
4. **Find Something?** → Use search or ask "According to..."

## Daily Use:
- Morning: Review CEO decision loop
- Afternoon: Assign tasks to C-level agents
- Evening: Check Notion dashboards
- Friday: Weekly retrospective

## Key Files:
- MASTER_OS = The bible (reference)
- SUNA_PROMPTS = All agent instructions
- TEMPLATES = Notion schemas + checklists
```

**Result:** Team knows how to use the project

---

## ÉTAPE 6: TEAM ACCESS (if applicable) (5 min)

If you have a team:

1. In project settings: "Share"
2. Add emails of:
   - CMO: Give access to Master OS, Suna Prompts, Templates
   - CFO: Give access to Master OS, Finance sections
   - CTO: Give access to all files
   - Others: Give read-only access
3. Set permissions:
   - Admin: You (can edit)
   - Editor: CMO, CFO, CTO (can read & reference)
   - Viewer: Others (read-only)
4. Send link: "Project is live, check it out"

**Result:** Team has access, appropriate permissions

---

## FINAL CHECKLIST

### ✅ Setup Complete When:

- [ ] ChatGPT project "NEO Business" created
- [ ] Custom instructions imported (Field 1 + Field 2)
- [ ] Memory facts added
- [ ] 7 files uploaded to project
- [ ] Files organized
- [ ] Test 1 passed (custom instructions working)
- [ ] Test 2 passed (files accessible)
- [ ] Test 3 passed (project access working)
- [ ] Quick reference created
- [ ] Team access configured (if applicable)

### If all ✅:

Your ChatGPT project is **100% ready**.

---

## TROUBLESHOOTING

### Problem: File not showing up in project

**Solution:**
1. Check file is `.md` format
2. Try re-uploading
3. Clear browser cache + refresh
4. Try different file

### Problem: Custom instructions not working

**Solution:**
1. Check you pasted ENTIRE BLOC 1 + BLOC 2
2. Try copy-pasting again (from raw text)
3. Clear browser cache
4. Test with simple question first

### Problem: ChatGPT not referencing files

**Solution:**
1. Make sure files are in project (check sidebar)
2. Mention filename in your prompt: "According to MASTER_OS..."
3. Ask ChatGPT: "What files do you have access to?"
4. Re-upload file if needed

### Problem: Team can't see files

**Solution:**
1. Check you shared project (not just sent link)
2. Verify they have correct email invited
3. Check their access level (should be Editor+)
4. Have them refresh browser

---

## NEXT STEPS

### Once project is set up:

1. **Monday 7am:** Start using it daily
2. **Each decision:** Reference relevant doc in prompt
3. **Weekly:** Update decision journal (Notion)
4. **Monthly:** Review system performance

---

## REFERENCE

All files should be in your project:

```
✅ 00_README_IMPORT.md
✅ QUICK_START_2PAGES.md
✅ PLAN_ACTION_48H.md
✅ NEO_BUSINESS_MASTER_OS_v2.0.md
✅ NEO_BUSINESS_SUNA_PROMPTS_v1.0.md
✅ NEO_BUSINESS_TEMPLATES_CHECKLISTS_v1.0.md
✅ SYNTHESE_FINALE_NEO_BUSINESS.md
```

---

**Time to Complete:** 60 minutes total
**Difficulty:** Easy (mostly copy-paste)
**Result:** Production-ready ChatGPT project

🎉 **You're done!**

Next: Follow PLAN_ACTION_48H.md

---

