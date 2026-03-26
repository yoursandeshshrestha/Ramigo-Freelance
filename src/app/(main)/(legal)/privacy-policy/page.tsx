import { PrivacyPolicyContent } from '@/all-pages/legal';

export const metadata = {
  title: 'Privacy Policy | Remigo',
  description: 'Privacy policy for Remigo mortgage services. Learn how we collect, use, and protect your personal data in compliance with UK GDPR.',
  robots: 'index, follow',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-brand-white">
      <PrivacyPolicyContent />
    </main>
  );
}
