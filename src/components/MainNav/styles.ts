import tw from 'tailwind-styled-components';

import * as ListItemContainer from '@/components/List/components/ListItem/styles';
import * as ListContainer from '@/components/List/styles';

export const Nav = tw.nav`
  items-center
  justify-between
  hidden

  lg:flex
`;

export const List = tw.ul`
  flex
  gap-4
`;

export const ListItem = tw.li`
  text-md
  transition-colors
  duration-300
  ease-in-out
  hover:text-link
`;

export const Content = tw.div`
  z-50
  flex
  transition-colors
  duration-300
  hover:text-link
  lg:hidden
`;

export const ContainerMobible = tw.div`
  fixed
  left-0
  top-0
  z-30
  min-h-screen
  w-full
  overflow-hidden
  bg-primary/80
  pt-[4rem]
`;

export const NavMobible = tw.nav`
  mx-auto
  flex
  max-w-[80%]
  items-center
  justify-center
  rounded-2xl
  border
  border-gray-600
  bg-secundary
  py-3
  shadow-2xl
`;

export const ListMobible = tw(ListContainer.Container)`
  w-full
  flex-col
  px-4
`;

export const ListItemMobible = tw(ListItemContainer.Container)`
  border-b
  border-gray-600
  py-3
`;
