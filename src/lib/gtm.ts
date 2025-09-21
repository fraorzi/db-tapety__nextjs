import { sendGTMEvent } from '@next/third-parties/google';

import { isProd } from '@/constant/env';

export const GTM_ID = process.env.NEXT_PUBLIC_GTM;

export const pageview = (url: string) => {
  if (isProd && GTM_ID) {
    sendGTMEvent({
      event: 'pageview',
      page: url,
    });
  } else {
    // eslint-disable-next-line no-console
    console.log({
      event: 'pageview',
      page: url,
    });
  }
};
