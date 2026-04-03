import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "WithMe Design — George Perez",
  description:
    "Social metaverse built on Unreal Engine. 10,000 users onboarded in first month, 42% D1 retention rate.",
};

export default function WithMeDesignPage() {
  return (
    <CaseStudyLayout
      title="WithMe Design"
      subtitle="Social metaverse built on Unreal Engine"
      tags={["0-1 Product", "Unreal Engine", "3D UI"]}
      role="Director, Product Design"
      duration="1 year"
      team="4 Designers, Engineering, Product, Marketing"
      platforms="iOS, Android — Full App Experience"
      heroImage="/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png"
      stats={[
        { value: "10K", label: "Users onboarded in the first month" },
        { value: "42%", label: "D1 retention rate" },
        { value: "0-1", label: "Complete Unreal UI system built from scratch" },
        { value: "1st", label: "Design team to build and ship a full UMG UI library" },
      ]}
      sections={[
        {
          heading: "What & Why",
          body: [
            "The team aimed to create a social 3D experience blending games, hangouts, and self-expression targeting Gen Z. The challenge: after switching from Godot to Unreal Engine, there were no UI developers and severe budget/time constraints.",
            "I personally learned UMG (Unreal's UI framework) and led a complete 0-1 redesign, establishing new systems and workflows compatible with resource limitations.",
          ],
          image: "/assets/M5BYpFV5ukCc6wJlq4Wqvkzw_scale-d.png",
        },
        {
          heading: "Approach — Learn & Build",
          body: [
            "Goals: create a UI system and library in Unreal, use Figma to communicate development needs, establish a QA review process for designers using P4F, and upgrade the design language direction.",
            "Core strategy: learn Unreal, build Figma library structures, and level up foundational elements — color, typography, layout — while considering 3D-specific factors: depth, space, and smart object relationships.",
          ],
          image: "/assets/Q7JDruPAHzqfSgCxd4mMgqwZrao_scale-d.png",
        },
        {
          heading: "Systems Thinking — 3D vs 2D",
          body: [
            "Defined a tier-based layering property hierarchy with treatment guides for style choices, layering effects, and contextual importance.",
            "User priority principle: the team initially prioritized never losing 3D world visibility, which constrained intuitive experiences. Solution: identify user types and interaction goals, enabling contextual component application.",
          ],
          image: "/assets/Qvvn2QKxy9kDZKrDQwDSVJspzTQ.png",
        },
        {
          heading: "Unreal Learning & Execution",
          body: [
            "Zero Unreal experience across the design team. No available Game UI designers with Unreal expertise. Figma lacked clear 3D translation definitions.",
            "Resolution: self-taught UMG scripting and led designers through hands-on learning, building the UI library while testing against existing code. Built the tileDestination component — entry points to destinations with description and tags, supporting static (scale: 1) and press (scale: 1.1) interaction states.",
          ],
          image: "/assets/gkdOBP4jkHBXC89DnYhhUWt4Mk.png",
        },
        {
          heading: "3D Interaction Guidelines",
          body: [
            "Defined camera and interaction rules: camera positioning as primary focus when activated, HUD billboard with fixed UI scale and perspective, dismiss via target retap or auto-dismiss beyond 60 units, occlusion preventing interaction behind menus.",
            "Offered both 2D and 3D UI options plus 2D 'experiences' reducing game development scope — providing diverse UX solutions within immersive 3D environments.",
          ],
          image: "/assets/I7R0TdUxtPrrbZYHhpuqHjdr1y0_scale-d.png",
        },
        {
          heading: "Application & Team",
          body: "Divided application update work among designers based on strengths and feature ownership, ensuring no regression during testing. Extremely time-intensive legacy file updates and component migration were managed through clear ownership.",
          image: "/assets/AXtgzPcABlUQTxjlcFK8WFa88xw.png",
        },
        {
          heading: "Results & Learnings",
          body: [
            "10K users onboarded in the first month. 42% D1 retention driving excitement for monetization phase. Positive early access community feedback on design evolution. Successfully bridged Figma-to-Unreal workflow for product designers.",
            "Learnings: (1) Absence of traditional game UI designers became an opportunity — enabled fresh 3D UI system thinking. (2) Delayed monetization strategy articulation prevented parallel revenue planning. (3) Passion proved more powerful than perceived capability gaps — the team built things they'd never built before.",
          ],
        },
      ]}
    />
  );
}
