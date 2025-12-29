# SECURITY

## Repo public = règles
- Jamais de clés, tokens, mots de passe, URLs privées.
- Pas de fichiers .env dans git.
- Pas de dumps Notion, Zapier, Suna, Stripe.

## Où mettre les secrets
- Vercel: Environment Variables
- Local: .env.local (non commité)

## Si un secret fuit
1) Révoque la clé (immédiat)
2) Regénère une nouvelle clé
3) Remplace partout
4) Push une note dans docs/NEO_business/05_REFERENCE

## Scan rapide (Windows)
scripts/preflight.ps1
