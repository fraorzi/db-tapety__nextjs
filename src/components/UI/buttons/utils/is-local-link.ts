import type { UrlObject } from 'url';

import { siteUrl } from '@/constant/env';

export const isLocalLink = (href: string | UrlObject): boolean => {
  if (typeof href !== 'string') return true;

  return href.startsWith('/') || (!!siteUrl && href.includes(siteUrl));
};
