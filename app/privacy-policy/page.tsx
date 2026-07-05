import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Teleba Privacy Policy — how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://teleba.io/privacy-policy",
  },
};

function SectionCard({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8">
      <h2 className="flex items-baseline gap-3 text-xl font-bold text-foreground">
        <span className="font-mono-brand text-xs tracking-[0.1em] text-brand-red">
          {n}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.png"
              alt="Teleba"
              width={34}
              height={34}
              className="rounded-[9px]"
            />
            <span className="wordmark-gold-gradient font-display text-[22px] font-black tracking-tight leading-none">
              Teleba
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center whitespace-nowrap rounded-full border border-black/15 px-3.5 py-2 font-mono-brand text-xs uppercase tracking-[0.06em] text-brand-ink-muted hover:border-brand-red hover:text-brand-red transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/#cta"
              className="btn-primary-gradient rounded-full px-5 py-2.5 font-display text-[13px] font-bold text-white"
            >
              Get early access
            </Link>
          </div>
        </div>
      </nav>

      {/* Page header */}
      <section className="hero-maroon relative overflow-hidden">
        <div
          className="hero-ring"
          style={{ width: 480, height: 480, top: -220, right: -120 }}
        />
        <div className="relative max-w-4xl mx-auto px-6 py-14 md:py-16">
          <p className="font-mono-brand text-xs uppercase tracking-[0.16em] text-brand-gold">
            Legal
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 font-mono-brand text-xs uppercase tracking-[0.08em] text-red-100/60">
            Last updated: May 18, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-14 md:py-20">
        <div className="space-y-5 text-brand-ink-muted leading-relaxed">
          <SectionCard n="01" title="Introduction">
            <p className="mt-3">
              Teleba (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use the Teleba mobile application and web platform
              (collectively, the &quot;Service&quot;).
            </p>
          </SectionCard>

          <SectionCard n="02" title="Information We Collect">
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              2.1 Information You Provide
            </h3>
            <ul className="mt-2 list-disc pl-6 space-y-1 marker:text-brand-red">
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

            <h3 className="mt-4 text-lg font-semibold text-foreground">
              2.2 Information Collected Automatically
            </h3>
            <ul className="mt-2 list-disc pl-6 space-y-1 marker:text-brand-red">
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
          </SectionCard>

          <SectionCard n="03" title="How We Use Your Information">
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1 marker:text-brand-red">
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
          </SectionCard>

          <SectionCard n="04" title="Data Sharing & Disclosure">
            <p className="mt-3">
              We do not sell your personal data. We may share your information
              only in the following circumstances:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1 marker:text-brand-red">
              <li>
                <strong className="text-foreground">
                  Within your organization:
                </strong>{" "}
                Supervisors and owners within your agency can access transaction
                and reconciliation data for accounts they manage.
              </li>
              <li>
                <strong className="text-foreground">Service providers:</strong>{" "}
                Trusted third-party services that help us operate the platform
                (e.g., cloud hosting, authentication, analytics), bound by
                confidentiality agreements.
              </li>
              <li>
                <strong className="text-foreground">Legal requirements:</strong>{" "}
                When required by law, court order, or governmental authority.
              </li>
            </ul>
          </SectionCard>

          <SectionCard n="05" title="Data Security">
            <p className="mt-3">
              We implement industry-standard security measures to protect your
              data, including encryption in transit and at rest, secure
              authentication via Clerk, and access controls. However, no method
              of electronic transmission or storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </SectionCard>

          <SectionCard n="06" title="Data Retention">
            <p className="mt-3">
              We retain your data for as long as your account is active or as
              needed to provide the Service. If you request account deletion, we
              will delete or anonymize your personal data within 90 days, except
              where retention is required by law.
            </p>
          </SectionCard>

          <SectionCard n="07" title="Your Rights">
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1 marker:text-brand-red">
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
                className="font-semibold text-brand-red hover:underline"
              >
                info@teleba.io
              </a>
              .
            </p>
          </SectionCard>

          <SectionCard n="08" title="Children's Privacy">
            <p className="mt-3">
              The Service is not intended for individuals under 18 years of age.
              We do not knowingly collect personal data from children. If we
              become aware that we have collected data from a child, we will
              delete it promptly.
            </p>
          </SectionCard>

          <SectionCard n="09" title="Changes to This Policy">
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the new policy on this
              page and updating the &quot;Last updated&quot; date. Your
              continued use of the Service after changes constitutes acceptance
              of the updated policy.
            </p>
          </SectionCard>

          <SectionCard n="10" title="Contact Us">
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1 marker:text-brand-red">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@teleba.io"
                  className="font-semibold text-brand-red hover:underline"
                >
                  info@teleba.io
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+256789545073"
                  className="font-semibold text-brand-red hover:underline"
                >
                  +256 789 545 073
                </a>
              </li>
            </ul>
          </SectionCard>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#1a1210] to-[#0b0706] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt="Teleba"
                width={30}
                height={30}
                className="rounded-lg"
              />
              <span className="wordmark-gold-gradient font-display text-xl font-black tracking-tight leading-none">
                Teleba
              </span>
            </Link>
            <p className="text-white/50 text-sm max-w-[40ch] text-center md:text-left">
              Telecom &amp; banking agent platform — made for Uganda&apos;s
              agents.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <Link
                href="/"
                className="text-white/60 hover:text-brand-gold transition-colors"
              >
                Home
              </Link>
              <span className="opacity-40">·</span>
              <p>&copy; {new Date().getFullYear()} Teleba</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
