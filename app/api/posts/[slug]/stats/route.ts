import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getIpHash, getClientIp } from "@/lib/ip";
import { isRateLimited } from "@/lib/rate-limit";
import { posts } from "@/lib/posts";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (!posts.some((p) => p.slug === slug)) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const ipHash = getIpHash(req);

    const [stats, like] = await Promise.all([
      prisma.postStats.findUnique({ where: { slug } }),
      prisma.postLike.findUnique({
        where: { slug_ipHash: { slug, ipHash } },
      }),
    ]);

    return NextResponse.json({
      views: stats?.views ?? 0,
      likes: stats?.likes ?? 0,
      liked: !!like,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
