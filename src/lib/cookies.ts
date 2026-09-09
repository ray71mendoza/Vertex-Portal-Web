'use client';

/**
 * Minimal first-party cookie utilities. No external cookie library is used —
 * the site only ever needs to read/write/delete a handful of its own
 * cookies, so `document.cookie` is sufficient and keeps the dependency
 * surface small.
 */

interface SetCookieOptions {
  maxAgeSeconds?: number;
  path?: string;
  sameSite?: 'Lax' | 'Strict' | 'None';
}

function isBrowser(): boolean {
  return typeof document !== 'undefined';
}

export function getCookie(name: string): string | undefined {
  if (!isBrowser()) return undefined;

  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));

  if (!match) return undefined;

  const rawValue = match.slice(name.length + 1);
  try {
    return decodeURIComponent(rawValue);
  } catch {
    return rawValue;
  }
}

export function setCookie(name: string, value: string, options: SetCookieOptions = {}): void {
  if (!isBrowser()) return;

  const { maxAgeSeconds, path = '/', sameSite = 'Lax' } = options;
  const isProduction = window.location.protocol === 'https:';

  let cookie = `${name}=${encodeURIComponent(value)}; path=${path}; SameSite=${sameSite}`;
  if (typeof maxAgeSeconds === 'number') {
    cookie += `; max-age=${maxAgeSeconds}`;
  }
  if (isProduction) {
    cookie += '; Secure';
  }

  document.cookie = cookie;
}

/**
 * Deletes a first-party cookie by writing it with an already-expired
 * max-age. Tries both the current path and root path since cookies can be
 * scoped to either depending on how they were originally set.
 */
export function deleteCookie(name: string, path = '/'): void {
  if (!isBrowser()) return;
  document.cookie = `${name}=; path=${path}; max-age=0; SameSite=Lax`;
  if (path !== '/') {
    document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
  }
}

/** Deletes every cookie whose name matches any of the given prefixes (e.g. "_ga" matches "_ga", "_ga_XXXX"). */
export function deleteCookiesByPrefix(prefixes: string[]): void {
  if (!isBrowser()) return;

  const existingNames = document.cookie
    .split('; ')
    .map((row) => row.split('=')[0])
    .filter(Boolean);

  for (const cookieName of existingNames) {
    if (prefixes.some((prefix) => cookieName === prefix || cookieName.startsWith(prefix))) {
      deleteCookie(cookieName);
    }
  }
}
