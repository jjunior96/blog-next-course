import { mainConfig } from '@/config';

import { Logo } from '@/components/Logo';
import { MainNav } from '@/components/MainNav';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <div className="hidden lg:block">
          <MainNav items={mainConfig} />
        </div>
      </S.Content>
    </S.Container>
  );
};
