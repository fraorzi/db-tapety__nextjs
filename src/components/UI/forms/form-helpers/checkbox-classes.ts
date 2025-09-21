import clsxm from '@/lib/clsxm';

export const checkboxClasses = (readOnly = false, disabled = false, hasError = false) => {
  return clsxm(
    'appearance-none transition-colors',
    'rounded-md',
    'border border-gray-300 bg-white',
    'px-0 py-0',
    'inline-block',
    'h-6 w-6',
    'focus:border-primary-500 focus:ring-primary-500 focus:outline-hidden',
    'form-checkbox-check checked:border-primary-500',
    'checked:bg-primary-500 checked:hover:bg-primary-600 checked:focus:bg-primary-500',

    // disabled && errors
    {
      'cursor-not-allowed border-gray-300 bg-gray-100 checked:bg-gray-300 focus:border-gray-300 focus:ring-0':
        readOnly || disabled,
      'border-red-500 checked:bg-red-500 checked:hover:ring-2 checked:hover:ring-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500 checked:focus:bg-red-500':
        hasError,
    },
  );
};
