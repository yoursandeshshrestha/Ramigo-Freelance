import { AdLandingPage, firstTimeBuyerContent } from '@/all-pages/ad-landing';
import { AdHeader } from '@/components/layout/AdHeader';
import { AdFooter } from '@/components/layout/AdFooter';

export const metadata = {
  title: 'First Time Buyer Mortgage | Expert Advice | Remigo',
  description: 'Buying your first home? Get expert mortgage advice from FCA-regulated advisers. Compare 90+ lenders, free advice, no jargon.',
  robots: 'noindex, nofollow',
};

interface FirstTimeBuyerPageProps {
  searchParams: Promise<{ v?: string }>;
}

export default async function FirstTimeBuyerPage({ searchParams }: FirstTimeBuyerPageProps) {
  const params = await searchParams;
  const variant = params.v || '1';

  return (
    <>
      <AdHeader />
      <AdLandingPage {...firstTimeBuyerContent} selectedVariant={variant} />
      <AdFooter />
    </>
  );
}
