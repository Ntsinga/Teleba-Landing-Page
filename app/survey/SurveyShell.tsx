"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SurveyStart } from "./SurveyStart";

type SurveyShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  steps: ReactNode[];
  enumerator?: boolean;
};

function SurveyNav({ onNewSurvey }: { onNewSurvey?: () => void }) {
  return (
    <nav className="shrink-0 border-b border-black/5 bg-background/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
        {onNewSurvey && (
          <button
            type="button"
            onClick={onNewSurvey}
            className="text-sm font-semibold text-brand-red underline underline-offset-2"
          >
            New survey
          </button>
        )}
      </div>
    </nav>
  );
}

export function SurveyShell({
  eyebrow,
  title,
  intro,
  steps,
  enumerator = false,
}: SurveyShellProps) {
  const [formUrl, setFormUrl] = useState<string | null>(null);

  function startNewSurvey() {
    const confirmed = window.confirm(
      "Start a new survey? Answers that have not been submitted will be lost.",
    );
    if (confirmed) setFormUrl(null);
  }

  if (formUrl) {
    return (
      <div className="flex h-dvh flex-col bg-background">
        <SurveyNav onNewSurvey={enumerator ? startNewSurvey : undefined} />
        <iframe
          src={formUrl}
          title="Teleba agent survey"
          className="mx-auto w-full max-w-3xl flex-1 bg-white"
        >
          Loading…
        </iframe>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SurveyNav />

      <section className="hero-maroon relative overflow-hidden">
        <div
          className="hero-ring"
          style={{ width: 700, height: 700, top: -200, right: -150 }}
        />
        <div
          className="hero-ring"
          style={{ width: 500, height: 500, bottom: -100, left: -100 }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:py-20">
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-mono-brand text-xs uppercase tracking-[0.16em] text-brand-gold">
                {eyebrow}
              </p>
              <h1 className="mt-3 font-display text-3xl font-black leading-tight text-white lg:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-red-100">
                {intro}
              </p>
            </div>
            <div className="rounded-3xl bg-background p-5 shadow-lg">
              <SurveyStart enumerator={enumerator} onFormReady={setFormUrl} />
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#241a18] shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <Image
              src="/hero-survey.webp"
              alt="An interviewer with a phone talking to a mobile money agent at her kiosk in a Kampala market"
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-12">
        <ul className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={index}
              className="rounded-2xl border border-black/10 bg-white p-5 text-sm leading-relaxed text-brand-ink-muted"
            >
              <span className="mb-2 block font-mono-brand text-xs text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              {step}
            </li>
          ))}
        </ul>

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
