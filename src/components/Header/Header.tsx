import Link from 'next/link';

import { Logo } from '@/components/Logo';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.Nav>
          <S.List>
            <S.ListItem>
              <Link href="/">Home</Link>
            </S.ListItem>
            <S.ListItem>
              <Link href="/articles">Articles</Link>
            </S.ListItem>
          </S.List>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};
