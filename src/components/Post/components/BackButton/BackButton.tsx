import * as S from './styles';

export const BackButton = () => {
  return (
    <S.Link href="/">
      <S.IcontContainer>
        <S.Icon size={20} />
      </S.IcontContainer>

      <S.Text>Voltar à listagem</S.Text>
    </S.Link>
  );
};
