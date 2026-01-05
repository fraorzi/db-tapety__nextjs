import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

import Container from '@/components/UI/grid/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Sprzedaż tapet',
    'Profesjonalny montaż',
    'Projekt na zamówienie',
    'Konsultacje',
    'Projekty komercyjne',
    'Projekty prywatne',
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className='bg-primary relative overflow-hidden text-white'>
      <div className='bg-texture-3 absolute top-0 left-0 h-full w-full bg-cover opacity-5'></div>

      <Container className='relative pt-32 pb-12'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
          <div>
            <h3 className='text-secondary mb-6 font-serif text-2xl font-bold italic'>Logo</h3>
            <p className='mb-8 leading-relaxed text-gray-300'>
              Odmieniamy przestrzenie dzięki premium tapetom i fachowemu montażowi — od 2008 roku.
            </p>
            <div className='flex space-x-5'>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className='group'
                  aria-label={label}
                  role='link'
                  aria-disabled='true'
                >
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

          <div className='grid grid-cols-2 gap-12 lg:col-span-2'>
            <div>
              <h3 className='mb-6 font-serif text-xl font-medium'>Nasze usługi</h3>
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
              <h3 className='mb-6 font-serif text-xl font-medium'>Kontakt</h3>
              <address className='space-y-4 text-gray-300 not-italic'>
                <div className='flex items-center'>
                  <span className='bg-secondary/20 mr-3 flex h-6 w-6 items-center justify-center rounded-full'>
                    <HiLocationMarker size={12} className='text-secondary' />
                  </span>
                  <div>
                    <p>ul. Kwiatowa 12</p>
                    <p className='ml-9'>00-001 Warszawa</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <span className='bg-secondary/20 mr-3 flex h-6 w-6 items-center justify-center rounded-full'>
                    <HiPhone size={12} className='text-secondary' />
                  </span>
                  <a
                    href='tel:+48512345678'
                    className='hover:text-secondary text-gray-300 transition-colors'
                  >
                    +48 512 345 678
                  </a>
                </div>

                <div className='flex items-center'>
                  <span className='bg-secondary/20 mr-3 flex h-6 w-6 items-center justify-center rounded-full'>
                    <HiMail size={12} className='text-secondary' />
                  </span>
                  <a
                    href='mailto:info@nazwa-firmy.pl'
                    className='hover:text-secondary text-gray-300 transition-colors'
                  >
                    info@nazwa-firmy.pl
                  </a>
                </div>

                <p className='ml-9'>Godziny: Pon–Pt 9:00–18:00</p>
              </address>
            </div>
          </div>
        </div>

        <div className='mt-16 border-t border-gray-700/50 pt-8 text-center text-gray-400'>
          <p>© {currentYear} nazwa firmy. Wszelkie prawa zastrzeżone.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
