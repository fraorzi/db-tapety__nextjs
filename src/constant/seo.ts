import type { Metadata, Viewport } from 'next';
import type { LinkHTMLAttributes } from 'react';

import { basePath, siteUrl } from './env';

const defaultMeta = {
  siteName: 'Your Project Name',
  title: 'Your Project Title',
  divider: '|',
  description: 'Your project description - update this in src/constant/seo.ts',
  author: 'Your Name',
  twitter: '@your-handle',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#172554' },
  ],
  type: 'website',
  ogImage: '/images/og.png',
};

export const getPageTitle = (title: string) => {
  return `${title} ${defaultMeta.divider} ${defaultMeta.siteName}`;
};

const siteMetadata = (): Metadata => {
  const title = getPageTitle(defaultMeta.title);

  return {
    metadataBase: new URL(siteUrl),
    title: title,
    description: defaultMeta.description,
    openGraph: {
      title,
      url: siteUrl,
      type: 'website',
      siteName: defaultMeta.siteName,
      description: defaultMeta.description,
      images: [defaultMeta.ogImage],
    },
    twitter: {
      title,
      description: defaultMeta.description,
      card: 'summary_large_image',
      site: defaultMeta.twitter,
      images: defaultMeta.ogImage,
    },
    authors: defaultMeta.author
      ? {
          name: defaultMeta.author,
        }
      : null,
    robots: {
      index: process.env.NEXT_PUBLIC_ROBOTS === 'true',
      follow: process.env.NEXT_PUBLIC_ROBOTS === 'true',
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
