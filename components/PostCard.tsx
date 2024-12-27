import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/app/types/blog.types';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <>
    <Link
      role='link'
      href={`/blog/${post.slug}`}
      className="block group hover:transform hover:scale-105 transition-transform duration-200"
    >
      <article className="bg-primary rounded-lg shadow-lg overflow-hidden h-full flex flex-col justify-between" role='article'>
        <div className="relative w-full h-48">
          <Image
            src={post.imageUrl || `/fallback-image.jpg`}
            alt={post.title}
            role='img'
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        <div className="p-6 flex-grow"role='main'>
          <div className='h-full flex flex-col justify-between'>
            <h2 className="text-xl font-bold mb-2 text-primary-dark/40 group-hover:text-blue-600" role='heading'>
              {post.title}
            </h2>
            <div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>

              <div className="flex items-center space-x-4">
                <div className="relative w-8 h-8">
                  <Image
                    src={post.author.avatar || "/no-avatar.webp"}
                    alt={post.author.name}
                    fill
                    className="rounded-full"
                    sizes="(max-width: 268px) 50vw, (max-width: 300px) 25vw, 20vw"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(post.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
    </>
  );
}