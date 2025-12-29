export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  publishedAt: string;
  content: string[];
  outline?: { heading: string; bullets: string[] }[];
  faq?: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: "transcription-ia-gratuite",
    title: "Transcription IA gratuite: guide 2025",
    excerpt: "Comparer les options gratuites sans perdre en qualité et savoir quand passer au payant.",
    readTime: "6 min",
    category: "Fondamentaux",
    publishedAt: "2024-11-02",
    content: [
      "Les outils gratuits promettent une transcription rapide, mais leurs limites cachées sont souvent le temps maximum, les langues supportées et l’absence d’export SRT. Pour un premier test ou une petite vidéo, cela suffit. Dès qu’un flux régulier arrive, mieux vaut prévoir un outil stable avec support français.",
      "Pour rester fiable, combine une première passe automatique avec une revue rapide. Sur les pistes audio claires, les moteurs modernes comme Whisper ou Descript atteignent déjà plus de 90% de précision. Les accents forts et les bruits de fond font chuter le score : prévois un micro correct et un petit nettoyage du son avant l’envoi.",
      "Plan d’action simple : commence par un outil gratuit pour valider le workflow, mesure la précision sur deux fichiers (silencieux et bruyant), puis passe à un outil payant dès que tu perds plus de 10 minutes en corrections. Dans tous les cas, sécurise tes exports en texte et SRT pour pouvoir basculer vers un autre outil sans friction."
    ],
    faq: [
      { q: "Est-ce vraiment gratuit ?", a: "Oui mais souvent limité en minutes par mois ou en nombre de fichiers. Les exports avancés restent payants." },
      { q: "La qualité est bonne ?", a: "Sur un son propre, les modèles récents sont précis. Sur un micro PC portable dans un café, prévois des corrections." },
      { q: "Je peux exporter en SRT ?", a: "Les exports SRT/VTT sont parfois verrouillés. Vérifie avant d’adopter l’outil, surtout pour YouTube et les podcasts vidéo." }
    ]
  },
  {
    slug: "export-srt-vtt",
    title: "Exporter en SRT et VTT : méthode simple",
    excerpt: "Les étapes claires pour sortir un SRT propre, synchronisé, prêt pour YouTube ou un player web.",
    readTime: "5 min",
    category: "Pratique",
    publishedAt: "2024-11-10",
    content: [
      "Commence par définir le format cible : le SRT reste le standard pour YouTube et la plupart des players, le VTT est préféré pour les intégrations web modernes. Dans tous les cas, garde des timecodes courts pour éviter les décalages de lecture.",
      "Après transcription, contrôle trois points : horodatages sans chevauchement, ponctuation lisible et lignes de moins de 40 caractères pour conserver la lisibilité mobile. La plupart des outils permettent d’exporter et de réimporter un fichier texte pour affiner.",
      "Avant publication, relis les deux premières minutes et trente dernières secondes : ce sont les zones où les erreurs de synchronisation se cachent. Ajoute ensuite des liens internes vers /comparatif ou /blog pour aider le lecteur à passer à l’action."
    ],
    faq: [
      { q: "Quelle différence entre SRT et VTT ?", a: "Le VTT supporte mieux les métadonnées et le stylage. Le SRT reste universel et simple à éditer." },
      { q: "Comment éviter les décalages ?", a: "Évite les blocs de plus de deux lignes, recale les timecodes après chaque grosse coupe vidéo." },
      { q: "Faut-il traduire ?", a: "Si le public est bilingue, propose une seconde piste. Sinon, optimise d’abord la qualité dans la langue principale." }
    ]
  },
  {
    slug: "workflow-n8n-transcription",
    title: "Workflow n8n : pipeline de transcription",
    excerpt: "Automatise la récupération, la transcription et la notification en quelques nœuds n8n.",
    readTime: "7 min",
    category: "Automation",
    publishedAt: "2024-11-18",
    content: [
      "Un pipeline simple commence par un déclencheur (upload Supabase ou webhook), enchaîne sur un nœud de transcription (API dédiée ou exécution locale) puis pousse le texte vers une base et une notification email. Cette boucle tient en cinq nœuds et réduit le temps manuel à presque zéro.",
      "Pour garder le contrôle, journalise chaque étape : taille du fichier, durée d’audio, outil utilisé, temps de traitement. Ces métadonnées t’aident à repérer les fichiers qui cassent le flux et à ajuster les ressources.",
      "Ajoute enfin un step de résumé automatique puis un envoi vers Notion ou Slack. Les utilisateurs reçoivent un message clair avec lien vers /merci ou /comparatif pour découvrir l’outil recommandé. Le tout reste léger et tourne sur un plan gratuit n8n dans la plupart des cas."
    ],
    faq: [
      { q: "Quel hébergement choisir ?", a: "Un n8n cloud suffit pour tester. En production, un petit VPS offre plus de contrôle et des webhooks stables." },
      { q: "Comment gérer les erreurs ?", a: "Ajoute un chemin de retry avec alerte Slack. Loggue les erreurs HTTP et la taille des fichiers pour diagnostiquer vite." },
      { q: "Puis-je mixer plusieurs outils ?", a: "Oui : utilise un routeur n8n pour envoyer les gros fichiers vers Whisper et les courts vers Descript ou Otter." }
    ]
  },
  {
    slug: "sous-titres-automatiques",
    title: "Sous-titres automatiques: pièges et solutions",
    excerpt: "Qualité, timing et relecture pour un sous-titrage propre.",
    readTime: "4 min",
    category: "Qualité",
    publishedAt: "2024-12-01",
    content: [],
    outline: [
      { heading: "Nettoyer l’audio avant tout", bullets: ["Réduire les bruits de fond", "Limiter les échos", "Utiliser un compresseur léger"] },
      { heading: "Synchronisation", bullets: ["Limiter à 2 lignes", "Timecodes courts", "Relecture mobile"] },
      { heading: "Relecture rapide", bullets: ["Spot-check 3 zones", "Corriger noms propres", "Valider ponctuation"] }
    ]
  },
  {
    slug: "meilleur-outil-transcription-2025",
    title: "Meilleur outil de transcription 2025",
    excerpt: "Comparatif rapide pour choisir l’outil adapté à ton volume.",
    readTime: "5 min",
    category: "Comparatif",
    publishedAt: "2024-12-05",
    content: [],
    outline: [
      { heading: "Critères clés", bullets: ["Précision FR", "Exports SRT/VTT", "Vitesse sur fichiers longs"] },
      { heading: "Choix rapide", bullets: ["Descript pour montage + texte", "Otter pour réunions", "Whisper pour volume et offline"] },
      { heading: "Quand changer", bullets: ["Dès que les corrections dépassent 10 min", "Si export SRT payant", "Si support FR limité"] }
    ]
  },
  {
    slug: "optimiser-qualite-audio",
    title: "Optimiser la qualité audio avant transcription",
    excerpt: "Moins de bruit = moins de corrections.",
    readTime: "4 min",
    category: "Qualité",
    publishedAt: "2024-12-12",
    content: [],
    outline: [
      { heading: "Choix du micro", bullets: ["Micro cravate > micro PC", "Filtre anti-pop", "Distance cohérente"] },
      { heading: "Traitements rapides", bullets: ["Noise gate léger", "EQ voix en cloche", "Limiter les plosives"] },
      { heading: "Export", bullets: ["WAV 16 bits", "Mono si voix unique", "Volume autour de -16 LUFS"] }
    ]
  },
  {
    slug: "guide-podcaster",
    title: "Guide express pour podcasters",
    excerpt: "Workflow simple pour publier un épisode transcrit en 30 minutes.",
    readTime: "5 min",
    category: "Podcasts",
    publishedAt: "2024-12-18",
    content: [],
    outline: [
      { heading: "Avant l’enregistrement", bullets: ["Plan de chapitre", "Test micro", "Réduire les coupures"] },
      { heading: "Transcription", bullets: ["Upload dans outil choisi", "Vérifier timecodes", "Exporter texte + SRT"] },
      { heading: "Réutilisation", bullets: ["Résumé pour newsletter", "Extraits courts pour réseaux", "Lien vers /comparatif"] }
    ]
  },
  {
    slug: "ia-transcription-legal",
    title: "Transcription et conformité",
    excerpt: "RGPD, consentement et stockage sécurisé.",
    readTime: "4 min",
    category: "Conformité",
    publishedAt: "2024-12-22",
    content: [],
    outline: [
      { heading: "Consentement", bullets: ["Informer les participants", "Conserver la preuve", "Mettre à jour la politique"] },
      { heading: "Stockage", bullets: ["Chiffrer au repos", "Limiter les accès", "Supprimer après usage"] },
      { heading: "Exports", bullets: ["Nettoyer les données sensibles", "Purger sur demande", "Mentionner les outils utilisés"] }
    ]
  },
  {
    slug: "integration-descript-notion",
    title: "Intégrer Descript et Notion",
    excerpt: "Relier montage et knowledge base pour garder l’historique.",
    readTime: "4 min",
    category: "Workflow",
    publishedAt: "2024-12-26",
    content: [],
    outline: [
      { heading: "Exporter depuis Descript", bullets: ["Version texte et SRT", "Inclure timecodes", "Tagger les projets"] },
      { heading: "Importer dans Notion", bullets: ["Template de page", "Propriétés: durée, format, lien vidéo", "Checklist de QA"] },
      { heading: "Suivi", bullets: ["Lien vers /blog", "Statut de relecture", "Commentaires équipe"] }
    ]
  },
  {
    slug: "transcription-video-courte",
    title: "Transcription pour vidéos courtes",
    excerpt: "TikTok, Reels, Shorts : vitesse et sous-titres impactants.",
    readTime: "4 min",
    category: "Social",
    publishedAt: "2024-12-28",
    content: [],
    outline: [
      { heading: "Rythme", bullets: ["Clips <60s", "Timecodes serrés", "Lignes courtes"] },
      { heading: "Style", bullets: ["Mots clés en majuscules", "Emojis discrets", "Contraste élevé"] },
      { heading: "CTA", bullets: ["Lien bio vers /", "Mettre /comparatif en description", "Pousser vers newsletter"] }
    ]
  }
];
