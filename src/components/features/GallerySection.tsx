'use client';

import { useEffect, useRef, useState } from 'react';
import { HiX } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import Container from '@/components/UI/grid/Container';
import Section from '@/components/UI/grid/Section';
import NextImage from '@/components/UI/Image/NextImage';
import Heading from '@/components/UI/typography/Heading';
import Paragraph from '@/components/UI/typography/Paragraph';

interface GalleryImage {
  id: number;
  before: string;
  after: string;
  title: string;
  height?: number;
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isBeforeImage, setIsBeforeImage] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      before:
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      after:
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Living Room Transformation',
      height: 30,
    },
    {
      id: 2,
      before:
        'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      after:
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Bedroom Makeover',
      height: 40,
    },
    {
      id: 3,
      before:
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      after:
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Office Space Redesign',
      height: 25,
    },
    {
      id: 4,
      before:
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      after:
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Dining Room Elegance',
      height: 35,
    },
    {
      id: 5,
      before:
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      after:
        'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Hallway Renovation',
      height: 28,
    },
    {
      id: 6,
      before:
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      after:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: "Children's Room Magic",
      height: 32,
    },
  ];

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsBeforeImage(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const toggleBeforeAfter = () => {
    setIsBeforeImage(!isBeforeImage);
  };

  // Clean up overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (selectedImage) {
      // focus the dialog for accessibility and ESC handling
      overlayRef.current?.focus();
    }
  }, [selectedImage]);

  return (
    <Section id='gallery' className='bg-beige'>
      <div className='bg-secondary/10 absolute top-40 left-20 h-64 w-64 rounded-full blur-3xl'></div>
      <div className='bg-primary/5 absolute right-10 bottom-20 h-80 w-80 rounded-full blur-3xl'></div>

      <Container className='relative'>
        <div className='mb-16 text-center'>
          <Heading
            level={2}
            className='text-primary relative mb-6 font-serif text-4xl font-bold md:text-5xl'
          >
            <span
              className='text-stroke absolute -top-10 left-1/2 -translate-x-1/2 transform text-6xl opacity-20'
              aria-hidden='true'
            >
              Galeria
            </span>
            Nasza galeria
          </Heading>
          <div className='bg-secondary mx-auto mb-8 h-1 w-24'></div>
          <Paragraph size='lg' className='mx-auto max-w-2xl text-gray-700'>
            Zobacz nasze realizacje przed i po. Kliknij dowolne zdjęcie, aby zobaczyć, jak bardzo
            zmienia się przestrzeń dzięki naszym tapetom.
          </Paragraph>
        </div>

        <div ref={galleryRef} className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={clsxm(
                'group relative cursor-pointer overflow-hidden rounded-lg shadow-md',
                index % 3 === 0 && 'sm:col-span-1 lg:col-span-1',
                index % 3 === 1 && 'sm:col-span-1 lg:col-span-1',
                index % 3 === 2 && 'sm:col-span-2 lg:col-span-1',
                index === 0 && 'lg:row-span-2',
                index === 3 && 'lg:row-span-2',
              )}
              style={{
                height: `${(image.height || 30) * 10}px`,
                margin: index % 3 === 1 ? '30px 0 0 0' : '0',
              }}
              onClick={() => openLightbox(image)}
            >
              <div className='relative h-full overflow-hidden'>
                <NextImage
                  src={image.after}
                  alt={image.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='to-primary/60 absolute inset-0 bg-gradient-to-b from-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
                <div className='border-secondary/0 group-hover:border-secondary/30 absolute inset-0 border-4 transition-all duration-500'></div>
                <div className='absolute right-0 bottom-0 left-0 translate-y-full transform p-6 transition-transform duration-500 group-hover:translate-y-0'>
                  <Heading level={3} className='mb-2 font-serif text-xl font-medium text-white'>
                    {image.title}
                  </Heading>
                  <Paragraph className='text-sm text-white/80'>
                    Kliknij, aby zobaczyć przed i po
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {selectedImage && (
        <div
          className='bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black p-4'
          role='dialog'
          aria-modal='true'
          aria-labelledby='lightbox-title'
          tabIndex={-1}
          ref={overlayRef}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox();
          }}
        >
          <div className='relative w-full max-w-5xl'>
            <button
              onClick={closeLightbox}
              className='hover:text-secondary absolute -top-16 right-0 text-white transition-colors'
              aria-label='Close lightbox'
            >
              <HiX size={24} />
            </button>
            <div className='overflow-hidden rounded-lg bg-white'>
              <div className='relative h-[60vh]'>
                <NextImage
                  src={isBeforeImage ? selectedImage.before : selectedImage.after}
                  alt={`${selectedImage.title} - ${isBeforeImage ? 'Przed' : 'Po'}`}
                  fill
                  className='object-cover'
                />
                <div className='border-secondary/10 absolute inset-0 border-8'></div>
                <button
                  onClick={toggleBeforeAfter}
                  className='bg-primary hover:bg-secondary absolute right-6 bottom-6 rounded-md px-6 py-3 font-medium text-white transition-colors'
                >
                  Pokaż {isBeforeImage ? 'Po' : 'Przed'}
                </button>
              </div>
              <div className='p-6'>
                <Heading
                  id='lightbox-title'
                  level={3}
                  className='text-primary font-serif text-2xl font-medium'
                >
                  {selectedImage.title}
                </Heading>
                <Paragraph className='mt-2 text-gray-600'>
                  {isBeforeImage ? 'Przed' : 'Po'} — transformacja
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default GallerySection;
