# Minisite Template

Structure minimale pour cloner un nouveau minisite NEO Business.

## Comment l’utiliser
1. Duplique ce dossier dans `apps/` (ex: `apps/nouveau-site`).
2. Renomme les occurrences génériques (titres, descriptions, URLs).
3. Remplis `src/content/posts.ts`, `src/content/affiliate.ts` et `src/content/rules.md` avec tes données.
4. Mets à jour les pages obligatoires : `/`, `/comparatif`, `/blog`, `/blog/[slug]`, `/merci`, `/go/[slug]`.
5. Ajoute tes variables d’environnement dans `.env.local` (non commité).

## Scripts
- `npm run dev` — démarrage local
- `npm run build` — build production
- `npm run lint` — lint Next.js
- `npm run test` — tests Vitest (à compléter)
- `npm run check` — garde-fous basiques

## À personnaliser
- Design tokens dans `src/design/tokens.ts`
- SEO (metadata, sitemap, robots)
- Routage affilié dans `app/go/[slug]/route.ts`
- API d’inscription dans `app/api/subscribe/route.ts`
