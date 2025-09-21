import { Inter, Playfair_Display } from 'next/font/google';
// import localFont from 'next/font/local';

export const fontSans = Inter({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  subsets: ['latin'],
});

export const fontSerif = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  subsets: ['latin'],
});

// export const fontSans = localFont({
//   display: 'swap',
//   variable: '--font-sans',
//   src: [
//     {
//       path: './../../public/fonts/your-font/your-font_Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './../../public/fonts/your-font/your-font_Regular-italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//   ],
// });
