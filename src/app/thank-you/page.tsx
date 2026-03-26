import type { Metadata } from 'next';
import { ThankYouContent } from '@/components/ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You | Remigo',
  description: 'Thank you for your enquiry. We\'ll be in touch shortly.',
  robots: 'noindex, nofollow',
};

interface ThankYouPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const name = params.name as string | undefined;

  // Extract first name if full name provided
  const firstName = name ? name.split(' ')[0] : null;

  return <ThankYouContent firstName={firstName} />;
}
