import { BlogPost } from '@/types/blog';
import { BlogPostCard } from './BlogPostCard';

interface BlogRelatedPostsProps {
  posts: BlogPost[];
  currentCategory: string;
}

export function BlogRelatedPosts({ posts, currentCategory }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="font-trocchi text-3xl md:text-4xl text-brand-black mb-4">
            More from {currentCategory}
          </h2>
          <p className="font-hanken text-base text-brand-black/70">
            Continue reading related articles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
