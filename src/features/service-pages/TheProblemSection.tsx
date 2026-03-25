import React from 'react';

interface TheProblemSectionProps {
  title: string;
  description: string;
}

export const TheProblemSection: React.FC<TheProblemSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className="relative bg-remigo-red/5 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div className="inline-block mb-6">
            <span className="font-jetbrains text-xs tracking-widest text-remigo-red uppercase bg-brand-white px-4 py-2 rounded-full cursor-pointer">
              The Problem
            </span>
          </div>

          {/* Title */}
          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-remigo-red mb-6 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="font-hanken text-lg md:text-xl text-remigo-red/80 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
