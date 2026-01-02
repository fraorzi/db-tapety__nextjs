export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const rawSiteDomain =
  process.env.NEXT_PUBLIC_SITE_DOMAIN ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

const normalizedSiteDomain =
  rawSiteDomain.startsWith('http://') || rawSiteDomain.startsWith('https://')
    ? rawSiteDomain
    : `https://${rawSiteDomain}`;

export const siteDomain = normalizedSiteDomain;
export const siteUrl = siteDomain + basePath;

export const isProd = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === 'production'
  : process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const robotsEnabled = process.env.NEXT_PUBLIC_ROBOTS
  ? process.env.NEXT_PUBLIC_ROBOTS === 'true'
  : isProd;

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Damian Bożyk - Tapety';
export const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  'Premium tapety i profesjonalny montaż dla domów, firm, hoteli i apartamentów.';
export const siteAuthor = process.env.NEXT_PUBLIC_SITE_AUTHOR || 'Franciszek Orzechowski';
export const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE || 'pl_PL';
export const siteThemeColor = process.env.NEXT_PUBLIC_THEME_COLOR || '#1b3a2b';
export const siteThemeColorDark = process.env.NEXT_PUBLIC_THEME_COLOR_DARK || '#0f241a';

export const showLogger = isLocal ? true : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' || false;
