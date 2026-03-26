import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-brand-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="font-trocchi text-5xl md:text-6xl text-brand-black mb-6">
          Article Not Found
        </h1>
        <p className="font-hanken text-lg text-brand-black/70 mb-8">
          Sorry, we couldn't find the article you're looking for. It may have been moved or removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="px-8 py-3 bg-remigo-red text-brand-white font-hanken font-semibold rounded-full hover:bg-remigo-red/90 transition-colors cursor-pointer"
          >
            Browse All Articles
          </Link>
          <Link
            href="/"
            className="px-8 py-3 bg-brand-white text-brand-black border border-gray-200 font-hanken font-semibold rounded-full hover:border-remigo-red transition-colors cursor-pointer"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
