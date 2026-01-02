import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

export default function DevLayout({ children }: { children: ReactNode }) {
  const isProd = process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === 'production'
    : process.env.NODE_ENV === 'production';
  if (isProd) {
    // Hide all routes under the (dev) group in production
    notFound();
  }

  return (
    <>
      {children}
      <Toaster position='top-right' />
    </>
  );
}
