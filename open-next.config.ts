import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// The site has no ISR/`revalidate` usage (confirmed: everything is either
// fully static or the single dynamic /api/contact route handler), so the
// default in-memory incremental cache is sufficient — no R2 bucket needed.
export default defineCloudflareConfig();
