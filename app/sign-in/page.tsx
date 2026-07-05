import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SignInForm } from "./SignInForm";

export const metadata: Metadata = {
  title: "Sign In | Teleba",
  description:
    "Sign in to Teleba to record transactions, reconcile balances, and track every commission in one place.",
  alternates: {
    canonical: "https://teleba.io/sign-in",
  },
};

export default function SignIn() {
  return (
    <div className="grid min-h-screen md:grid-cols-[1.05fr_1fr]">
      {/* Brand panel */}
      <div className="hero-maroon relative hidden overflow-hidden md:flex flex-col justify-between px-[52px] py-11">
        <div
          className="hero-ring"
          style={{ width: 640, height: 640, top: -200, right: -180 }}
        />
        <div
          className="hero-ring"
          style={{ width: 460, height: 460, bottom: -160, left: -140 }}
        />

        <Link href="/" className="relative flex items-center gap-2.5">
          <Image
            src="/logo-mark.png"
            alt="Teleba"
            width={38}
            height={38}
            className="rounded-[10px]"
          />
          <span className="brand-text-gradient font-display text-[23px] font-black tracking-tight leading-none">
            Teleba
          </span>
        </Link>

        <div className="relative">
          <p className="font-mono-brand text-[11px] uppercase tracking-[0.16em] text-brand-gold">
            Agent banking, digitized
          </p>
          <h1 className="mt-4 max-w-[16ch] font-display text-3xl lg:text-[2.7rem] font-extrabold leading-[1.08] tracking-tight text-white text-balance">
            Say bye to shortages, and hello to more profits.
          </h1>
          <p className="mt-4 max-w-[42ch] text-[1.02rem] leading-relaxed text-red-100/80">
            Sign in to record transactions, reconcile balances, and track every
            commission — all in one place.
          </p>
        </div>

        <div className="relative flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3.5">
          <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-xl bg-[#241a18]">
            <Image
              src="/hero-agents-counter.png"
              alt="Agents using Teleba at the counter"
              fill
              sizes="52px"
              className="object-cover"
            />
          </div>
          <p className="text-[0.92rem] leading-snug text-red-100/85">
            Trusted by mobile money agents piloting across Uganda.
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="relative flex flex-col bg-background px-6 pb-7 pt-8 sm:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:invisible">
            <Image
              src="/logo-mark.png"
              alt="Teleba"
              width={30}
              height={30}
              className="rounded-lg"
            />
            <span className="wordmark-gold-gradient font-display text-[19px] font-black tracking-tight leading-none">
              Teleba
            </span>
          </Link>
          <a
            href="mailto:info@teleba.io"
            className="whitespace-nowrap rounded-full border border-black/15 px-3.5 py-2 font-mono-brand text-[11px] uppercase tracking-[0.06em] text-brand-ink-muted hover:border-brand-red hover:text-brand-red transition-colors"
          >
            Need help?
          </a>
        </div>

        <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col justify-center py-8">
          <p className="font-mono-brand text-xs uppercase tracking-[0.14em] text-brand-red">
            Welcome back
          </p>
          <h2 className="mt-2.5 font-display text-[1.9rem] font-extrabold leading-tight tracking-tight text-foreground text-balance">
            Sign in to your account
          </h2>
          <p className="mt-3 text-base text-brand-ink-muted">
            Enter your details to pick up where you left off.
          </p>

          <SignInForm />

          <div className="my-6 flex items-center gap-3.5">
            <div className="h-px flex-1 bg-black/10" />
            <span className="font-mono-brand text-[11px] uppercase tracking-[0.08em] text-[#a79e99]">
              or
            </span>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <p className="text-center text-[14.5px] text-brand-ink-muted">
            New to Teleba?{" "}
            <Link
              href="/#cta"
              className="font-bold text-brand-red hover:text-brand-red-dark transition-colors"
            >
              Request early access →
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-[#a79e99]">
          &copy; {new Date().getFullYear()} Teleba. All rights reserved.
        </p>
      </div>
    </div>
  );
}
