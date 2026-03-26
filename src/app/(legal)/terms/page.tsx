import { TermsContent } from '@/all-pages/legal';

export const metadata = {
  title: 'Terms of Use | Remigo',
  description: 'Terms of use for the Remigo website. Read our terms and conditions for using our mortgage broking services.',
  robots: 'index, follow',
};

export default function TermsPage() {
  return (
    <main className="bg-brand-white">
      <TermsContent />
    </main>
  );
}
