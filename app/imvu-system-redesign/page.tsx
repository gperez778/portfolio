import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "IMVU - Redesign & Design System — George Perez",
  description: "Leading a cross-platform redesign of IMVU with a unified design system for iOS, Android, and Web.",
};

export default function IMVURedesignPage() {
  return (
    <CaseStudyLayout
      title="IMVU : Redesign & Design System"
      subtitle='"Cross-platform redesign with a unified design system"'
      tags={["Design System", "Redesign", "Brand"]}
      role="Director, Product Design"
      duration="2 years"
      team="Design, Engineering, Product"
      platforms="iOS, Android, Web"
      stats={[
        { value: "0-1", label: "Design system built from scratch" },
        { value: "3", label: "Platforms unified under one system" },
        { value: "50+", label: "Components designed and documented" },
        { value: "10M+", label: "Users on the redesigned platform" },
      ]}
      sections={[
        {
          heading: "Overview",
          body: "Led a team through a redesign of IMVU in phases while introducing a cross-platform design system for iOS, Android, and Web, creating consistent experience to attract and retain users while creating team efficiency.",
        },
      ]}
    />
  );
}
