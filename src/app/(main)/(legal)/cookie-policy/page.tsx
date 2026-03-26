import { CookiePolicyContent } from '@/all-pages/legal';

export const metadata = {
  title: 'Cookie Policy | Remigo',
  description: 'Learn about the cookies we use on the Remigo website, how we use them, and how you can manage your cookie preferences.',
  robots: 'index, follow',
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-brand-white">
      <CookiePolicyContent />
    </main>
  );
}
