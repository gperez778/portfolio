import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "WithMe: Social & Games on Unreal — George Perez",
  description:
    "Social metaverse built on Unreal Engine. 10,000 users onboarded in first month, 42% D1 retention rate.",
};

export default function WithMeDesignPage() {
  return (
    <CaseStudyLayout
      title="WithMe: Social & Games on Unreal"
      subtitle="Social metaverse built on Unreal Engine"
      tags={["0-1 Product", "Unreal"]}
      role="Director, Product Design"
      duration="1 year"
      team="4 Designers, Eng, Product, Marketing"
      platforms="iOS, Android"
      heroImage="/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png"
      stats={[
        { value: "10K", label: "Users onboarded in first month" },
        { value: "42%", label: "D1 retention rate" },
        { value: "0→1", label: "Unreal UI system built from scratch" },
        { value: "4", label: "Designers led through Unreal workflow" },
      ]}
      sections={[
        {
          heading: "What & Why",
          body: [
            "WithMe transitioned its engine from Godot to Unreal — a huge technical leap that left the team without UI developers or the in-house resources to ship a production-quality interface. The existing design language had no path forward on the new platform.",
            "As Director of Product Design, I stepped in to personally learn Unreal's UMG (Unreal Motion Graphics) system and led the 0-1 redesign effort — building both the product and the process simultaneously.",
          ],
        },
        {
          heading: "Goals",
          body: [
            "Establish a UI system and component library directly inside Unreal Engine, eliminating the dependency on scarce UI developers.",
            "Build a Figma-to-Unreal workflow so product designers could communicate design intent to developers without needing engine expertise. Create a QA review process for designers testing builds, and modernize the entire design language.",
          ],
        },
        {
          heading: "Approach",
          body: "We ran in five phases: Learn & Plan (ramp on UMG, audit constraints), Experiment (prototype components in-engine), Design (full system and app UI), Align (cross-functional sign-off), Support (embed with engineering through QA and launch).",
        },
        {
          heading: "Systems Thinking for 3D Space",
          body: "Designing UI for a 3D social space introduced constraints that flat-screen design doesn't have — camera angle, occlusion, depth, and world-space anchoring. We developed 3D interaction guidelines that addressed all of these, giving the team a shared language for how UI lived inside the game world.",
        },
        {
          heading: "Learn, Execute, and Coach",
          body: [
            "I learned UMG hands-on and built the first components in-engine as proof of concept. That firsthand knowledge let me coach the rest of the design team through the Figma-to-Unreal bridge — establishing specs, naming conventions, and handoff rituals that made the workflow repeatable without requiring each designer to become an engine expert.",
            "The QA process I designed gave designers the ability to test builds themselves: a review checklist, tooling shortcuts, and a shared Figma annotation system for flagging issues back to engineering.",
          ],
        },
        {
          heading: "Design System for Unreal",
          body: "The deliverable was a custom Unreal UI component library: interactive components built in UMG with full documentation — states, variants, spacing tokens, and motion specs. This became the foundation that engineering could build from and designers could reference without constant translation back-and-forth.",
        },
        {
          heading: "Outcome & Learnings",
          body: [
            "10,000 users onboarded in the first month. 42% D1 retention rate — strong signal that the redesigned experience was landing.",
            "The biggest learning: constraints are a design prompt. The lack of UI developers forced us to go deeper into the engine than we otherwise would have, which ultimately gave us more control over the final experience — not less.",
          ],
        },
      ]}
    />
  );
}
