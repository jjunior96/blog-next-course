import { HTMLAttributes } from 'react';

import * as S from './styles';

type PreProps = HTMLAttributes<HTMLPreElement> & {
  children: React.ReactNode;
  'data-language'?: string;
};

export const Pre = ({ children, ...props }: PreProps) => {
  const lang = `.${props['data-language'] ?? 'shell'}`;

  return (
    <S.Container>
      <S.Header>
        <p>{lang}</p>
      </S.Header>
      <S.PreTag {...props}>{children}</S.PreTag>
    </S.Container>
  );
};
