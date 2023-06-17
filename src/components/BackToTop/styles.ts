import tw from 'tailwind-styled-components';

import { ArrowUpIcon } from '@/components/Icons';

export const Container = tw.div`
  pointer-events-none
  fixed
  inset-0
  z-50
  h-full
  min-h-screen
  w-fulll
`;

export const Button = tw.button`
  group  
  pointer-events-auto
  absolute
  bottom-8
  right-8
  flex
  items-center
  justify-center
  h-12
  w-12
  rounded-full
  bg-primary
  text-white
  transition-colors
  duration-300
  ease-in-out
  hover:bg-slate-500
`;

export const Icon = tw(ArrowUpIcon)`
  text-2xl
  transition-all
  duration-300
  group-hover:animate-bounce
`;
