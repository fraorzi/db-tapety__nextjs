import NextTopLoader from 'nextjs-toploader';
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

import '@/styles/app.css';

import { fontSans, fontSerif } from '@/lib/fonts';

import Analytics from '@/components/features/analytics/Analytics';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

import siteMetadata, { siteViewport } from '@/constant/seo';

export const metadata = siteMetadata();

export const viewport = siteViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='pl' className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body className='flex min-h-screen flex-col'>
        <Analytics />

        <NextTopLoader height={4} color='var(--color-primary)' showSpinner={false} shadow='none' />

        <Header />

        <main className='flex flex-1 flex-col'>{children}</main>

        <Footer />
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
