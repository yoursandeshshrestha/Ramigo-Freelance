export type BlogCategory =
  | 'Remortgage'
  | 'First-Time Buyers'
  | 'Self-Employed'
  | 'Protection'
  | 'Guides';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: string;
  featuredImage: string;
  tags?: string[];
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: string;
  featuredImage: string;
}
