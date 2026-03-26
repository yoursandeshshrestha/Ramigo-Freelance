import { ComplaintsContent } from '@/all-pages/legal';

export const metadata = {
  title: 'Complaints Procedure | Remigo',
  description: 'Our FCA-compliant complaints procedure. Learn how to make a complaint and your rights to refer matters to the Financial Ombudsman Service.',
  robots: 'index, follow',
};

export default function ComplaintsPage() {
  return (
    <main className="bg-brand-white">
      <ComplaintsContent />
    </main>
  );
}
