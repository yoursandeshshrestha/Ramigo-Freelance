'use client';

import React from 'react';
import { Button } from '@/components/ui';
import Image from 'next/image';
import { useFormModal } from '@/components/FormModalProvider';

export const HeroSection: React.FC = () => {
  const { openForm } = useFormModal();

  const handleGetQuote = () => {
    openForm();
  };

  return (
    <section className="relative h-screen bg-brand-white overflow-hidden pt-24">
      <div className="relative flex flex-col lg:flex-row h-full">
        {/* Left Column - Content (50%) */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20 lg:py-0 lg:w-[50%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="font-jetbrains text-[10px] md:text-xs tracking-widest text-brand-black/60 uppercase border border-gray-300 bg-gray-100 px-4 py-2 rounded-full cursor-pointer">
              Whole-of-market · FCA Regulated
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-trocchi text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-8 tracking-tight text-brand-black">
            Your mortgage,
            <br />
            <span className="text-remigo-red">sorted by mates</span>
            <br />
            who get it.
          </h1>

          {/* Description */}
          <p className="font-hanken text-base md:text-lg lg:text-xl text-brand-black/70 max-w-xl mb-10 leading-relaxed">
            Remortgaging, buying your first place, or self-employed and told it&apos;s &quot;complicated&quot;?
            We compare thousands of deals, cut the jargon, and get you the right one. Fast.
          </p>

          {/* CTA Button */}
          <div className="space-y-4 mb-8">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetQuote}
              className="uppercase tracking-wide font-hanken font-semibold"
            >
              Get your free quote
            </Button>

            <p className="font-jetbrains text-xs text-brand-black/60 uppercase tracking-widest">
              60 seconds · No credit check
            </p>
          </div>
        </div>

        {/* Right Column - Image (50%) */}
        <div className="relative hidden lg:block lg:w-[50%] h-full">
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}>
            <Image
              src="/hero-women.jpg"
              alt="Remigo mortgage advisor"
              fill
              className="object-cover"
              priority
              unoptimized={process.env.NODE_ENV === 'development'}
            />
          </div>

          {/* Floating Stat Cards */}
          {/* 90+ Lenders - Top Left */}
          <div className="absolute top-[15%] left-[0%] bg-sky-blue rounded-3xl px-6 py-4 shadow-2xl z-10">
            <div className="text-brand-black font-bold text-4xl font-trocchi leading-none">90+</div>
            <div className="text-brand-black/70 text-[10px] uppercase tracking-widest font-jetbrains mt-3">Lenders</div>
          </div>

          {/* 4.9/5 Trustpilot - Center */}
          <div className="absolute top-[7%] right-[30%] bg-amber rounded-3xl px-7 py-5 shadow-2xl z-10">
            <div className="text-brand-black font-bold text-5xl font-trocchi leading-none">4.9/5</div>
            <div className="text-brand-black/70 text-[10px] uppercase tracking-widest font-jetbrains mt-3">Trustpilot</div>
          </div>

          {/* £0 Broker Fees - Right */}
          <div className="absolute top-[66%] right-[40%] bg-remigo-red rounded-3xl px-7 py-5 shadow-2xl z-10">
            <div className="text-brand-white font-bold text-5xl font-trocchi leading-none">£0</div>
            <div className="text-brand-white/90 text-[10px] uppercase tracking-widest font-jetbrains mt-3">Broker Fees</div>
          </div>

          {/* 5k+ Clients - Bottom Left */}
          <div className="absolute bottom-[25%] left-[10%] bg-burgundy rounded-3xl px-6 py-4 shadow-2xl z-10">
            <div className="text-brand-white font-bold text-4xl font-trocchi leading-none">5k+</div>
            <div className="text-brand-white/90 text-[10px] uppercase tracking-widest font-jetbrains mt-3">Clients helped</div>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden relative w-full h-[400px]">
        <Image
          src="/hero-women.jpg"
          alt="Remigo mortgage advisor"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Trust Signals */}
      <div className="lg:hidden px-6 py-12 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-sky-blue rounded-2xl px-5 py-4 text-center">
            <div className="text-brand-black font-bold text-3xl font-trocchi">90+</div>
            <div className="text-brand-black/80 text-[10px] uppercase tracking-wider font-jetbrains">Lenders</div>
          </div>
          <div className="bg-amber rounded-2xl px-5 py-4 text-center">
            <div className="text-brand-black font-bold text-3xl font-trocchi">4.9/5</div>
            <div className="text-brand-black/80 text-[10px] uppercase tracking-wider font-jetbrains">Trustpilot</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-remigo-red rounded-2xl px-5 py-4 text-center">
            <div className="text-brand-white font-bold text-3xl font-trocchi">£0</div>
            <div className="text-brand-white/90 text-[10px] uppercase tracking-wider font-jetbrains">Broker Fees</div>
          </div>
          <div className="bg-burgundy rounded-2xl px-5 py-4 text-center">
            <div className="text-brand-white font-bold text-3xl font-trocchi">5k+</div>
            <div className="text-brand-white/90 text-[10px] uppercase tracking-wider font-jetbrains">Clients helped</div>
          </div>
        </div>
      </div>

    </section>
  );
};
