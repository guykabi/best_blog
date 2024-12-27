import { Suspense } from 'react';
import { fetchPosts } from '@/actions/posts';
import BlogList from '@/components/PostsList';
import SearchBar from '@/components/SearchBar';


export default async function HomePage() {
  const initialData = await fetchPosts(1);

  return (
    <main className="container mx-auto px-4 py-8">
      <SearchBar />
      <Suspense fallback={<div>Loading posts...</div>}>
        <BlogList initialData={initialData} />
      </Suspense>
    </main>
  );
}