import clsxm from '@/lib/clsxm';

export const inputClassesBase = (hasError: boolean, readOnly?: boolean) => {
  return clsxm(
    'block h-full w-full appearance-none rounded-md px-3 py-3 text-xs transition-colors',
    'placeholder:text-gray-500',
    'border border-gray-300 bg-white',
    'focus:border-primary-500 focus:ring-primary-500 focus:ring-1 focus:outline-hidden',
    {
      'cursor-default border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0': readOnly,
      'border-red-500 focus:border-red-500 focus:ring-red-500': hasError,
    },
  );
};
