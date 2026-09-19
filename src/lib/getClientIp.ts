/**
 * Resolves the real client IP for rate limiting.
 *
 * On Cloudflare Workers, `CF-Connecting-IP` is set by Cloudflare's edge
 * itself from the actual TCP connection — any value a client tries to send
 * for this header is discarded/overwritten before the request reaches the
 * Worker, so it cannot be spoofed. `X-Forwarded-For` is kept only as a
 * fallback for environments without Cloudflare in front (e.g. `next dev`
 * without the Workers platform proxy), where it is NOT a trustworthy value
 * on its own — but there is nothing better available locally, and it is
 * only ever used as a rate-limit bucket key, never for authorization or
 * access control.
 */
export function getClientIp(request: Request): string {
  const cfIp = request.headers.get('CF-Connecting-IP');
  if (cfIp) return cfIp.trim();

  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  if (forwardedFor) return forwardedFor;

  return 'unknown';
}
