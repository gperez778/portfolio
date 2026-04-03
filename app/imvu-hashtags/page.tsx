import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "IMVU - Hashtags — George Perez",
  description:
    "Building the foundation for interest-based connections at IMVU. 83% first-time user conversion, 70% DAU engagement in week one.",
};

export default function IMVUHashtagsPage() {
  return (
    <CaseStudyLayout
      title="IMVU - Hashtags"
      subtitle="Building the foundation for interest-based connections"
      tags={["0-1 Product", "Design System"]}
      role="Director, Product Design"
      duration="8 months"
      team="Engineering, Product, Marketing, iOS, Android, Web"
      heroImage="/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png"
      stats={[
        { value: "83%", label: "First-time user conversion (quest-interacting users)" },
        { value: "70%", label: "DAU engagement during launch week" },
        { value: "3%", label: "Retention lift in first-month testing" },
        { value: "40%", label: "User search volume increase via hashtag discovery" },
      ]}
      sections={[
        {
          heading: "Problem & Opportunity",
          body: [
            "As IMVU's 3D social platform expanded its user-generated content, new users experienced information overload while existing users received repetitive recommendations, damaging engagement and retention. We needed a standardized tagging system, accessible user tools, and ML infrastructure for personalized content delivery.",
            "Bloated requirements and unclear scope threatened the project's viability. We reframed the challenge: shifted focus to user-generated hashtags with improved alignment on onboarding, search systems, and clarified MVP scope to three core areas — onboarding, chat, and search.",
          ],
          image: "/assets/NjJft84hv9dUFcwOarL1f0wU2jA.png",
        },
        {
          heading: "My Role",
          body: "As Director, I mentored the lead designer through 0-1 project complexity — coaching through scope refinement, scalable foundation-building, and cross-functional alignment. Daily standups, weekly 1:1s, design critiques, cross-functional workshops, and QA involvement kept the team unblocked while maintaining quality bar.",
        },
        {
          heading: "Discovery & User Journey",
          body: [
            "We mapped the full user journey for a primary social user across six key moments: Dashboard (27 unique actions, decision overload), Quests (vague content, manual navigation), Shop (40+ actions, overwhelming 20M-item catalog), Dress-Up (competing pulls toward chat), Chat (room similarity, lack of differentiation), and Upsell (monetization blocking exploration).",
            "Applied Jakob's Law and Occam's Razor as decision-making frameworks when data was scarce or creative disagreements arose.",
          ],
          image: "/assets/mAdX3EHy5L1kzdnGs3VCMV78_scale-d.png",
        },
        {
          heading: "Design Process & Execution",
          body: [
            "We designed the full hashtag ecosystem: onboarding quests, profile interest management, chat room hashtag visibility, and a component library of 20+ new design system components — all documented and covering 50% of core features.",
            "Partnered early with marketing to co-develop messaging for a coordinated product launch.",
          ],
          image: "/assets/KcHFjC9SWh291DlJe4Gp2ruVatA_scale-d.png",
        },
        {
          heading: "Design System Components",
          body: "20+ components, documentation, and foundational specifications released across iOS and Android. Built scalable components while coaching documentation and module definition across hashtag system and adjacent feature areas.",
          image: "/assets/3rudjYqvCewH04TJTk4mhhM7pgE.png",
        },
        {
          heading: "Output",
          body: "Five key deliverables shipped: (1) Onboarding system with quest-based incentivization and hashtag events, (2) Profile interests management enabling connection discovery and AI/ML infrastructure, (3) Chat room hashtag visibility surfacing connection opportunities, (4) 20+ design system components across iOS and Android, (5) Marketing campaign integration with coordinated app store release.",
        },
        {
          heading: "Results & Reflection",
          body: [
            "83% conversion among quest-interacting first-time users. 70% DAU engagement during launch week. 3% retention lift during first-month testing. 40% user search volume increase via hashtag discovery.",
            "Key learnings: (1) Managing simultaneous design mentorship alongside strategic work required broader capability than anticipated. (2) Initially limited engineer engagement was bridged through feedback receptiveness and proactive accessibility. (3) Earlier cross-functional alignment with engineering would have reduced the 15% increased development effort from technical constraints. (4) Reframing constraints as problem-solving tools allowed meeting timeline commitments despite increased scope.",
          ],
        },
      ]}
    />
  );
}
