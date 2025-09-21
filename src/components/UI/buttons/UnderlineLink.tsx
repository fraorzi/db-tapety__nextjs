import { forwardRef } from 'react';

import '@/styles/components/animated-underline.css';

import clsxm from '@/lib/clsxm';

import type { UnstyledLinkProps } from '@/components/UI/buttons/UnstyledLink';
import UnstyledLink from '@/components/UI/buttons/UnstyledLink';

interface UnderlineLinkProps extends UnstyledLinkProps {
  active?: boolean;
}

const UnderlineLink = forwardRef<HTMLAnchorElement, UnderlineLinkProps>(
  ({ children, className, active, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'animated-underline',
          'focus:outline-hidden focus-visible:rounded-none focus-visible:ring-0',
          active && 'active',
          className,
        )}
      >
        {children}
      </UnstyledLink>
    );
  },
);

UnderlineLink.displayName = 'UnderlineLink';

export default UnderlineLink;
