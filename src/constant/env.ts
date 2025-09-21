export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN || `http://localhost:3000`;

export const siteUrl = siteDomain + basePath;

export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal ? true : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' || false;
