import { ImSpinner2 } from 'react-icons/im';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex h-full w-full flex-1 items-center justify-center'>
      <ImSpinner2 className='text-primary-500 h-10 w-10 animate-spin' />
    </div>
  );
}
