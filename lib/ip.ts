import { createHash } from "crypto";
import { NextRequest } from "next/server";

const SALT = process.env.IP_HASH_SALT ?? "blog-engagement-salt";

function extractIp(req: NextRequest): string {
  // Vercel sets req.ip from the connecting client (most reliable on Vercel)
  // Property exists at runtime on Vercel but isn't in Next.js types
  const vercelIp = (req as NextRequest & { ip?: string }).ip;
  if (vercelIp) return vercelIp;

  // Fallback to standard proxy headers
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;

  return "unknown";
}

export function getClientIp(req: NextRequest): string {
  return extractIp(req);
}

export function getIpHash(req: NextRequest): string {
  const ip = extractIp(req);
  return createHash("sha256").update(`${SALT}:${ip}`).digest("hex");
}
