import clsx from 'clsx';

import Heading from '@/components/UI/typography/Heading';
import Paragraph from '@/components/UI/typography/Paragraph';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={clsx('group relative', className)}>
      <div className='absolute inset-0 rounded-lg bg-white shadow-lg transition-transform duration-500 group-hover:rotate-2'></div>
      <div className='relative z-10 overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-500 group-hover:-rotate-1'>
        <div className='p-8'>
          <div className='bg-cream group-hover:bg-secondary mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full transition-colors duration-500'>
            <div className='text-primary'>{icon}</div>
          </div>
          <Heading
            level={3}
            className='text-primary mb-4 text-center font-serif text-xl font-semibold'
          >
            {title}
          </Heading>
          <Paragraph className='text-center text-gray-600'>{description}</Paragraph>
        </div>
        <div className='bg-secondary h-1 w-0 transition-all duration-700 group-hover:w-full'></div>
      </div>
    </div>
  );
};

export default ServiceCard;
