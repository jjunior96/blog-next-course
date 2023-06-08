import { allPosts } from 'contentlayer/generated';

import { formatPosts } from '@/functions';

export const PostService = {
  getAll: () => {
    const formattedPosts = formatPosts(allPosts);

    return {
      posts: formattedPosts
    };
  },
  getBySlug: (slug: string) => {
    const formattedPosts = formatPosts(allPosts);
    const post = formattedPosts.find((post) => post.slug === slug);

    return post;
  }
};
