import tw from 'tailwind-styled-components';

export const Nav = tw.nav`
  flex
  items-center
  justify-between
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
