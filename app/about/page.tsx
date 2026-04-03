"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="px-6 md:px-10 max-w-site mx-auto">
        <section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col gap-6">
                <h1 className="text-display-lg font-semibold text-text leading-tight">
                  Adaptable, Collaborative, Inclusive
                </h1>
                <p className="text-body-lg text-muted">
                  From strategy to pixel-perfect execution, I&apos;ve spent over a decade leading design while staying close to the craft. I&apos;ve built teams and shaped strategy while staying hands-on refining visuals, sketching flows, and collaborating with teams from idea to launch.
                </p>
                <p className="text-body-lg text-muted">
                  My work blends visual craft, thoughtful reasoning, and technical fluency. I care about how products look, why they work, and how they&apos;re built.
                </p>
                <p className="text-body-lg text-muted">
                  Outside of work, I&apos;m into games, music, travel, climbing, and illustration—always exploring with my family. Creativity and curiosity drive me in and out of design, and I bring that energy to every team and product I work with.
                </p>
              </div>
              <a
                href="https://docs.google.com/document/d/1ZAe_PUf9_SEKTway1T4J4T24Z4Z9aNQBAM6sBvfxEpk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm font-medium text-text border border-border rounded-full px-6 py-3 w-fit hover:border-[#3a3a3a] hover:bg-surface transition-all duration-200"
              >
                Resume ↗
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex flex-col gap-4 pt-10">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-2">
                  <Image src="/assets/KgH49uXFWD6WHMcnQgryV60VPcw_scale-d.jpg" alt="Manini'owali Beach" fill className="object-cover" unoptimized />
                  <span className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-widest text-white/70 bg-black/70 rounded-full px-2 py-0.5">Manini&apos;owali Beach</span>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-2">
                  <Image src="/assets/PF26K9tccfhoEf2yHQEWwZ7pUcw_scale-d.jpg" alt="Nested Illustration" fill className="object-cover" unoptimized />
                  <span className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-widest text-white/70 bg-black/70 rounded-full px-2 py-0.5">Nested Illustration</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 pb-10">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-2">
                  <Image src="/assets/sA8VHIbEYRpiTx9bwz5ldq4ng_scale-d.png" alt="Xena" fill className="object-cover" unoptimized />
                  <span className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-widest text-white/70 bg-black/70 rounded-full px-2 py-0.5">Xena</span>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-2">
                  <Image src="/assets/U6yqV7raRRjbhJB69id9LyPkALA_scale-d.jpg" alt="Stinson Beach" fill className="object-cover" unoptimized />
                  <span className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-widest text-white/70 bg-black/70 rounded-full px-2 py-0.5">Stinson Beach</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
