"use client";

import { useState } from "react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Auth backend not wired up yet — the app currently authenticates at
    // app.teleba.io. Swap this for the real sign-in call when available.
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
      <div>
        <label
          htmlFor="tb-email"
          className="mb-2 block text-[13px] font-semibold text-[#3a322f]"
        >
          Email address
        </label>
        <div className="flex items-center gap-3 rounded-[14px] border-[1.5px] border-black/10 bg-white px-4 transition-all focus-within:border-brand-red focus-within:ring-4 focus-within:ring-brand-red/10">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A79E99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
            aria-hidden="true"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 5L2 7" />
          </svg>
          <input
            id="tb-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border-none bg-transparent py-[15px] text-[15px] text-foreground outline-none placeholder:text-[#a79e99]"
          />
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="tb-pass"
            className="text-[13px] font-semibold text-[#3a322f]"
          >
            Password
          </label>
          <a
            href="https://app.teleba.io/(auth)/sign-in"
            className="text-[13px] font-semibold text-brand-red hover:text-brand-red-dark transition-colors"
          >
            Forgot password?
          </a>
        </div>
        <div className="flex items-center gap-3 rounded-[14px] border-[1.5px] border-black/10 bg-white px-4 transition-all focus-within:border-brand-red focus-within:ring-4 focus-within:ring-brand-red/10">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A79E99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <input
            id="tb-pass"
            type={show ? "text" : "password"}
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 border-none bg-transparent py-[15px] text-[15px] text-foreground outline-none placeholder:text-[#a79e99]"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label="Toggle password visibility"
            className="flex shrink-0 cursor-pointer items-center border-none bg-transparent p-1 text-[#a79e99] hover:text-brand-red transition-colors"
          >
            {show ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 8 10 8a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.5 13.5 0 0 0 2 12s3.5 7 10 7a9.12 9.12 0 0 0 5.39-1.61" />
                <line x1="2" y1="2" x2="22" y2="22" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <label className="-mt-0.5 flex cursor-pointer select-none items-center gap-2.5">
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="h-[17px] w-[17px] cursor-pointer accent-brand-red"
        />
        <span className="text-sm text-[#3a322f]">Keep me signed in</span>
      </label>

      <button
        type="submit"
        className="mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-[14px] border-none bg-[linear-gradient(180deg,#FFE05C,#FDD835_52%,#EFC400)] p-4 font-display text-base font-extrabold text-brand-red-deep shadow-[0_10px_26px_rgba(239,196,0,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(239,196,0,0.42)]"
      >
        Sign in
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
