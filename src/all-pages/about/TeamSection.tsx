'use client';

import Image from 'next/image';

export function TeamSection() {
  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Photo */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden bg-brand-black/5">
            <Image
              src="/hero-women.jpg"
              alt="Kris - Mortgage Adviser"
              fill
              className="object-cover grayscale"
              unoptimized={process.env.NODE_ENV === 'development'}
            />
          </div>

          {/* Right - Content */}
          <div className="max-w-xl">
            {/* Name */}
            <h2 className="font-trocchi text-5xl md:text-6xl lg:text-7xl text-brand-black mb-8 leading-none">
              Kris<br />[Last Name]
            </h2>

            {/* Intro */}
            <div className="space-y-6 mb-8">
              <p className="font-hanken text-lg text-brand-black/70 leading-relaxed">
                Hello, I&apos;m Kris.
              </p>
              <p className="font-hanken text-lg text-brand-black/70 leading-relaxed">
                I&apos;m a mortgage and protection adviser based in [Location]. I&apos;m FCA regulated and CeMAP qualified with [X] years of experience helping clients find the right mortgage.
              </p>
              <p className="font-hanken text-lg text-brand-black/70 leading-relaxed">
                [Additional bio content: Approach to client service, specialist areas, what makes Kris different]
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-remigo-red rounded-full" />
                <p className="font-hanken text-base text-brand-black/70">
                  FCA Regulated · Registration: [XXXXXX]
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-remigo-red rounded-full" />
                <p className="font-hanken text-base text-brand-black/70">
                  CeMAP Qualified
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-remigo-red rounded-full" />
                <p className="font-hanken text-base text-brand-black/70">
                  [X] Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
