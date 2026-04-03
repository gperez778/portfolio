import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "EA: 1st Internal Design System — George Perez",
  description:
    "Creating EA's first internal design system across 5 products. 25% reduction in design time, 48% reduction in front-end dev time.",
};

export default function EAMetaPage() {
  return (
    <CaseStudyLayout
      title="EA: 1st Internal Design System"
      subtitle="Creating solutions for a suite of teams & products"
      tags={["Design System", "Enterprise"]}
      role="Manager & Designer"
      duration="8 months"
      team="4 Designers, 2 Researchers"
      heroImage="/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png"
      stats={[
        { value: "5", label: "Core EA products adopted" },
        { value: "25%", label: "Reduction in design time" },
        { value: "48%", label: "Reduction in front-end dev time" },
        { value: "90%", label: "Team approval rating" },
      ]}
      sections={[
        {
          heading: "Problem & Opportunity",
          body: [
            "EA's internal product landscape was fragmented — teams worked in isolation with divergent patterns, duplicated components, and no shared language. Every product reinvented the wheel, creating inconsistency for both users and contributors.",
            "The opportunity was to move from isolated products to a unified design language: one system that could scale across a diverse ecosystem while giving each team flexibility to build effectively.",
          ],
        },
        {
          heading: "Understanding Team Needs",
          body: "Before designing a single component, we ran a broad discovery phase — interviewing stakeholders across design, engineering, and product to understand what was blocking teams. Pain points clustered around three areas: inconsistent foundations (color, type, spacing), no single source of truth for components, and a lack of accessibility standards.",
        },
        {
          heading: "Start with the Basics",
          body: [
            "We began with foundations: a tokenized color system built on new EA branding with scalable color gradations, a typography scale, a spacing system, and an iconography library.",
            "Every decision was made with WCAG 2.1 AA compliance in mind — improving from the existing 3:1 contrast ratio to meeting full accessibility standards across all UI surfaces.",
          ],
        },
        {
          heading: "System Built to Be Modular",
          body: "The component library was designed to be modular and composable — 40+ reusable components documented with usage guidelines, design tokens, and engineering handoff specs. We built the system in Figma with live documentation in Storybook so both designers and engineers had a reliable source of truth.",
        },
        {
          heading: "Discovery → Design → Support → Iterate",
          body: [
            "We ran in 5 phases: Discovery (team needs), Design (foundations + components), Support (embedded design ops), Experiment (pilot with 2 products), Iterate (scale to 5 products).",
            "Embedding designers within product teams during the support phase was the unlock — it created buy-in, surfaced gaps in the system, and turned early adopters into champions.",
          ],
        },
        {
          heading: "Results & Learnings",
          body: [
            "5 core EA products adopted the system. Design time dropped by 25%. Front-end dev time dropped by 48%. 90% team approval rating.",
            "The biggest learning: adoption is a product problem, not just a tooling problem. The teams that succeeded fastest were the ones we spent the most time with in person.",
          ],
        },
      ]}
    />
  );
}
