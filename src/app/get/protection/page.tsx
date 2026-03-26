import { AdLandingPage, protectionContent } from '@/all-pages/ad-landing';
import { AdHeader } from '@/components/layout/AdHeader';
import { AdFooter } from '@/components/layout/AdFooter';

export const metadata = {
  title: 'Mortgage Protection | Life Insurance | Remigo',
  description: 'Protect your mortgage and family. Life insurance, critical illness, income protection. Tailored advice from £10/month.',
  robots: 'noindex, nofollow',
};

interface ProtectionPageProps {
  searchParams: Promise<{ v?: string }>;
}

export default async function ProtectionPage({ searchParams }: ProtectionPageProps) {
  const params = await searchParams;
  const variant = params.v || '1';

  return (
    <>
      <AdHeader />
      <AdLandingPage {...protectionContent} selectedVariant={variant} />
      <AdFooter />
    </>
  );
}
