import { BackButton } from "@/components/back-button";
import { payload } from "@/lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { headers } from "next/headers";

let title = "zaxovaiko - blog";

export function generateMetadata() {
  return { title };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  headers();
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: (await params).slug } },
    limit: 1,
  });
  const post = docs.at(0);
  if (!post) {
    title = `zaxovaiko - Not found`;
    return (
      <section className="flex flex-row gap-4 items-center justify-center flex-1 w-full">
        <BackButton />
        <div>
          <h3>Article was not found</h3>
          <p className="text-zinc-400">
            Go back to the home and read other articles
          </p>
        </div>
      </section>
    );
  }
  title = `zaxovaiko - ${post.title}`;
  return (
    <section className="flex flex-col gap-4 py-10 w-full">
      <BackButton className="self-start" />
      <h1 className="text-5xl font-bold text-start">{post.title}</h1>
      <div className="custom">
        <RichText className="text-zinc-400 text-lg" data={post.body} />
      </div>
    </section>
  );
}
