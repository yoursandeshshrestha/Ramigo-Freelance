import {
  ContactHeroSection,
  ContactInfoSection,
  ContactFormSection,
} from '@/all-pages/contact';

export const metadata = {
  title: 'Contact Us | Remigo',
  description: 'Get in touch with Remigo. Call, email, or send us a message. Our FCA-regulated mortgage advisers are here to help with your mortgage enquiry.',
  robots: 'index, follow',
};

export default function ContactPage() {
  return (
    <main className="bg-brand-white">
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
    </main>
  );
}
