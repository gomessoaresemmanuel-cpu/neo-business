<<<<<<< Updated upstream
# NEO Business - AGENTS

## But
Générer un minisite test "nested domain" pour NEO Business.

## Périmètre
- Travailler uniquement avec les fichiers du dépôt.
- Lire d'abord: docs/* puis sites/ia-transcription/site_spec.yaml.
- Proposer un plan en 6-10 points.
- Puis implémenter.

## Choix techniques (MVP)
- Next.js 14 + TypeScript
- Site statique/SSG quand possible
- Pages: Landing, Blog, Comparatif
- SEO: sitemap, robots, canonical, OpenGraph, schema FAQ + Article

## Conversion
- Form email sur la landing
- Route API /api/subscribe
- Stockage: Supabase (table subscribers)
- Webhook: n8n (URL en variable d'environnement)

## Sécurité
- Ne jamais commiter .env
- Mettre un .env.example
- Pas de clés en dur

## Qualité
- npm scripts: dev, build, lint, test, check
- Vérifier: liens internes, meta title/description, sitemap présent
- Sortie attendue: minisite prêt à déployer sur Vercel
=======
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

## Qualité atten
>>>>>>> Stashed changes
