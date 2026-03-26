'use client';

import Image from 'next/image';

export function BrandPrinciplesSection() {
  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Label with decorative corners */}
        <div className="mb-6 inline-block relative">
          <span className="font-jetbrains text-xs tracking-widest text-brand-black/60 uppercase">
          The Foundation of Everything
          </span>
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-brand-black/20" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-brand-black/20" />
        </div>

        {/* Heading */}
        <h2 className="font-trocchi text-3xl md:text-4xl lg:text-5xl mb-12 leading-tight">
          <span className="text-remigo-red">Built on </span>
          <span className="text-brand-black">Principles</span>
          <br />
          <span className="text-brand-black">That Matter</span>
        </h2>

        {/* Bento Grid - Cards + Image */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Side - 3 Cards in Bento Layout */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 - What Remigo is */}
            <div className="bg-sky-blue/10 rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="font-trocchi text-lg text-brand-black mb-2">
                What Remigo is
              </h3>
              <p className="font-hanken text-sm text-brand-black/70 leading-relaxed">
                A consumer-facing mortgage and protection broker. We exist to make the mortgage process simple, transparent, and stress-free.
              </p>
            </div>

            {/* Card 2 - Why it exists */}
            <div className="bg-amber/10 rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="font-trocchi text-lg text-brand-black mb-2">
                Why it exists
              </h3>
              <p className="font-hanken text-sm text-brand-black/70 leading-relaxed">
                Most people find mortgages overwhelming — the jargon, the paperwork, the feeling you need to be a financial expert. We built Remigo to fix that.
              </p>
            </div>

            {/* Card 3 - What makes it different (Full width) */}
            <div className="col-span-2 bg-remigo-red/10 rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-trocchi text-lg text-brand-black mb-2">
                What makes it different
              </h3>
              <p className="font-hanken text-sm text-brand-black/70 leading-relaxed">
                FCA regulated advisers who search the whole market (90+ lenders), explain everything in plain English, and charge £0 in broker fees.
              </p>
            </div>
          </div>

          {/* Right Side - Image (matches height of left cards grid) */}
          <div className="relative rounded-3xl overflow-hidden bg-brand-black/5 h-full min-h-[500px]">
            <Image
              src="/hero-women.jpg"
              alt="Remigo team helping clients"
              fill
              className="object-cover"
              unoptimized={process.env.NODE_ENV === 'development'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
