'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { BlogTableOfContents } from './BlogTableOfContents';
import { useFormModal } from '@/components/FormModalProvider';

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { openForm } = useFormModal();

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    if (!contentRef.current) return;

    // Convert markdown headings to HTML with IDs
    const content = contentRef.current;
    const headings = content.querySelectorAll('h2, h3');

    headings.forEach((heading) => {
      const text = heading.textContent || '';
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      heading.id = id;
    });
  }, []);

  // Convert markdown to basic HTML (simple implementation)
  const renderContent = (markdown: string) => {
    return markdown
      .split('\n')
      .map((line, index) => {
        // H2 headings
        if (line.startsWith('## ')) {
          return `<h2 key="${index}" class="font-trocchi text-2xl md:text-3xl text-brand-black mb-4 mt-8">${line.slice(3)}</h2>`;
        }
        // H3 headings
        if (line.startsWith('### ')) {
          return `<h3 key="${index}" class="font-trocchi text-xl md:text-2xl text-brand-black mb-3 mt-6">${line.slice(4)}</h3>`;
        }
        // Bold text
        if (line.startsWith('- **') && line.includes('**:')) {
          const match = line.match(/- \*\*(.+)\*\*: (.+)/);
          if (match) {
            return `<li key="${index}" class="mb-3"><strong class="text-brand-black">${match[1]}</strong>: ${match[2]}</li>`;
          }
        }
        // List items
        if (line.startsWith('- ')) {
          return `<li key="${index}" class="mb-2">${line.slice(2)}</li>`;
        }
        // Numbered lists
        if (/^\d+\.\s/.test(line)) {
          return `<li key="${index}" class="mb-2">${line.replace(/^\d+\.\s/, '')}</li>`;
        }
        // Paragraphs
        if (line.trim() && !line.startsWith('#') && !line.startsWith('-') && !line.startsWith('*')) {
          return `<p key="${index}" class="mb-4">${line}</p>`;
        }
        return '';
      })
      .join('');
  };

  return (
    <article className="bg-brand-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Featured Image */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-gray-100">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 py-6 md:py-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="mb-4">
                  <Link
                    href={`/blog?category=${post.category}`}
                    className="inline-block px-4 py-1.5 bg-remigo-red text-brand-white text-xs font-hanken font-semibold rounded-full hover:bg-remigo-red/90 transition-colors cursor-pointer"
                  >
                    {post.category}
                  </Link>
                </div>
                <h1 className="font-trocchi text-3xl md:text-4xl lg:text-5xl text-brand-white mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-brand-white/80 font-hanken">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{formattedDate}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Excerpt */}
            <p className="font-hanken text-xl text-brand-black/80 leading-relaxed mb-8 pb-8 border-b border-gray-200">
              {post.excerpt}
            </p>

            {/* Article Content */}
            <div
              ref={contentRef}
              className="prose prose-lg max-w-none font-hanken text-brand-black/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
            />

            {/* Mid-Article CTA */}
            <div className="my-12 bg-remigo-red/10 rounded-2xl p-8 border border-remigo-red/20">
              <h3 className="font-trocchi text-2xl text-brand-black mb-4">
                Ready to get started?
              </h3>
              <p className="font-hanken text-base text-brand-black/70 mb-6">
                Get your free mortgage quote in 60 seconds. We compare deals from over 90 lenders to find you the best rate.
              </p>
              <button
                onClick={() => openForm()}
                className="px-8 py-3 bg-remigo-red text-brand-white font-hanken font-semibold rounded-full hover:bg-remigo-red/90 transition-colors cursor-pointer"
              >
                Get your free quote →
              </button>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-gray-100 text-brand-black/70 text-sm font-hanken rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <BlogTableOfContents content={post.content} />
          </aside>
        </div>
      </div>
    </article>
  );
}
