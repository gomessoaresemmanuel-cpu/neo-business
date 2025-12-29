# IA Transcription — Minisite NEO Business

Site Next.js 14 + App Router + Tailwind. Objectif : capturer des emails, router les clics affiliés et servir un contenu SEO propre.

## Démarrage local
```bash
cd apps/ia-transcription
npm install
npm run dev
```
Ouvre `http://localhost:3000`.

## Variables d’environnement
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `N8N_WEBHOOK_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID` (optionnel)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optionnel)

Copie le fichier `.env.example` et renseigne les valeurs (ne pas committer les secrets).

## Supabase — table `subscribers`
```sql
create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  page text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```
Accorde l’accès uniquement via la clé service role pour l’API d’inscription.

## Endpoint d’inscription
- POST `/api/subscribe`
- Corps: `{ email, source?, page? }`
- Réponses: `200` (ok), `400` (email invalide), `409` (déjà inscrit), `500` (erreur serveur)
- Actions: insert Supabase + appel webhook `N8N_WEBHOOK_URL`

## Routage affilié
- `/go/[slug]` ne redirige que vers les slugs mappés dans `src/content/affiliate.ts` (ex: descript, otter, whisper).
- Les clics sont loggués côté serveur et trackés côté client.

## Scripts npm
- `npm run dev` — démarrer en local
- `npm run build` — build de production
- `npm run lint` — lint Next.js
- `npm run test` — tests unitaires (Vitest)
- `npm run check` — garde-fous (.env, routes, merge markers)

## Déploiement Vercel
- Root Directory : `apps/ia-transcription`
- Installe les variables d’environnement ci-dessus.
- Active le build Next.js (App Router par défaut).

## Cloner pour un autre minisite
1. Copie `apps/_minisite_template` dans un nouveau dossier sous `apps/`.
2. Remplace les placeholders (nom du site, contenu, routes).
3. Ajoute les slugs affiliés correspondants et mets à jour `siteConfig`.

## Tracking
- Google Analytics via `NEXT_PUBLIC_GA_ID`.
- Événements custom : `lead_submit_attempt`, `lead_submit_success`, `lead_submit_error`, `affiliate_click`.

## Sitemap & SEO
- `app/sitemap.ts`, `app/robots.ts` générés automatiquement.
- Canonical basé sur `NEXT_PUBLIC_SITE_URL`.
- JSON-LD pour FAQ et Article sur les pages concernées.
