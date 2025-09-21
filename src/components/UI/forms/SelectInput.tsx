import clsx from 'clsx';
import type { ComponentPropsWithoutRef, HTMLProps, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, isValidElement, memo, useId } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import { Controller, useFormContext } from 'react-hook-form';

import { inputClassesBase } from '@/components/UI/forms/form-helpers/input-classes';
import InputContainer from '@/components/UI/forms/form-helpers/InputContainer';
import InputLabel from '@/components/UI/forms/form-helpers/InputLabel';
import InputMessages from '@/components/UI/forms/form-helpers/InputMessages';

export type SelectInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  readOnly?: boolean;
  hideLabel?: boolean;
  validation?: RegisterOptions;
  children: ReactNode;

  inputClassName?: string;
} & ComponentPropsWithoutRef<'select'>;

const SelectInput = ({
  label,
  helperText,
  name,
  placeholder,
  readOnly = false,
  disabled,
  hideLabel,
  children,
  validation,
  className,
  inputClassName,
  ...rest
}: SelectInputProps) => {
  const render = useFormContext();

  const { control } = render;

  const inputId = useId();

  // Add disabled and selected attribute to option, will be used if readonly
  const readOnlyChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<HTMLInputElement>, {
        disabled: (child.props as HTMLProps<HTMLSelectElement>).value !== rest?.defaultValue,
      });
    }
  });

  return (
    <InputContainer className={className}>
      <InputLabel id={inputId} label={label} hidden={hideLabel} />

      <Controller
        control={control}
        name={name}
        rules={validation}
        defaultValue=''
        render={({ field: { value, ...field }, fieldState: { invalid, error } }) => (
          <>
            <div className='relative flex-1'>
              <select
                {...rest}
                {...field}
                value={value}
                id={inputId}
                disabled={disabled}
                className={clsx(
                  'form-select',
                  inputClassesBase(invalid, readOnly || disabled),
                  {
                    'text-gray-500': !value,
                  },
                  inputClassName,
                )}
                aria-describedby={inputId}
              >
                {placeholder && (
                  <option value='' disabled>
                    {placeholder}
                  </option>
                )}
                {readOnly ? readOnlyChildren : children}
              </select>
            </div>
            <InputMessages helperText={helperText} error={error?.message as string} />
          </>
        )}
      ></Controller>
    </InputContainer>
  );
};

export default memo(SelectInput);
