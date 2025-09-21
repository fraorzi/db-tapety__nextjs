import { RiAlarmWarningLine } from 'react-icons/ri';

import UnderlineLink from '@/components/UI/buttons/UnderlineLink';

import { Routes } from '@/constant/routes';
import { getPageTitle } from '@/constant/seo';

export const metadata = {
  title: getPageTitle('404'),
  description: 'Page not found',
};

export default function NotFoundPage() {
  return (
    <>
      <div className='flex w-full flex-1 flex-col items-center justify-center pb-20'>
        <RiAlarmWarningLine size={60} className='drop-shadow-glow text-red-500' />
        <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>

        <UnderlineLink className='mt-8 md:text-lg' href={Routes.HOME}>
          Back to Home
        </UnderlineLink>
      </div>
    </>
  );
}
