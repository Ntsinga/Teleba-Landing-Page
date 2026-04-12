const BASE_URL = "https://teleba.io";

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
      description:
        "The Agent-First Platform for Telecom and Banking Agents in Uganda",
      publisher: { "@id": `${BASE_URL}/#organization` },
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
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-brand-red">Tele</span>
              <span className="text-brand-gold-dark">ba</span>
            </span>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a
                href="#problems"
                className="hover:text-brand-red transition-colors"
              >
                Why Teleba
              </a>
              <a
                href="#features"
                className="hover:text-brand-red transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-brand-red transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="hover:text-brand-red transition-colors"
              >
                Pricing
              </a>
            </div>
            <a
              href="#cta"
              className="rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-red-900 transition-colors"
            >
              Get Early Access
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-red-light via-white to-white">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
            <span className="inline-block mb-4 rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold-dark">
              Now piloting in Uganda
            </span>
            <h1 className="max-w-3xl text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              The <span className="text-brand-red">Agent-First</span> Platform
              for Telecom &amp; Banking Agents
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-600">
              Stop drowning in paperwork. Teleba puts all your mobile money and
              bank transactions in one place, shows you what&apos;s actually
              profitable, and helps you make more money with the same effort.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="rounded-full bg-brand-red px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-red-900 transition-colors"
              >
                Join the Waitlist — It&apos;s Free
              </a>
              <a
                href="#features"
                className="rounded-full border-2 border-brand-red px-8 py-3.5 text-base font-semibold text-brand-red hover:bg-brand-red-light transition-colors"
              >
                See Features
              </a>
            </div>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-brand-red">7+</p>
                <p className="text-sm text-gray-500 mt-1">
                  Account books replaced
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-red">2hrs</p>
                <p className="text-sm text-gray-500 mt-1">
                  Saved daily on reconciliation
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-red">100%</p>
                <p className="text-sm text-gray-500 mt-1">
                  Commission transparency
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section
          id="problems"
          className="scroll-mt-20 bg-gray-50 py-20 md:py-28"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The Challenges Agents Face Every Day
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                Managing 7+ account books, reconciling for hours, and never
                knowing if you&apos;re being paid correctly — sound familiar?
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📒",
                  title: "Too Many Books",
                  desc: "Agents juggle 7–14 different float accounts across mobile money networks and banks, all tracked on paper.",
                },
                {
                  icon: "⏰",
                  title: "Hours Lost Reconciling",
                  desc: "End-of-day reconciliation takes 2–3 hours manually. Mistakes slip through and shortages go undetected for days.",
                },
                {
                  icon: "💸",
                  title: "Commission Opacity",
                  desc: "Very few agents know the exact rates per transaction or whether they're being paid correctly by institutions.",
                },
                {
                  icon: "📉",
                  title: "No Business Insights",
                  desc: "Without data, agents can't tell which services are most profitable or where money is leaking.",
                },
                {
                  icon: "🔐",
                  title: "Theft & Embezzlement",
                  desc: "Employee fraud and customer scams are hard to detect without proper digital records and audit trails.",
                },
                {
                  icon: "💧",
                  title: "Liquidity Struggles",
                  desc: "Too much float, not enough cash — or vice versa. No data-driven guidance on optimal allocation.",
                },
              ].map((problem) => (
                <div
                  key={problem.title}
                  className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl">{problem.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Everything You Need, One App
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                Teleba replaces your paper books, spreadsheets, and guesswork
                with a purpose-built platform for agents.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-10">
              {[
                {
                  icon: "⚡",
                  title: "Centralized Transaction Recording",
                  desc: "Record all transactions — MTN, Airtel, bank deposits — in one place. No more switching between 7 different books.",
                },
                {
                  icon: "✅",
                  title: "Instant Reconciliation",
                  desc: "Reconcile in 15 minutes instead of 2 hours. AI verifies your balance photos against your recorded data to catch discrepancies.",
                },
                {
                  icon: "📊",
                  title: "Commission Tracking & Verification",
                  desc: "Know exactly what you earn per transaction. Teleba calculates what you're owed and flags underpayments automatically.",
                },
                {
                  icon: "📋",
                  title: "Expense Management",
                  desc: "Track every expense — transport, airtime, supplies — and see your real profit after costs, not just commissions.",
                },
                {
                  icon: "🔔",
                  title: "Real-Time Notifications",
                  desc: "Supervisors and owners get instant alerts on reconciliations, losses, and expenses so problems are resolved fast.",
                },
                {
                  icon: "📈",
                  title: "Business Analytics",
                  desc: "See which services are most profitable, transaction volume trends, and data-driven recommendations to grow your earnings.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-gray-100 p-6 hover:border-brand-red/20 transition-colors"
                >
                  <span className="text-2xl mt-1 shrink-0">{feature.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="scroll-mt-20 bg-gray-50 py-20 md:py-28"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How Teleba Works
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
                Three simple steps to transform your daily operations.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  step: "1",
                  title: "Record Transactions",
                  desc: "Input your daily transactions across all networks and banks into one unified system as you serve customers.",
                },
                {
                  step: "2",
                  title: "Reconcile in Minutes",
                  desc: "At the end of your shift, snap photos of your balances. Teleba cross-references everything and flags discrepancies.",
                },
                {
                  step: "3",
                  title: "Grow Your Business",
                  desc: "Use commission insights, expense breakdowns, and liquidity recommendations to make smarter decisions every day.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Free to Start. Built to Scale.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
              Teleba is completely free during our launch phase. Full features,
              no hidden costs, no credit card required.
            </p>
            <div className="mt-12 rounded-2xl border-2 border-brand-gold bg-white p-6 sm:p-10 shadow-md hover:shadow-lg transition-shadow max-w-md mx-auto">
              <span className="inline-block rounded-full bg-brand-gold/20 px-4 py-1 text-sm font-semibold text-brand-gold-dark">
                Launch Offer
              </span>
              <p className="mt-6 text-5xl font-extrabold text-gray-900">Free</p>
              <p className="text-gray-500 mt-1">
                for all agents during early access
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
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="mt-8 block rounded-full bg-brand-red px-8 py-3.5 text-base font-semibold text-white hover:bg-red-900 transition-colors"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="scroll-mt-20 bg-brand-red py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Take Control of Your Business?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-red-100 text-lg">
              Join the growing community of agents in Uganda who are digitizing
              their operations with Teleba. Early access is completely free.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@teleba.io"
                className="rounded-full bg-brand-gold px-8 py-3.5 text-base font-bold text-gray-900 hover:bg-brand-gold-dark transition-colors shadow-lg"
              >
                Contact Us — info@teleba.io
              </a>
              <a
                href="tel:+256789545073"
                className="rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <span className="text-xl font-bold">
                <span className="text-brand-red">Tele</span>
                <span className="text-brand-gold">ba</span>
              </span>
              <p className="text-gray-400 text-sm">
                Telecom &amp; Banking Agent Application — Built for agents, by
                people who understand the hustle.
              </p>
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Teleba. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
