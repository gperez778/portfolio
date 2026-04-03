import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "WithMe Design — George Perez",
  description: "Social metaverse built on Unreal Engine.",
};

export default function WithMeDesignPage() {
  return (
    <CaseStudyLayout
      title="WithMe Design"
      subtitle='"Social metaverse built on Unreal Engine"'
      tags={["Design System", "Unreal", "Redesign"]}
      role="Director, Product Design"
      duration="1 year"
      team="4 Designers, Engineering, Product, Marketing"
      platforms="iOS/Android App · Full App Experience"
      heroImage="/assets/00xi47s8h1p2WaMzYu25xE7GlcI_width=2.png"
      stats={[
        { value: "10K", label: "Users onboarded during the first month" },
        { value: "42%", label: "D1 retention driving excitement for monetization" },
        { value: "0-1", label: "Complete Unreal UI system built from scratch" },
        { value: "1st", label: "Product designers to deliver to games in 3D" },
      ]}
      sections={[
        {
          heading: "What and Why",
          body: "We set out to build WithMe—a social 3D experience that felt more like real life, blending games, hangouts, and self-expression. But after switching from Godot to Unreal to scale the platform, we ran into a big challenge: no UI developers and very limited budget/time. To keep things moving, I dove into learning UMG myself and started building the UI from the ground up. I also led our design team through a full 0–1 rebuild of the app, creating new systems and workflows that worked within our constraints—so we could deliver on the vision without waiting for perfect resources.",
        },
        {
          heading: "Goals",
          body: [
            "Create a UI system and library in Unreal",
            "Utilize Figma to communicate dev needs from design",
            "Create a new review process for designers to QA local/staged builds through P4F",
            "Upgrade the design language to a newer direction",
          ],
        },
        {
          heading: "Approach",
          body: "Learn Unreal & build Figma design structure for a library and leveling up existing foundations of color, typography, layout, and considering new things outside the scope of 2D design such as depth, spaces, and UI in relation to smart objects while managing 3 designers. Process improvements were made to also keep game designers, producers, PMs, engineers, design, and marketing involved 0-1 and relationship manage to reduce iteration scope.",
        },
        {
          heading: "Systems thinking for a 3D space",
          body: [
            "3D Environment vs 2D UI: Made sure to create a hypothesis that focused on user intention, goals, and context to improve how we approach interactions in an application that had a very heavy 3D game like experience around it. This involved rules around camera, depth, occlusion, and perspective.",
            "Layering property hierarchy: Defined guides for layer tier treatment we utilize in order to determine application based on prioritization from style choices, layering affects, and context/importance.",
            "User priority principle: A common issue team members surfaced was trying greatly to never lose sight of the 3D world with UI. I did agree with this concept to a degree, and discovered it constrained our ability to deliver intuitive experiences. The purpose was to identify the type of user and goal in any given interaction. This allowed for proper prioritization of creating components but also when to apply them to allow for more contextual application.",
          ],
        },
        {
          heading: "Learn, execute, and coach (Unreal)",
          body: "Challenge: I myself and my immediate design team had zero experience with Unreal. There was no resourcing for Game UI Designers with Unreal experience during that time. Additionally Figma didn't provide clear definitions for form and function when translated into the 3D world. Solution: Aligned with executives and peers to have designers learn scripting and build the UI library in Unreal in order for them to have what was needed to build. I spearheaded this personally to lead my team by example, and move development forward by building out UI and testing in Unreal to existing script.",
        },
        {
          heading: "Design System for Unreal",
          body: [
            "Build a library around it: Challenge: All feature and design work was done case by case, creating inconsistency, issues with development, and less cohesive experiences. Solution: Built out dev documentation and Figma library that supported developer needs and maintained consistency, while increasing velocity. Additionally managed designers to explore more ways to create seamless override capability for nested components.",
            "3D Interaction UI: UI such as interaction with players or smart objects required rules. An example that was our player to player interaction menus while allowing navigation and targeting. We originally had an overlay that locked the screen. In order to utilize UI and 3D functionality better we required rules to help users navigate, interact, and not be encumbered in UI edgecases.",
          ],
        },
        {
          heading: "UI around 3D games",
          body: "Challenge: Working in 3D spaces to provide a variety of solutions to support game design, but overall UX within the environments. Solution: Provided both 2D and 3D UI solutions and 2D \"experiences\" to still keep gameplay immersive to reduce the scope of game development work.",
        },
        {
          heading: "Build the application side",
          body: "Challenge: Extremely time consuming task requiring going back into files and assets that were already designed for, and sifting through legacy work from previous designers. Solution: Worked with the existing designers to divide out and apply the new library structure and components based on strengths and previous feature ownership. This involved updating Unreal components and UI, while testing out previous experiences to ensure there was no regression.",
        },
        {
          heading: "Outcome",
          body: [
            "Onboarded a total of 10k users during the first month",
            "Hit a high D1 retention of 42% driving excitement for our monetization phase",
            "Generated great EA community feedback on the evolution of design",
            "Bridged Figma to Unreal allowing product designers to deliver to games in 3D",
          ],
        },
        {
          heading: "Learnings & Reflection",
          body: [
            "Our biggest blockers are ourselves — There was hesitation around not having a traditional game UI designer and using Unreal, but I saw it as an opportunity—not a limitation. We built a design process from scratch for 3D UI, which is still largely unsolved. It pushed us to think differently and adapt our approach to design systems.",
            "Speaking up on business ideas — Being deep in execution and filling gaps with teams, I didn't voice up my thoughts on a monetization plan early enough to support goals sooner to monetize in parallel with retention goals.",
            "Motivation is key — Motivation proved to drive passion and excitement over tough obstacles that team members deemed \"out of scope or capability\". Moving forward helped prove that we were able to dive into new tech and work on game engines regardless of prior skill sets.",
          ],
        },
      ]}
    />
  );
}
