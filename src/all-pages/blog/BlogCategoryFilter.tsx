'use client';

import { BlogCategory } from '@/types/blog';

interface BlogCategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function BlogCategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-6 py-2.5 rounded-full font-hanken font-semibold text-sm transition-all cursor-pointer ${
          selectedCategory === null
            ? 'bg-remigo-red text-brand-white'
            : 'bg-brand-white text-brand-black border border-gray-200 hover:border-remigo-red'
        }`}
      >
        All Posts
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2.5 rounded-full font-hanken font-semibold text-sm transition-all cursor-pointer ${
            selectedCategory === category
              ? 'bg-remigo-red text-brand-white'
              : 'bg-brand-white text-brand-black border border-gray-200 hover:border-remigo-red'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
