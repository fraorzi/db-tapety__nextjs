import type { PropsWithChildren } from 'react';

import clsxm from '@/lib/clsxm';

import type { SectionTitleProps } from '@/components/UI/grid/SectionTitle';
import SectionTitle from '@/components/UI/grid/SectionTitle';

interface SectionProps extends SectionTitleProps {
  accent?: boolean;
}

const Section = ({ title, subtitle, accent, children }: PropsWithChildren<SectionProps>) => {
  return (
    <section className={clsxm('py-12', accent && 'bg-gray-100')}>
      {title || subtitle ? <SectionTitle title={title} subtitle={subtitle} /> : null}
      {children}
    </section>
  );
};

export default Section;
