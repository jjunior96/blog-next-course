import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  min-h-[calc(100vh_-_30rem)] 
  w-full
  flex-col
  items-center 
`;

export const Content = tw.div`
  mt-8
  flex
  flex-col
  justify-center
`;
