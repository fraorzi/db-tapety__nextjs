import type { PropsWithChildren } from 'react';

import clsxm from '@/lib/clsxm';

const InputContainer = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return <div className={clsxm('relative', className)}>{children}</div>;
};

export default InputContainer;
