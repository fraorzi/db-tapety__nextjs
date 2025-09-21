import type { ComponentPropsWithoutRef, HTMLInputTypeAttribute } from 'react';
import * as React from 'react';
import { useId } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

import { inputClassesBase } from '@/components/UI/forms/form-helpers/input-classes';
import InputContainer from '@/components/UI/forms/form-helpers/InputContainer';
import InputLabel from '@/components/UI/forms/form-helpers/InputLabel';
import InputMessages from '@/components/UI/forms/form-helpers/InputMessages';

export type InputProps = {
  /** Input label */
  label: string;
  /**
   * name to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  name: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Hide label */
  hideLabel?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;

  inputClassName?: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({
  label,
  placeholder = '',
  helperText,
  name,
  type = 'text',
  readOnly = false,
  disabled,
  hideLabel,
  validation,
  className,
  inputClassName,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputId = useId();

  return (
    <InputContainer className={className}>
      <InputLabel id={inputId} label={label} hidden={hideLabel} />
      <div className='relative flex-1'>
        <input
          {...register(name, validation)}
          {...rest}
          type={type}
          name={name}
          id={inputId}
          disabled={disabled}
          readOnly={readOnly}
          className={clsxm(inputClassesBase(!!errors[name], readOnly || disabled), inputClassName)}
          placeholder={placeholder}
          aria-describedby={inputId}
        />
      </div>
      <InputMessages helperText={helperText} error={errors[name]?.message as string} />
    </InputContainer>
  );
}
