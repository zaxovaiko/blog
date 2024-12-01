import { Post } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import dayjs from "dayjs";
import { Tag } from "../tag";
import Link from "next/link";

export const PostCard = ({ post }: { post: Post }) => {
  const tags = post.tags;

  return (
    <div className="card bg-[rgba(70,70,70,0.4)] rounded-lg p-4 shadow-md gap-2 flex flex-col">
      <div className="flex justify-between items-start sm:items-center gap-1 flex-col sm:flex-row">
        <Link
          href={`/posts/${post.id}`}
          className="text-zinc-300 hover:text-zinc-100 transition-colors"
        >
          <h3 className="text-lg">{post.title}</h3>
        </Link>
        <p className="text-zinc-500 text-sm">
          {dayjs(post.createdAt).format("MMM DD, YYYY")}
        </p>
      </div>
      <div className="flex gap-1">
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              return <Tag key={tag.id} text={tag.name} />;
            })}
          </div>
        )}
      </div>
      {post.previewText && (
        <RichText className="text-zinc-400" data={post.previewText} />
      )}
    </div>
  );
};
