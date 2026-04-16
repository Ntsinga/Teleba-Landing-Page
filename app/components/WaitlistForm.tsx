"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.zesha.app";

type FormState = "idle" | "loading" | "success" | "duplicate" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    setState("loading");

    try {
      const res = await fetch(`${API_URL}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.status === 201) {
        setState("success");
        setEmail("");
      } else if (res.status === 409) {
        setState("duplicate");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-2xl">🎉</span>
        <p className="font-semibold text-white">You&apos;re on the list!</p>
        <p className="text-sm text-red-100">
          We&apos;ll reach out when your spot is ready.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
    >
      <input
        type="email"
        required
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state !== "idle") setState("idle");
        }}
        className="flex-1 rounded-full px-5 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-gold"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-red-deep hover:bg-brand-gold-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 whitespace-nowrap"
      >
        {state === "loading" ? "Joining…" : "Join the Waitlist"}
      </button>
      {state === "duplicate" && (
        <p className="w-full text-center text-xs text-red-200 -mt-1">
          That email is already on the waitlist.
        </p>
      )}
      {state === "error" && (
        <p className="w-full text-center text-xs text-red-200 -mt-1">
          Something went wrong. Try again or email us at info@teleba.io
        </p>
      )}
    </form>
  );
}
