<<<<<<< Updated upstream
# neo-business
NEO Business - Système d'automatisation AI complet avec Suna, n8n, Zapier, ChatGPT et Notion. Prêt pour monétisation via pubs, affiliation et produits.
=======
# NEO Business - Minisite test (IA Transcription)

## But
Minisite test sur sous-domaine:
ia-transcription.neobusiness.fr

Objectif:
- Capturer des emails
- Envoyer un webhook n8n
- Préparer affiliation

## Stack
- Next.js 14
- TypeScript
- App Router

## Démarrage local
1) Installer Node.js LTS
2) Installer les dépendances:
npm install
3) Copier .env.example vers .env.local
4) Lancer:
npm run dev
Ouvrir:
http://localhost:3000

## Variables (à mettre dans .env.local)
- SUPABASE_URL=
- SUPABASE_SERVICE_ROLE_KEY=
- N8N_WEBHOOK_URL=
- NEXT_PUBLIC_SITE_URL=http://localhost:3000
- NEXT_PUBLIC_GA_ID= (option)
- NEXT_PUBLIC_PLAUSIBLE_DOMAIN= (option)

## Supabase
Table: subscribers
Colonnes:
- id (uuid, default)
- email (text, unique)
- source (text, nullable)
- created_at (timestamp, default now)

## Endpoint email
POST /api/subscribe
Body JSON:
{
  "email": "test@email.com",
  "source": "landing"
}

Réponse:
- 200 si ok
- 400 si email invalide
- 409 si déjà inscrit
- 500 si erreur

## Déploiement Vercel
- Importer le repo sur Vercel
- Ajouter les variables d'environnement
- Déployer

## Scripts
- npm run dev
- npm run build
- npm run lint
- npm run test
- npm run check
>>>>>>> Stashed changes
