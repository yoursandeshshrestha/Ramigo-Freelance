import { AdLandingPage, remortgageContent } from '@/all-pages/ad-landing';
import { AdHeader } from '@/components/layout/AdHeader';
import { AdFooter } from '@/components/layout/AdFooter';

export const metadata = {
  title: 'Remortgage Deals | Compare 90+ Lenders | Remigo',
  description: 'Your fixed rate is ending? Compare remortgage deals from 90+ lenders. Free advice from FCA-regulated advisers. Save hundreds every month.',
  robots: 'noindex, nofollow',
};

interface RemortgagePageProps {
  searchParams: Promise<{ v?: string }>;
}

export default async function RemortgagePage({ searchParams }: RemortgagePageProps) {
  const params = await searchParams;
  const variant = params.v || '1';

  return (
    <>
      <AdHeader />
      <AdLandingPage {...remortgageContent} selectedVariant={variant} />
      <AdFooter />
    </>
  );
}
