"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import { IconHeart, IconHeartFilled, IconEye } from "@tabler/icons-react";

type EngagementState = {
  views: number | null;
  likes: number | null;
  liked: boolean;
  liking: boolean;
  handleLike: () => void;
};

const EngagementContext = createContext<EngagementState>({
  views: null,
  likes: null,
  liked: false,
  liking: false,
  handleLike: () => {},
});

export function EngagementProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const rawSlug = pathname.split("/posts/")[1];
  const slug = rawSlug && /^[a-z0-9-]+$/.test(rawSlug) ? rawSlug : null;

  const [views, setViews] = useState<number | null>(null);
  const [likes, setLikes] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [liking, setLiking] = useState(false);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/posts/${slug}/stats`)
      .then((r) => r.json())
      .then((data) => {
        setViews(data.views);
        setLikes(data.likes);
        setLiked(data.liked);
      })
      .catch(() => {});

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

  return (
    <EngagementContext value={{ views, likes, liked, liking, handleLike }}>
      {children}
    </EngagementContext>
  );
}

export function PostStats() {
  const { views, likes } = useContext(EngagementContext);

  if (views === null && likes === null) return null;

  return (
    <div className="flex items-center gap-3 text-zinc-500 text-sm not-prose">
      <div className="flex items-center gap-1.5">
        <IconEye size={16} />
        <span>{views ?? 0}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <IconHeart size={16} />
        <span>{likes ?? 0}</span>
      </div>
    </div>
  );
}

export function PostLikeButton() {
  const { likes, liked, liking, handleLike } = useContext(EngagementContext);

  if (likes === null) return null;

  return (
    <div className="flex items-center pt-6 border-t border-zinc-800 not-prose">
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
