# CODEX READ ME FIRST

But: créer le minisite test "IA Transcription" en Next.js avec capture email.

## Où est la doc NEO Business
- docs/NEO_business/01_ACCUEIL/01_FICHIERS_ACCUEIL_COMPLETS.md
- docs/NEO_business/02_EXECUTIFS/00_README_IMPORT.md
- docs/NEO_business/02_EXECUTIFS/02_FICHIERS_EXECUTIFS_COMPLETS.md
- docs/NEO_business/03_OPERATIONNELS/03_FICHIERS_OPERATIONNELS_COMPLETS.md
- docs/NEO_business/04_SETUP/04_FICHIERS_SETUP_CONFIGURATION.md
- docs/NEO_business/05_REFERENCE/05_FICHIERS_REFERENCE_COMPLETS.md
- docs/NEO_business/99_MINISITES_GUIDE/NEO Business - Minisites AI Guide.pdf

## Règle
Tu n’utilises que le contenu de ce repo. Tu ne supposes rien.

## Sortie attendue
- code dans apps/ia-transcription
- Next.js 14 + TypeScript + App Router
- pages: /, /comparatif, /blog, /blog/[slug]
- capture email: POST /api/subscribe (validation + préparation Supabase + webhook n8n)
- pas de secrets dans git
