'use client';

import { useState } from 'react';
import { BlogPost } from '@/types/blog';
import { BlogPostCard } from './BlogPostCard';
import { BlogCategoryFilter } from './BlogCategoryFilter';

interface BlogListingSectionProps {
  posts: BlogPost[];
  categories: string[];
}

export function BlogListingSection({ posts, categories }: BlogListingSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <section className="bg-brand-white pt-40 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Hero Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 bg-remigo-red/10 text-remigo-red text-xs font-hanken font-semibold rounded-full uppercase tracking-wider">
              Expert Advice
            </span>
          </div>
          <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6">
            Mortgage & Protection Insights
          </h1>
          <p className="font-hanken text-lg text-brand-black/70 max-w-3xl">
            Practical guides, tips, and insights to help you navigate mortgages, remortgaging, and protection insurance. No jargon, just straight answers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <BlogCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Posts Count */}
        <div className="mb-8">
          <p className="font-hanken text-sm text-brand-black/75">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-hanken text-lg text-brand-black/75">
              No articles found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
