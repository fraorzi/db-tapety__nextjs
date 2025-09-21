'use client';

import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import Container from '@/components/UI/grid/Container';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const navItems = ['Home', 'About Us', 'Services', 'Gallery', 'Contact'];

  return (
    <nav
      className={clsxm(
        'fixed z-50 w-full transition-all duration-500',
        scrolled
          ? 'bg-primary-50 bg-opacity-95 py-6 shadow-lg backdrop-blur-sm'
          : 'bg-transparent py-6',
        className,
      )}
    >
      <Container>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h1
              className={clsxm(
                'font-serif text-xl font-bold italic md:text-2xl',
                scrolled
                  ? 'text-primary-950'
                  : 'text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]',
              )}
            >
              WallpaperPro
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden space-x-10 md:flex'>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className={clsxm(
                  'group relative overflow-hidden font-medium transition-colors duration-300',
                  scrolled ? 'text-primary-950' : 'text-white',
                )}
              >
                <span className='relative z-10'>{item}</span>
                <span className='bg-primary-300 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsxm(
                'transition-colors focus:outline-none',
                scrolled ? 'text-primary-950' : 'text-white',
              )}
              aria-label='Toggle navigation menu'
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='bg-primary-50 bg-opacity-95 absolute top-full right-0 left-0 mx-4 mt-4 rounded-lg p-6 shadow-lg backdrop-blur-sm md:hidden'>
            <div className='flex flex-col space-y-6'>
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className='group text-primary-950 hover:text-primary-300 relative py-2 font-medium transition-colors'
                >
                  <span>{item}</span>
                  <span className='bg-primary-300 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
