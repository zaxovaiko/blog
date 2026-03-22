import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getIpHash, getClientIp } from "@/lib/ip";
import { isRateLimited } from "@/lib/rate-limit";
import { posts } from "@/lib/posts";

export async function POST(
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

    const existing = await prisma.postLike.findUnique({
      where: { slug_ipHash: { slug, ipHash } },
    });

    if (existing) {
      await prisma.$transaction([
        prisma.postLike.delete({
          where: { slug_ipHash: { slug, ipHash } },
        }),
        prisma.postStats.update({
          where: { slug },
          data: { likes: { decrement: 1 } },
        }),
      ]);
    } else {
      await prisma.$transaction([
        prisma.postLike.create({ data: { slug, ipHash } }),
        prisma.postStats.upsert({
          where: { slug },
          create: { slug, likes: 1 },
          update: { likes: { increment: 1 } },
        }),
      ]);
    }

    const stats = await prisma.postStats.findUnique({ where: { slug } });

    return NextResponse.json({
      likes: stats?.likes ?? 0,
      liked: !existing,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
