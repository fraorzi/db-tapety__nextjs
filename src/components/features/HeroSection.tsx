import Button from '@/components/UI/buttons/Button';
import Container from '@/components/UI/grid/Container';
import NextImage from '@/components/UI/Image/NextImage';

const HeroSection = () => {
  return (
    <section id='home' className='relative min-h-screen w-full overflow-hidden'>
      {/* Background with parallax effect */}
      <div className='absolute inset-0 h-full w-full'>
        <NextImage
          src='https://images.unsplash.com/photo-1595514535215-8a5b0fad360b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
          alt='Premium wallpaper interior design'
          fill
          className='object-cover'
          priority
        />
        <div className='from-primary-950/80 to-primary-950/40 absolute inset-0 bg-gradient-to-r'></div>
      </div>

      {/* Content */}
      <div className='relative flex h-screen items-center'>
        <Container className='relative'>
          <div className='ml-0 max-w-3xl pt-24 md:ml-12 md:pt-0 lg:ml-24'>
            <div className='relative mb-6'>
              <h2 className='text-primary-300 mb-4 font-serif text-xl italic md:text-2xl'>
                Elevate Your Interior
              </h2>
              <h1 className='font-serif text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl'>
                Transform Your Space With <span className='text-primary-300 italic'>Artistry</span>
              </h1>
              <div className='bg-primary-300 absolute top-1/2 -left-12 hidden h-1 w-8 -translate-y-1/2 transform md:block'></div>
            </div>
            <p className='mb-12 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl'>
              Premium wallpaper solutions and professional installation services that elevate your
              interior design. Our curated collection brings texture, depth, and personality to any
              space.
            </p>
            <div className='flex flex-col gap-6 sm:flex-row'>
              <Button variant='secondary' size='large'>
                Get a Free Quote
              </Button>
              <Button variant='outline' size='large'>
                View Our Gallery
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Curved divider */}
      <div className='absolute right-0 bottom-0 left-0 h-24 overflow-hidden'>
        <div className='bg-primary-50 absolute right-0 bottom-0 left-0 h-48 rounded-tl-[50%] rounded-tr-[50%]'></div>
      </div>
    </section>
  );
};

export default HeroSection;
