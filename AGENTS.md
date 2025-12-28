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
