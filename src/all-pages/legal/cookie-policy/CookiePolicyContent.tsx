'use client';

export function CookiePolicyContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-32 md:py-40">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6">
          Cookie Policy
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
            1. What Are Cookies?
          </h2>
          <div className="space-y-4">
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
            </p>
            <p>
              Cookies allow websites to remember your actions and preferences (such as login details, language, and other settings) over a period of time, so you don&apos;t have to keep re-entering them whenever you come back to the site or browse from one page to another.
            </p>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            2. How We Use Cookies
          </h2>
          <div className="space-y-4">
            <p>
              The Remigo website uses cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure the website functions properly</li>
              <li>Remember your cookie consent preferences</li>
              <li>Understand how visitors use our website through analytics</li>
              <li>Measure the effectiveness of our advertising campaigns</li>
              <li>Improve your experience by remembering your preferences</li>
            </ul>
          </div>
        </section>

        {/* Types of Cookies */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            3. Types of Cookies We Use
          </h2>
          <div className="space-y-6">

            {/* Strictly Necessary */}
            <div className="bg-brand-black/5 rounded-2xl p-6">
              <h3 className="font-trocchi text-xl text-brand-black mb-3">
                3.1 Strictly Necessary Cookies
              </h3>
              <p className="mb-4 text-sm">
                These cookies are essential for the website to function and cannot be switched off. They are usually only set in response to actions you take, such as submitting a form or setting your privacy preferences.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-brand-black/20">
                      <th className="text-left py-2 px-3 font-semibold">Cookie Name</th>
                      <th className="text-left py-2 px-3 font-semibold">Purpose</th>
                      <th className="text-left py-2 px-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">cookie_consent</td>
                      <td className="py-2 px-3">Stores your cookie consent preferences</td>
                      <td className="py-2 px-3">1 year</td>
                    </tr>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">session_id</td>
                      <td className="py-2 px-3">Maintains your session state during form submission</td>
                      <td className="py-2 px-3">Session</td>
                    </tr>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">form_data</td>
                      <td className="py-2 px-3">Temporarily stores form progress so you don&apos;t lose your data</td>
                      <td className="py-2 px-3">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-sky-blue/10 rounded-2xl p-6">
              <h3 className="font-trocchi text-xl text-brand-black mb-3">
                3.2 Analytics Cookies
              </h3>
              <p className="mb-4 text-sm">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-brand-black/20">
                      <th className="text-left py-2 px-3 font-semibold">Cookie Name</th>
                      <th className="text-left py-2 px-3 font-semibold">Purpose</th>
                      <th className="text-left py-2 px-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">_ga</td>
                      <td className="py-2 px-3">Google Analytics - distinguishes unique users</td>
                      <td className="py-2 px-3">2 years</td>
                    </tr>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">_ga_[ID]</td>
                      <td className="py-2 px-3">Google Analytics 4 - maintains session state</td>
                      <td className="py-2 px-3">2 years</td>
                    </tr>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">_gid</td>
                      <td className="py-2 px-3">Google Analytics - distinguishes users</td>
                      <td className="py-2 px-3">24 hours</td>
                    </tr>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">_gat</td>
                      <td className="py-2 px-3">Google Analytics - throttles request rate</td>
                      <td className="py-2 px-3">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs text-brand-black/60">
                Learn more about Google Analytics cookies: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">Google Analytics Cookie Usage</a>
              </p>
            </div>

            {/* Advertising Cookies */}
            <div className="bg-amber/10 rounded-2xl p-6">
              <h3 className="font-trocchi text-xl text-brand-black mb-3">
                3.3 Advertising Cookies
              </h3>
              <p className="mb-4 text-sm">
                These cookies are used to measure the effectiveness of our advertising campaigns and show you relevant ads. They track whether you arrived from an ad and help us understand which ads perform best.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-brand-black/20">
                      <th className="text-left py-2 px-3 font-semibold">Cookie Name</th>
                      <th className="text-left py-2 px-3 font-semibold">Purpose</th>
                      <th className="text-left py-2 px-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">_gcl_au</td>
                      <td className="py-2 px-3">Google Ads - conversion tracking</td>
                      <td className="py-2 px-3">90 days</td>
                    </tr>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">_fbp</td>
                      <td className="py-2 px-3">Meta (Facebook) Pixel - tracks visits and conversions</td>
                      <td className="py-2 px-3">90 days</td>
                    </tr>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">_fbc</td>
                      <td className="py-2 px-3">Meta (Facebook) - stores click ID from ad clicks</td>
                      <td className="py-2 px-3">90 days</td>
                    </tr>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">test_cookie</td>
                      <td className="py-2 px-3">Google - checks if browser accepts cookies</td>
                      <td className="py-2 px-3">15 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs text-brand-black/60">
                Learn more: <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">Google Cookies</a> · <a href="https://www.facebook.com/policies/cookies" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">Meta Cookies</a>
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="bg-remigo-red/10 rounded-2xl p-6">
              <h3 className="font-trocchi text-xl text-brand-black mb-3">
                3.4 Functional Cookies
              </h3>
              <p className="mb-4 text-sm">
                These cookies enable enhanced functionality and personalisation, such as remembering your preferences or providing live chat support.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-brand-black/20">
                      <th className="text-left py-2 px-3 font-semibold">Cookie Name</th>
                      <th className="text-left py-2 px-3 font-semibold">Purpose</th>
                      <th className="text-left py-2 px-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">user_preferences</td>
                      <td className="py-2 px-3">Remembers your website preferences</td>
                      <td className="py-2 px-3">1 year</td>
                    </tr>
                    <tr className="border-b border-brand-black/10">
                      <td className="py-2 px-3">utm_params</td>
                      <td className="py-2 px-3">Stores marketing source information for attribution</td>
                      <td className="py-2 px-3">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* Managing Cookies */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            4. How to Manage Your Cookie Preferences
          </h2>
          <div className="space-y-4">
            <p className="font-semibold">
              Through Our Cookie Banner
            </p>
            <p>
              When you first visit our website, you&apos;ll see a cookie consent banner. You can choose to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accept all cookies:</strong> Allows all cookies (necessary, analytics, advertising, and functional)</li>
              <li><strong>Reject non-essential cookies:</strong> Only necessary cookies will be used</li>
              <li><strong>Manage preferences:</strong> Choose which categories of cookies to allow</li>
            </ul>

            <p className="font-semibold mt-6">
              Through Your Browser Settings
            </p>
            <p>
              Most browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>

            <p className="mt-4">
              Here&apos;s how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">Microsoft Edge</a></li>
            </ul>

            <div className="bg-amber/10 border-l-4 border-amber rounded-2xl p-6 mt-6">
              <p className="font-semibold mb-2">Please note:</p>
              <p className="text-sm">
                Blocking or deleting cookies may affect your experience on our website. Some features may not work properly without cookies enabled.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            5. Third-Party Cookies
          </h2>
          <div className="space-y-4">
            <p>
              Some cookies on our website are set by third-party services we use, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> To understand how visitors use our website</li>
              <li><strong>Google Ads:</strong> To measure advertising effectiveness and show relevant ads</li>
              <li><strong>Meta (Facebook/Instagram):</strong> To track conversions from social media advertising</li>
            </ul>
            <p>
              These third parties have their own privacy and cookie policies. We have no control over these cookies and recommend reading their policies to understand how they use your data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">https://policies.google.com/privacy</a></li>
              <li>Meta: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-remigo-red hover:underline cursor-pointer">https://www.facebook.com/privacy/policy</a></li>
            </ul>
          </div>
        </section>

        {/* Updates */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            6. Changes to This Cookie Policy
          </h2>
          <div className="space-y-4">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons.
            </p>
            <p>
              We will notify you of any significant changes by updating the &quot;Last updated&quot; date at the top of this page.
            </p>
            <p>
              We recommend checking this Cookie Policy periodically to stay informed about our use of cookies.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            7. Contact Us
          </h2>
          <div className="space-y-4">
            <p>
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-brand-black/5 rounded-2xl p-6 space-y-2">
              <p><strong>[Legal Entity Name]</strong></p>
              <p>Email: <a href="mailto:[contact@remigo.co.uk]" className="text-remigo-red hover:underline cursor-pointer">[contact@remigo.co.uk]</a></p>
              <p>Phone: <a href="tel:[contact-number]" className="text-remigo-red hover:underline cursor-pointer">[Contact Number]</a></p>
              <p>Address: [Registered Address]</p>
            </div>
            <p className="mt-4">
              For more information about how we handle your personal data, please see our <a href="/privacy-policy" className="text-remigo-red hover:underline cursor-pointer">Privacy Policy</a>.
            </p>
          </div>
        </section>

      </div>

      {/* Footer Note */}
      <div className="mt-16 pt-8 border-t border-brand-black/10">
        <p className="font-hanken text-sm text-brand-black/60 text-center">
          This cookie policy was last updated on March 2026.
        </p>
      </div>
    </div>
  );
}
