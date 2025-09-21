'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { toast } from 'sonner';

import Button from '@/components/UI/buttons/Button';
import Container from '@/components/UI/grid/Container';

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

      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <HiPhone size={24} />,
      title: 'Phone',
      details: '(555) 123-4567',
    },
    {
      icon: <HiMail size={24} />,
      title: 'Email',
      details: 'info@wallpaperpro.com',
    },
    {
      icon: <HiLocationMarker size={24} />,
      title: 'Address',
      details: '123 Design Street, New York, NY 10001',
    },
  ];

  return (
    <section id='contact' className='bg-primary-50 relative overflow-hidden py-24'>
      <div className='bg-primary-300/10 absolute top-40 left-20 h-64 w-64 rounded-full blur-3xl'></div>
      <div className='bg-primary-950/5 absolute right-10 bottom-20 h-80 w-80 rounded-full blur-3xl'></div>

      <Container className='relative'>
        <div className='mb-16 text-center'>
          <h2 className='text-primary-950 relative mb-6 font-serif text-4xl font-bold md:text-5xl'>
            <span className='text-stroke absolute -top-10 left-1/2 -translate-x-1/2 transform text-6xl opacity-20'>
              Contact
            </span>
            Contact Us
          </h2>
          <div className='bg-primary-300 mx-auto mb-8 h-1 w-24'></div>
          <p className='mx-auto max-w-2xl text-lg leading-relaxed text-gray-700'>
            Ready to transform your space? Get in touch with our team for a consultation or free
            quote.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
          {/* Contact Form */}
          <div className='order-2 lg:order-1'>
            <form
              onSubmit={onSubmit}
              className='relative overflow-hidden rounded-lg bg-white p-10 shadow-xl'
            >
              <div className='bg-texture-3 absolute top-0 left-0 h-full w-full bg-cover opacity-5'></div>
              <div className='relative z-10 space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='text-primary-950 mb-2 block font-serif font-medium'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='focus:ring-primary-300 bg-primary-100 w-full rounded-md border-0 px-4 py-3 transition-all duration-300 focus:ring-2 focus:outline-none'
                    placeholder='Enter your full name'
                    required
                  />
                </div>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='email'
                      className='text-primary-950 mb-2 block font-serif font-medium'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='focus:ring-primary-300 bg-primary-100 w-full rounded-md border-0 px-4 py-3 transition-all duration-300 focus:ring-2 focus:outline-none'
                      placeholder='Enter your email'
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='text-primary-950 mb-2 block font-serif font-medium'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='focus:ring-primary-300 bg-primary-100 w-full rounded-md border-0 px-4 py-3 transition-all duration-300 focus:ring-2 focus:outline-none'
                      placeholder='Enter your phone number'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='text-primary-950 mb-2 block font-serif font-medium'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className='focus:ring-primary-300 bg-primary-100 w-full rounded-md border-0 px-4 py-3 transition-all duration-300 focus:ring-2 focus:outline-none'
                    placeholder='Tell us about your project'
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
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Map and Contact Info */}
          <div className='order-1 lg:order-2'>
            <div className='relative overflow-hidden rounded-lg bg-white shadow-xl'>
              <div className='border-primary-300/20 pointer-events-none absolute inset-4 z-10 rounded-lg border'></div>
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
                  <div className='bg-primary-300/20 group-hover:bg-primary-300 mr-6 rounded-full p-4 transition-colors duration-300'>
                    <div className='text-primary-950'>{item.icon}</div>
                  </div>
                  <div>
                    <h3 className='text-primary-950 mb-1 font-serif text-xl font-medium'>
                      {item.title}
                    </h3>
                    <p className='text-lg text-gray-700'>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
