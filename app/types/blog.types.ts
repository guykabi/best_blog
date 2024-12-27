export interface RawBlogPost {
  id: number;
  userId: string;
  title: string;
  body: string;
}

export interface BlogPost {
  id: number;
  slug?: string;
  title: string;
  content: string;
  description?: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  imageUrl: string;
}

//What is returns from fetchPosts action
export interface BlogListResponse {
  posts: BlogPost[];
  total: number;
  hasMore: boolean;
}