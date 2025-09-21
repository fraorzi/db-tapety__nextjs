import { forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

import type { ButtonSize, ButtonVariant } from '@/components/UI/buttons/models/button.model';
import type { UnstyledLinkProps } from '@/components/UI/buttons/UnstyledLink';
import UnstyledLink from '@/components/UI/buttons/UnstyledLink';
import { buttonClasses } from '@/components/UI/buttons/utils/button-classes';

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
  size?: ButtonSize;
} & UnstyledLinkProps;

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, className, size = 'base', variant = 'primary', ...rest }, ref) => {
    return (
      <UnstyledLink ref={ref} {...rest} className={clsxm(buttonClasses(variant, size), className)}>
        {children}
      </UnstyledLink>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
