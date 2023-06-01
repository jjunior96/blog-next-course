import Link from 'next/link';

import { HeaderNav } from '@/types';

import * as S from './styles';

type MainNavProps = {
  items: HeaderNav;
};

export const MainNav = ({ items }: MainNavProps) => {
  return (
    <>
      <S.Nav>
        <S.List>
          {items.mainNav.map((item) => (
            <S.ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </>
  );
};
