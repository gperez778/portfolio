"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

interface Stat {
  value: string;
  label: string;
}

interface Section {
  heading: string;
  body: string | string[];
  image?: string;
  imageAlt?: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  tags: string[];
  role: string;
  duration: string;
  team: string;
  platforms?: string;
  heroImage?: string;
  stats: Stat[];
  sections: Section[];
}

export default function CaseStudyLayout({
  title,
  subtitle,
  tags,
  role,
  duration,
  team,
  platforms,
  heroImage,
  stats,
  sections,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen pt-16">
      <div className="px-6 md:px-10 max-w-site mx-auto">
        {/* ── Hero ── */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-border">
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-label font-medium uppercase tracking-widest text-muted border border-border rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-display-lg font-semibold text-text mb-4 max-w-3xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body-lg text-muted mb-12 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { label: "Role", value: role },
              { label: "Duration", value: duration },
              { label: "Team", value: team },
              ...(platforms ? [{ label: "Platforms", value: platforms }] : []),
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-label font-medium uppercase tracking-widest text-muted/60 mb-1">
                  {label}
                </p>
                <p className="text-body-sm text-subtle">{value}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Hero image ── */}
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden bg-surface-2 my-12"
          >
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </motion.div>
        )}

        {/* ── Stats ── */}
        <section className="py-16 border-b border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }, i) => (
              <ScrollReveal key={label} delay={i * 0.08}>
                <div>
                  <p className="text-display-md font-semibold text-text mb-2">
                    {value}
                  </p>
                  <p className="text-body-sm text-muted">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── Sections ── */}
        {sections.map((section, i) => (
          <section
            key={i}
            className="py-16 md:py-20 border-b border-border last:border-0"
          >
            <ScrollReveal>
              <h2 className="text-display-md font-semibold text-text mb-6">
                {section.heading}
              </h2>
            </ScrollReveal>

            {Array.isArray(section.body) ? (
              <div className="flex flex-col gap-4 max-w-2xl">
                {section.body.map((para, j) => (
                  <ScrollReveal key={j} delay={j * 0.05}>
                    <p className="text-body-lg text-muted">{para}</p>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <ScrollReveal delay={0.1}>
                <p className="text-body-lg text-muted max-w-2xl">
                  {section.body}
                </p>
              </ScrollReveal>
            )}

            {section.image && (
              <ScrollReveal delay={0.15} className="mt-10">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-surface-2">
                  <Image
                    src={section.image}
                    alt={section.imageAlt ?? section.heading}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </ScrollReveal>
            )}
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}
