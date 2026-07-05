import type { Metadata } from "next";
import Image from "next/image";
import { WaitlistForm } from "./components/WaitlistForm";
import { AppScreenshots } from "./components/AppScreenshots";
import { HeroSlideshow } from "./components/HeroSlideshow";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./components/AnimatedSection";

const BASE_URL = "https://teleba.io";

function CardIcon({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "red" | "gold";
}) {
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
        tone === "red"
          ? "bg-brand-red-light text-brand-red"
          : "bg-brand-gold text-brand-red-deep"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        {children}
      </svg>
    </span>
  );
}

function Eyebrow({
  children,
  tone = "red",
}: {
  children: React.ReactNode;
  tone?: "red" | "gold";
}) {
  return (
    <span
      className={`mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "gold" ? "text-brand-gold" : "text-brand-red"
      }`}
    >
      {children}
    </span>
  );
}

export const metadata: Metadata = {
  title: "Teleba | Telecom and Agent Banking Platform",
  description:
    "For mobile money, telecom, and banking agents. Track every transaction, commission, and balance, and finish reconciliation in 15 minutes.",
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Teleba",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/opengraph-image`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+256789545073",
        contactType: "customer support",
        email: "info@teleba.io",
        areaServed: "UG",
        availableLanguage: "English",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Teleba",
      alternateName: "Teleba | Telecom and Agent Banking Platform",
      description:
        "Telecom and agent banking platform for reconciliation, commission tracking, and float management in Uganda",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Teleba | Telecom and Agent Banking Platform",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "For mobile money, telecom, and banking agents. Track every transaction, commission, and balance, and finish reconciliation in 15 minutes.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Teleba",
      operatingSystem: "Android, iOS, Web",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "UGX",
      },
      description:
        "Teleba helps mobile money and banking agents reconcile accounts, track commissions, manage float, and grow their business.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-black/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-2.5">
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
            </a>
            <div className="hidden md:flex items-center gap-7 font-mono-brand text-xs uppercase tracking-[0.08em] text-brand-ink-muted">
              <a
                href="#problems"
                className="hover:text-brand-red transition-colors"
              >
                Why
              </a>
              <a
                href="#features"
                className="hover:text-brand-red transition-colors"
              >
                Features
              </a>
              <a
                href="#app-preview"
                className="hover:text-brand-red transition-colors"
              >
                App
              </a>
              <a
                href="#how-it-works"
                className="hover:text-brand-red transition-colors"
              >
                How
              </a>
              <a
                href="#pricing"
                className="hover:text-brand-red transition-colors"
              >
                Pricing
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/sign-in"
                className="hidden sm:inline-flex items-center whitespace-nowrap rounded-full border border-black/15 px-3.5 py-2 font-mono-brand text-xs uppercase tracking-[0.06em] text-brand-ink-muted hover:border-brand-red hover:text-brand-red transition-colors"
              >
                Sign in
              </a>
              <a
                href="#cta"
                className="btn-primary-gradient rounded-full px-5 py-2.5 font-display text-[13px] font-bold text-white"
              >
                Get early access
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero-maroon relative overflow-hidden">
          {/* Decorative rings */}
          <div
            className="hero-ring"
            style={{ width: 700, height: 700, top: -200, right: -150 }}
          />
          <div
            className="hero-ring"
            style={{ width: 500, height: 500, bottom: -100, left: -100 }}
          />

          <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <p className="mb-3 text-[0.72rem] sm:text-sm font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-red-100/75">
                  <span className="sm:hidden">
                    For mobile money, telecom &amp; banking agents
                  </span>
                  <span className="hidden sm:inline">
                    Built for mobile money, telecom &amp; banking agents
                  </span>
                </p>
                <h1 className="text-2xl sm:text-[1.7rem] md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white">
                  Manage all your{" "}
                  <span className="brand-text-gradient">
                    transactions, commissions &amp; reconciliations
                  </span>{" "}
                  in one place.
                </h1>
                <p className="mt-4 max-w-2xl text-base sm:text-[1.05rem] leading-relaxed text-red-100/80">
                  <span className="sm:hidden">
                    Finish reconciliation in 15 minutes.
                  </span>
                  <span className="hidden sm:inline">
                    Track every transaction, commission, and balance in one
                    place — and reconcile in 15 minutes.
                  </span>
                </p>
                <div className="mt-6 hidden md:flex flex-wrap gap-3">
                  <a
                    href="#cta"
                    className="whitespace-nowrap rounded-full bg-brand-gold px-6 py-2.5 text-sm font-bold text-brand-red-deep shadow-lg hover:bg-brand-gold-dark transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Join the Waitlist — It&apos;s Free
                  </a>
                  <a
                    href="#features"
                    className="whitespace-nowrap rounded-full border-2 border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors text-center"
                  >
                    See Features
                  </a>
                </div>
                <p className="mt-3 hidden md:block text-sm text-red-200/60">
                  Available on{" "}
                  <span className="font-semibold text-red-100/80">
                    Android &amp; Web
                  </span>
                </p>
              </div>

              <HeroSlideshow />
            </div>

            <div className="mt-12 grid grid-cols-3 divide-x divide-white/10 border-y border-white/15 text-center">
              <div className="px-4 py-6 sm:px-8">
                <p className="text-2xl md:text-3xl font-bold text-brand-gold">
                  7+
                </p>
                <p className="text-xs sm:text-sm text-red-200/60 mt-1">
                  Account books replaced
                </p>
              </div>
              <div className="px-4 py-6 sm:px-8">
                <p className="text-2xl md:text-3xl font-bold text-brand-gold">
                  2hrs
                </p>
                <p className="text-xs sm:text-sm text-red-200/60 mt-1">
                  Saved daily on reconciliation
                </p>
              </div>
              <div className="px-4 py-6 sm:px-8">
                <p className="text-2xl md:text-3xl font-bold text-brand-gold">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-red-200/60 mt-1">
                  Commission transparency
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section id="problems" className="scroll-mt-20 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="text-center mb-10 md:mb-16">
              <Eyebrow>The Problem</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The Challenges Agents Face Every Day
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                Managing 7+ account books, reconciling for hours, and never
                knowing if you&apos;re being paid correctly — sound familiar?
              </p>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <>
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </>
                  ),
                  title: "Too Many Books",
                  desc: "Agents juggle 7–14 different float accounts across mobile money networks and banks, all tracked on paper.",
                },
                {
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </>
                  ),
                  title: "Hours Lost Reconciling",
                  desc: "End-of-day reconciliation takes 2–3 hours manually. Mistakes slip through and shortages go undetected for days.",
                },
                {
                  icon: (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  ),
                  title: "Commission Opacity",
                  desc: "Very few agents know the exact rates per transaction or whether they're being paid correctly by institutions.",
                },
                {
                  icon: (
                    <>
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </>
                  ),
                  title: "No Business Insights",
                  desc: "Without data, agents can't tell which services are most profitable or where money is leaking.",
                },
                {
                  icon: (
                    <>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </>
                  ),
                  title: "Theft & Embezzlement",
                  desc: "Employee fraud and customer scams are hard to detect without proper digital records and audit trails.",
                },
                {
                  icon: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
                  title: "Liquidity Struggles",
                  desc: "Too much float, not enough cash — or vice versa. No data-driven guidance on optimal allocation.",
                },
              ].map((problem) => (
                <StaggerItem
                  key={problem.title}
                  className="card-hover rounded-2xl bg-white p-8 shadow-sm border border-gray-200/60"
                >
                  <CardIcon tone="red">{problem.icon}</CardIcon>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {problem.desc}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="features-maroon scroll-mt-20 py-20 md:py-28"
        >
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="text-center mb-10 md:mb-16">
              <Eyebrow tone="gold">The Solution</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Everything You Need, One App
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-red-100/80 text-lg">
                Teleba replaces your paper books, spreadsheets, and guesswork
                with a purpose-built platform for agents.
              </p>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 gap-5 md:gap-10">
              {[
                {
                  icon: (
                    <>
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </>
                  ),
                  title: "Centralized Transaction Recording",
                  desc: "Record all transactions — MTN, Airtel, bank deposits — in one place. No more switching between 7 different books.",
                },
                {
                  icon: (
                    <>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </>
                  ),
                  title: "Instant Reconciliation",
                  desc: "Reconcile in 15 minutes instead of 2 hours. AI verifies your balance photos against your recorded data to catch discrepancies.",
                },
                {
                  icon: (
                    <>
                      <line x1="19" y1="5" x2="5" y2="19" />
                      <circle cx="6.5" cy="6.5" r="2.5" />
                      <circle cx="17.5" cy="17.5" r="2.5" />
                    </>
                  ),
                  title: "Commission Tracking & Verification",
                  desc: "Know exactly what you earn per transaction. Teleba calculates what you're owed and flags underpayments automatically.",
                },
                {
                  icon: (
                    <>
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
                    </>
                  ),
                  title: "Expense Management",
                  desc: "Track every expense — transport, airtime, supplies — and see your real profit after costs, not just commissions.",
                },
                {
                  icon: (
                    <>
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </>
                  ),
                  title: "Real-Time Notifications",
                  desc: "Supervisors and owners get instant alerts on reconciliations, losses, and expenses so problems are resolved fast.",
                },
                {
                  icon: (
                    <>
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </>
                  ),
                  title: "Business Analytics",
                  desc: "See which services are most profitable, transaction volume trends, and data-driven recommendations to grow your earnings.",
                },
              ].map((feature) => (
                <StaggerItem
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:bg-white/[0.08] hover:border-brand-gold/40"
                >
                  <CardIcon tone="gold">{feature.icon}</CardIcon>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-red-100/75 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="scroll-mt-20 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="text-center mb-10 md:mb-16">
              <Eyebrow>Simple Process</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How Teleba Works
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                Three simple steps to transform your daily operations.
              </p>
            </AnimatedSection>
            <div className="relative">
              <div
                className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] border-t-2 border-dashed border-gray-300"
                aria-hidden="true"
              />
              <StaggerContainer className="grid md:grid-cols-3 gap-8 md:gap-10">
                {[
                  {
                    step: "1",
                    title: "Record Transactions",
                    desc: "Input your daily transactions across all networks and banks into one unified system as you serve customers.",
                  },
                  {
                    step: "2",
                    title: "Reconcile in Minutes",
                    desc: "At the end of your shift, snap photos of your balances. Teleba quickly shows missing money or wrong figures.",
                  },
                  {
                    step: "3",
                    title: "Grow Your Business",
                    desc: "Use commission insights, expense breakdowns, and liquidity recommendations to make smarter decisions every day.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.step} className="text-center">
                    <div className="step-circle relative inline-flex h-14 w-14 items-center justify-center rounded-full text-brand-gold text-xl font-bold ring-8 ring-[#fbf7f2]">
                      {item.step}
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* App Screenshots */}
        <AppScreenshots />

        {/* Social Proof
        <section className="scroll-mt-20 py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block mb-4 rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold-dark">
              From the pilot
            </span>
            <blockquote className="mt-4 text-xl md:text-2xl font-medium leading-relaxed text-gray-800 italic max-w-3xl mx-auto">
              &ldquo;Before Teleba, reconciliation took me almost two hours every
              night. Now I&apos;m done in 20 minutes and I can actually see
              which network pays me the most.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-gray-700">Sarah K.</p>
            <p className="text-sm text-gray-500">MTN Mobile Money Agent, Kampala</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <p className="text-3xl font-bold text-brand-red">12</p>
                <p className="text-sm text-gray-500 mt-1">Agents in active pilot</p>
              </div>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <p className="text-3xl font-bold text-brand-red">~20 min</p>
                <p className="text-sm text-gray-500 mt-1">
                  Average reconciliation time
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <p className="text-3xl font-bold text-brand-red">Uganda</p>
                <p className="text-sm text-gray-500 mt-1">Active pilot location</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Free to Start. Built to Scale.
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                Teleba is completely free during our launch phase. Full
                features, no hidden costs, no credit card required.
              </p>
            </AnimatedSection>
            <AnimatedSection
              delay={0.2}
              className="mt-12 gold-accent-card rounded-2xl p-6 sm:p-10 max-w-md mx-auto"
            >
              <span className="inline-block rounded-full bg-brand-gold/20 px-4 py-1 text-sm font-semibold text-brand-gold-dark">
                Free through Q3 2026
              </span>
              <p className="mt-6 text-5xl font-extrabold text-gray-900">Free</p>
              <p className="text-gray-500 mt-1">
                for all agents during early access
              </p>
              <p className="mt-2 text-sm font-semibold text-brand-red">
                Accepting first 100 agents — spots filling up
              </p>
              <ul className="mt-8 space-y-3 text-left text-gray-700">
                {[
                  "Unlimited transactions across all institutions",
                  "Full reconciliation suite with AI verification",
                  "Commission tracking and rate calculations",
                  "Expense management and profitability reports",
                  "Real-time supervisor notifications",
                  "Business analytics dashboard",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="btn-primary-gradient mt-8 block rounded-full px-8 py-3.5 text-base font-semibold text-white"
              >
                Get Early Access
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="cta-gradient scroll-mt-20 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Take Control of Your Business?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-red-100 text-lg">
                Join the growing community of agents in Uganda who are
                digitizing their operations with Teleba. Early access is
                completely free.
              </p>
            </AnimatedSection>
            <div className="mt-10">
              <WaitlistForm />
            </div>
            <p className="mt-5 md:hidden font-mono-brand text-[11px] uppercase tracking-[0.12em] text-red-200/70">
              Available on Android &amp; Web · Free during early access
            </p>
            <p className="mt-6 text-sm text-red-200">
              Already have an account?{" "}
              <a
                href="https://app.teleba.io/(auth)/sign-in"
                className="font-semibold underline hover:text-white transition-colors"
              >
                Sign in to the app →
              </a>
            </p>
            <p className="mt-3 text-sm text-red-200">
              Prefer to reach out directly?{" "}
              <a
                href="mailto:info@teleba.io"
                className="underline hover:text-white transition-colors"
              >
                Email us at info@teleba.io
              </a>{" "}
              or{" "}
              <a
                href="tel:+256789545073"
                className="underline hover:text-white transition-colors"
              >
                call us
              </a>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="scroll-mt-20 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <AnimatedSection className="text-center mb-10 md:mb-16">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>
            <StaggerContainer className="space-y-4">
              {[
                {
                  q: "What devices does Teleba work on?",
                  a: "Teleba works on Android phones and any web browser on a computer or tablet. You don't need a specific device — if you can browse the internet, you can use Teleba.",
                },
                {
                  q: "Does it work offline or in areas with poor network?",
                  a: "Yes. Teleba is built for real agent conditions. You can record transactions offline and they sync automatically once your connection is restored.",
                },
                {
                  q: "Is my business data safe?",
                  a: "Your data is encrypted and stored securely in the cloud. Only you and the people you grant access to — like a supervisor — can see your records.",
                },
              ].map((item) => (
                <StaggerItem
                  key={item.q}
                  className="card-hover rounded-2xl bg-white border border-gray-200/60 p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold text-gray-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-[#1a1210] to-[#0b0706] py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2.5">
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
              </div>
              <p className="text-white/50 text-sm max-w-[40ch] text-center md:text-left">
                Telecom &amp; banking agent platform — made for Uganda&apos;s
                agents.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/50">
                <a
                  href="/privacy-policy"
                  className="text-white/60 hover:text-brand-gold transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="opacity-40">·</span>
                <p>&copy; {new Date().getFullYear()} Teleba</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
