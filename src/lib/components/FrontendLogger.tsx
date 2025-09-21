'use client';

import { useEffect } from 'react';

import { isProd } from '@/constant/env';

export default function FrontendLogger({ data }: { data: unknown }) {
  useEffect(() => {
    if (isProd) return;

    // eslint-disable-next-line no-console
    console.log(data);
  }, [data]);

  return null;
}
