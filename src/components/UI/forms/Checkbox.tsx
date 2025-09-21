import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { useId } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

import '@/styles/components/forms/checkbox.css';

import clsxm from '@/lib/clsxm';

import { checkboxClasses } from '@/components/UI/forms/form-helpers/checkbox-classes';
import InputMessages from '@/components/UI/forms/form-helpers/InputMessages';

export type CheckboxProps = {
  /**
   * name to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  name: string;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

const Checkbox = ({
  children,
  validation,
  readOnly = false,
  hideError = false,
  disabled,
  name,
  ...rest
}: CheckboxProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputId = useId();

  const { onChange: registerOnChange, ...registerFields } = register(name, validation);

  return (
    <div>
      <div className='flex justify-center gap-x-3'>
        <input
          {...registerFields}
          {...rest}
          onChange={(e) => {
            registerOnChange(e).then(() => {
              rest?.onChange?.(e);
            });
          }}
          id={inputId}
          type='checkbox'
          disabled={disabled}
          readOnly={readOnly}
          className={clsxm(checkboxClasses(readOnly, disabled, !!errors[name]))}
          aria-describedby={inputId}
        />
        <label
          htmlFor={inputId}
          className={clsx(
            'mt-1 inline-flex w-full flex-1 cursor-pointer flex-col text-xs',
            (readOnly || disabled) && 'cursor-not-allowed text-gray-500',
          )}
        >
          <div>{children}</div>

          {!hideError && <InputMessages error={errors[name]?.message as string} />}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
