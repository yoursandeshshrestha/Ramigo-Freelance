import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '@/types/blog';

interface BlogPostCardProps {
  post: BlogPostMetadata;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-brand-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 cursor-pointer"
    >
      {/* Featured Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-4 py-1.5 bg-remigo-red text-brand-white text-xs font-hanken font-semibold rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs text-brand-black/50 font-hanken mb-3">
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>

        {/* Title */}
        <h3 className="font-trocchi text-xl text-brand-black mb-3 group-hover:text-remigo-red transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="font-hanken text-sm text-brand-black/70 line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-remigo-red font-hanken font-semibold text-sm group-hover:gap-3 transition-all">
          Read article
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
