import { GoogleTagManager } from '@next/third-parties/google';
import { Suspense } from 'react';

import { GTM_ID } from '@/lib/gtm';

import AnalyticsGTMPageView from '@/components/features/analytics/AnalyticsGTMPageView';

import { isProd } from '@/constant/env';

export default function AnalyticsGTM() {
  if (!GTM_ID) {
    return null;
  }

  return (
    <>
      <Suspense>
        <AnalyticsGTMPageView />
      </Suspense>
      {isProd ? <GoogleTagManager gtmId={GTM_ID} /> : null}
    </>
  );
}
