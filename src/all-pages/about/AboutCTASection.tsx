'use client';

import { useFormModal } from '@/components/FormModalProvider';

export function AboutCTASection() {
  const { openForm } = useFormModal();

  return (
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
  );
}
