'use client';

import { usePathname } from 'next/navigation';
import * as React from 'react';

import UnderlineLink from '@/components/UI/buttons/UnderlineLink';
import UnstyledLink from '@/components/UI/buttons/UnstyledLink';
import Container from '@/components/UI/grid/Container';
import Logo from '@/components/UI/icons/Logo';

import { Routes } from '@/constant/routes';

const links = [
  { href: Routes.HOME, label: 'Home' },
  { href: Routes.COMPONENTS, label: 'Components' },
  { href: Routes.SANDBOX_FORMS, label: 'Forms' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 bg-white py-6 shadow-sm'>
      <Container>
        <div className='flex items-center justify-between'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <Logo className='w-full max-w-[80px] md:max-w-[120px]' />
          </UnstyledLink>
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnderlineLink
                    href={href}
                    active={pathname === href}
                    className='hover:text-gray-600'
                  >
                    {label}
                  </UnderlineLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
