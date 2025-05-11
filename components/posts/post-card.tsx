import dayjs from "dayjs";
import { Tag } from "../tag";
import Link from "next/link";
import { GlowingEffect } from "../ui/glowing-effect";

export type Post = {
  createdAt: string;
  tags: string[];
  title: string;
  slug: string;
  previewText: string;
};

export const PostCard = ({ post }: { post: Post }) => {
  const tags = post.tags;

  return (
    <div className="rounded-lg py-6 px-6 gap-2 flex flex-col shadow-lg border border-zinc-800 bg-background/80 backdrop-blur-sm">
      <GlowingEffect
        blur={0}
        borderWidth={1}
        spread={80}
        glow
        disabled={false}
        proximity={50}
        inactiveZone={0.01}
      />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            return <Tag key={tag} text={tag} />;
          })}
        </div>
        <p className="text-zinc-600 text-sm text-end min-w-24 leading-7">
          {dayjs(post.createdAt).format("MMM DD, YYYY")}
        </p>
      </div>
      <div className="flex justify-between items-start gap-4 flex-col sm:flex-row">
        <Link
          href={`/posts/${post.slug}`}
          className="text-zinc-300 hover:text-zinc-100 transition-colors"
        >
          <h3 className="text-lg font-bold text-foreground">{post.title}</h3>
        </Link>
      </div>

      <article className="text-zinc-400 text-left">{post.previewText}</article>
    </div>
  );
};
