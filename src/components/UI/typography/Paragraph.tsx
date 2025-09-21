import type { HTMLAttributes } from 'react';

import clsxm from '@/lib/clsxm';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Paragraph = ({ size = 'md', className, children, ...rest }: ParagraphProps) => {
  return (
    <p
      {...rest}
      className={clsxm(
        'leading-relaxed',
        {
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
        },
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
