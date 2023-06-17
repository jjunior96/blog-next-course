import NextImage from 'next/image';
import Link from 'next/link';

import tw from 'tailwind-styled-components';

export const LinkContainer = tw(Link)<{ $isMain: boolean }>`
  hover:border-link
  w-full
  rounded-lg
  border-2
  border-transparent
  transition-colors
  duration-300
  p-3
  flex
  flex-col

  ${({ $isMain }) => `
    ${$isMain && `lg:flex-row mb-3`}
  `}
`;

export const ImageContainer = tw.div` 
  relative 
  h-80 
  w-full
`;

export const Image = tw(NextImage)`
  rounded-xl
  object-cover
  object-center
`;

export const Content = tw.div`
  pt-3
`;

export const TagsContainer = tw.div`
  mb-3
  flex
  flex-wrap
  gap-2
`;

export const Time = tw.time`
  text-gray-400
`;

export const Title = tw.p`
  mt-2
  max-w-md
  text-ellipsis
  text-2xl
  font-medium
  text-gray-50
`;

export const Description = tw.p`
  mt-3 
  text-gray-400
`;
