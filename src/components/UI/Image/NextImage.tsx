import type { ImageProps } from 'next/image';
import Image from 'next/image';

const NextImage = ({ src, alt, ...props }: ImageProps) => {
  return <Image src={src} alt={alt} {...props} />;
};

export default NextImage;
