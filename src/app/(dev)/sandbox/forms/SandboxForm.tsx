'use client';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/UI/buttons/Button';
import Checkbox from '@/components/UI/forms/Checkbox';
import DatePicker from '@/components/UI/forms/DatePicker';
import Input from '@/components/UI/forms/Input';
import SelectInput from '@/components/UI/forms/SelectInput';
import TextArea from '@/components/UI/forms/TextArea';

import { ValidationMessages, ValidationPattern } from '@/constant/validation';

const SandboxForm = () => {
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };

  const onReset = () => {
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm space-y-4'>
        <Input name='name' label='Name' validation={{ required: ValidationMessages.REQUIRED }} />
        <Input
          name='email'
          label='E-mail'
          type='email'
          validation={{
            required: ValidationMessages.REQUIRED,
            pattern: {
              value: ValidationPattern.EMAIL_VALIDATION,
              message: ValidationMessages.EMAIL_INVALID,
            },
          }}
        />
        <SelectInput
          name='gender'
          label='Gender'
          validation={{ required: 'Gender must be filled' }}
          placeholder='Choose gender'
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='none'>Prefer not to say</option>
        </SelectInput>
        <DatePicker
          name='date'
          label='Date'
          validation={{ required: 'Date must be filled' }}
          // you can customize the default with `dateFormat`
          placeholder='dd/mm/yyyy'
        />
        <TextArea
          name='address'
          label='Address'
          validation={{ required: 'Address must be filled' }}
        />
        <Checkbox name='check_1' validation={{ required: 'Address must be filled' }} hideError>
          Lorem ipsum dolor sit amet, consectetur.
        </Checkbox>

        <div className='flex flex-wrap gap-4'>
          <Button variant='outline' type='reset' onClick={onReset}>
            Reset
          </Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SandboxForm;
