/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useCallback } from "react";
import { useBlogStore } from "@/store/blogStore";
import { fetchPosts } from "@/actions/posts";
import { BlogListResponse } from "@/app/types/blog.types";
import BlogCard from "./PostCard";
import NoData from "./NoData";
import { Button } from "./Button";

interface BlogListProps {
  initialData: BlogListResponse;
}

export default function BlogList({ initialData }: BlogListProps) {
  const {
    posts,
    skip,
    hasMore,
    isLoading,
    searchQuery,
    setPosts,
    appendtPosts,
    setSkip,
    setHasMore,
    setLoading,
  } = useBlogStore();


  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setLoading(true);
    try {
      
      const data = await fetchPosts(skip + 10, searchQuery);
      appendtPosts(data.posts);
      setHasMore(data.hasMore);
      setSkip(skip + 10);
    } catch (error) {
      console.error("Error loading more posts:", error);
      throw new Error(`Failed to load more posts: ${error}`)
    } finally {
      setLoading(false);
    }
  }, [isLoading, hasMore, searchQuery]);


  useEffect(() => {
    setPosts(initialData.posts);
    setHasMore(initialData.hasMore);
  }, []);


  return (
    <div className="space-y-8">
      {posts?.length ? (
        <div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
  
          {hasMore ? (
            <div
              className="w-full h-20 flex items-center justify-center font-bold"
            >
              <Button 
              onAction={loadMore} 
              text={isLoading ? "Loading more posts..." : "Show me more..."}
              disabled={!hasMore}
              />
            </div>
          ) : (
            <div className="w-full h-20 flex items-center justify-center font-bold">
              <p>No more posts to show</p>
            </div>
          )}
        </div>
      ) : (
        <NoData />
      )}

    </div>
  );
}
