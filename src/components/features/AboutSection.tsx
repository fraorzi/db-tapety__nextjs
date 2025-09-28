import { HiClock, HiStar, HiUsers } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import Container from '@/components/UI/grid/Container';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={clsxm('group relative overflow-hidden rounded-lg bg-white p-8', className)}>
      <div className='bg-texture-1 absolute top-0 left-0 h-full w-full bg-cover opacity-5'></div>
      <div className='bg-secondary/10 absolute top-0 left-0 h-full w-0 transition-all duration-700 ease-out group-hover:w-full'></div>
      <div className='relative z-10'>
        <div className='text-secondary mb-6'>{icon}</div>
        <h3 className='text-primary mb-4 font-serif text-xl font-semibold'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </div>
      <div className='bg-secondary/10 absolute right-0 bottom-0 h-16 w-16 origin-bottom-right scale-0 transform rounded-tl-full transition-transform duration-500 ease-out group-hover:scale-100'></div>
    </div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <HiUsers size={36} />,
      title: 'Professional Team',
      description:
        'Our certified installers bring years of expertise to every project, ensuring flawless results.',
    },
    {
      icon: <HiStar size={36} />,
      title: 'High Quality',
      description:
        'We source only premium wallpapers from renowned manufacturers for lasting beauty and durability.',
    },
    {
      icon: <HiClock size={36} />,
      title: 'Fast Installation',
      description:
        'Efficient service that respects your time without compromising on quality and attention to detail.',
    },
  ];

  return (
    <section id='about-us' className='bg-beige relative overflow-hidden py-24'>
      <div className='bg-secondary/10 absolute top-40 right-20 h-64 w-64 rounded-full blur-3xl'></div>
      <div className='bg-primary/5 absolute bottom-20 left-10 h-80 w-80 rounded-full blur-3xl'></div>

      <Container className='relative'>
        <div className='mb-20 flex flex-col items-start gap-12 md:flex-row md:gap-24'>
          <div className='md:sticky md:top-32 md:w-1/3'>
            <h2 className='text-primary relative mb-6 font-serif text-4xl font-bold md:text-5xl'>
              <span className='text-stroke absolute -top-10 -left-4 text-6xl opacity-20'>
                About
              </span>
              About Us
            </h2>
            <div className='bg-secondary mb-8 h-1 w-24'></div>
            <p className='mb-6 text-lg leading-relaxed text-gray-700'>
              With over 15 years of experience, WallpaperPro has been transforming homes and
              businesses with exquisite wallpaper solutions. Our passion for design and commitment
              to quality installation has made us the trusted choice for discerning clients.
            </p>
            <p className='text-lg leading-relaxed text-gray-700'>
              We believe that wallpaper is not just a wall covering—it&apos;s an artistic statement
              that defines your space. Our team works with interior designers and homeowners to
              create environments that tell your unique story.
            </p>
          </div>

          <div className='md:w-2/3'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-16'>
              <FeatureCard
                key={0}
                icon={features[0].icon}
                title={features[0].title}
                description={features[0].description}
                className='md:translate-y-12'
              />
              <FeatureCard
                key={1}
                icon={features[1].icon}
                title={features[1].title}
                description={features[1].description}
              />
              <FeatureCard
                key={2}
                icon={features[2].icon}
                title={features[2].title}
                description={features[2].description}
              />
              <div className='bg-texture-2 hidden aspect-square rounded-lg bg-cover bg-center shadow-lg md:block'></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
