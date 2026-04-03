"use client";

import { motion } from "framer-motion";

const TAGS = [
  "Design Systems",
  "0-1 Products",
  "Team Leadership",
  "UX Strategy",
  "Brand",
  "Enterprise",
  "Accessibility",
  "Prototyping",
  "User Research",
  "Interaction Design",
];

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...TAGS, ...TAGS, ...TAGS];
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-6 shrink-0"
        animate={{ x: reverse ? ["0%", "33.33%"] : ["0%", "-33.33%"] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ willChange: "transform" }}
      >
        {items.map((tag, i) => (
          <span
            key={i}
            className="shrink-0 text-label font-medium uppercase tracking-widest text-muted border border-border rounded-full px-5 py-2.5 whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden border-t border-border">
      <div className="flex flex-col gap-4">
        <MarqueeTrack />
        <MarqueeTrack reverse />
      </div>
    </section>
  );
}
