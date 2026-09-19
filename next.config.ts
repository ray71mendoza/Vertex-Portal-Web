import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

initOpenNextCloudflareForDev();

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    // script-src keeps 'unsafe-inline' and 'unsafe-eval' because Next.js injects inline
    // hydration/RSC payload scripts; tightening this to nonces would require wiring a
    // per-request nonce through the App Router, which is out of scope for this pass.
    // The additional hosts below are the consent-gated analytics/marketing vendors
    // (GA4/Google Ads/Consent Mode, Microsoft Clarity, LinkedIn Insight Tag, Meta
    // Pixel) — their scripts are only ever injected client-side after the relevant
    // consent category is granted, but the CSP still has to allow the hosts.
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms https://snap.licdn.com https://connect.facebook.net https://static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.clarity.ms https://*.clarity.ms https://px.ads.linkedin.com https://www.linkedin.com https://connect.facebook.net https://www.facebook.com https://graph.facebook.com https://static.cloudflareinsights.com https://cloudflareinsights.com",
      "frame-src 'self' https://td.doubleclick.net",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
