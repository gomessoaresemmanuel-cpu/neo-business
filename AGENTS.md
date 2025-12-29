# NEO Business - AGENTS (règles Codex)

## But
Créer le minisite test "IA Transcription" pour NEO Business.

## Ordre de lecture obligatoire
1) Ce fichier AGENTS.md
2) docs/minisites_ai_guide_digest.md
3) sites/ia-transcription/site_spec.yaml
4) Puis seulement le code

## Stack imposée
- Next.js 14
- TypeScript
- App Router (dossier app)
- SEO propre
- Perf simple

## Pages obligatoires
- / (landing)
- /comparatif
- /blog
- /blog/[slug]

## Capture email (obligatoire)
- Formulaire email sur la landing
- Endpoint POST: /api/subscribe
- Stockage Supabase: table subscribers
- Appel webhook n8n: N8N_WEBHOOK_URL
- Ne jamais mettre de secret dans le repo

## Variables d'environnement
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- N8N_WEBHOOK_URL
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_GA_ID (option)
- NEXT_PUBLIC_PLAUSIBLE_DOMAIN (option)

## Qualité attendue
- Fournir .env.example
- Fournir README clair
- Fournir scripts npm:
  - dev
  - build
  - lint
  - test (simple)
  - check (simple vérifs)

## Interdits
- Pas de clés en dur
- Pas de contenu dupliqué
- Pas de pages vides

## Sortie attendue
- Un diff clair
- Un minisite prêt à déployer sur Vercel
