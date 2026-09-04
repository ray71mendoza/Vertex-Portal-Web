// In-memory sliding-window rate limiter, scoped per module instance.
// Best-effort mitigation only: Vercel serverless functions can run as multiple
// concurrent instances, so this does not guarantee a global limit across all of
// them, but it does stop the common single-instance abuse case.
const hits = new Map<string, number[]>();

export function checkRateLimit(identifier: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  const timestamps = (hits.get(identifier) || []).filter((t) => t > windowStart);

  if (timestamps.length >= limit) {
    hits.set(identifier, timestamps);
    return false;
  }

  timestamps.push(now);
  hits.set(identifier, timestamps);
  return true;
}
