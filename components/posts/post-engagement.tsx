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
  const { views, likes, liked, liking, handleLike } =
    useContext(EngagementContext);

  if (views === null && likes === null) return null;

  return (
    <div className="absolute top-0 right-0 flex items-center gap-6 text-zinc-500">
      <div className="flex items-center gap-2">
        <IconEye size={20} />
        <span>{views ?? 0}</span>
      </div>
      <button
        onClick={handleLike}
        disabled={liking}
        className="flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
        style={{ color: liked ? "#ef4444" : "#71717a" }}
      >
        {liked ? <IconHeartFilled size={20} /> : <IconHeart size={20} />}
        <span>{likes ?? 0}</span>
      </button>
    </div>
  );
}
