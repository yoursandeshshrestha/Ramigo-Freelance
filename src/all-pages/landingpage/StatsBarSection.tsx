'use client';

import React from 'react';
import { useFormModal } from '@/components/FormModalProvider';
import { Button } from '@/components/ui';

export const StatsBarSection: React.FC = () => {
  const { openForm } = useFormModal();

  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Heading & CTA */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="font-jetbrains text-sm tracking-widest text-remigo-red uppercase font-semibold">
                See Our Stats ↗
              </span>
            </div>

            <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-8 leading-tight">
              What We've <span className="text-[#d93b3b]">Achieved</span> With Our Incredible Community
            </h2>

            <div className="inline-block">
              <Button
                variant="primary"
                size="md"
                onClick={() => openForm()}
                className="font-hanken font-semibold"
              >
                Get Started Now
              </Button>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-2xl p-6 flex items-center gap-8">
              <div className="font-trocchi text-5xl md:text-6xl text-brand-black shrink-0">
                90+
              </div>
              <p className="font-hanken text-base text-brand-black/75 flex-1 text-right">
                Lenders across<br />the UK
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-2xl p-6 flex items-center gap-8">
              <div className="font-trocchi text-5xl md:text-6xl text-brand-black shrink-0">
                £0
              </div>
              <p className="font-hanken text-base text-brand-black/75 flex-1 text-right">
                Broker fees,<br />always free
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-2xl p-6 flex items-center gap-8">
              <div className="font-trocchi text-5xl md:text-6xl text-brand-black shrink-0">
                4.9
              </div>
              <p className="font-hanken text-base text-brand-black/75 flex-1 text-right">
                Trustpilot rating<br />from 7,772 reviews
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 rounded-2xl p-6 flex items-center gap-8">
              <div className="font-trocchi text-5xl md:text-6xl text-brand-black shrink-0">
                5,000+
              </div>
              <p className="font-hanken text-base text-brand-black/75 flex-1 text-right">
                Happy clients helped<br />find their perfect mortgage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
