'use client';

import React from 'react';
import { Button } from '@/components/ui';
import { useFormModal } from '@/components/FormModalProvider';

interface ServiceHeroSectionProps {
  title: string;
  description: string;
  mortgageType: string;
}

export const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  title,
  description,
  mortgageType,
}) => {
  const { openForm } = useFormModal();

  return (
    <section className="relative min-h-screen bg-brand-white pt-32 pb-20 md:pb-24 lg:pb-28 overflow-hidden flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-remigo-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-jetbrains text-[10px] md:text-xs tracking-widest text-brand-black/60 uppercase border border-gray-300 bg-gray-100 px-4 py-2 rounded-full cursor-pointer">
                Expert Advice · £0 Fees
              </span>
            </div>

            {/* Title */}
            <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-black mb-6 leading-[1.1] tracking-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="font-hanken text-lg md:text-xl text-brand-black/70 mb-10 leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <div className="space-y-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openForm()}
                className="font-hanken font-semibold"
              >
                Get your free quote →
              </Button>

              <p className="font-jetbrains text-xs text-brand-black/60 uppercase tracking-widest">
                60 seconds · No credit check
              </p>
            </div>
          </div>

          {/* Right Column - Bento Grid */}
          <div className="grid grid-cols-6 grid-rows-4 gap-4 h-[400px]">
            {/* 90+ Lenders - Large Card */}
            <div className="col-span-4 row-span-2 bg-sky-blue rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-brand-black font-bold text-5xl font-trocchi leading-none mb-3">90+</div>
                <div className="text-brand-black/70 text-xs uppercase tracking-widest font-jetbrains">Lenders Compared</div>
              </div>
            </div>

            {/* £0 Fees - Tall Card */}
            <div className="col-span-2 row-span-3 bg-remigo-red rounded-3xl p-6 shadow-xl flex flex-col justify-center">
              <div className="text-brand-white font-bold text-5xl font-trocchi leading-none mb-3">£0</div>
              <div className="text-brand-white/90 text-xs uppercase tracking-widest font-jetbrains">Broker Fees</div>
            </div>

            {/* 5k+ Clients - Wide Card */}
            <div className="col-span-4 row-span-2 bg-burgundy rounded-3xl p-6 shadow-xl flex flex-col justify-center">
              <div className="text-brand-white font-bold text-5xl font-trocchi leading-none mb-3">5k+</div>
              <div className="text-brand-white/90 text-xs uppercase tracking-widest font-jetbrains">Happy Clients</div>
            </div>

            {/* 4.9/5 - Small Card */}
            <div className="col-span-2 row-span-1 bg-amber rounded-3xl p-5 shadow-xl flex flex-col justify-center">
              <div className="text-brand-black font-bold text-3xl font-trocchi leading-none mb-2">4.9/5</div>
              <div className="text-brand-black/70 text-[10px] uppercase tracking-widest font-jetbrains">Trustpilot</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
