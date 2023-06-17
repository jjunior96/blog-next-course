import { allPosts } from 'contentlayer/generated';

import { formatPosts, paginationPosts } from '@/functions';

type GetPostAllParams = {
  limit?: number;
  currentPage?: number;
};

export const PostService = {
  getAll: ({ limit = 10, currentPage = 1 }: GetPostAllParams = {}) => {
    const formattedPosts = formatPosts(allPosts);
    const numbPages = Math.ceil(formattedPosts.length / limit);
    const paginatePosts = paginationPosts(formattedPosts, limit, currentPage);

    return {
      posts: paginatePosts,
      numbPages,
      currentPage
    };
  },
  getBySlug: (slug: string) => {
    const formattedPosts = formatPosts(allPosts);
    const post = formattedPosts.find((post) => post.slug === slug);

    return post;
  }
};
