import { HiColorSwatch, HiShoppingBag, HiSupport } from 'react-icons/hi';
import { HiWrenchScrewdriver } from 'react-icons/hi2';

import ServiceCard from '@/components/UI/cards/ServiceCard';
import Container from '@/components/UI/grid/Container';
import Section from '@/components/UI/grid/Section';
import Heading from '@/components/UI/typography/Heading';
import Paragraph from '@/components/UI/typography/Paragraph';

const ServicesSection = () => {
  const services = [
    {
      icon: <HiShoppingBag size={32} />,
      title: 'Sprzedaż tapet',
      description: 'Poznaj naszą szeroką kolekcję tapet premium od wiodących producentów.',
    },
    {
      icon: <HiWrenchScrewdriver size={32} />,
      title: 'Montaż tapet',
      description:
        'Profesjonalny montaż gwarantujący idealne spasowanie i perfekcyjne wykończenie.',
    },
    {
      icon: <HiColorSwatch size={32} />,
      title: 'Projekty na zamówienie',
      description:
        'Tworzymy unikalne, spersonalizowane wzory dopasowane do Twojej wizji i przestrzeni.',
    },
    {
      icon: <HiSupport size={32} />,
      title: 'Konsultacje',
      description:
        'Eksperckie doradztwo w doborze wzorów, materiałów i spójności projektu dla Twojego wnętrza.',
    },
  ];

  return (
    <Section id='services' className='bg-cream'>
      <div className='bg-texture-3 absolute top-0 left-0 h-full w-full bg-cover opacity-5'></div>

      <Container className='relative'>
        <div className='mb-20 flex flex-col items-center'>
          <Heading
            level={2}
            className='text-primary relative mb-6 text-center font-serif text-4xl font-bold md:text-5xl'
          >
            <span
              className='text-stroke absolute -top-10 left-1/2 -translate-x-1/2 transform text-6xl opacity-20'
              aria-hidden='true'
            >
              Usługi
            </span>
            Nasze usługi
          </Heading>
          <div className='bg-secondary mb-8 h-1 w-24'></div>
          <Paragraph size='lg' className='mx-auto max-w-2xl text-center text-gray-700'>
            Oferujemy kompleksowe rozwiązania — od wyboru tapety po perfekcyjny montaż — aby Twoja
            przestrzeń zyskała elegancję i precyzję.
          </Paragraph>
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
    </Section>
  );
};

export default ServicesSection;
