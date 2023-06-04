import Link from 'next/link';

import { MainNavType } from '@/models';

import * as S from './styles';

type MainNavProps = {
  items: MainNavType;
};

export const MainNav = ({ items }: MainNavProps) => {
  return (
    <>
      <S.Nav>
        <S.List>
          {items.mainNav.map((menu) => (
            <S.ListItem key={menu.href}>
              <Link href={menu.href}>{menu.title}</Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </>
  );
};
