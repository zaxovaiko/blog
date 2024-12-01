import { payload } from "@/lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { IconArrowLeft } from "@tabler/icons-react";
import Head from "next/head";
import Link from "next/link";

let title = "zaxovaiko - blog";

export function generateMetadata() {
  return { title };
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const post = await payload.findByID({
    collection: "posts",
    id: (await params).id,
  });
  title = `zaxovaiko - ${post.title}`;
  return (
    <section className="custom flex flex-col gap-4 container w-[600px] mx-auto py-10">
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="flex flex-col gap-2">
        <Link
          href={"/"}
          className="bg-zinc-800 self-start p-2 rounded-full hover:bg-zinc-700 transition-colors"
        >
          <IconArrowLeft />
        </Link>

        <h1 className="text-5xl font-bold text-start">{post.title}</h1>
      </div>
      <RichText className="text-zinc-400 text-lg" data={post.body} />
    </section>
  );
}
