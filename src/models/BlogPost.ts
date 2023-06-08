import { MDX } from 'contentlayer/core';

export type BlogPost = {
  slug: string;
  readingTime: number;
  body: MDX;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags?: string[] | undefined;
    image: string;
  };
};
