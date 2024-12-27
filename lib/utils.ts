import { format, parseISO } from "date-fns";
import { AUTHORS_NAMES, DEFAULT_IMAGES } from "./constants";
import { BlogPost, RawBlogPost } from "@/app/types/blog.types";


export function formatDate(dateString: string): string {
  try {
    const date = parseISO(dateString);
    return format(date, 'MMMM d, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // Return original string if fails
  }
}



//Adds more fields - raw one doesn't have much...
export const formatPosts = (posts: RawBlogPost[]): BlogPost[] => {
  return posts.map((post: RawBlogPost) => ({
    id: post.id,
    slug: post.id.toString(),
    title: post.title,
    content: post.body,
    description: post.body.slice(0, 150) + '...',
    author: {
      name: getRandomProperty().author,
      avatar: `/no-avatar.webp`,
    },
    publishedAt: new Date().toISOString(),
    imageUrl: getRandomProperty().image
  }));
}

//Random name & image pick
export const getRandomProperty = (): {author: string, image: string} => {
  const author: string = AUTHORS_NAMES[Math.floor(Math.random() * AUTHORS_NAMES.length)];
  const image: string =  DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)]

  return{ author, image }
};