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
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    // Check if this IP already viewed within 24h
    const existing = await prisma.postView.findUnique({
      where: { slug_ipHash: { slug, ipHash } },
    });

    if (!existing || existing.viewedAt < twentyFourHoursAgo) {
      await prisma.postView.upsert({
        where: { slug_ipHash: { slug, ipHash } },
        create: { slug, ipHash },
        update: { viewedAt: new Date() },
      });

      await prisma.postStats.upsert({
        where: { slug },
        create: { slug, views: 1 },
        update: { views: { increment: 1 } },
      });
    }

    const stats = await prisma.postStats.findUnique({ where: { slug } });

    return NextResponse.json({ views: stats?.views ?? 0 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
