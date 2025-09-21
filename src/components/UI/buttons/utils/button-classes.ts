import clsx from 'clsx';

import clsxm from '@/lib/clsxm';

import type { ButtonSize, ButtonVariant } from '@/components/UI/buttons/models/button.model';

export const buttonSizeClasses = (size: ButtonSize) => {
  return clsx([
    size === 'small' && ['px-4 py-2', 'text-sm'],
    size === 'base' && ['px-6 py-3', 'text-base'],
    size === 'large' && ['px-8 py-4', 'text-lg'],
  ]);
};

export const buttonVariantClasses = (variant: keyof typeof ButtonVariant) => {
  return clsx([
    variant === 'primary' && [
      'bg-primary-950 text-white',
      'border-primary-950 border',
      'hover:bg-primary-800 hover:text-white',
      'active:bg-primary-900',
      'disabled:bg-primary-400 disabled:hover:bg-primary-400',
    ],
    variant === 'secondary' && [
      'bg-primary-300 text-primary-950',
      'border-primary-300 border',
      'hover:bg-primary-200 hover:text-primary-950',
      'active:bg-primary-400',
      'disabled:bg-primary-100 disabled:hover:bg-primary-100',
    ],
    variant === 'outline' && [
      'text-primary-300 bg-transparent',
      'border-primary-300 border-2',
      'hover:bg-primary-300 hover:text-primary-950',
      'active:bg-primary-200',
      'disabled:border-primary-100 disabled:text-primary-100',
    ],
    variant === 'ghost' && [
      'text-primary-500',
      'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
    ],
    variant === 'light' && [
      'text-dark bg-white',
      'border border-gray-300',
      'hover:text-dark hover:bg-gray-100',
      'active:bg-white/80 disabled:bg-gray-200',
    ],
    variant === 'dark' && [
      'bg-gray-900 text-white',
      'border border-gray-600',
      'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
    ],
  ]);
};

export const buttonClasses = (variant: keyof typeof ButtonVariant, size: ButtonSize) => {
  return clsxm(
    'inline-flex items-center',
    'font-semibold', // default font
    'rounded-xl', // default border radius
    'cursor-pointer', // default cursor

    // focus classes
    'focus-visible:ring-primary-500 focus:outline-hidden focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2',

    // transitions
    'transition-colors',

    // disabled cursor
    'disabled:cursor-not-allowed',

    // SIZES
    buttonSizeClasses(size),

    // VARIANTS
    buttonVariantClasses(variant),
  );
};
