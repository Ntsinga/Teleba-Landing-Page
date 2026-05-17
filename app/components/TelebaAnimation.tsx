"use client";
import { useEffect, useState } from "react";

export function TelebaAnimation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 2400),
      setTimeout(() => setPhase(3), 4000),
      setTimeout(() => setPhase(4), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const expanding = phase >= 2;
  const showAnd = phase >= 3;

  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      {/* Word container — scale() for size (GPU), max-width for reveal */}
      <div
        className="flex flex-wrap items-baseline justify-center font-extrabold text-[clamp(1.6rem,5vw,3rem)] leading-tight"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: `scale(${expanding ? 1 : 1.4}) translateY(${phase >= 1 ? 0 : 16}px)`,
          transition:
            "opacity 1s ease, transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <span className="brand-text-gradient inline-block">Tele</span>
        <span
          className="text-white inline-block overflow-hidden whitespace-nowrap"
          style={{
            maxWidth: expanding ? "2.5em" : "0",
            opacity: expanding ? 1 : 0,
            transition:
              "max-width 1.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease 0.15s",
          }}
        >
          com
        </span>
        <span
          className="text-white/40 font-light inline-block overflow-hidden whitespace-nowrap"
          style={{
            maxWidth: showAnd ? "3.5em" : "0",
            opacity: showAnd ? 1 : 0,
            paddingLeft: "0.3em",
            paddingRight: "0.3em",
            transition:
              "max-width 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease 0.15s",
          }}
        >
          and
        </span>
        <span
          className="brand-text-gradient inline-block overflow-hidden whitespace-nowrap"
          style={{
            maxWidth: expanding ? "0" : "1.6em",
            opacity: expanding ? 0 : 1,
            transition:
              "max-width 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease",
          }}
        >
          ba
        </span>
        <span
          className="brand-text-gradient inline-block overflow-hidden whitespace-nowrap"
          style={{
            maxWidth: expanding ? "1em" : "0",
            opacity: expanding ? 1 : 0,
            transition:
              "max-width 1.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease 0.1s",
          }}
        >
          B
        </span>
        <span
          className="text-white inline-block overflow-hidden whitespace-nowrap"
          style={{
            maxWidth: expanding ? "5em" : "0",
            opacity: expanding ? 1 : 0,
            transition:
              "max-width 1.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease 0.15s",
          }}
        >
          anking
        </span>
        <span
          className="text-white inline-block overflow-hidden whitespace-nowrap"
          style={{
            maxWidth: expanding ? "5em" : "0",
            opacity: expanding ? 1 : 0,
            paddingLeft: "0.3em",
            transition:
              "max-width 1.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease 0.15s",
          }}
        >
          Agent
        </span>
        <span
          className="brand-text-gradient inline-block overflow-hidden whitespace-nowrap"
          style={{
            maxWidth: expanding ? "1.3em" : "0",
            opacity: expanding ? 1 : 0,
            paddingLeft: "0.3em",
            transition:
              "max-width 1.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease 0.15s",
          }}
        >
          A
        </span>
        <span
          className="text-white inline-block overflow-hidden whitespace-nowrap"
          style={{
            maxWidth: expanding ? "8em" : "0",
            opacity: expanding ? 1 : 0,
            transition:
              "max-width 1.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease 0.15s",
          }}
        >
          pplication
        </span>
      </div>

      {/* Tagline */}
      <div
        className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]"
        style={{
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <span className="text-brand-gold">Float</span>
        <span className="text-white/25 text-base">·</span>
        <span className="text-brand-gold">Commissions</span>
        <span className="text-white/25 text-base">·</span>
        <span className="text-brand-gold">Reconciliation</span>
      </div>

      {/* Badge */}
      <span
        className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold"
        style={{
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        Now piloting in Uganda
      </span>
    </div>
  );
}
