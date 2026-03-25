import React from 'react';

interface HelpPoint {
  title: string;
  description: string;
}

interface HowWeHelpSectionProps {
  points: HelpPoint[];
}

const cardColors = [
  'bg-sky-blue/20',
  'bg-amber/20',
  'bg-burgundy/20',
  'bg-remigo-red/10'
];

const icons = [
  // Search icon
  <svg key={1} className="w-12 h-12 text-brand-black/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  // Clock/Timer icon
  <svg key={2} className="w-12 h-12 text-brand-black/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Document icon
  <svg key={3} className="w-12 h-12 text-brand-black/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>,
  // Money/Savings icon
  <svg key={4} className="w-12 h-12 text-brand-black/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
];

export const HowWeHelpSection: React.FC<HowWeHelpSectionProps> = ({ points }) => {
  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Title and Description */}
          <div className="lg:col-span-2">
            <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 leading-tight">
              How we help
            </h2>
            <p className="font-hanken text-lg text-brand-black/60 leading-relaxed">
              We make the complex simple and the stressful stress-free
            </p>
          </div>

          {/* Right - Cards Grid */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className={`${cardColors[index % cardColors.length]} rounded-3xl p-8 border border-gray-200`}
              >
                {/* Icon */}
                <div className="mb-6">
                  {icons[index % icons.length]}
                </div>

                {/* Title */}
                <h3 className="font-trocchi text-xl md:text-2xl text-brand-black mb-3 leading-tight">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="font-hanken text-base text-brand-black/70 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
