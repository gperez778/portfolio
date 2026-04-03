import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "EA - META Design System — George Perez",
  description:
    "Creating solutions for a suite of teams & products at EA. 25% design time reduction, 48% front-end development time reduction.",
};

export default function EAMetaPage() {
  return (
    <CaseStudyLayout
      title="EA - META Design System"
      subtitle="Creating solutions for a suite of teams & products"
      tags={["Design System", "Enterprise", "0-1"]}
      role="Sr Manager / Lead UX Design"
      duration="8 months"
      team="4 Designers, 2 Researchers, Engineers, Dev Agency"
      platforms="Web, Mobile Responsive"
      heroImage="/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png"
      stats={[
        { value: "5", label: "Core EA products adopted META" },
        { value: "25%", label: "Average design time reduction" },
        { value: "48%", label: "Front-end development time reduction" },
        { value: "90%", label: "Team approval rating (devs, PMs, and designers)" },
      ]}
      sections={[
        {
          heading: "Problem & Opportunity",
          body: [
            "EA's product landscape was fragmented: hundreds of products, no defined principles, no design system or kit, designers in silos, old branding in designs, and broken handoff to engineering.",
            "Goals: create design principles, establish a design system, enable end-to-end designer work, develop a developer-friendly UI kit, establish new processes, and onboard teams across the organization.",
          ],
          image: "/assets/EUUmGT9vl57ZdzlYDm1EGYK6PwM_scale-d.png",
        },
        {
          heading: "As Manager — Building 0-1",
          body: [
            "Built the team from scratch: gained contractor support to scale beyond solo capability, secured CTO approval and budget through a direct pitch, partnered with a dev agency to create an accessible package, and established weekly reviews.",
            "This was the first design-related CTO-wide objective beyond feature work — a historic milestone for design at EA.",
          ],
          image: "/assets/LBmHLnbJuxG3YgMzaBjLdr890U_width=2.png",
        },
        {
          heading: "Understanding Team Needs",
          body: "Ran 36 stakeholder interviews across enterprise, B2B, and B2C segments — exploring the full suite of products and teams. Pain points clustered around: inconsistent foundations, no single source of truth, and lack of accessibility standards.",
          image: "/assets/PzxrIINaXNXeVsYXizTUKRCczIE_scale-d.png",
        },
        {
          heading: "Foundations — Start with the Basics",
          body: [
            "Integrated new EA branding with color gradations, updated typography, improved accessibility standards (WCAG 2.1 AA from 3:1 contrast), and full tokenization.",
            "Every token was named and documented so designers and engineers shared the same vocabulary.",
          ],
          image: "/assets/qIz1LMcZFS5DMRh1zPSnBS2GcI_width=2.png",
        },
        {
          heading: "Components — Modular for Growth",
          body: [
            "Built 40+ reusable components including adaptive data tables, multi-step forms, and dynamic modals. Kept Storybook and production 100% in sync through Figma API integration.",
            "Documentation covered component reasoning and design system decisions — creating accountability for every choice.",
          ],
          image: "/assets/HKmdujbAaSFLYEL5utywqzsJlZI_width=2.png",
        },
        {
          heading: "Accessibility & Processes",
          body: [
            "Achieved WCAG 2.1 AA compliance through designer and researcher collaboration. Conducted weekly critiques and pairing sessions to upskill junior designers.",
            "Established governance: weekly reviews, onboarding process for new designers, and a centralized branding website for team adoption and stakeholder visibility.",
          ],
          image: "/assets/UuNLEjIHXIuTAi6cReETEBeNGEY_scale-d.png",
        },
        {
          heading: "Results & Learnings",
          body: [
            "5 core EA products adopted META. Design time reduced by 25%. Front-end dev time reduced by 48%. 90% team approval rating from developers, PMs, and designers.",
            "Learnings: (1) Design systems require investment — understanding upfront costs beyond design reduces ambiguity. (2) Incorporate more external teams to expand feedback loops. (3) Streamline design to development through Figma API and Storybook. (4) Stay current with Figma's variant and variable functionality.",
          ],
        },
      ]}
    />
  );
}
