'use client';

import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/UI/buttons/UnstyledLink';
import Container from '@/components/UI/grid/Container';

interface NavbarProps {
  className?: string;
}

const Header = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const updateScrolled = () => {
      setScrolled(window.scrollY > 50);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    // Close mobile menu after navigating to hash section
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Strona główna', id: 'home' },
    { label: 'O nas', id: 'about-us' },
    { label: 'Usługi', id: 'services' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Kontakt', id: 'contact' },
  ];

  return (
    <header
      className={clsxm(
        'fixed z-50 w-full transition-all duration-500',
        scrolled ? 'bg-beige bg-opacity-95 py-6 shadow-lg backdrop-blur-sm' : 'bg-transparent py-6',
        className,
      )}
    >
      <Container>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <UnstyledLink
              href='/'
              className={clsxm(
                'font-serif text-2xl font-bold italic md:text-4xl',
                scrolled ? 'text-primary' : 'text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]',
              )}
              aria-label='Strona główna'
            >
              Logo
            </UnstyledLink>
          </div>

          <nav className='hidden md:flex' aria-label='Główna nawigacja'>
            <ul className='flex items-center space-x-10'>
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={handleNavClick}
                    className={clsxm(
                      'group relative overflow-hidden font-medium transition-colors duration-300',
                      scrolled ? 'text-primary' : 'text-white',
                    )}
                  >
                    <span className='relative z-10'>{label}</span>
                    <span className='bg-secondary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsxm(
                'cursor-pointer transition-colors focus:outline-none',
                scrolled ? 'text-primary' : 'text-white',
              )}
              aria-label='Toggle navigation menu'
              aria-expanded={isOpen}
              aria-controls='mobile-menu'
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav
            id='mobile-menu'
            aria-label='Menu mobilne'
            className='bg-beige bg-opacity-95 absolute top-full right-0 left-0 mx-4 mt-4 rounded-lg p-6 shadow-lg backdrop-blur-sm md:hidden'
          >
            <ul className='flex flex-col space-y-6'>
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={handleNavClick}
                    className='group text-primary hover:text-secondary relative inline-block py-2 font-medium transition-colors'
                  >
                    <span>{label}</span>
                    <span className='bg-secondary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
