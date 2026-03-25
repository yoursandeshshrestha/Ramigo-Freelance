'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  RemortgageIcon,
  FirstTimeBuyerIcon,
  SelfEmployedIcon,
  ProtectionIcon,
} from '../icons/ServiceIcons';

interface Service {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType;
  color: string;
}

const services: Service[] = [
  {
    title: 'Remortgage',
    description: 'Switch to a better deal and avoid the SVR trap. We make remortgaging effortless.',
    href: '/remortgage',
    icon: RemortgageIcon,
    color: 'sky-blue',
  },
  {
    title: 'First-Time Buyer',
    description: 'Get on the ladder with expert guidance every step of the way. Jargon-free.',
    href: '/first-time-buyer',
    icon: FirstTimeBuyerIcon,
    color: 'amber',
  },
  {
    title: 'Self-Employed',
    description: 'Your income isn\'t complicated to us. Specialist lenders who understand.',
    href: '/self-employed-mortgage',
    icon: SelfEmployedIcon,
    color: 'burgundy',
  },
  {
    title: 'Protection',
    description: 'Protect your family and your home with the right cover. Simple, affordable.',
    href: '/protection',
    icon: ProtectionIcon,
    color: 'remigo-red',
  },
];

export const ServiceCardsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative bg-brand-white py-12 md:py-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6">
            What can we help you with?
          </h2>
          <p className="font-hanken text-lg md:text-xl text-brand-black/70 max-w-2xl mx-auto leading-relaxed">
            Choose your situation and we&apos;ll find you the perfect deal.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Link href={service.href} className="block h-full cursor-pointer">
                <div className="group relative bg-[#faf5f5] border border-gray-200 rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-remigo-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none z-10"
                    initial={false}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Mini Preview - No padding */}
                  <div className="relative">
                    <service.icon />
                  </div>

                  {/* Content with padding */}
                  <div className="p-6 flex flex-col grow">
                    {/* Title */}
                    <h3 className="font-trocchi text-lg md:text-xl text-brand-black mb-3 leading-tight group-hover:text-remigo-red transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-hanken text-sm md:text-base text-brand-black/70 mb-4 grow leading-relaxed">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-remigo-red font-hanken font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-remigo-red/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
