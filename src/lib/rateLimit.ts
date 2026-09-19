import { getCloudflareContext } from '@opennextjs/cloudflare';

declare global {
  interface CloudflareEnv {
    RATE_LIMIT_KV?: KVNamespace;
  }
}

let warnedMissingBinding = false;

/**
 * Fixed-window rate limiter backed by Cloudflare Workers KV, shared across
 * every Worker instance/PoP (unlike an in-memory Map, which only limits a
 * single isolate). KV is eventually consistent, which is an accepted
 * trade-off here — this protects a moderate-traffic contact form against
 * casual abuse, not a security-critical resource.
 *
 * Requires the `RATE_LIMIT_KV` binding (see wrangler.jsonc + deployment
 * docs). If the binding is absent — e.g. local `next dev` without the
 * Cloudflare platform proxy — this fails open (allows the request) so
 * local development is never blocked by a missing cloud resource.
 */
export async function checkRateLimit(identifier: string, limit = 5, windowSeconds = 60): Promise<boolean> {
  const { env } = await getCloudflareContext({ async: true });
  const kv = env.RATE_LIMIT_KV;

  if (!kv) {
    if (!warnedMissingBinding) {
      warnedMissingBinding = true;
      console.warn('[rateLimit] RATE_LIMIT_KV binding not found — rate limiting is disabled (expected in local dev).');
    }
    return true;
  }

  const bucket = Math.floor(Date.now() / (windowSeconds * 1000));
  const key = `${identifier}:${bucket}`;

  const current = await kv.get(key);
  const count = current ? Number(current) : 0;

  if (count >= limit) {
    return false;
  }

  await kv.put(key, String(count + 1), { expirationTtl: windowSeconds * 2 });
  return true;
}
