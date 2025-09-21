import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import { useId } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

import { inputClassesBase } from '@/components/UI/forms/form-helpers/input-classes';
import InputContainer from '@/components/UI/forms/form-helpers/InputContainer';
import InputLabel from '@/components/UI/forms/form-helpers/InputLabel';
import InputMessages from '@/components/UI/forms/form-helpers/InputMessages';

export type TextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  hideLabel?: boolean;
  validation?: RegisterOptions;
  inputClassName?: string;
} & ComponentPropsWithoutRef<'textarea'>;

export default function TextArea({
  label,
  placeholder = '',
  helperText,
  name,
  readOnly = false,
  hideLabel = false,
  disabled,
  validation,
  className,
  inputClassName,
  ...rest
}: TextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputId = useId();

  return (
    <InputContainer className={className}>
      <InputLabel id={inputId} label={label} hidden={hideLabel} />
      <div className='relative flex-1'>
        <textarea
          {...register(name, validation)}
          rows={4}
          {...rest}
          name={name}
          id={inputId}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(inputClassesBase(!!errors[name], readOnly || disabled), inputClassName)}
          placeholder={placeholder}
          aria-describedby={inputId}
        />
      </div>
      <InputMessages helperText={helperText} error={errors[name]?.message as string} />
    </InputContainer>
  );
}
