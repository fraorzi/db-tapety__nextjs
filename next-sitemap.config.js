/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const rawSiteDomain =
  process.env.NEXT_PUBLIC_SITE_DOMAIN ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
const normalizedSiteDomain =
  rawSiteDomain.startsWith('http://') || rawSiteDomain.startsWith('https://')
    ? rawSiteDomain
    : `https://${rawSiteDomain}`;
const siteUrl = normalizedSiteDomain + basePath;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/components', '/sandbox/forms'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  trailingSlash: true,
};
