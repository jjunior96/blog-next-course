import * as S from './styles';

type EmptyProps = {
  children: React.ReactNode;
};

export const Empty = ({ children }: EmptyProps) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
