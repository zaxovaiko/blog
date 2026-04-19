import { Bio, Hero, Links } from "@/components/landing";
import { PostCard } from "@/components/posts/post-card";
import { NpmPackageCard } from "@/components/npm-package-card";
import { AriexFitCard } from "@/components/ariex-fit-card";
import { createMetadata } from "@/lib/seo";
import { posts } from "@/lib/posts";
import { generateWebSiteSchema } from "@/lib/schemas";
import { prisma } from "@/lib/db";

export default async function Home() {
  const stats = await prisma.postStats.findMany({
    select: { slug: true, views: true },
  });
  const viewsMap = Object.fromEntries(stats.map((s) => [s.slug, s.views]));

  return (
    <div className="flex flex-col gap-10 py-10">
      <Hero />
      <Bio />
      <Links />
      <section className="flex flex-col gap-4 mt-5">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Open Source</p>
        <NpmPackageCard />
        <AriexFitCard />
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Writing</p>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} views={viewsMap[post.slug] ?? 0} />
        ))}
      </section>
    </div>
  );
}

export const dynamic = "force-dynamic";

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
