import { BlogPost, BlogListResponse } from "@/app/types/blog.types";
import axiosInstance from "@/lib/api-instance";
import { formatPosts } from "@/lib/utils";

export async function fetchPosts(
  skip: number = 10,
  searchQuery: string = "",
  limit: number = 10
): Promise<BlogListResponse> {
  try {
    const { data: posts, headers } = await axiosInstance(
      `/posts?_start=${skip}&_limit=${limit}${
        searchQuery ? `&q=${searchQuery}` : ""
      }`
    );

    //Total documents found
    const total = Number(headers["x-total-count"] || 0);

    // Transform JSONPlaceholder data to match our BlogPost type
    const transformedPosts: BlogPost[] = formatPosts(posts);

    return {
      posts: transformedPosts,
      total,
      hasMore: skip < total,
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export async function fetchPost(postId: string): Promise<BlogPost> {
  try {
    const { data: post } = await axiosInstance(`/posts/${postId}`);
    const transformedPost: BlogPost = formatPosts([post])[0];
    return transformedPost || [];
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
