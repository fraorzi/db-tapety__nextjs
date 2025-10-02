import clsx from 'clsx';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={clsx('group relative overflow-hidden rounded-lg bg-white p-8', className)}>
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

export default FeatureCard;
