'use client';

import clsx from 'clsx';
import { useId } from 'react';
import type { DatePickerProps } from 'react-datepicker';
import ReactDatePicker from 'react-datepicker';
import type { RegisterOptions } from 'react-hook-form';
import { Controller, useFormContext } from 'react-hook-form';
import { HiOutlineCalendar } from 'react-icons/hi';

import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/components/datepicker.css';

import { inputClassesBase } from '@/components/UI/forms/form-helpers/input-classes';
import InputContainer from '@/components/UI/forms/form-helpers/InputContainer';
import InputLabel from '@/components/UI/forms/form-helpers/InputLabel';
import InputMessages from '@/components/UI/forms/form-helpers/InputMessages';

type DatePickerInternalProps = {
  validation?: RegisterOptions;
  label: string;
  name: string;
  placeholder?: string;
  defaultYear?: number;
  defaultMonth?: number;
  defaultValue?: string;
  helperText?: string;
  readOnly?: boolean;
  hideLabel?: boolean;
  inputClassName?: string;
} & Omit<DatePickerProps, 'onChange'>;

export default function DatePicker({
  validation,
  label,
  name,
  placeholder,
  defaultYear,
  defaultMonth,
  defaultValue,
  helperText,
  readOnly = false,
  hideLabel,
  className,
  inputClassName,
  dateFormat = 'dd/MM/yyyy',
  ...rest
}: DatePickerInternalProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const inputId = useId();

  // If there is a year default, then change the year to the props
  const defaultDate = new Date();
  if (defaultYear) defaultDate.setFullYear(defaultYear);
  if (defaultMonth) defaultDate.setMonth(defaultMonth);

  return (
    <InputContainer className={className}>
      <InputLabel id={inputId} label={label} hidden={hideLabel} />

      <Controller
        control={control}
        rules={validation}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <div className='relative flex-1'>
              <ReactDatePicker
                name={inputId}
                onChange={onChange}
                onBlur={onBlur}
                selected={value ? new Date(value) : undefined}
                className={clsx(inputClassesBase(!!errors[name], readOnly), inputClassName)}
                placeholderText={placeholder}
                aria-describedby={inputId}
                showMonthDropdown={true}
                showYearDropdown={true}
                dropdownMode='select'
                openToDate={value ? new Date(value) : defaultDate}
                dateFormat={dateFormat}
                readOnly={readOnly}
                {...(rest as DatePickerProps)}
              />
              <HiOutlineCalendar className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transform text-lg text-gray-500' />
            </div>
            <InputMessages helperText={helperText} error={errors[name]?.message as string} />
          </>
        )}
      />
    </InputContainer>
  );
}
