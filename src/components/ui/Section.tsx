import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'darker' | 'light';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'dark'
}) => {
  const backgroundStyles = {
    dark: 'bg-brand-black',
    darker: 'bg-[#050505]',
    light: 'bg-[#1a1a1a]',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      {children}
    </section>
  );
};
