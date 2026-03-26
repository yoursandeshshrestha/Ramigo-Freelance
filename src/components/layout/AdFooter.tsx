import Link from 'next/link';

export const AdFooter: React.FC = () => {
  return (
    <footer className="bg-brand-white border-t border-gray-200 py-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-hanken text-sm text-brand-black/75 hover:text-remigo-red transition-colors cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="font-hanken text-sm text-brand-black/75 hover:text-remigo-red transition-colors cursor-pointer"
          >
            Terms of Use
          </Link>
          <Link
            href="/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-hanken text-sm text-brand-black/75 hover:text-remigo-red transition-colors cursor-pointer"
          >
            Cookie Policy
          </Link>
          <Link
            href="/complaints"
            target="_blank"
            rel="noopener noreferrer"
            className="font-hanken text-sm text-brand-black/75 hover:text-remigo-red transition-colors cursor-pointer"
          >
            Complaints
          </Link>
        </div>

        {/* FCA Disclaimer */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-black/5 rounded-xl p-6 mb-6">
            <p className="font-hanken text-xs text-brand-black/75 leading-relaxed mb-2 text-center">
              <strong className="text-brand-black/80">Important:</strong> Your home may be repossessed if you do not keep up repayments on your mortgage.
            </p>
            <p className="font-hanken text-xs text-brand-black/75 leading-relaxed text-center">
              Remigo is a trading name of [Legal Entity]. Authorised and regulated by the Financial Conduct Authority. FCA registration number: [XXXXXX].
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-hanken text-xs text-brand-black/40">
            © {new Date().getFullYear()} Remigo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
