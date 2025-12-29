export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  outline?: { heading: string; bullets: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "template-article-1",
    title: "Titre d’article à remplacer",
    excerpt: "Résumé court à personnaliser pour le minisite.",
    content: ["Ajoutez ici un article complet pour votre minisite."],
    outline: [{ heading: "Section 1", bullets: ["Point A", "Point B"] }]
  },
  {
    slug: "template-article-2",
    title: "Un deuxième article",
    excerpt: "Détaillez le sujet ciblé.",
    content: ["Remplacez par votre contenu réel."]
  },
  {
    slug: "template-article-3",
    title: "Troisième article",
    excerpt: "Structurer l’article en H2/H3.",
    content: ["Inclure des liens internes vers les autres pages."]
  }
];
