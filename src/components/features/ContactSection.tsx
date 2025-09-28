'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { toast } from 'sonner';

import Button from '@/components/UI/buttons/Button';
import Container from '@/components/UI/grid/Container';
import Section from '@/components/UI/grid/Section';
import Heading from '@/components/UI/typography/Heading';
import Paragraph from '@/components/UI/typography/Paragraph';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Dziękujemy za wiadomość! Wkrótce się odezwiemy.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error('Nie udało się wysłać wiadomości. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <HiPhone size={24} />,
      title: 'Telefon',
      details: '(555) 123-4567',
    },
    {
      icon: <HiMail size={24} />,
      title: 'E-mail',
      details: 'info@nazwa-firmy.pl',
    },
    {
      icon: <HiLocationMarker size={24} />,
      title: 'Adres',
      details: '123 Design Street, New York, NY 10001',
    },
  ];

  return (
    <Section id='contact' className='bg-beige'>
      <Container className='relative'>
        <div className='mb-16 text-center'>
          <Heading
            level={2}
            className='text-primary relative mb-6 font-serif text-4xl font-bold md:text-5xl'
          >
            <span className='text-stroke absolute -top-10 left-1/2 -translate-x-1/2 transform text-6xl opacity-20'>
              Kontakt
            </span>
            Skontaktuj się z nami
          </Heading>
          <div className='bg-secondary mx-auto mb-8 h-1 w-24'></div>
          <Paragraph size='lg' className='mx-auto max-w-2xl text-gray-700'>
            Chcesz odmienić swoją przestrzeń? Skontaktuj się z nami, umów konsultację lub poproś o
            darmową wycenę.
          </Paragraph>
        </div>

        <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
          <div className='order-2 lg:order-1'>
            <form
              onSubmit={onSubmit}
              className='relative overflow-hidden rounded-lg bg-white p-10 shadow-xl'
            >
              <div className='bg-texture-3 absolute top-0 left-0 h-full w-full bg-cover opacity-5'></div>
              <div className='relative z-10 space-y-6'>
                <div>
                  <label htmlFor='name' className='text-primary mb-2 block font-serif font-medium'>
                    Imię i nazwisko
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='focus:ring-secondary bg-cream w-full rounded-md border-0 px-4 py-3 transition-all duration-300 focus:ring-2 focus:outline-none'
                    placeholder='Wpisz imię i nazwisko'
                    required
                  />
                </div>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='email'
                      className='text-primary mb-2 block font-serif font-medium'
                    >
                      Adres e-mail
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='focus:ring-secondary bg-cream w-full rounded-md border-0 px-4 py-3 transition-all duration-300 focus:ring-2 focus:outline-none'
                      placeholder='Wpisz adres e-mail'
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='text-primary mb-2 block font-serif font-medium'
                    >
                      Numer telefonu
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='focus:ring-secondary bg-cream w-full rounded-md border-0 px-4 py-3 transition-all duration-300 focus:ring-2 focus:outline-none'
                      placeholder='Wpisz numer telefonu'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='text-primary mb-2 block font-serif font-medium'
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className='focus:ring-secondary bg-cream w-full rounded-md border-0 px-4 py-3 transition-all duration-300 focus:ring-2 focus:outline-none'
                    placeholder='Opisz swój projekt'
                    required
                  />
                </div>

                <Button
                  type='submit'
                  variant='primary'
                  size='large'
                  isLoading={isSubmitting}
                  className='w-full'
                >
                  Wyślij wiadomość
                </Button>
              </div>
            </form>
          </div>

          <div className='order-1 lg:order-2'>
            <div className='relative overflow-hidden rounded-lg bg-white shadow-xl'>
              <div className='border-secondary/20 pointer-events-none absolute inset-4 z-10 rounded-lg border'></div>
              <iframe
                title='Office Location'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941512199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619756483692!5m2!1sen!2sca'
                width='100%'
                height='400'
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
                className='grayscale transition-all duration-500 hover:grayscale-0'
              />
            </div>

            <div className='mt-12 space-y-8'>
              {contactInfo.map((item, index) => (
                <div key={index} className='group flex items-start'>
                  <div className='bg-secondary/20 group-hover:bg-secondary mr-6 rounded-full p-4 transition-colors duration-300'>
                    <div className='text-primary'>{item.icon}</div>
                  </div>
                  <div>
                    <Heading level={3} className='text-primary mb-1 font-serif text-xl font-medium'>
                      {item.title}
                    </Heading>
                    <Paragraph size='lg' className='text-gray-700'>
                      {item.details}
                    </Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
