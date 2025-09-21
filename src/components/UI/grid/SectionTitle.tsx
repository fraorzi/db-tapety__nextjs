import Container from '@/components/UI/grid/Container';
import Heading from '@/components/UI/typography/Heading';
import Paragraph from '@/components/UI/typography/Paragraph';

export interface SectionTitleProps {
  title?: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <Container>
      <div className='mb-8 text-left md:text-center'>
        {title && <Heading level={2} dangerouslySetInnerHTML={{ __html: title }} />}
        {subtitle && <Paragraph className='mt-4' dangerouslySetInnerHTML={{ __html: subtitle }} />}
      </div>
    </Container>
  );
};

export default SectionTitle;
