import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Thank You | Remigo',
  description: 'Thank you for your enquiry. We\'ll be in touch shortly.',
  robots: 'noindex, nofollow',
};

interface ThankYouPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const name = params.name as string | undefined;

  // Extract first name if full name provided
  const firstName = name ? name.split(' ')[0] : null;

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
          <Image
            src="/remigo-logo-full-dark.png"
            alt="Remigo"
            width={140}
            height={40}
          />
        </div>

        {/* Main Message */}
        <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 leading-tight">
          {firstName ? `Thank you, ${firstName}!` : 'Thank you!'}
        </h1>

        <p className="font-hanken text-xl md:text-2xl text-brand-black/70 mb-12 leading-relaxed max-w-xl mx-auto">
          Your details are with us. One of our mortgage specialists will call you within the hour.
        </p>

        {/* What Happens Next */}
        <div className="mb-12 max-w-xl mx-auto">
          <h2 className="font-trocchi text-2xl text-brand-black mb-6">
            What happens next?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-1">
                <Image
                  src="/others/right.png"
                  alt="Check"
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed text-left">
                We'll give you a quick call to understand your needs
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-1">
                <Image
                  src="/others/right.png"
                  alt="Check"
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed text-left">
                We'll compare deals from 90+ lenders to find your best options
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-1">
                <Image
                  src="/others/right.png"
                  alt="Check"
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed text-left">
                We'll handle the paperwork through to completion
              </p>
            </div>
          </div>
        </div>

        {/* Reassurance */}
        <p className="font-hanken text-base text-brand-black/60 mb-12 leading-relaxed max-w-lg mx-auto">
          No pressure, no jargon — just straight answers from mates who get it.
        </p>

        {/* Contact Info */}
        <div className="mb-12 pt-8 border-t border-gray-200 max-w-lg mx-auto">
          <p className="font-hanken text-sm text-brand-black/60 mb-6">
            Need to speak to us right away?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+441234567890"
              className="flex items-center gap-2 font-hanken text-lg text-remigo-red hover:text-remigo-red/80 transition-colors cursor-pointer"
            >
              <Image
                src="/icons/telephone.svg"
                alt="Phone"
                width={20}
                height={20}
                className="brightness-0"
                style={{ filter: 'invert(29%) sepia(89%) saturate(2355%) hue-rotate(343deg) brightness(92%) contrast(90%)' }}
              />
              0123 456 7890
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a
              href="mailto:hello@remigo.co.uk"
              className="flex items-center gap-2 font-hanken text-lg text-remigo-red hover:text-remigo-red/80 transition-colors cursor-pointer"
            >
              <Image
                src="/icons/mail.svg"
                alt="Email"
                width={20}
                height={20}
                className="brightness-0"
                style={{ filter: 'invert(29%) sepia(89%) saturate(2355%) hue-rotate(343deg) brightness(92%) contrast(90%)' }}
              />
              hello@remigo.co.uk
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-block font-hanken text-sm text-brand-black/60 hover:text-brand-black transition-colors cursor-pointer"
        >
          ← Back to homepage
        </Link>
      </div>
    </div>
  );
}
