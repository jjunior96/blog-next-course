import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';

import { BlogPost } from '@/models';

import * as S from './styles';

type PostsListProps = {
  posts: BlogPost[];
};

export const PostsList = ({ posts }: PostsListProps) => {
  const firstPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <S.Container>
      {firstPost && <PostCard post={firstPost} isMain />}

      <Grid sm={1} md={2} lg={3} gap={10}>
        {restPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </S.Container>
  );
};
