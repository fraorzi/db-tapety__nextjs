import { HiColorSwatch, HiShoppingBag, HiSupport } from 'react-icons/hi';
import { HiWrenchScrewdriver } from 'react-icons/hi2';

import clsxm from '@/lib/clsxm';

import Container from '@/components/UI/grid/Container';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={clsxm('group relative', className)}>
      <div className='absolute inset-0 rounded-lg bg-white shadow-lg transition-transform duration-500 group-hover:rotate-2'></div>
      <div className='relative z-10 overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-500 group-hover:-rotate-1'>
        <div className='p-8'>
          <div className='bg-primary-100 group-hover:bg-primary-300 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full transition-colors duration-500'>
            <div className='text-primary-950'>{icon}</div>
          </div>
          <h3 className='text-primary-950 mb-4 text-center font-serif text-xl font-semibold'>
            {title}
          </h3>
          <p className='text-center text-gray-600'>{description}</p>
        </div>
        <div className='bg-primary-300 h-1 w-0 transition-all duration-700 group-hover:w-full'></div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <HiShoppingBag size={32} />,
      title: 'Wallpaper Sales',
      description:
        'Browse our extensive collection of premium wallpapers from leading manufacturers worldwide.',
    },
    {
      icon: <HiWrenchScrewdriver size={32} />,
      title: 'Wallpaper Installation',
      description:
        'Professional installation services ensuring perfect alignment and flawless finishes.',
    },
    {
      icon: <HiColorSwatch size={32} />,
      title: 'Custom Designs',
      description:
        'Create unique, personalized wallpaper designs tailored to your specific vision and space.',
    },
    {
      icon: <HiSupport size={32} />,
      title: 'Consultation',
      description:
        'Expert advice on pattern selection, material choices, and design coordination for your space.',
    },
  ];

  return (
    <section id='services' className='bg-primary-100 relative overflow-hidden py-24'>
      <div className='bg-texture-3 absolute top-0 left-0 h-full w-full bg-cover opacity-5'></div>

      <Container className='relative'>
        <div className='mb-20 flex flex-col items-center'>
          <h2 className='text-primary-950 relative mb-6 text-center font-serif text-4xl font-bold md:text-5xl'>
            <span className='text-stroke absolute -top-10 left-1/2 -translate-x-1/2 transform text-6xl opacity-20'>
              Services
            </span>
            Our Services
          </h2>
          <div className='bg-primary-300 mb-8 h-1 w-24'></div>
          <p className='mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-700'>
            We offer comprehensive wallpaper solutions from selection to flawless installation,
            ensuring your space is transformed with elegance and precision.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4'>
          <ServiceCard
            key={0}
            icon={services[0].icon}
            title={services[0].title}
            description={services[0].description}
            className='md:translate-y-0'
          />
          <ServiceCard
            key={1}
            icon={services[1].icon}
            title={services[1].title}
            description={services[1].description}
            className='md:translate-y-12'
          />
          <ServiceCard
            key={2}
            icon={services[2].icon}
            title={services[2].title}
            description={services[2].description}
            className='md:translate-y-0'
          />
          <ServiceCard
            key={3}
            icon={services[3].icon}
            title={services[3].title}
            description={services[3].description}
            className='md:translate-y-12'
          />
        </div>
      </Container>

      {/* Curved divider */}
      <div className='absolute right-0 bottom-0 left-0 h-24 overflow-hidden'>
        <div className='bg-primary-50 absolute right-0 bottom-0 left-0 h-48 rounded-tl-[50%] rounded-tr-[50%]'></div>
      </div>
    </section>
  );
};

export default ServicesSection;
