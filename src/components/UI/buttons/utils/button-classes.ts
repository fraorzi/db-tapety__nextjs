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
      'bg-primary text-white',
      'border-primary border',
      'hover:bg-primary/80 hover:text-white',
      'active:bg-primary/90',
      'disabled:bg-primary/40 disabled:hover:bg-primary/40',
    ],
    variant === 'secondary' && [
      'bg-secondary text-primary',
      'border-secondary border',
      'hover:bg-secondary/80 hover:text-primary',
      'active:bg-secondary',
      'disabled:bg-secondary/40 disabled:hover:bg-secondary/40',
    ],
    variant === 'outline' && [
      'text-secondary bg-transparent',
      'border-secondary border-2',
      'hover:bg-secondary hover:text-primary',
      'active:bg-secondary/80',
      'disabled:border-secondary/40 disabled:text-secondary/40',
    ],
    variant === 'ghost' && ['text-primary', 'hover:bg-beige active:bg-cream disabled:bg-cream'],
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
    'focus-visible:ring-secondary focus:outline-none focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2',

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
