import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
}

const Section = ({ id, className, children }: PropsWithChildren<SectionProps>) => {
  return (
    <section id={id} className={clsx('relative pt-24 pb-12', className)}>
      {children}
    </section>
  );
};

export default Section;
