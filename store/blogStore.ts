import { create } from "zustand";
import { BlogPost } from "@/app/types/blog.types";

interface BlogStore {
  posts: BlogPost[];
  searchQuery: string;
  skip: number;
  hasMore: boolean;
  isLoading: boolean;
  setSearchQuery: (query: string) => void;
  setPosts: (posts: BlogPost[]) => void;
  appendtPosts: (posts: BlogPost[]) => void;
  setSkip: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
  setLoading: (loading: boolean) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  searchQuery: "",
  skip: 10,
  hasMore: true,
  isLoading: false,
  setSearchQuery: (query) => set({ searchQuery: query, skip: 10 }),
  setPosts: (posts) => set({ posts }),
  appendtPosts: (posts) =>
    set((state) => ({ posts: [...state.posts, ...posts] })),
  setSkip: (amount: number) => set({ skip: amount }),
  setHasMore: (hasMore) => set({ hasMore }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
