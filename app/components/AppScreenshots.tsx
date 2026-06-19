"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/appstore-screenshot-1.png",
    alt: "Dashboard - Your business at a glance",
  },
  {
    src: "/appstore-screenshot-2.png",
    alt: "Accounts - All float accounts in one place",
  },
  {
    src: "/appstore-screenshot-3.png",
    alt: "Reconciliation - Verify balances instantly",
  },
  { src: "/appstore-screenshot-4.png", alt: "Expenses - Track every cost" },
];

export function AppScreenshots() {
  return (
    <section
      id="app-preview"
      className="scroll-mt-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 py-20 md:py-32"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block mb-4 rounded-full bg-brand-gold/10 border border-brand-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold">
            Inside the Teleba app
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            See Teleba in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
            From recording transactions to reconciling balances — here&apos;s
            what your daily workflow looks like with Teleba.
          </p>
        </motion.div>
      </div>

      {/* Static grid of screenshots */}
      <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={screenshot.src}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5"
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={300}
              height={650}
              className="w-full h-auto"
              quality={90}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
