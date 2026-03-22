"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { IconHeart, IconHeartFilled, IconEye } from "@tabler/icons-react";

export function PostEngagement() {
  const pathname = usePathname();
  const rawSlug = pathname.split("/posts/")[1];
  const slug = rawSlug && /^[a-z0-9-]+$/.test(rawSlug) ? rawSlug : null;

  const [views, setViews] = useState<number | null>(null);
  const [likes, setLikes] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [liking, setLiking] = useState(false);

  useEffect(() => {
    if (!slug) return;

    // Fetch stats
    fetch(`/api/posts/${slug}/stats`)
      .then((r) => r.json())
      .then((data) => {
        setViews(data.views);
        setLikes(data.likes);
        setLiked(data.liked);
      })
      .catch(() => {});

    // Record view
    fetch(`/api/posts/${slug}/view`, { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        if (data.views != null) setViews(data.views);
      })
      .catch(() => {});
  }, [slug]);

  const handleLike = useCallback(async () => {
    if (!slug || liking) return;
    setLiking(true);

    try {
      const res = await fetch(`/api/posts/${slug}/like`, { method: "POST" });
      const data = await res.json();
      if (data.likes != null) {
        setLikes(data.likes);
        setLiked(data.liked);
      }
    } catch {
      // Silently fail
    } finally {
      setLiking(false);
    }
  }, [slug, liking]);

  if (views === null && likes === null) return null;

  return (
    <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
      <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
        <IconEye size={18} />
        <span>{views ?? 0}</span>
      </div>

      <button
        onClick={handleLike}
        disabled={liking}
        className="flex items-center gap-1.5 text-sm transition-colors cursor-pointer disabled:opacity-50"
        style={{ color: liked ? "#ef4444" : "#71717a" }}
      >
        {liked ? <IconHeartFilled size={18} /> : <IconHeart size={18} />}
        <span>{likes ?? 0}</span>
      </button>
    </div>
  );
}
