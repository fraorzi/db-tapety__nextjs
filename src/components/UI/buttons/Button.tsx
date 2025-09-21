import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

import type { ButtonSize, ButtonVariant } from '@/components/UI/buttons/models/button.model';
import { buttonClasses } from '@/components/UI/buttons/utils/button-classes';

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
  size?: ButtonSize;
} & ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      size = 'base',
      variant = 'primary',
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          buttonClasses(variant, size),
          isLoading && 'relative disabled:cursor-wait',
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-current'>
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        <span className={clsx(isLoading && 'text-transparent select-none')}>{children}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
