import React from 'react';
import {
  AboutHeroSection,
  BrandPrinciplesSection,
  WhyUsSection,
  TeamSection,
  AboutCTASection,
} from '@/all-pages/about';

export const metadata = {
  title: 'About Remigo | FCA Regulated Mortgage Broker',
  description: 'Meet the team behind Remigo. FCA regulated mortgage brokers with 15+ years experience. We help thousands of people find better mortgage deals every year.',
  keywords: 'about remigo, mortgage broker, FCA regulated, mortgage advice',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <BrandPrinciplesSection />
      <WhyUsSection />
      <TeamSection />
      <AboutCTASection />
    </main>
  );
}
