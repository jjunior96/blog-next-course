import { Empty } from '@/components/Empty';
import { RecommendedPosts } from '@/components/RecommendedPosts';

export default function NotFound() {
  return (
    <Empty>
      <h1 className="text-center text-4xl font-extrabold">
        Oops. Essa página não foi encontrada.
      </h1>

      <p className="mt-4 text-center text-xl text-gray-400">
        Posts recomendados para você:
      </p>

      <RecommendedPosts />
    </Empty>
  );
}
