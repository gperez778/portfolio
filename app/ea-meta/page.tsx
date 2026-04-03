import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "EA - META Design System — George Perez",
  description: "Creating solutions for a suite of teams & products at EA.",
};

export default function EAMetaPage() {
  return (
    <CaseStudyLayout
      title="META Design System"
      subtitle='"Creating solutions for a suite of teams & products"'
      tags={["Design System", "Brand", "0-1 team"]}
      role="Sr Manager / Lead UX Design"
      duration="8 months"
      team="4 Design, 2 Research, Eng, Dev Agency"
      platforms="Web / Mobile Responsive"
      heroImage="/assets/cKhqxmqwxxQQQlEUSOpXbBSLNE_scale-d.png"
      stats={[
        { value: "5", label: "Core EA products adopted" },
        { value: "25%", label: "Average design time reduction" },
        { value: "48%", label: "Front-end development time reduction" },
        { value: "90%", label: "Team approval rating" },
      ]}
      sections={[
        {
          heading: "Problem & Opportunity",
          body: [
            "EA's isolated web products led to inconsistent UI, duplicated work, high costs, and delays. Our goal: build a sustainable system for efficiency, brand consistency, and accessibility without slowing innovation.",
            "Problems: Hundreds of products, no defined principles, no design system or kit, designers in silos, old branding in designs, broken handoff to engineering.",
            "Goals: Create design principles, create a design system, enable designers to work end to end, create a dev-friendly UI Kit, establish new processes with engineers, DS onboarding for teams.",
          ],
          image: "/assets/PzxrIINaXNXeVsYXizTUKRCczIE_scale-d.png",
        },
        {
          heading: "Ensuring a path forward",
          body: "Early steps jumping on to create proof of concept component lists, foundations, and process between design and engineering allowed to streamline processes that tested out positive with team members who were able to contribute to building out components and mock applying them in staged environments.",
          image: "/assets/IBX4ZA0fXR9sGoMWC8I92BkdbwQ_scale-d.png",
        },
        {
          heading: "As a Manager — Build a team 0-1",
          body: [
            "Build a team 0-1: Gained team support and budget for 1 contractor, enabling ability to build out a deeper foundation more timely.",
            "Plan, pitch, and execute: Presented vision, goal, demo at CTO all hands. Officially approved as a budget backed initiative.",
            "Governance & adoption: Worked with dev agency to build pipeline & package accessible for any dev to utilize.",
            "Manage moving forward: Weekly reviews, workshops, QA sessions. Onboarded 2+ designers and had quarterly goals.",
          ],
          image: "/assets/EUUmGT9vl57ZdzlYDm1EGYK6PwM_scale-d.png",
        },
        {
          heading: "As a Designer & Lead",
          body: "Built core foundations and 20+ components to prove the system's value, connecting Figma API to Storybook with early engineering collaboration.",
        },
        {
          heading: "Understanding team needs",
          body: "Spoke with teams across enterprise, B2B, and B2C, giving users space to share role specific insights. Synthesized findings into clear, actionable solutions. Managed employees afterwards to follow similar approaches when tackling tasks around foundations, components, and documentation.",
          image: "/assets/rK83MOVVplR6Bv94kC4vyeXfAI_scale-d.png",
        },
        {
          heading: "Start with the basics",
          body: "Integrated new EA branding with scalable color gradations, updated type scale, improved 3:1 accessibility standards, responsive spacing/grids, and tokenization to ensure consistency, cross-product design and different teams.",
          image: "/assets/DgefCoH0TCK26x2ApuXHrNBb0Y_scale-d.png",
        },
        {
          heading: "System built to be modular",
          body: "Designed and implemented a token-driven Figma → React pipeline designing 40+ reusable components, cutting average front-end dev time on new projects by 30%.",
          image: "/assets/kK8U0afFQEh00jYJ1cXiFbMJU_width=1.png",
        },
        {
          heading: "Components — Modular for growth",
          body: "Built high-stakes patterns—adaptive data tables, multi-step forms, dynamic modals—partnering with engineers to keep Storybook and production 100% in-sync.",
          image: "/assets/vaeIlNJ7Sr02lTQc5KV4J5djPoQ_scale-d.png",
        },
        {
          heading: "Accessibility & Processes",
          body: [
            "Collaborated with a designer and researcher to deliver WCAG 2.1 AA compliance enabling first time successful baseline standards to be applied for contrast, text, and image combinations.",
            "Ran weekly design-system critiques and live pairing sessions, up-skilling junior designers. This led to discovery and further progress on foundations, website, processes, and component building.",
          ],
          image: "/assets/UuNLEjIHXIuTAi6cReETEBeNGEY_scale-d.png",
        },
        {
          heading: "Several areas of adoption",
          body: "There were many product initiatives scaling from small to large that started the adoption for branding, consistency, ease of use, and other purposes. But overall landed great representation and proof of success through 5 larger sites and products.",
          image: "/assets/o28J3qPGIyFa7kafQwExoT8mSU_scale-d.png",
        },
        {
          heading: "Results",
          body: "5 core EA products adopted META. 25% average design time reduction. 48% front-end development time reduction. 90% team approval rating from developers, product managers, and designers. First design-related CTO-wide objective beyond feature work.",
          image: "/assets/K0s1Kd7qnpKOg2jeVuGE3IpPAw_scale-d.png",
        },
        {
          heading: "Reflect and look at the future",
          body: [
            "Design systems require investment — understanding upfront costs beyond design reduces ambiguity.",
            "Incorporate more external teams to expand feedback loops and growth.",
            "Streamline design to development through ongoing Figma API and Storybook experimentation.",
            "Stay up to date on software use — remaining current with Figma's variant and variable functionality.",
          ],
          image: "/assets/yQt1HXKC48S6YFzq1RFephDF9E_scale-d.png",
        },
      ]}
    />
  );
}
