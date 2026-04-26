import { Bio, Hero, Links } from "@/components/landing";
import { PostCard } from "@/components/posts/post-card";
import { NpmPackageCard } from "@/components/npm-package-card";
import { AriexFitCard } from "@/components/ariex-fit-card";
import { XtbCard } from "@/components/xtb-card";
import { createMetadata } from "@/lib/seo";
import { posts } from "@/lib/posts";
import { generateWebSiteSchema } from "@/lib/schemas";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <Hero />
      <Bio />
      <Links />
      <section className="flex flex-col gap-4 mt-5">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Open Source</p>
        <NpmPackageCard />
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Side Projects</p>
        <AriexFitCard />
        <XtbCard />
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Writing</p>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
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
