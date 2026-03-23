import React from 'react';

interface Stat {
  value: string;
  label: string;
  accent: string;
}

const stats: Stat[] = [
  {
    value: '90+',
    label: 'Lenders',
    accent: 'text-sky-blue',
  },
  {
    value: '5,000+',
    label: 'Clients Helped',
    accent: 'text-amber',
  },
  {
    value: '4.9/5',
    label: 'Trustpilot Rating',
    accent: 'text-remigo-red',
  },
  {
    value: '£0',
    label: 'Broker Fee',
    accent: 'text-brand-white',
  },
];

export const StatsBarSection: React.FC = () => {
  return (
    <section className="relative bg-[#0A0A0A] py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-trocchi text-5xl md:text-6xl lg:text-7xl mb-2 ${stat.accent}`}>
                {stat.value}
              </div>
              <div className="font-jetbrains text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
