'use client';

import { toast } from 'sonner';

import Button from '@/components/UI/buttons/Button';

const SonnerExample = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button onClick={() => toast.success('Success toast!')}>Success Toast</Button>
      <Button onClick={() => toast.error('Error toast!')}>Error Toast</Button>
      <Button onClick={() => toast.info('Info toast!')}>Info Toast</Button>
    </div>
  );
};

export default SonnerExample;
