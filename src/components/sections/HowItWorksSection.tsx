'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui';
import { useFormModal } from '../FormModalProvider';
import {
  QuestionnaireIcon,
  ComparisonIcon,
  CallNotificationIcon,
  ProgressTrackerIcon,
} from '../icons/ProcessIcons';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Answer a few quick questions',
    description: 'Tell us what you need in 60 seconds. No jargon, no hassle.',
    icon: QuestionnaireIcon,
  },
  {
    number: '02',
    title: 'We compare deals from 90+ lenders',
    description: 'Our experts search the whole market to find you the best rate.',
    icon: ComparisonIcon,
  },
  {
    number: '03',
    title: 'A mortgage expert calls you within the hour',
    description: 'Fast response, no pressure. Just straight answers.',
    icon: CallNotificationIcon,
  },
  {
    number: '04',
    title: 'We handle everything through to completion',
    description: 'Sit back while we manage the paperwork and keep you updated.',
    icon: ProgressTrackerIcon,
  },
];

export const HowItWorksSection: React.FC = () => {
  const { openForm } = useFormModal();

  const handleGetQuote = () => {
    openForm();
  };

  return (
    <section className="relative bg-[#0A0A0A] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6">
            How it works
          </h2>
          <p className="font-hanken text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Getting the right mortgage shouldn&apos;t be complicated. Here&apos;s how we make it simple.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-linear-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden h-full flex flex-col"
            >
              {/* Animated gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-remigo-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none z-10"
                initial={false}
                transition={{ duration: 0.4 }}
              />

              {/* Mini Preview - No padding */}
              <div className="relative">
                <step.icon />
              </div>

              {/* Content with padding */}
              <div className="p-6 flex flex-col grow relative z-20">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-remigo-red/10 border border-remigo-red/20 rounded-xl mb-4">
                  <span className="font-jetbrains text-xl text-remigo-red font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-trocchi text-lg md:text-xl text-brand-white mb-3 leading-tight group-hover:text-remigo-red transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-hanken text-sm md:text-base text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-remigo-red/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={handleGetQuote}
            className="font-hanken font-semibold"
          >
            Get started now →
          </Button>
          <p className="font-jetbrains text-xs text-gray-500 uppercase tracking-widest mt-6">
            Takes 60 seconds · No credit check required
          </p>
        </div>
      </div>
    </section>
  );
};
