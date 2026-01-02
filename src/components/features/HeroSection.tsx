import Button from '@/components/UI/buttons/Button';
import Container from '@/components/UI/grid/Container';
import Section from '@/components/UI/grid/Section';
import NextImage from '@/components/UI/Image/NextImage';
import Heading from '@/components/UI/typography/Heading';
import Paragraph from '@/components/UI/typography/Paragraph';

const HeroSection = () => {
  return (
    <Section id='home' className=''>
      <div className='absolute inset-0 h-full w-full'>
        <NextImage
          src='/images/hero.jpg'
          alt='Wnętrze z premium tapetą'
          fill
          sizes='100vw'
          className='object-cover'
          priority
        />
        <div className='from-primary/80 to-primary/40 absolute inset-0 bg-gradient-to-r'></div>
      </div>

      <div className='relative flex min-h-[100svh] items-center'>
        <Container className='relative'>
          <div className='ml-0 max-w-3xl pt-24 md:ml-12 md:pt-0 lg:ml-24'>
            <div className='relative mb-6'>
              <Heading
                level={2}
                className='text-secondary mb-4 font-serif text-xl italic md:text-2xl'
              >
                Wnieś swoje wnętrze na wyższy poziom
              </Heading>
              <Heading
                level={1}
                className='font-serif text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl'
              >
                Odmień swoją przestrzeń dzięki{' '}
                <span className='text-secondary italic'>kunsztowi</span>
              </Heading>
              <div className='bg-secondary absolute top-1/2 -left-12 hidden h-1 w-8 -translate-y-1/2 transform md:block'></div>
            </div>
            <Paragraph className='mb-12 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl'>
              Premiumowe tapety i profesjonalny montaż, które wyniosą Twoje wnętrze na wyższy
              poziom. Nasza starannie dobrana kolekcja dodaje strukturę, głębię i charakter każdej
              przestrzeni.
            </Paragraph>
            <div className='flex flex-col gap-6 sm:flex-row'>
              <Button variant='secondary' size='large'>
                Uzyskaj darmową wycenę
              </Button>
              <Button variant='outline' size='large'>
                Zobacz galerię
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default HeroSection;
