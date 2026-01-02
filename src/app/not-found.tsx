import type { Metadata } from 'next';
import { RiAlarmWarningLine } from 'react-icons/ri';

import UnderlineLink from '@/components/UI/buttons/UnderlineLink';

import { Routes } from '@/constant/routes';
import { getPageTitle } from '@/constant/seo';

export const metadata: Metadata = {
  title: getPageTitle('404'),
  description: 'Nie znaleziono strony',
};

export default function NotFoundPage() {
  return (
    <>
      <div className='bg-secondary/40 flex w-full flex-1 flex-col items-center justify-center pt-48 pb-28'>
        <RiAlarmWarningLine size={60} className='text-red-500 drop-shadow-lg' />
        <h1 className='mt-8 text-4xl md:text-6xl'>Nie znaleziono strony</h1>

        <UnderlineLink className='mt-8 md:text-lg' href={Routes.HOME}>
          Powrót do strony głównej
        </UnderlineLink>
      </div>
    </>
  );
}
