// Simple in-memory sliding-window rate limiter.
//
// IMPORTANT: this only works within a single running server process. On
// serverless platforms (Vercel, etc.) each instance has its own memory, and
// instances can be recycled at any time — so this is a reasonable first line
// of defense, but a determined attacker with many requests hitting different
// instances can get around it. For strict multi-instance rate limiting, swap
// this for a shared store like Upstash Redis (@upstash/ratelimit). No DB
// required for that — it's just a hosted key-value store.

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const requests = new Map();

// Periodically evict stale entries so this Map can't grow forever.
const cleanupTimer = setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of requests.entries()) {
    if (now - record.startTime > WINDOW_MS) {
      requests.delete(ip);
    }
  }
}, WINDOW_MS);

// Don't let this timer keep a serverless function instance alive.
if (typeof cleanupTimer.unref === "function") {
  cleanupTimer.unref();
}

export function rateLimit(ip) {
  const now = Date.now();
  const record = requests.get(ip);

  if (!record || now - record.startTime > WINDOW_MS) {
    requests.set(ip, { count: 1, startTime: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count += 1;
  return true;
}