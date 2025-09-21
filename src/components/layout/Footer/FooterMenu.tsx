import UnstyledLink from '@/components/UI/buttons/UnstyledLink';

const links = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms and conditions' },
  { href: '#', label: 'Cookie policy' },
];

const FooterMenu = () => {
  return (
    <ul className='flex list-none flex-col gap-y-10 md:flex-row md:gap-x-8 lg:gap-x-10'>
      {links.map((link) => (
        <li key={link.label}>
          <UnstyledLink
            className='hover:text-primary-500 focus-visible:ring-offset-primary-950'
            href={link.href}
          >
            {link.label}
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
};

export default FooterMenu;
