'use client';

import * as S from './styles';
import { useBackToTop } from './useBackToTop';

export const BackToTop = () => {
  const { show } = useBackToTop();

  return (
    <>
      {/* The check needs for all, because if not, it will launch an hydration error */}
      {show && (
        <S.Container>
          <S.Button
            title="Voltar ao topo"
            aria-label="Voltar ao topo"
            onClick={() => window.scrollTo(0, 0)}
          >
            <S.Icon />
          </S.Button>
        </S.Container>
      )}
    </>
  );
};
