import { notFound } from 'next/navigation';

export default function User({ params }: { params: { userId: string } }) {
  if (params.userId !== '10') {
    notFound();
  }

  return (
    <div>
      <h1>User Id: {params.userId}</h1>
    </div>
  );
}
