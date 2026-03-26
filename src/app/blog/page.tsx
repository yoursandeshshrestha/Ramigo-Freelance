import { BlogListingSection } from '@/all-pages/blog';
import { getAllPosts, getAllCategories } from '@/data/blog-posts';

export const metadata = {
  title: 'Mortgage & Protection Insights | Remigo Blog',
  description:
    'Expert mortgage advice, guides, and insights. From remortgaging to first-time buyer tips, protection insurance, and self-employed mortgages.',
  robots: 'index, follow',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main className="bg-brand-white">
      <BlogListingSection posts={posts} categories={categories} />
    </main>
  );
}
