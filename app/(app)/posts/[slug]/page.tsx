import { payload } from "@/lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

let title = "zaxovaiko - blog";

export function generateMetadata() {
  return { title };
}

export const BackButton = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={`bg-zinc-700 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-300 transition-colors ${className}`}
    >
      <IconArrowLeft />
    </Link>
  );
};

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: (await params).slug } },
    limit: 1,
  });
  const post = docs.at(0);
  if (!post) {
    title = `zaxovaiko - Not found`;
    return (
      <section className="flex flex-row gap-4 items-center justify-center flex-1">
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
    <section className="flex flex-col gap-4 py-10">
      <BackButton className="self-start" />
      <h1 className="text-5xl font-bold text-start">{post.title}</h1>
      <div className="custom">
        <RichText className="text-zinc-400 text-lg" data={post.body} />
      </div>
    </section>
  );
}
