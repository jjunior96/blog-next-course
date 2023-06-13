import { Link } from '@/components/Link';

import * as S from './styles';

export default function AboutPage() {
  return (
    <main>
      <S.Subtitle>Sobre mim</S.Subtitle>

      <S.ImageContainer>
        <S.Image
          src="/assets/images/image-post.jpeg"
          alt="Foto de exemplo"
          fill
        />
      </S.ImageContainer>

      <S.Subtitle>Primeiramente, agradeço por estar aqui.</S.Subtitle>

      <S.Paragraph>
        Sou apaixonado por Frontend, toda a parte gráfica da aplicação,
        trabalhar com fontes, cores, interatividade... Passo horas trabalhando
        com tudo isso sem ver o tempo passar.
      </S.Paragraph>

      <S.Paragraph>
        Conheci programação aos 15 anos, no curso técnico que era integrado ao
        Ensino Médio, onde tive o contato com HTML, CSS e Javascript.
      </S.Paragraph>

      <S.Paragraph>
        Fiz alguns cursos específicos sobre Gatsby, Javascript ES6+, GraphQL,
        mas na maior parte do tempo, estou lendo documentações e tentando
        aprender algo novo.
        <Link
          href="https://www.google.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nome da empresa onde voce trabalha
        </Link>
      </S.Paragraph>

      <S.Paragraph>
        Nas horas vagas, além de ler, gosto de desenhar. Desenho desde criança,
        dediquei alguns anos da minha vida aprendendo desenho. Em 2015 adquiri
        um mesa digitalizadora (era meu sonho) e comecei a estudar pintura
        digital.
      </S.Paragraph>
    </main>
  );
}
