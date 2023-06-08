import tw from 'tailwind-styled-components';

export const Container = tw.div`
  mt-4
  rounded-lg
  border-[1px]
  border-gray-700 
`;

export const Header = tw.div`
  flex
  w-full
  justify-between
  rounded-t-lg
  border-gray-700
  bg-[#19171d]
  px-3
  py-2
`;

export const PreTag = tw.pre`
  text-md
  overflow-x-auto
  bg-[#211d32]
  pb-3 pt-2
`;
