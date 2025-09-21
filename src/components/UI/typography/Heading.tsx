import type { HTMLAttributes, JSX } from 'react';
import { forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, as, level, className, ...rest }, ref) => {
    const H: keyof JSX.IntrinsicElements = as || `h${level}`;

    return (
      <H
        {...rest}
        ref={ref}
        className={clsxm(
          'leading-tight font-medium',
          {
            'text-4xl': level === 1,
            'text-3xl': level === 2,
            'text-2xl': level === 3,
            'text-xl': level === 4,
            'text-lg': level === 5,
            'text-base': level === 6,
          },
          className,
        )}
      >
        {children}
      </H>
    );
  },
);

Heading.displayName = 'Heading';

export default Heading;
