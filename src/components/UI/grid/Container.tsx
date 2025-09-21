import type { JSX, PropsWithChildren } from 'react';

import clsxm from '@/lib/clsxm';

interface ContainerProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Container = ({ children, className, as }: PropsWithChildren<ContainerProps>) => {
  const Tag = as || 'div';

  return <Tag className={clsxm('mx-auto w-full max-w-6xl px-2.5', className)}>{children}</Tag>;
};

export default Container;
