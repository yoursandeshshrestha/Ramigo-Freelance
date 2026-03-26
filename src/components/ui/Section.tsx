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
    darker: 'bg-dark-bg',
    light: 'bg-dark-light',
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
