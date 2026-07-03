"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/hero-agents-market.png",
    alt: "Agents reviewing their Teleba dashboard at a market kiosk in Kampala",
  },
  {
    src: "/hero-agents-counter.png",
    alt: "Agents reconciling with Teleba on phone and tablet at the counter",
  },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#241a18] shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          priority={i === 0}
          className="object-cover transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: active === i ? 1 : 0 }}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(91,6,17,0.74)] via-[rgba(91,6,17,0.10)] to-transparent" />
      <span className="absolute left-4 top-4 rounded-full border border-brand-gold/35 bg-brand-red-deep/60 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-gold backdrop-blur-sm">
        Now piloting in Uganda
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="m-0 max-w-[26ch] text-base sm:text-lg font-bold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
          Built for the counter — where agents actually work.
        </p>
      </div>
      <div className="absolute right-4 top-4 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            onClick={() => setActive(i)}
            className="h-2 cursor-pointer rounded-full border-none p-0 shadow-[0_1px_4px_rgba(0,0,0,0.35)] transition-all duration-300"
            style={{
              width: active === i ? 22 : 8,
              background:
                active === i ? "var(--brand-gold)" : "rgba(255,255,255,0.55)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
