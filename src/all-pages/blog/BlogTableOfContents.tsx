'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface BlogTableOfContentsProps {
  content: string;
}

export function BlogTableOfContents({ content }: BlogTableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^#{2,3}\s+(.+)$/gm;
    const extractedHeadings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[0].split(' ')[0].length; // Count # symbols
      const text = match[1].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      extractedHeadings.push({ id, text, level });
    }

    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    // Track scroll position and highlight active heading
    const handleScroll = () => {
      const headingElements = headings.map(({ id }) => ({
        id,
        element: document.getElementById(id),
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const { id, element } = headingElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-24 bg-brand-white rounded-2xl border border-gray-200 p-6">
      <h3 className="font-trocchi text-lg text-brand-black mb-4">
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <button
            key={id}
            onClick={() => scrollToHeading(id)}
            className={`block w-full text-left font-hanken text-sm transition-colors cursor-pointer ${
              level === 3 ? 'pl-4' : ''
            } ${
              activeId === id
                ? 'text-remigo-red font-semibold'
                : 'text-brand-black/70 hover:text-remigo-red'
            }`}
          >
            {text}
          </button>
        ))}
      </nav>
    </div>
  );
}
