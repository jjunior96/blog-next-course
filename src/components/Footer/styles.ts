import tw from 'tailwind-styled-components';

export const Container = tw.footer`
  flex
  flex-col
  border-t
  border-slate-600
  pb-4 
  pt-6
`;

export const Content = tw.div`
  flex
  w-full
  justify-between
  pb-10
`;

export const Section = tw.div`
  flex
  max-w-[8rem]
  flex-col
  gap-6
  sm:max-w-xs
`;

export const Title = tw.p`
  text-bold 
  text-xl
`;

export const Navigation = tw.nav``;

export const CopyrightContainer = tw.div`
  mt-3
  flex
  w-full
  items-center
  justify-center
`;

export const Copyright = tw.p`
  mb-2
  max-w-[18rem]
  text-center
  text-gray-500 sm:max-w-fit
`;
