import type { Metadata, Viewport } from 'next';
import type { LinkHTMLAttributes } from 'react';

import {
  basePath,
  robotsEnabled,
  siteAuthor,
  siteDescription,
  siteLocale,
  siteName,
  siteThemeColor,
  siteThemeColorDark,
  siteUrl,
} from './env';

const defaultMeta = {
  siteName,
  title: siteName,
  divider: '|',
  description: siteDescription,
  author: siteAuthor,
  locale: siteLocale,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: siteThemeColor },
    { media: '(prefers-color-scheme: dark)', color: siteThemeColorDark },
  ],
  type: 'website',
  ogImage: '/images/og.png',
  ogImageAlt: `${siteName} - Open Graph Image`,
};

export const getPageTitle = (title: string) => {
  if (!title || title === defaultMeta.siteName) {
    return defaultMeta.siteName;
  }
  return `${title} ${defaultMeta.divider} ${defaultMeta.siteName}`;
};

const siteMetadata = (): Metadata => {
  const title = getPageTitle(defaultMeta.title);
  const ogImageUrl = new URL(defaultMeta.ogImage, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title: title,
    description: defaultMeta.description,
    applicationName: defaultMeta.siteName,
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title,
      url: siteUrl,
      type: 'website',
      siteName: defaultMeta.siteName,
      locale: defaultMeta.locale,
      description: defaultMeta.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: defaultMeta.ogImageAlt,
        },
      ],
    },
    twitter: {
      title,
      description: defaultMeta.description,
      card: 'summary_large_image',
      images: [ogImageUrl],
    },
    authors: defaultMeta.author
      ? {
          name: defaultMeta.author,
        }
      : null,
    robots: {
      index: robotsEnabled,
      follow: robotsEnabled,
    },
    icons: favicons.map((favicon) => ({
      rel: favicon.rel,
      url: `${basePath}${favicon.href}`,
      type: favicon.type,
      sizes: favicon.sizes,
      crossOrigin: favicon.crossOrigin,
    })),
  };
};

export const siteViewport: Viewport = {
  themeColor: defaultMeta.themeColor,
};

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
  crossOrigin?: LinkHTMLAttributes<HTMLLinkElement>['crossOrigin'];
};

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    crossOrigin: 'use-credentials',
    href: '/favicon/manifest.json',
  },
];

export default siteMetadata;
