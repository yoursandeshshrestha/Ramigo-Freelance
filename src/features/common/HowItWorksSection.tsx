'use client';

import React from 'react';
import { Button } from '@/components/ui';
import { useFormModal } from '@/components/FormModalProvider';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Answer a few quick questions',
    description: 'Tell us what you need in 60 seconds. No jargon, no hassle.',
  },
  {
    number: '02',
    title: 'We compare deals from 90+ lenders',
    description: 'Our experts search the whole market to find you the best rate.',
  },
  {
    number: '03',
    title: 'A mortgage expert calls you within the hour',
    description: 'Fast response, no pressure. Just straight answers.',
  },
  {
    number: '04',
    title: 'We handle everything through to completion',
    description: 'Sit back while we manage the paperwork and keep you updated.',
  },
];

export const HowItWorksSection: React.FC = () => {
  const { openForm } = useFormModal();

  const stepLabels = ['STEP ONE', 'STEP TWO', 'STEP THREE', 'STEP FOUR'];

  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6">
            How it <span className="text-[#d93b3b]">works</span>
          </h2>
          <p className="font-hanken text-lg md:text-xl text-brand-black/70 max-w-2xl mx-auto leading-relaxed">
            Getting the right mortgage shouldn't be complicated. Here's how we make it simple.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="bg-gray-100 rounded-3xl p-8 flex flex-col h-full">
                {/* Step Label */}
                <p className="font-jetbrains text-xs tracking-widest text-brand-black/60 uppercase mb-4">
                  {stepLabels[index]}
                </p>

                {/* Title */}
                <h3 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-8 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-hanken text-sm text-brand-black/70 mt-auto">
                  {step.description}
                </p>
              </div>

              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 z-10"
                  style={{ left: `${(index + 1) * 25 - (index === 2 ? 0.8 : 1.5)}%` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => openForm()}
            className="font-hanken font-semibold"
          >
            Get started now →
          </Button>
          <p className="font-jetbrains text-xs text-brand-black/60 uppercase tracking-widest mt-6">
            Takes 60 seconds · No credit check required
          </p>
        </div>
      </div>
    </section>
  );
};
