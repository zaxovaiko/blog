import { createHash } from "crypto";

const rateMap = new Map<string, number[]>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 30; // per window per IP

function hashKey(ip: string): string {
  return createHash("sha256").update(ip).digest("hex").slice(0, 16);
}

export function isRateLimited(ip: string): boolean {
  const key = hashKey(ip);
  const now = Date.now();
  const timestamps = rateMap.get(key) ?? [];

  // Remove expired entries
  const valid = timestamps.filter((t) => now - t < WINDOW_MS);

  if (valid.length >= MAX_REQUESTS) {
    rateMap.set(key, valid);
    return true;
  }

  valid.push(now);
  rateMap.set(key, valid);
  return false;
}

// Periodically clean up stale entries to prevent memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(
    () => {
      const now = Date.now();
      for (const [key, timestamps] of rateMap) {
        const valid = timestamps.filter((t) => now - t < WINDOW_MS);
        if (valid.length === 0) {
          rateMap.delete(key);
        } else {
          rateMap.set(key, valid);
        }
      }
    },
    5 * 60_000,
  );
}
