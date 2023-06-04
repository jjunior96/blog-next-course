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
