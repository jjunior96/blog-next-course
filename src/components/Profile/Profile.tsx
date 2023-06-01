import { Site } from '@/types';

import * as S from './styles';

type ProfileProps = {
  items: Site;
};

export const Profile = ({ items }: ProfileProps) => {
  return (
    <div>
      <S.Image
        src="/assets/images/profile.jpeg"
        alt="profile image"
        width={80}
        height={80}
        title="profile image"
        priority
      />

      <S.Title>{items.title}</S.Title>
      <S.Subtitle>{items.subtitle}</S.Subtitle>
    </div>
  );
};
