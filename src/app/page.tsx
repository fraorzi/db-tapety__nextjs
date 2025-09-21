import AboutSection from '@/components/features/AboutSection';
import ContactSection from '@/components/features/ContactSection';
import GallerySection from '@/components/features/GallerySection';
import HeroSection from '@/components/features/HeroSection';
import ServicesSection from '@/components/features/ServicesSection';
import TestimonialsSection from '@/components/features/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
