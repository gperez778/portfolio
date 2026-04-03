"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="group block">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ y: -4 }}
        className="relative overflow-hidden rounded-2xl bg-surface border border-border transition-colors duration-300 group-hover:border-[#3a3a3a]"
      >
        {/* Cover image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-2">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-bg/40"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-label font-medium uppercase tracking-widest text-muted border border-border rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-text mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-body-sm text-muted mb-4">{project.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-label text-muted/60 uppercase tracking-widest">
              {project.role}
            </span>
            <motion.span
              className="text-body-sm text-subtle"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              View →
            </motion.span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
