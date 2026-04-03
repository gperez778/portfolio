import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "IMVU: Hashtags Discover — George Perez",
  description:
    "Building the foundation for interest-based connections at IMVU. 83% first-time user conversion, 70% DAU engagement in week one.",
};

export default function IMVUHashtagsPage() {
  return (
    <CaseStudyLayout
      title="IMVU: Hashtags Discover"
      subtitle="Building the foundation for interest-based connections"
      tags={["0-1 Product", "Design System"]}
      role="Director, Product Design"
      duration="8 months"
      team="Eng, Product, Marketing"
      platforms="iOS, Android, Web"
      heroImage="/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png"
      stats={[
        { value: "83%", label: "First-time user conversion (with quests)" },
        { value: "70%", label: "DAU engagement in first week" },
        { value: "3%", label: "Retention lift at month one" },
        { value: "40%", label: "Increase in user search activity" },
      ]}
      sections={[
        {
          heading: "Problem & Opportunity",
          body: [
            "IMVU's content discovery was fragmented — users had no reliable way to find people or communities aligned with their interests. The surface existed, but lacked the structure and intent to create meaningful connections.",
            "Bloated requirements and unclear scope threatened the project's viability. We reframed the challenge to focus on what users actually needed: hashtag-based discovery, a clear onboarding flow, and a searchable content layer.",
          ],
        },
        {
          heading: "Discovery & Direction",
          body: "Partnering closely with the lead designer on this 0-1 initiative, I coached the team through ambiguity and cross-functional alignment. We ran discovery sessions, synthesized insights, and established a clear design direction within the first six weeks — keeping the team unblocked while maintaining quality bar.",
        },
        {
          heading: "Design Process & Execution",
          body: [
            "We designed the full hashtag ecosystem: creation flows, onboarding quests, search integration, and a component library of 20+ new design system components — all with full documentation.",
            "Each component was built with our platform constraints in mind, accounting for the 15% effort increase required by technical limitations. We worked in tight collaboration with engineering to stay pragmatic while pushing the experience forward.",
          ],
        },
        {
          heading: "Output",
          body: "Five key deliverables shipped: hashtag creation UX, interest-based onboarding quests, search with hashtag filters, 20+ documented design system components, and a cross-platform spec covering iOS, Android, and Web.",
        },
        {
          heading: "Results & Reflection",
          body: [
            "83% of first-time users completed the onboarding quest. 70% engagement rate among DAU in the first week. 3% retention lift in month one. User search activity increased by 40%.",
            "The biggest learning: tight scoping is a design decision. Focusing on fewer, more intentional surfaces created a more coherent experience and a more maintainable system.",
          ],
        },
      ]}
    />
  );
}
