'use client';

import { useEffect, useState } from 'react';
import { HiStar } from 'react-icons/hi';

import Container from '@/components/UI/grid/Container';
import Section from '@/components/UI/grid/Section';
import NextImage from '@/components/UI/Image/NextImage';
import Heading from '@/components/UI/typography/Heading';
import Paragraph from '@/components/UI/typography/Paragraph';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anna Kowalska',
    role: 'Właścicielka domu',
    content:
      'nazwa firmy całkowicie odmieniła nasz salon. Zespół był profesjonalny, sprawny, a jakość prac przerosła nasze oczekiwania. Polecona tapeta idealnie komponuje się z meblami.',
    rating: 5,
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Michał Nowak',
    role: 'Projektant wnętrz',
    content:
      'Jako projektant wnętrz współpracowałem z wieloma ekipami montującymi tapety, ale nazwa firmy wyróżnia się dbałością o detale i dążeniem do perfekcji. To moja pierwsza rekomendacja dla klientów.',
    rating: 5,
    image: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Katarzyna Zielińska',
    role: 'Właścicielka firmy',
    content:
      'Zespół nazwa firmy pomógł nam stworzyć zachwycającą ścianę akcentową w butiku. Montaż był szybki, a efekt zebrał mnóstwo pochwał od klientów. Gorąco polecam!',
    rating: 4,
    image: '/images/testimonial-3.jpg',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(id);
  }, [activeIndex, resetKey]);

  return (
    <Section id='opinie' className='bg-cream'>
      <div className='bg-texture-1 pointer-events-none absolute top-0 left-0 h-full w-full bg-cover opacity-5'></div>
      <div className='bg-secondary/10 pointer-events-none absolute top-20 right-20 h-64 w-64 rounded-full blur-3xl'></div>

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
              Opinie
            </span>
            Co mówią nasi klienci
          </Heading>
          <div className='bg-secondary mx-auto mb-8 h-1 w-24'></div>
        </div>

        <div className='mx-auto max-w-5xl'>
          <div className='relative min-h-[400px]'>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === activeIndex
                    ? 'z-20 translate-y-0 opacity-100'
                    : index === (activeIndex + 1) % testimonials.length
                      ? 'z-10 translate-y-16 opacity-0'
                      : 'z-0 -translate-y-16 opacity-0'
                }`}
              >
                <div className='relative overflow-hidden rounded-lg bg-white p-10 shadow-xl'>
                  <div className='bg-texture-2 pointer-events-none absolute top-0 left-0 h-full w-full bg-cover opacity-5'></div>
                  <div className='pointer-events-none absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 transform'>
                    <div className='text-secondary/10 font-serif text-[200px] italic'>&quot;</div>
                  </div>
                  <div className='relative z-10 flex flex-col gap-10 md:flex-row'>
                    <div className='flex flex-col items-center md:w-1/3 md:items-start'>
                      <div className='border-secondary/20 mb-6 h-32 w-32 overflow-hidden rounded-full border-4 shadow-lg'>
                        <NextImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={128}
                          height={128}
                          className='h-full w-full object-cover'
                        />
                      </div>
                      <span className='sr-only'>Ocena: {testimonial.rating} na 5</span>
                      <div className='mb-2 flex' aria-hidden='true'>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <HiStar
                            key={i}
                            size={20}
                            className={`${
                              i < testimonial.rating
                                ? 'text-secondary fill-secondary'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className='text-center md:text-left'>
                        <Paragraph className='text-primary font-serif text-xl font-semibold'>
                          {testimonial.name}
                        </Paragraph>
                        <Paragraph className='text-sm text-gray-600 italic'>
                          {testimonial.role}
                        </Paragraph>
                      </div>
                    </div>
                    <div className='md:w-2/3'>
                      <blockquote className='relative mb-6 font-serif text-lg leading-relaxed text-gray-700 italic'>
                        <span className='text-secondary absolute -top-2 -left-4 text-2xl'>
                          &quot;
                        </span>
                        {testimonial.content}
                        <span className='text-secondary absolute text-2xl'>&quot;</span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='relative z-20 mt-52 flex justify-center space-x-3 sm:mt-30 md:mt-10'>
            {testimonials.map((_, index) => (
              <button
                type='button'
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setResetKey((k) => k + 1);
                }}
                className={`group relative h-3 w-12 cursor-pointer overflow-hidden rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-secondary/20' : 'bg-secondary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === activeIndex && (
                  <span className='bg-primary animate-testimonial-progress pointer-events-none absolute top-0 left-0 h-full w-0'></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
