import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Teleba Privacy Policy — how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://teleba.io/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-brand-red">Tele</span>
            <span className="text-brand-gold-dark">ba</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: May 18, 2026</p>

        <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900">1. Introduction</h2>
            <p className="mt-3">
              Teleba (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use the Teleba mobile application and web platform
              (collectively, the &quot;Service&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              2. Information We Collect
            </h2>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              2.1 Information You Provide
            </h3>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                Account information: name, email address, phone number, and
                company/agency details.
              </li>
              <li>
                Transaction data: records of float transactions, commissions,
                expenses, and reconciliation entries you create in the Service.
              </li>
              <li>
                Balance verification images: photos of account balance screens
                you upload for reconciliation.
              </li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              2.2 Information Collected Automatically
            </h3>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                Device information: device type, operating system, and unique
                device identifiers.
              </li>
              <li>
                Usage data: features used, actions taken, and time spent in the
                Service.
              </li>
              <li>Log data: IP address, browser type, and access times.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve the Service.</li>
              <li>
                Process transactions and perform reconciliation calculations.
              </li>
              <li>
                Send notifications related to your account and reconciliation
                activity.
              </li>
              <li>Generate business analytics and reports for your agency.</li>
              <li>
                Communicate with you about updates, promotions, and support.
              </li>
              <li>Detect and prevent fraud or unauthorized access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              4. Data Sharing &amp; Disclosure
            </h2>
            <p className="mt-3">
              We do not sell your personal data. We may share your information
              only in the following circumstances:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                <strong>Within your organization:</strong> Supervisors and
                owners within your agency can access transaction and
                reconciliation data for accounts they manage.
              </li>
              <li>
                <strong>Service providers:</strong> Trusted third-party services
                that help us operate the platform (e.g., cloud hosting,
                authentication, analytics), bound by confidentiality agreements.
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law, court
                order, or governmental authority.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              5. Data Security
            </h2>
            <p className="mt-3">
              We implement industry-standard security measures to protect your
              data, including encryption in transit and at rest, secure
              authentication via Clerk, and access controls. However, no method
              of electronic transmission or storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              6. Data Retention
            </h2>
            <p className="mt-3">
              We retain your data for as long as your account is active or as
              needed to provide the Service. If you request account deletion, we
              will delete or anonymize your personal data within 30 days, except
              where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">7. Your Rights</h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your account and associated data.</li>
              <li>
                Withdraw consent for optional data processing at any time.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:info@teleba.io"
                className="text-brand-red hover:underline"
              >
                info@teleba.io
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              The Service is not intended for individuals under 18 years of age.
              We do not knowingly collect personal data from children. If we
              become aware that we have collected data from a child, we will
              delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the new policy on this
              page and updating the &quot;Last updated&quot; date. Your
              continued use of the Service after changes constitutes acceptance
              of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">10. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@teleba.io"
                  className="text-brand-red hover:underline"
                >
                  info@teleba.io
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+256789545073"
                  className="text-brand-red hover:underline"
                >
                  +256 789 545 073
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="text-xl font-bold">
              <span className="text-brand-red">Tele</span>
              <span className="brand-text-gradient">ba</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Telecom &amp; Banking Agent Application — Made for Uganda&apos;s
              agents.
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Teleba. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
