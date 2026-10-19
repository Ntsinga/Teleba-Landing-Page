import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SurveyStart } from "./SurveyStart";

export const metadata: Metadata = {
  title: "Agent Survey",
  description:
    "Help us build better tools for mobile money and banking agents in Uganda. The survey takes about 15 minutes.",
  alternates: {
    canonical: "https://teleba.io/survey",
  },
  robots: { index: false, follow: false },
};

export default function SurveyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <nav className="border-b border-black/5 bg-background/90">
        <div className="mx-auto flex max-w-xl items-center px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.png"
              alt="Teleba"
              width={34}
              height={34}
              className="rounded-[9px]"
            />
            <span className="wordmark-gold-gradient font-display text-[22px] font-black leading-none tracking-tight">
              Teleba
            </span>
          </Link>
        </div>
      </nav>

      <section className="hero-maroon relative overflow-hidden">
        <div
          className="hero-ring"
          style={{ width: 380, height: 380, top: -200, right: -140 }}
        />
        <div className="relative mx-auto max-w-xl px-6 py-12">
          <p className="font-mono-brand text-xs uppercase tracking-[0.16em] text-brand-gold">
            Agent survey
          </p>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight text-white sm:text-4xl">
            Help us build better tools for agents
          </h1>
          <p className="mt-4 text-base leading-relaxed text-red-100">
            Tell us how you started your agent business and how you run it
            day to day. It takes about 15 minutes.
          </p>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-6 px-6 py-10">
        <ul className="flex flex-col gap-3 text-sm text-brand-ink-muted">
          <li className="flex gap-3">
            <span className="mt-0.5 font-mono-brand text-xs text-brand-red">01</span>
            Tap <strong className="text-foreground">Start survey</strong> and
            allow location when your phone asks. We record where the business
            is so we can see which areas we have reached.
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 font-mono-brand text-xs text-brand-red">02</span>
            Answer the questions. We never ask for exact earnings, balances or
            losses.
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 font-mono-brand text-xs text-brand-red">03</span>
            Your answers are confidential and only used to improve Teleba.
          </li>
        </ul>

        <SurveyStart />

        <p className="text-center text-xs text-brand-ink-muted">
          Questions? Email{" "}
          <a href="mailto:info@teleba.io" className="underline">
            info@teleba.io
          </a>
          . Read our{" "}
          <Link href="/privacy-policy" className="underline">
            privacy policy
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
