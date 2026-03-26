import { AdLandingPage, selfEmployedContent } from '@/all-pages/ad-landing';
import { AdHeader } from '@/components/layout/AdHeader';
import { AdFooter } from '@/components/layout/AdFooter';

export const metadata = {
  title: 'Self-Employed Mortgage | Specialist Advice | Remigo',
  description: 'Self-employed mortgage advice from specialists. Contractors, freelancers, directors welcome. Access to lenders who understand your income.',
  robots: 'noindex, nofollow',
};

interface SelfEmployedPageProps {
  searchParams: Promise<{ v?: string }>;
}

export default async function SelfEmployedPage({ searchParams }: SelfEmployedPageProps) {
  const params = await searchParams;
  const variant = params.v || '1';

  return (
    <>
      <AdHeader />
      <AdLandingPage {...selfEmployedContent} selectedVariant={variant} />
      <AdFooter />
    </>
  );
}
