'use client';

import React from 'react';
import { Button } from '@/components/ui';
import { useFormModal } from '@/components/FormModalProvider';

export const FinalCTASection: React.FC = () => {
  const { openForm } = useFormModal();

  const handleGetQuote = () => {
    openForm();
  };

  return (
    <section className="relative bg-brand-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-remigo-red rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 leading-tight">
            Ready to find your perfect<br />
            <span className="text-remigo-red"> mortgage?</span>
          </h2>

          <p className="font-hanken text-lg md:text-xl text-brand-black/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            It takes 60 seconds to get started. No credit check, no jargon, no pressure.
            Just straight answers from people who get it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetQuote}
              className="font-hanken font-semibold"
            >
              Get your free quote →
            </Button>

            <a
              href="tel:+441234567890"
              className="font-hanken text-brand-black/70 hover:text-remigo-red transition-colors cursor-pointer"
            >
              or call us on <span className="font-semibold">0123 456 7890</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs text-brand-black/50 font-jetbrains uppercase tracking-widest">
            <span>✓ FCA Regulated</span>
            <span>✓ 90+ Lenders</span>
            <span>✓ £0 Fees</span>
            <span>✓ Expert Advice</span>
          </div>
        </div>
      </div>
    </section>
  );
};
