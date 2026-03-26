import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-white flex items-center justify-center p-6">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#DB3B3B', opacity: 0.06 }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: '#8ECAFE', opacity: 0.08 }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: '#FDB932', opacity: 0.04 }}></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logos/remigo-full-dark.png"
              alt="Remigo"
              width={140}
              height={40}
            />
          </Link>
        </div>

        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-trocchi text-9xl md:text-[12rem] text-brand-black/10 leading-none select-none">
            404
          </h1>
        </div>

        {/* Main Message */}
        <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 leading-tight -mt-24">
          Page not found
        </h2>

        <p className="font-hanken text-xl md:text-2xl text-brand-black/70 mb-12 leading-relaxed max-w-xl mx-auto">
          Looks like this page has gone on holiday. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/" className="cursor-pointer">
            <Button variant="primary" size="lg">
              ← Back to homepage
            </Button>
          </Link>
          
        </div>

        {/* Popular Links */}
        <div className="pt-8 border-t border-gray-200 max-w-lg mx-auto">
          <p className="font-hanken text-sm text-brand-black/60 mb-4">
            Popular pages:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/remortgage"
              className="font-hanken text-brand-black/70 hover:text-remigo-red transition-colors cursor-pointer"
            >
              Remortgage
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/first-time-buyer"
              className="font-hanken text-brand-black/70 hover:text-remigo-red transition-colors cursor-pointer"
            >
              First-Time Buyer
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/self-employed-mortgage"
              className="font-hanken text-brand-black/70 hover:text-remigo-red transition-colors cursor-pointer"
            >
              Self-Employed
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/about"
              className="font-hanken text-brand-black/70 hover:text-remigo-red transition-colors cursor-pointer"
            >
              About
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/contact"
              className="font-hanken text-brand-black/70 hover:text-remigo-red transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 max-w-lg mx-auto">
          <p className="font-hanken text-sm text-brand-black/60 mb-4">
            Need help? Get in touch:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+441234567890"
              className="flex items-center gap-2 font-hanken text-lg text-remigo-red hover:text-remigo-red/80 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0123 456 7890
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a
              href="mailto:hello@remigo.co.uk"
              className="flex items-center gap-2 font-hanken text-lg text-remigo-red hover:text-remigo-red/80 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@remigo.co.uk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
