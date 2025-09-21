import { forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

import type { UnstyledLinkProps } from '@/components/UI/buttons/UnstyledLink';
import UnstyledLink from '@/components/UI/buttons/UnstyledLink';

const PrimaryLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center',
          'text-primary-600 hover:text-primary-500 font-medium',
          'focus-visible:ring-primary-500 focus:outline-hidden focus-visible:rounded-sm focus-visible:ring-3 focus-visible:ring-offset-2',
          className,
        )}
      >
        {children}
      </UnstyledLink>
    );
  },
);

export default PrimaryLink;
