'use client';

export function ComplaintsContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-32 md:py-40">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6">
          Complaints Procedure
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
            1. Our Commitment to You
          </h2>
          <div className="space-y-4">
            <p>
              At Remigo, we are committed to providing you with a high-quality service. However, we understand that things can sometimes go wrong, and if you&apos;re not satisfied with our service, we want to hear from you.
            </p>
            <p>
              This complaints procedure explains how to make a complaint, what will happen when you do, and your rights if you remain dissatisfied.
            </p>
            <p>
              We take all complaints seriously and will handle your complaint fairly, consistently, and promptly.
            </p>
          </div>
        </section>

        {/* How to Complain */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            2. How to Make a Complaint
          </h2>
          <div className="space-y-4">
            <p>
              If you wish to make a complaint, please contact us as soon as possible. You can complain:
            </p>

            <div className="space-y-4">
              <div className="bg-brand-black/5 rounded-2xl p-6">
                <h3 className="font-trocchi text-lg text-brand-black mb-3">
                  By Email
                </h3>
                <p className="mb-2">Send your complaint to:</p>
                <a
                  href="mailto:[complaints@remigo.co.uk]"
                  className="text-remigo-red hover:underline cursor-pointer font-semibold"
                >
                  [complaints@remigo.co.uk]
                </a>
              </div>

              <div className="bg-brand-black/5 rounded-2xl p-6">
                <h3 className="font-trocchi text-lg text-brand-black mb-3">
                  By Post
                </h3>
                <p className="mb-2">Write to us at:</p>
                <address className="not-italic">
                  <strong>Complaints Department</strong><br />
                  [Legal Entity Name]<br />
                  [Address Line 1]<br />
                  [Address Line 2]<br />
                  [City, Postcode]
                </address>
              </div>

              <div className="bg-brand-black/5 rounded-2xl p-6">
                <h3 className="font-trocchi text-lg text-brand-black mb-3">
                  By Phone
                </h3>
                <p className="mb-2">Call us on:</p>
                <a
                  href="tel:[phone-number]"
                  className="text-remigo-red hover:underline cursor-pointer font-semibold"
                >
                  [Phone Number]
                </a>
                <p className="text-sm text-brand-black/60 mt-2">
                  Monday to Friday, 9am - 6pm
                </p>
              </div>
            </div>

            <div className="bg-sky-blue/10 rounded-2xl p-6 mt-6">
              <h3 className="font-trocchi text-lg text-brand-black mb-3">
                What to Include in Your Complaint
              </h3>
              <p className="mb-3">To help us resolve your complaint quickly, please include:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Your full name and contact details</li>
                <li>Your account or reference number (if applicable)</li>
                <li>A clear description of what went wrong</li>
                <li>When the issue occurred</li>
                <li>What you would like us to do to put things right</li>
                <li>Any relevant documents or evidence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            3. What Happens When You Complain
          </h2>
          <div className="space-y-4">
            <p>
              When we receive your complaint, we will follow this process:
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border-l-4 border-remigo-red pl-6">
                <h3 className="font-trocchi text-xl text-brand-black mb-2">
                  Step 1: Acknowledgement
                </h3>
                <p className="text-sm mb-2">
                  <strong>Within 5 business days</strong>
                </p>
                <p>
                  We will send you an acknowledgement confirming we have received your complaint. This will include a summary of your complaint and the name of the person handling it.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-remigo-red pl-6">
                <h3 className="font-trocchi text-xl text-brand-black mb-2">
                  Step 2: Investigation
                </h3>
                <p className="text-sm mb-2">
                  <strong>Ongoing</strong>
                </p>
                <p>
                  We will thoroughly investigate your complaint. This may involve reviewing your file, speaking to relevant staff members, and gathering any necessary information. We may contact you if we need further details.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-remigo-red pl-6">
                <h3 className="font-trocchi text-xl text-brand-black mb-2">
                  Step 3: Resolution
                </h3>
                <p className="text-sm mb-2">
                  <strong>Within 8 weeks</strong>
                </p>
                <p>
                  We aim to send you a final response within 8 weeks. This will explain:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>The outcome of our investigation</li>
                  <li>Whether we uphold your complaint</li>
                  <li>What action we will take (if any)</li>
                  <li>Any redress or compensation we&apos;re offering</li>
                  <li>Your right to refer the matter to the Financial Ombudsman Service if you remain dissatisfied</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber/10 border-l-4 border-amber rounded-2xl p-6 mt-6">
              <p className="font-semibold mb-2">What if we need more time?</p>
              <p className="text-sm">
                If we cannot provide a final response within 8 weeks, we will write to you explaining why and when you can expect our response. We will also inform you of your right to refer your complaint to the Financial Ombudsman Service.
              </p>
            </div>
          </div>
        </section>

        {/* Financial Ombudsman Service */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            4. Financial Ombudsman Service
          </h2>
          <div className="space-y-4">
            <p>
              If you are not satisfied with our final response, or if we have not provided a final response within 8 weeks, you have the right to refer your complaint to the Financial Ombudsman Service (FOS).
            </p>
            <p>
              The Financial Ombudsman Service is an independent organisation that resolves disputes between consumers and financial services firms. Their service is free to consumers.
            </p>

            <div className="bg-remigo-red/10 rounded-2xl p-8 mt-6">
              <h3 className="font-trocchi text-xl text-brand-black mb-4">
                Financial Ombudsman Service Contact Details
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Website</p>
                  <a
                    href="https://www.financial-ombudsman.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-remigo-red hover:underline cursor-pointer"
                  >
                    www.financial-ombudsman.org.uk
                  </a>
                </div>

                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:08000234567" className="text-remigo-red hover:underline cursor-pointer">
                    0800 023 4567
                  </a>
                  <p className="text-sm text-brand-black/60 mt-1">Monday to Friday, 8am - 8pm · Saturday, 9am - 1pm</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:complaint.info@financial-ombudsman.org.uk"
                    className="text-remigo-red hover:underline cursor-pointer"
                  >
                    complaint.info@financial-ombudsman.org.uk
                  </a>
                </div>

                <div>
                  <p className="font-semibold mb-1">Post</p>
                  <address className="not-italic text-sm">
                    Financial Ombudsman Service<br />
                    Exchange Tower<br />
                    London<br />
                    E14 9SR
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-sky-blue/10 rounded-2xl p-6 mt-6">
              <h3 className="font-trocchi text-lg text-brand-black mb-3">
                Important Time Limits
              </h3>
              <p className="mb-3">You must refer your complaint to the Financial Ombudsman Service:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Within <strong>6 months</strong> of the date of our final response letter, OR</li>
                <li>Within <strong>6 years</strong> of the event you&apos;re complaining about (or within 3 years of when you became aware of the issue)</li>
              </ul>
              <p className="mt-3 text-sm">
                Whichever deadline is <strong>later</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* What We Don't Cover */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            5. What This Complaints Procedure Covers
          </h2>
          <div className="space-y-4">
            <p>
              This complaints procedure covers complaints about:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The mortgage or protection advice we provided</li>
              <li>The service we delivered</li>
              <li>How we handled your application or case</li>
              <li>The information or communication we gave you</li>
              <li>Our administration or processes</li>
              <li>Our fees or charges</li>
            </ul>

            <div className="bg-brand-black/5 rounded-2xl p-6 mt-6">
              <h3 className="font-trocchi text-lg text-brand-black mb-3">
                Complaints About Lenders or Insurers
              </h3>
              <p className="text-sm">
                If your complaint is about a mortgage lender, insurance provider, or another third party (rather than Remigo&apos;s advice or service), you should contact them directly. We can provide you with their complaints procedure details if needed.
              </p>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            6. How We Handle Your Personal Data
          </h2>
          <div className="space-y-4">
            <p>
              When you make a complaint, we will collect and process your personal data in order to investigate and respond to your complaint.
            </p>
            <p>
              We will only use your data for this purpose and will keep it secure. We are required by the Financial Conduct Authority to retain records of complaints for at least 6 years.
            </p>
            <p>
              For more information about how we handle your personal data, please see our{' '}
              <a href="/privacy-policy" className="text-remigo-red hover:underline cursor-pointer">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>

        {/* Our Learning */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            7. Learning From Complaints
          </h2>
          <div className="space-y-4">
            <p>
              We view complaints as an opportunity to improve our service. We regularly review complaints to identify:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Areas where we can improve our processes</li>
              <li>Training needs for our staff</li>
              <li>Patterns or recurring issues</li>
              <li>Ways to prevent similar complaints in the future</li>
            </ul>
            <p>
              Our senior management team reviews complaint data regularly and takes action to address any systemic issues.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4">
            8. Questions About This Procedure
          </h2>
          <div className="space-y-4">
            <p>
              If you have any questions about our complaints procedure, please contact us:
            </p>
            <div className="bg-brand-black/5 rounded-2xl p-6 space-y-2">
              <p><strong>[Legal Entity Name]</strong></p>
              <p>Email: <a href="mailto:[complaints@remigo.co.uk]" className="text-remigo-red hover:underline cursor-pointer">[complaints@remigo.co.uk]</a></p>
              <p>Phone: <a href="tel:[contact-number]" className="text-remigo-red hover:underline cursor-pointer">[Contact Number]</a></p>
              <p>Address: [Registered Address]</p>
            </div>
          </div>
        </section>

        {/* Regulatory Info */}
        <section className="bg-sky-blue/10 rounded-2xl p-8">
          <h2 className="font-trocchi text-2xl text-brand-black mb-4">
            Regulatory Information
          </h2>
          <div className="space-y-3 text-sm">
            <p>
              <strong>[Legal Entity Name]</strong> is authorised and regulated by the Financial Conduct Authority (FCA).
            </p>
            <p>
              FCA Registration Number: <strong>[FCA Number]</strong>
            </p>
            <p>
              You can check our registration on the FCA Register at:{' '}
              <a
                href="https://register.fca.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-remigo-red hover:underline cursor-pointer"
              >
                https://register.fca.org.uk
              </a>
            </p>
            <p className="mt-4">
              This complaints procedure is in line with the FCA&apos;s dispute resolution rules (DISP) in the FCA Handbook.
            </p>
          </div>
        </section>

      </div>

      {/* Footer Note */}
      <div className="mt-16 pt-8 border-t border-brand-black/10">
        <p className="font-hanken text-sm text-brand-black/60 text-center">
          This complaints procedure was last updated on March 2026 and complies with FCA requirements.
        </p>
      </div>
    </div>
  );
}
