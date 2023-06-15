import { siteConfig } from '@/config';
import { paginationPages } from '@/functions';
import { PostService } from '@/services';

import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';

type PageProps = {
  params: { page: string };
};

export function generateStaticParams() {
  const { posts } = PostService.getAll();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }: PageProps) {
  const currentPage = +params.page;
  const { posts } = PostService.getAll({ currentPage });

  if (!posts.length) {
    return {
      title: 'Não há posts'
    };
  }

  return {
    title: `Página ${currentPage}`,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}/${params.page}`,
      title: 'Página ' + currentPage,
      description: 'Página ' + currentPage,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${posts[0].frontmatter.image}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: posts[0].frontmatter.title,
      description: posts[0].frontmatter.description,
      images: [`${siteConfig.url}${posts[0].frontmatter.image}`]
    }
  };
}

export default function Page({ params }: PageProps) {
  const currentPage = +params.page;

  const { posts, numbPages } = PostService.getAll({ currentPage });
  const { prevPage, nextPage } = paginationPages(currentPage);

  if (!posts.length) {
    return (
      <div>
        <h2>Não há posts</h2>
      </div>
    );
  }

  return (
    <>
      <PostsList posts={posts} />

      <Pagination
        currentPage={currentPage}
        numbPages={numbPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
}
