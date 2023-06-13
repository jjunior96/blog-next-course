import { AnchorHTMLAttributes } from 'react';

import * as S from './styles';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export const Link = ({ children, href, ...rest }: LinkProps) => {
  return (
    <S.Container href={href} {...rest}>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
