import { notFound } from 'next/navigation';

import { PostService } from '@/services';

import { Post } from '@/components/Post';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = PostService.getBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Post post={post} />
    </>
  );
}
