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

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    before: '/images/gallery-1-before.jpg',
    after: '/images/gallery-1-after.jpg',
    title: 'Living Room Transformation',
    height: 30,
  },
  {
    id: 2,
    before: '/images/gallery-2-before.jpg',
    after: '/images/gallery-2-after.jpg',
    title: 'Bedroom Makeover',
    height: 40,
  },
  {
    id: 3,
    before: '/images/gallery-3-before.jpg',
    after: '/images/gallery-3-after.jpg',
    title: 'Office Space Redesign',
    height: 25,
  },
  {
    id: 4,
    before: '/images/gallery-4-before.jpg',
    after: '/images/gallery-4-after.jpg',
    title: 'Dining Room Elegance',
    height: 35,
  },
  {
    id: 5,
    before: '/images/gallery-5-before.jpg',
    after: '/images/gallery-5-after.jpg',
    title: 'Hallway Renovation',
    height: 28,
  },
  {
    id: 6,
    before: '/images/gallery-6-before.jpg',
    after: '/images/gallery-6-after.jpg',
    title: "Children's Room Magic",
    height: 32,
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isBeforeImage, setIsBeforeImage] = useState(true);
  const bodyOverflowRef = useRef<string | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsBeforeImage(true);
    lastFocusedElementRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (bodyOverflowRef.current === null) {
      bodyOverflowRef.current = document.body.style.overflow || '';
    }
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    if (bodyOverflowRef.current !== null) {
      document.body.style.overflow = bodyOverflowRef.current;
      bodyOverflowRef.current = null;
    } else {
      document.body.style.overflow = '';
    }
    if (lastFocusedElementRef.current) {
      const elementToFocus = lastFocusedElementRef.current;
      lastFocusedElementRef.current = null;
      window.requestAnimationFrame(() => {
        elementToFocus.focus();
      });
    }
  };

  const toggleBeforeAfter = () => {
    setIsBeforeImage(!isBeforeImage);
  };

  // Clean up overflow on unmount
  useEffect(() => {
    return () => {
      if (bodyOverflowRef.current !== null) {
        document.body.style.overflow = bodyOverflowRef.current;
        bodyOverflowRef.current = null;
      } else {
        document.body.style.overflow = '';
      }
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

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {galleryImages.map((image, index) => (
            <button
              type='button'
              key={image.id}
              className={clsxm(
                'group focus-visible:ring-secondary relative overflow-hidden rounded-lg shadow-md focus:outline-none focus-visible:ring-2',
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
              aria-label={`Otwórz podgląd: ${image.title}`}
            >
              <div className='relative h-full overflow-hidden'>
                <NextImage
                  src={image.after}
                  alt={image.title}
                  fill
                  sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='to-primary/60 absolute inset-0 bg-gradient-to-b from-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
                <div className='border-secondary/0 group-hover:border-secondary/30 absolute inset-0 border-4 transition-all duration-500'></div>
                <div className='absolute right-0 bottom-0 left-0 translate-y-full transform p-6 transition-transform duration-500 group-hover:translate-y-0'>
                  <span className='mb-2 block font-serif text-xl font-medium text-white'>
                    {image.title}
                  </span>
                  <span className='block text-sm text-white/80'>
                    Kliknij, aby zobaczyć przed i po
                  </span>
                </div>
              </div>
            </button>
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
            if (e.key === 'Tab') {
              const container = overlayRef.current;
              if (!container) return;
              const focusable = Array.from(
                container.querySelectorAll<HTMLElement>(
                  'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
                ),
              ).filter((el) => !el.hasAttribute('disabled'));
              if (focusable.length === 0) return;
              const first = focusable[0];
              const last = focusable[focusable.length - 1];
              if (e.shiftKey) {
                if (document.activeElement === first) {
                  last.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === last) {
                  first.focus();
                  e.preventDefault();
                }
              }
            }
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className='relative w-full max-w-5xl'>
            <button
              type='button'
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
                  sizes='100vw'
                  className='object-cover'
                />
                <div className='border-secondary/10 absolute inset-0 border-8'></div>
                <button
                  type='button'
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
