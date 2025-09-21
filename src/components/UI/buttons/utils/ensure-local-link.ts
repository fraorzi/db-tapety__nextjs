import type { UrlObject } from 'url';

import { siteUrl } from '@/constant/env';

export const ensureLocalLink = (href: string | UrlObject): string | UrlObject => {
  if (typeof href !== 'string') return href;

  let link = href;

  if (siteUrl && link.includes(siteUrl)) {
    link = link.replace(siteUrl, '');
  }

  return link;
};
