'use client';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

import Container from '@/components/UI/grid/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'About Us', 'Services', 'Gallery', 'Contact'];
  const services = [
    'Wallpaper Sales',
    'Professional Installation',
    'Custom Design',
    'Consultation',
    'Commercial Projects',
    'Residential Projects',
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className='bg-primary relative overflow-hidden text-white'>
      <div className='bg-texture-3 absolute top-0 left-0 h-full w-full bg-cover opacity-5'></div>

      <Container className='relative pt-32 pb-12'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h3 className='text-secondary mb-6 font-serif text-2xl font-bold italic'>
              WallpaperPro
            </h3>
            <p className='mb-8 leading-relaxed text-gray-300'>
              Transforming spaces with premium wallpaper solutions and expert installation services
              since 2008.
            </p>
            <div className='flex space-x-5'>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className='group'>
                  <div className='border-secondary/30 group-hover:border-secondary group-hover:bg-secondary flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300'>
                    <Icon
                      size={18}
                      className='group-hover:text-primary text-gray-300 transition-colors duration-300'
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-6 font-serif text-xl font-medium'>Quick Links</h3>
            <ul className='space-y-4'>
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className='group hover:text-secondary relative inline-block text-gray-300 transition-colors'
                  >
                    <span className='relative z-10'>{item}</span>
                    <span className='bg-secondary/50 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-6 font-serif text-xl font-medium'>Our Services</h3>
            <ul className='space-y-4'>
              {services.map((item) => (
                <li key={item}>
                  <a
                    href='#services'
                    className='group hover:text-secondary relative inline-block text-gray-300 transition-colors'
                  >
                    <span className='relative z-10'>{item}</span>
                    <span className='bg-secondary/50 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-6 font-serif text-xl font-medium'>Contact Us</h3>
            <address className='space-y-4 text-gray-300 not-italic'>
              <div className='flex items-center'>
                <span className='bg-secondary/20 mr-3 flex h-6 w-6 items-center justify-center rounded-full'>
                  <HiLocationMarker size={12} className='text-secondary' />
                </span>
                <div>
                  <p>123 Design Street</p>
                  <p className='ml-9'>New York, NY 10001</p>
                </div>
              </div>

              <div className='flex items-center'>
                <span className='bg-secondary/20 mr-3 flex h-6 w-6 items-center justify-center rounded-full'>
                  <HiPhone size={12} className='text-secondary' />
                </span>
                <p>(555) 123-4567</p>
              </div>

              <div className='flex items-center'>
                <span className='bg-secondary/20 mr-3 flex h-6 w-6 items-center justify-center rounded-full'>
                  <HiMail size={12} className='text-secondary' />
                </span>
                <p>info@wallpaperpro.com</p>
              </div>

              <p className='ml-9'>Hours: Mon-Fri 9am-6pm</p>
            </address>
          </div>
        </div>

        <div className='mt-16 border-t border-gray-700/50 pt-8 text-center text-gray-400'>
          <p>© {currentYear} WallpaperPro. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
