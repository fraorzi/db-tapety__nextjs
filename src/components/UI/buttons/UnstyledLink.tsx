import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode, RefAttributes } from 'react';
import { forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

import { ensureLocalLink } from '@/components/UI/buttons/utils/ensure-local-link';
import { isLocalLink } from '@/components/UI/buttons/utils/is-local-link';
import { focusClasses } from '@/components/UI/buttons/utils/link-classes';

export type UnstyledLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children?: ReactNode;
  } & RefAttributes<HTMLAnchorElement>;

const UnstyledLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, target, rel, className, ...rest }, ref) => {
    const isLocal = isLocalLink(href);
    const link = ensureLocalLink(href);

    const isNewTab =
      !isLocal || (typeof link === 'string' && !link.startsWith('/') && !link.startsWith('#'));

    if (!isNewTab) {
      return (
        <Link
          ref={ref}
          href={link}
          target={target}
          rel={rel}
          className={clsxm(focusClasses, className)}
          {...rest}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        href={typeof link === 'string' ? link : link.href || ''}
        className={clsxm(focusClasses, className)}
        {...rest}
      >
        {children}
      </a>
    );
  },
);

export default UnstyledLink;
