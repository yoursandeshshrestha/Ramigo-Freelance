'use client';

import Image from 'next/image';
import { useFormModal } from '@/components/FormModalProvider';

export function AboutPageClient() {
  const { openForm } = useFormModal();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-brand-white pt-40 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Top Label */}
          <div className="flex justify-center mb-8">
            <div className="relative inline-block">
              <span className="font-jetbrains text-xs tracking-widest text-remigo-red uppercase">
                About us
              </span>
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-remigo-red/30" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-remigo-red/30" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-6">
            <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-2">
              <span className="text-brand-black">Your mate in the</span>
              <br />
              <span className="text-brand-black/40">mortgage process</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <p className="font-hanken text-lg md:text-xl text-brand-black/60 leading-relaxed">
              Remigo is a friendly, modern mortgage platform. We&apos;re FCA regulated brokers who believe mortgages shouldn&apos;t be complicated. Trustworthy but not stuffy, digital-first but human when it counts.
            </p>
          </div>

          {/* Bento Grid Images */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Large image - left */}
            <div className="col-span-2 md:col-span-1 md:row-span-2 bg-brand-black/5 rounded-3xl overflow-hidden aspect-3/4 md:aspect-auto relative">
              <Image
                src="/hero-women.jpg"
                alt="Remigo team"
                fill
                className="object-cover"
                unoptimized={process.env.NODE_ENV === 'development'}
              />
            </div>

            {/* Top right image */}
            <div className="col-span-2 md:col-span-1 bg-brand-black/5 rounded-3xl overflow-hidden aspect-video relative">
              <Image
                src="/hero-women.jpg"
                alt="Mortgage advice"
                fill
                className="object-cover"
                unoptimized={process.env.NODE_ENV === 'development'}
              />
            </div>

            {/* Bottom right image */}
            <div className="col-span-2 md:col-span-1 bg-brand-black/5 rounded-3xl overflow-hidden aspect-video relative">
              <Image
                src="/hero-women.jpg"
                alt="Happy clients"
                fill
                className="object-cover"
                unoptimized={process.env.NODE_ENV === 'development'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story - What Remigo is, why it exists, what makes it different */}
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

      {/* Our Approach - How Remigo works differently */}
      <section className="relative bg-brand-white py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-remigo-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          {/* Label */}
          <div className="flex justify-center mb-6">
            <div className="relative inline-block">
              <span className="font-jetbrains text-xs tracking-widest text-remigo-red uppercase">
                Why us
              </span>
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-remigo-red/30" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-remigo-red/30" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="font-trocchi text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              <span className="text-brand-black">Why work </span>
              <span className="text-remigo-red">with us?</span>
            </h2>
            <p className="font-hanken text-lg md:text-xl text-brand-black/60 max-w-2xl mx-auto leading-relaxed">
              Find out why Remigo is better than comparison sites and traditional brokers.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Other Services */}
            <div className="bg-linear-to-br from-gray-50 to-gray-100/50 rounded-3xl p-10 md:p-12 border border-gray-200">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-full bg-remigo-red flex items-center justify-center">
                  <svg className="w-7 h-7 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-trocchi text-2xl md:text-3xl text-brand-black/60">
                  Other Services
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                  <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                    Just show you lists of products
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                  <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                    Charge £500-£1,000 in broker fees
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                  <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                    Tied to specific lenders only
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                  <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                    Confusing jargon and complexity
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                  <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                    No expert guidance or support
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                  <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                    You handle all the admin yourself
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Remigo */}
            <div className="bg-linear-to-br from-[#4CAF50]/10 to-[#4CAF50]/20 rounded-3xl p-10 md:p-12 border-2 border-[#4CAF50]/30">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-full bg-[#4CAF50] flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <Image
                  src="/remigo-logo-full-dark.png"
                  alt="Remigo"
                  width={120}
                  height={34}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                  <div className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                    Expert advisers who assess your situation
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                  <div className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                    £0 broker fees — expert advice at no cost
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                  <div className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                    Whole-of-market access to 90+ lenders
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                  <div className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                    Plain English — no jargon, no confusion
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                  <div className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                    Dedicated support through every step
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                  <div className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                    We handle all the admin and paperwork
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Photo, bio, qualifications, FCA details */}
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

      {/* Final CTA */}
      <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="bg-remigo-red rounded-[3rem] py-12 md:py-16 lg:py-20 px-8 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 leading-tight">
                Ready To Get Your<br />Free Mortgage Quote?
              </h2>
              <p className="font-hanken text-lg md:text-xl text-brand-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get expert mortgage advice in 60 seconds. Compare 90+ lenders, no jargon, no pressure, £0 fees.
              </p>

              {/* CTA Button */}
              <div className="max-w-xl mx-auto">
                <button
                  onClick={() => openForm()}
                  className="bg-brand-black text-brand-white hover:bg-brand-black/90 font-hanken font-semibold px-10 py-4 rounded-full transition-colors cursor-pointer text-base md:text-lg"
                >
                  Get your free quote →
                </button>
                <p className="font-hanken text-sm text-brand-white/80 mt-6">
                  FCA Regulated · £0 Fees · We&apos;ll call within the hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
