import { BlogPost } from '@/models';

export const paginationPosts = (posts: BlogPost[], limit = 10, page = 1) => {
  let totalPosts: BlogPost[] = [];

  if (page === 1) {
    totalPosts = posts.slice(0, limit);
  }

  if (page === 2) {
    totalPosts = posts.slice(limit + 1, limit * page);
  }

  if (page > 2) {
    totalPosts = posts.slice(limit * page - limit, limit * page);
  }

  return totalPosts;
};
