import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "IMVU - Hashtags — George Perez",
  description: "Building the foundation for interest-based connections at IMVU.",
};

export default function IMVUHashtagsPage() {
  return (
    <CaseStudyLayout
      title="IMVU - Hashtags"
      subtitle='"Building the foundation for interest-based connections"'
      tags={["Discover", "Engagement"]}
      role="Director, Product Design"
      duration="8 mos"
      team="Eng, Product, Marketing"
      platforms="iOS, Android, Web"
      heroImage="/assets/MdLbjwr4lUZ9gJ4YHRdC5Vx2Dtk.jpeg"
      stats={[
        { value: "83%", label: "Conversion among first-time users who interact with quests" },
        { value: "70%", label: "Engagement from DAU in the first week of launching" },
        { value: "3%", label: "Retention lift during 1st month testing" },
        { value: "40%", label: "User search increase due to hashtag searching capability" },
      ]}
      sections={[
        {
          heading: "Problem & Opportunity",
          body: "IMVU is a social 3D app built around relationships and a thriving UGC economy. As content grew, new users got overwhelmed and existing ones saw stale suggestions—hurting engagement and retention. We needed a shared tagging language, simple user tools, and an ML-backed structure to deliver more personalized, engaging content.",
        },
        {
          heading: "Leading Design from 0-1",
          body: "Partnering closely with my lead designer, I used this project as a growth opportunity—bringing them into every key XFN conversation and decision. Together, we refined scope, focused on high-impact areas, and mapped a scalable foundation to support IMVU's broad ecosystem of users, products, and rooms.",
        },
        {
          heading: "Moving Forward Together",
          body: "Coached my lead designer through ambiguity—helping them prioritize decisions across UI/UX, stakeholder alignment, and MVP constraints with design system crossover. Supported growth through daily stand-ups, weekly 1:1s, mock sessions, workshops, design reviews, and QA.",
        },
        {
          heading: "Clearing up Complexity",
          body: [
            "Partnered with my lead designer to define key problem areas and shape solutions that improved clarity, flow, and engagement. Coached them on collaborating with cross-functional partners to better understand scope and make more informed design decisions.",
            "I encouraged my lead designer to lean on UX laws—like Jakob's Law and Occam's Razor—when creative blockers came up or data wasn't available. These principles helped them reframe the brief, navigate competing ideas, and bring clarity to decision-making during competitive analysis.",
            "Integrated new components hands on while coaching my lead designer on defining documentation and module components. This gave our team opportunity to flex capability and get buy in for completing redesign on crossover areas in hashtags.",
          ],
        },
        {
          heading: "Built What Mattered Most",
          body: [
            "We hit delays from technical blockers and over-scoped work. I flagged this early and worked with leadership to refocus. We trimmed non-essential search features, adjusted iOS system plans, and pushed broader hashtag architecture to later phases.",
            "1. Onboarding — Incentivized onboarding through our quest system for first time users as well as separately for Hashtag event on launch increasing adoption and first time conversion.",
            "2. Search Users — Searching is the primary function to discover new meaningful connections outside of chat rooms and feed. This helped build stronger structure around our core retention mechanics, friending and following.",
            "3. Profile Interests — Ensuring users have full capability to seamlessly add interests to profile while viewing other users interest to connect. This enables control and foundation to feed our AI/ML future tech.",
            "4. Chat Room Visibility — Common or top hashtags of users in rooms can lead to discovering users to connect further and create organic ice breakers. This helped focus on our magnifying our retention with users who join rooms, chat, and friend others within D0-30 range.",
            "5. Systems — Over 20 components, documentation, and foundations designed and implemented from Design System. This boosted release across 2 platforms, and our language was elevated across half of our core features.",
            "6. Marketing Campaign — Our onboarding event and launch went smoothly with the version release on app and play stores, due to having marketing involved as early as our exploration phases.",
          ],
        },
        {
          heading: "Strong Release, but Room to Improve",
          body: "We hit and exceed some metric goals, but were unable to release more foundational ML tech and had to phase out room hashtags and product hashtags which didn't allow us to accelerate monetization.",
        },
        {
          heading: "Looking Back and Forward",
          body: "We gained valuable learnings, but also uncovered key gaps in cross-functional communication and planning that affected timelines and effort. I co-led a retro with the engineering director to bring all teams together, reflect, and document takeaways for future improvements.",
        },
      ]}
    />
  );
}
