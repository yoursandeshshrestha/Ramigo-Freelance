'use client';

import Image from 'next/image';
import Link from 'next/link';

export const AdHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-white border-b border-gray-200 py-4">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/remigo-logo-full-dark.png"
              alt="Remigo"
              width={120}
              height={34}
              priority
            />
          </Link>

          {/* Phone Number */}
          <a
            href="tel:+441234567890"
            className="font-hanken text-sm md:text-base text-brand-black hover:text-remigo-red transition-colors cursor-pointer flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">0123 456 7890</span>
          </a>
        </div>
      </div>
    </header>
  );
};
