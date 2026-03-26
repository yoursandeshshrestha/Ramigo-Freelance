export function PrivacyPolicyContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-32 md:py-40">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6">
          Privacy Policy
        </h1>
        <p className="font-hanken text-lg text-brand-black/70">
          Last updated: March 2026
        </p>
      </div>

      {/* Content */}
      <div className="space-y-12 font-hanken text-base text-brand-black/80 leading-relaxed">

        {/* Introduction */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            1. Introduction
          </h2>
          <div className="space-y-4">
            <p>
              Remigo is a trading name of [Legal Entity Name] (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your privacy and handling your personal data in an open and transparent manner.
            </p>
            <p>
              This privacy policy explains how we collect, use, share, and protect your personal information when you use our website, services, or interact with us. It also explains your rights under UK data protection laws.
            </p>
            <p>
              We are registered with the Information Commissioner&apos;s Office (ICO) under registration number: <strong>[ICO Registration Number]</strong>.
            </p>
            <p>
              If you have any questions about this privacy policy or how we handle your data, please contact us using the details at the end of this document.
            </p>
          </div>
        </section>

        {/* Data Controller */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            2. Who We Are (Data Controller)
          </h2>
          <div className="space-y-4">
            <p>
              For the purposes of UK data protection laws, the data controller is:
            </p>
            <div className="bg-brand-black/5 rounded-2xl p-6 space-y-2">
              <p><strong>[Legal Entity Name]</strong></p>
              <p>Registered office: [Full Registered Address]</p>
              <p>Company number: [Company Number]</p>
              <p>FCA registration: [FCA Number]</p>
              <p>Email: [Data Protection Email]</p>
              <p>Phone: [Contact Number]</p>
            </div>
          </div>
        </section>

        {/* What Data We Collect */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            3. What Personal Data We Collect
          </h2>
          <div className="space-y-4">
            <p>
              We collect and process the following categories of personal data:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-trocchi text-xl text-brand-black mb-3">
                  3.1 Information You Provide to Us
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact details:</strong> Full name, phone number, email address, postal address</li>
                  <li><strong>Financial information:</strong> Property value, mortgage requirements, income details, employment status, existing mortgage details, credit history</li>
                  <li><strong>Personal circumstances:</strong> Dependents, age, marital status, reasons for seeking mortgage advice</li>
                  <li><strong>Identification documents:</strong> Proof of identity, proof of address, bank statements, payslips, tax returns (SA302s), company accounts</li>
                  <li><strong>Communication records:</strong> Records of phone calls, emails, messages, and meetings with our advisers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-trocchi text-xl text-brand-black mb-3">
                  3.2 Information We Collect Automatically
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Website usage data:</strong> IP address, browser type, device information, pages visited, time spent on pages, referring website</li>
                  <li><strong>Cookies and tracking:</strong> Analytics cookies, advertising cookies, functional cookies (see our Cookie Policy for full details)</li>
                  <li><strong>Marketing data:</strong> UTM parameters, Google click IDs (GCLID), Facebook click IDs (FBCLID), ad campaign performance data</li>
                </ul>
              </div>

              <div>
                <h3 className="font-trocchi text-xl text-brand-black mb-3">
                  3.3 Information from Third Parties
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Credit reference agencies:</strong> Credit scores, credit history, fraud prevention data</li>
                  <li><strong>Lenders and product providers:</strong> Application status, product details, eligibility information</li>
                  <li><strong>Land Registry:</strong> Property ownership information</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            4. How We Use Your Personal Data
          </h2>
          <div className="space-y-4">
            <p>
              We use your personal data for the following purposes:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-trocchi text-xl text-brand-black mb-3">
                  4.1 To Provide Mortgage and Protection Advice
                </h3>
                <p>
                  We process your data to assess your circumstances, search for suitable mortgage and protection products, make recommendations, submit applications to lenders, and manage your case through to completion.
                </p>
                <p className="text-sm text-brand-black/75 mt-2">
                  <strong>Legal basis:</strong> Contract performance (providing the services you&apos;ve requested) and legitimate interests (delivering effective mortgage advice).
                </p>
              </div>

              <div>
                <h3 className="font-trocchi text-xl text-brand-black mb-3">
                  4.2 To Comply with Legal and Regulatory Obligations
                </h3>
                <p>
                  As an FCA-regulated firm, we must keep records of our advice, conduct suitability assessments, prevent money laundering, and maintain compliance with mortgage regulations.
                </p>
                <p className="text-sm text-brand-black/75 mt-2">
                  <strong>Legal basis:</strong> Legal obligation (FCA regulations, anti-money laundering laws, mortgage regulation).
                </p>
              </div>

              <div>
                <h3 className="font-trocchi text-xl text-brand-black mb-3">
                  4.3 To Communicate with You
                </h3>
                <p>
                  We use your contact details to respond to enquiries, provide updates on your application, send appointment reminders, and provide post-sale service.
                </p>
                <p className="text-sm text-brand-black/75 mt-2">
                  <strong>Legal basis:</strong> Contract performance and legitimate interests (maintaining client relationships).
                </p>
              </div>

              <div>
                <h3 className="font-trocchi text-xl text-brand-black mb-3">
                  4.4 For Marketing Purposes
                </h3>
                <p>
                  With your consent, we may send you marketing communications about our services, market updates, remortgage reminders, and protection reviews. You can opt out at any time.
                </p>
                <p className="text-sm text-brand-black/75 mt-2">
                  <strong>Legal basis:</strong> Consent (which you can withdraw at any time).
                </p>
              </div>

              <div>
                <h3 className="font-trocchi text-xl text-brand-black mb-3">
                  4.5 To Improve Our Website and Services
                </h3>
                <p>
                  We analyse website usage data to understand how visitors interact with our site, improve user experience, test new features, and measure the effectiveness of our marketing campaigns.
                </p>
                <p className="text-sm text-brand-black/75 mt-2">
                  <strong>Legal basis:</strong> Legitimate interests (improving our services) and consent (for cookies).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Share Data With */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            5. Who We Share Your Personal Data With
          </h2>
          <div className="space-y-4">
            <p>
              We may share your personal data with the following categories of recipients:
            </p>

            <div className="space-y-4">
              <div className="bg-brand-black/5 rounded-2xl p-6">
                <h3 className="font-trocchi text-lg text-brand-black mb-2">
                  Mortgage Lenders and Product Providers
                </h3>
                <p className="text-sm">
                  We share your information with lenders when submitting mortgage applications and with protection providers when arranging insurance policies.
                </p>
              </div>

              <div className="bg-brand-black/5 rounded-2xl p-6">
                <h3 className="font-trocchi text-lg text-brand-black mb-2">
                  Credit Reference Agencies
                </h3>
                <p className="text-sm">
                  We may conduct credit checks as part of our advice process. The main UK credit reference agencies are Experian, Equifax, and TransUnion.
                </p>
              </div>

              <div className="bg-brand-black/5 rounded-2xl p-6">
                <h3 className="font-trocchi text-lg text-brand-black mb-2">
                  Third-Party Service Providers
                </h3>
                <p className="text-sm">
                  We use trusted service providers to help us operate our business, including: CRM providers, website hosting, email services, analytics platforms (Google Analytics), advertising platforms (Google Ads, Meta), payment processors, and document storage services.
                </p>
              </div>

              <div className="bg-brand-black/5 rounded-2xl p-6">
                <h3 className="font-trocchi text-lg text-brand-black mb-2">
                  Regulatory Authorities
                </h3>
                <p className="text-sm">
                  We may share your data with the Financial Conduct Authority (FCA), Financial Ombudsman Service (FOS), or other regulatory bodies if required by law.
                </p>
              </div>

              <div className="bg-brand-black/5 rounded-2xl p-6">
                <h3 className="font-trocchi text-lg text-brand-black mb-2">
                  Legal and Professional Advisers
                </h3>
                <p className="text-sm">
                  We may share data with solicitors, accountants, auditors, or other professional advisers where necessary for legal or regulatory compliance.
                </p>
              </div>
            </div>

            <p className="mt-6">
              We do not sell your personal data to third parties. All third parties we work with are required to keep your data secure and use it only for the purposes we specify.
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            6. How Long We Keep Your Data
          </h2>
          <div className="space-y-4">
            <p>
              We retain your personal data for as long as necessary to fulfil the purposes for which it was collected and to comply with legal and regulatory requirements.
            </p>

            <div className="bg-brand-black/5 rounded-2xl p-6 space-y-3">
              <div>
                <p className="font-semibold">Client records and advice files:</p>
                <p className="text-sm">Minimum 6 years from the end of our relationship (FCA requirement), or indefinitely for certain regulatory records.</p>
              </div>
              <div>
                <p className="font-semibold">Marketing communications:</p>
                <p className="text-sm">Until you opt out or withdraw consent.</p>
              </div>
              <div>
                <p className="font-semibold">Website analytics data:</p>
                <p className="text-sm">Up to 26 months (Google Analytics default retention period).</p>
              </div>
              <div>
                <p className="font-semibold">Enquiries that don&apos;t proceed:</p>
                <p className="text-sm">Up to 3 years, after which we will securely delete your data unless you ask us to keep it.</p>
              </div>
            </div>

            <p>
              After the retention period expires, we will securely delete or anonymise your personal data so it can no longer identify you.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            7. How We Keep Your Data Secure
          </h2>
          <div className="space-y-4">
            <p>
              We take the security of your personal data seriously and have implemented appropriate technical and organisational measures to protect it from unauthorised access, loss, or misuse.
            </p>
            <p>
              Our security measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encrypted transmission of data over HTTPS</li>
              <li>Secure storage of client files in password-protected, encrypted systems</li>
              <li>Access controls ensuring only authorised personnel can access your data</li>
              <li>Regular security updates and patches to our systems</li>
              <li>Staff training on data protection and information security</li>
              <li>Secure disposal of data when it is no longer needed</li>
            </ul>
            <p className="mt-4">
              While we take every reasonable precaution, no method of transmission over the internet is 100% secure. If you believe your data has been compromised, please contact us immediately.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            8. Your Data Protection Rights
          </h2>
          <div className="space-y-4">
            <p>
              Under UK data protection laws, you have the following rights:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-remigo-red pl-4">
                <p className="font-semibold">Right to Access</p>
                <p className="text-sm">You can request a copy of the personal data we hold about you (subject access request).</p>
              </div>

              <div className="border-l-4 border-remigo-red pl-4">
                <p className="font-semibold">Right to Rectification</p>
                <p className="text-sm">You can ask us to correct inaccurate or incomplete personal data.</p>
              </div>

              <div className="border-l-4 border-remigo-red pl-4">
                <p className="font-semibold">Right to Erasure (&quot;Right to be Forgotten&quot;)</p>
                <p className="text-sm">You can ask us to delete your personal data in certain circumstances (note: we may be required to keep some data for regulatory compliance).</p>
              </div>

              <div className="border-l-4 border-remigo-red pl-4">
                <p className="font-semibold">Right to Restrict Processing</p>
                <p className="text-sm">You can ask us to limit how we use your data in certain situations.</p>
              </div>

              <div className="border-l-4 border-remigo-red pl-4">
                <p className="font-semibold">Right to Data Portability</p>
                <p className="text-sm">You can request your data in a structured, commonly used, machine-readable format.</p>
              </div>

              <div className="border-l-4 border-remigo-red pl-4">
                <p className="font-semibold">Right to Object</p>
                <p className="text-sm">You can object to processing based on legitimate interests or for direct marketing purposes.</p>
              </div>

              <div className="border-l-4 border-remigo-red pl-4">
                <p className="font-semibold">Right to Withdraw Consent</p>
                <p className="text-sm">Where we process data based on your consent, you can withdraw it at any time.</p>
              </div>
            </div>

            <p className="mt-6">
              To exercise any of these rights, please contact us using the details in section 11 below. We will respond to your request within one month.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            9. Cookies and Tracking Technologies
          </h2>
          <div className="space-y-4">
            <p>
              We use cookies and similar tracking technologies on our website to improve your experience and measure the effectiveness of our marketing.
            </p>
            <p>
              Cookies are small text files stored on your device when you visit our website. We use:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Strictly necessary cookies:</strong> Required for the website to function (e.g., form submission, session management)</li>
              <li><strong>Analytics cookies:</strong> Google Analytics to understand how visitors use our site</li>
              <li><strong>Advertising cookies:</strong> Google Ads and Meta Pixel to measure ad performance and show relevant ads</li>
              <li><strong>Functional cookies:</strong> To remember your preferences and improve your experience</li>
            </ul>
            <p className="mt-4">
              You can control cookie preferences through the cookie consent banner when you first visit our site. For more detailed information, please see our <a href="/cookie-policy" className="text-remigo-red hover:underline cursor-pointer">Cookie Policy</a>.
            </p>
          </div>
        </section>

        {/* Third Party Services */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            10. Third-Party Services
          </h2>
          <div className="space-y-4">
            <p>
              Our website and services integrate with the following third-party platforms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Website analytics and reporting</li>
              <li><strong>Google Ads:</strong> Advertising and conversion tracking</li>
              <li><strong>Meta (Facebook/Instagram):</strong> Advertising and conversion tracking via Meta Pixel</li>
              <li><strong>CRM platform:</strong> Lead management and client communication</li>
              <li><strong>Email service provider:</strong> Transactional and marketing emails</li>
            </ul>
            <p className="mt-4">
              These third parties have their own privacy policies. We recommend reviewing their policies to understand how they handle your data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">https://policies.google.com/privacy</a></li>
              <li>Meta Privacy Policy: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">https://www.facebook.com/privacy/policy</a></li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            11. Contact Us
          </h2>
          <div className="space-y-4">
            <p>
              If you have any questions about this privacy policy, want to exercise your data protection rights, or have concerns about how we handle your data, please contact us:
            </p>
            <div className="bg-brand-black/5 rounded-2xl p-6 space-y-2">
              <p><strong>Data Protection Contact</strong></p>
              <p>Email: <a href="mailto:[data-protection@remigo.co.uk]" className="text-remigo-red hover:underline cursor-pointer">[data-protection@remigo.co.uk]</a></p>
              <p>Phone: <a href="tel:[contact-number]" className="text-remigo-red hover:underline cursor-pointer">[Contact Number]</a></p>
              <p>Post: [Legal Entity Name], [Registered Address]</p>
            </div>
            <p className="mt-6">
              <strong>Right to Complain</strong>
            </p>
            <p>
              If you&apos;re not satisfied with how we&apos;ve handled your personal data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
            </p>
            <div className="bg-brand-black/5 rounded-2xl p-6 space-y-2">
              <p><strong>Information Commissioner&apos;s Office (ICO)</strong></p>
              <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">https://ico.org.uk</a></p>
              <p>Phone: 0303 123 1113</p>
              <p>Post: Information Commissioner&apos;s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
            </div>
          </div>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            12. Changes to This Privacy Policy
          </h2>
          <div className="space-y-4">
            <p>
              We may update this privacy policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons.
            </p>
            <p>
              When we make significant changes, we will notify you by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Updating the &quot;Last updated&quot; date at the top of this page</li>
              <li>Sending you an email notification if you&apos;re an existing client</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
            <p className="mt-4">
              We encourage you to review this privacy policy periodically to stay informed about how we protect your data.
            </p>
          </div>
        </section>

      </div>

      {/* Footer Note */}
      <div className="mt-16 pt-8 border-t border-brand-black/10">
        <p className="font-hanken text-sm text-brand-black/75 text-center">
          This privacy policy was last updated on March 2026 and applies to UK residents.
        </p>
      </div>
    </div>
  );
}
