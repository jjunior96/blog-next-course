import NextLink from 'next/link';

import tw from 'tailwind-styled-components';

export const Container = tw.div`

`;

export const Link = tw(NextLink)`
  flex
  items-center
`;

export const Text = tw.p`
  ml-1
`;
