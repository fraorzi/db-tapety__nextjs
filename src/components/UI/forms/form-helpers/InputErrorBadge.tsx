import { HiExclamationCircle } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

interface InputErrorBadgeProps {
  readOnly?: boolean;
}

const InputErrorBadge = ({ readOnly }: InputErrorBadgeProps) => {
  return (
    <div
      className={clsxm(
        'pointer-events-none absolute top-3.5 right-0 mr-2.5 flex items-center bg-white',
        readOnly && 'bg-gray-100',
      )}
    >
      <HiExclamationCircle className='text-xl text-red-500' />
    </div>
  );
};

export default InputErrorBadge;
