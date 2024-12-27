/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/Button";
import { fetchPost } from "@/actions/posts";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  //On nextjs 15 - for dynamic routes, patams became async
  const { slug: postId } = await params;
  const post = await fetchPost(postId);

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="relative w-full h-[400px] mb-8 relative">
        <div className="absolute z-10 p-5">
          <Button text="Return" path="/" borderBottom={true} />
        </div>
        <Image
          src={post.imageUrl || `/fallback-image.jpg`}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10">
            <Image
              src={post.author.avatar || "/no-avatar.webp"}
              alt={post.author.name}
              fill
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-gray-500">{formatDate(post.publishedAt)}</p>
          </div>
        </div>
      </header>
      
       {/* Truncating description for read more... */}
      <div className="prose prose-lg max-w-none">
        {post.content.split("\n").map((paragraph: any, index: any) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
