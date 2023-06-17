import NextImage from 'next/image';

import tw from 'tailwind-styled-components';

export const Title = tw.h1`
  mb-6
  text-3xl
  font-bold
`;

export const Subtitle = tw.strong`
  mb-4
  block
  text-xl
  font-bold
  leading-relaxed
`;

export const Paragraph = tw.p`
  mb-2
  text-xl
  font-normal
  leading-relaxed
`;

export const ImageContainer = tw.div`
  relative
  h-96
  w-full
`;

export const Image = tw(NextImage)`
  rounded-xl
  object-cover
  object-center
`;
