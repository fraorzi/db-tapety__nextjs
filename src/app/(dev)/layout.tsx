import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

export default function DevLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster position='top-right' />
    </>
  );
}
