"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import MarqueeSection from "@/components/MarqueeSection";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

// Staggered hero headline animation
const HEADLINE_WORDS = [
  "Designing",
  "products,",
  "building",
  "teams,",
  "and",
  "creating",
  "what",
  "matters.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* ── Hero ── */}
      <section className="px-6 md:px-10 pt-24 pb-16 md:pt-32 md:pb-24 max-w-site mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-label font-medium uppercase tracking-widest text-muted mb-8"
        >
          Director of Product Design
        </motion.p>

        {/* Animated headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-display-xl font-semibold text-text leading-tight mb-10 max-w-4xl"
          aria-label="Designing products, building teams, and creating what matters."
        >
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-body-lg text-muted max-w-xl"
        >
          Over a decade leading product design — from design systems to 0-1
          products — at IMVU, Electronic Arts, and beyond.
        </motion.p>
      </section>

      {/* ── Marquee ── */}
      <MarqueeSection />

      {/* ── Projects Grid ── */}
      <section className="px-6 md:px-10 py-16 md:py-24 max-w-site mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-label font-medium uppercase tracking-widest text-muted mb-10"
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
