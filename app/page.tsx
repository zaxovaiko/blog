import { Bio, Hero, Links } from "@/components/landing";
import { PostCard } from "@/components/posts/post-card";
import { createMetadata } from "@/lib/seo";
import { posts } from "@/lib/posts";
import { generateWebSiteSchema } from "@/lib/schemas";

export default async function Home() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <Hero />
      <Bio />
      <Links />
      <section className="flex flex-col gap-2 mt-5">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}

export const metadata = {
  ...createMetadata({
    title: "Home",
    description:
      "Personal blog of zaxovaiko — opinions and notes about TypeScript, mobile development, and AI.",
    pathname: "/",
  }),
  other: {
    "script:ld+json": JSON.stringify(generateWebSiteSchema()),
  },
};
