import { PostService } from '@/services';

import { Post } from '@/components/Post';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = PostService.getBySlug(params.slug);

  // TODO: checar se o post existe
  if (!post) {
    return null;
  }

  return (
    <>
      <Post post={post} />
    </>
  );
}
