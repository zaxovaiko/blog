export interface Post {
  slug: string;
  title: string;
  previewText: string;
  createdAt: string; // ISO format: "2025-05-11"
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "rest-trpc-or-graphql",
    createdAt: "2025-05-11",
    tags: ["REST API", "GraphQL", "tRPC"],
    title: "REST API, tRPC or GraphQL? What would you choose for your new startup?",
    previewText:
      "Recently, I decided to bring one of my countless startup ideas to life, and I got stuck on choosing a communication protocol between the mobile app and the backend...",
  },
  {
    slug: "why-monorepo-changed-our-development-approach",
    createdAt: "2024-12-30",
    tags: ["Monorepo", "CI/CD", "GraphQL", "Codegen"],
    previewText:
      "Every project begins with a simple idea and limited resources. Our startup was no exception...",
    title: "Why monorepo changed our development approach",
  },
  {
    slug: "why-you-should-avoid-using-push-events-on-github-actions",
    createdAt: "2024-12-12",
    tags: ["Github Actions", "CI/CD", "Hooks"],
    previewText: "Long story short, I almost bankrupted our client...",
    title: `How to bankrupt your client or why you should avoid using "on push" events on Github Actions`,
  },
  {
    slug: "should-i-migrate-to-expo",
    createdAt: "2024-11-30",
    tags: ["React Native", "Expo", "DX"],
    previewText: `The short answer is **no**. The long one - **it depends**...`,
    title: "Should I migrate bare React Native project to Expo?",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
