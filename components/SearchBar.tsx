/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useCallback, useState } from "react";
import { useBlogStore } from "@/store/blogStore";
import { debounce } from "lodash";
import { fetchPosts } from "@/actions/posts";

export default function SearchBar() {
  const [localQuery, setLocalQuery] = useState("");
  const { setSearchQuery, setPosts, setHasMore, setLoading } = useBlogStore();

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      setLoading(true);
      try {
        const data = await fetchPosts(10, query);

        setPosts(data.posts);

        setHasMore(data.hasMore);
        setSearchQuery(query);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setLocalQuery(query);
    debouncedSearch(query);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <input
        type="search"
        role='search'
        className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 text-primary-dark bg-white placeholder-gray-400 text-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none"
        placeholder="Search blog posts..."
        value={localQuery}
        onChange={handleSearch}
        aria-label="Search blog posts"
      />
    </div>
  );
}
