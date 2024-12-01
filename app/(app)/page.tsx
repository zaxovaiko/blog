import { Bio, Links } from "@/components/landing";
import { PostCard } from "@/components/posts/post-card";
import { payload } from "@/lib/payload";

export default async function Home() {
  const posts = await payload.find({ collection: "posts" });

  return (
    <div className="flex flex-col gap-10 py-10">
      <Bio />
      <Links />
      <section className="flex flex-col gap-2 mt-10">
        {posts.docs.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}
