"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const skills = [
  "UX / Product Design",
  "Design Systems",
  "Team Leadership",
  "User Research",
  "Prototyping",
  "Interaction Design",
  "Brand Design",
  "0-1 Product Strategy",
  "Design Ops",
  "Accessibility (WCAG)",
];

const experience = [
  { company: "IMVU", role: "Director of Product Design", years: "2021–2024" },
  { company: "Electronic Arts", role: "Manager, Product Design", years: "2018–2021" },
  { company: "Various", role: "Senior / Lead Designer", years: "2013–2018" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="px-6 md:px-10 max-w-site mx-auto">
        {/* ── Header ── */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-border">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-label font-medium uppercase tracking-widest text-muted mb-8"
          >
            About
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-display-lg font-semibold text-text mb-6 leading-tight">
                Adaptable,
                <br />
                Collaborative,
                <br />
                Inclusive.
              </h1>
              <p className="text-body-lg text-muted mb-6">
                From strategy to pixel-perfect execution, I&apos;ve spent over a
                decade leading design while staying close to the craft.
              </p>
              <p className="text-body-md text-muted mb-8">
                I believe great design lives at the intersection of empathy,
                systems thinking, and relentless iteration. Whether I&apos;m
                building a team, a design system, or a 0-1 product — I bring
                the same curiosity and care to every pixel.
              </p>
              <a
                href="https://docs.google.com/document/d/1jiSPBQCtEvoHgM8Uc_6F0x5ymguSb7Xt6Z-jFl5L1Ck/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm font-medium text-text border border-border rounded-full px-6 py-3 hover:border-[#3a3a3a] hover:bg-surface transition-all duration-200"
              >
                View Resume ↗
              </a>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-2"
            >
              <Image
                src="/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png"
                alt="George Perez"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="py-16 md:py-20 border-b border-border">
          <ScrollReveal>
            <p className="text-label font-medium uppercase tracking-widest text-muted mb-8">
              Skills
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill} delay={i * 0.04}>
                <span className="text-body-sm font-medium text-subtle border border-border rounded-full px-4 py-2">
                  {skill}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="py-16 md:py-20 border-b border-border">
          <ScrollReveal>
            <p className="text-label font-medium uppercase tracking-widest text-muted mb-10">
              Experience
            </p>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {experience.map(({ company, role, years }, i) => (
              <ScrollReveal key={company} delay={i * 0.1}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-b border-border last:border-0">
                  <div>
                    <p className="text-xl font-semibold text-text mb-1">{company}</p>
                    <p className="text-body-sm text-muted">{role}</p>
                  </div>
                  <p className="text-body-sm text-muted/60 mt-2 sm:mt-0">{years}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── Personal ── */}
        <section className="py-16 md:py-20">
          <ScrollReveal>
            <p className="text-label font-medium uppercase tracking-widest text-muted mb-8">
              Beyond the screen
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg text-muted max-w-2xl">
              When I&apos;m not designing, you&apos;ll find me playing games,
              making music, traveling, rock climbing, or working on
              illustrations. I believe a rich life outside work feeds better
              creative work inside it.
            </p>
          </ScrollReveal>

          {/* Personal photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[
              { alt: "Manini'owali Beach", label: "Manini'owali Beach" },
              { alt: "Illustration work", label: "Nested Illustration" },
              { alt: "Stinson Beach", label: "Stinson Beach" },
            ].map(({ alt, label }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div className="aspect-square rounded-2xl overflow-hidden bg-surface-2 relative">
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="text-label text-muted/60 uppercase tracking-widest">
                      {label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
