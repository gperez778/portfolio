import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "EA - Help Center — George Perez",
  description: "Providing a new means of support for all teams at EA.",
};

export default function EAHelpCenterPage() {
  return (
    <CaseStudyLayout
      title="Help Center"
      subtitle='"Providing a new means of support for all teams"'
      tags={["0-1 Product", "Enterprise"]}
      role="Senior Manager Experience Design"
      duration="6 months"
      team="1 Designer, Engineering, Product"
      platforms="CTO · Design System · Case Management · Service Now"
      heroImage="/assets/l1T2CxLT28HilpKsSgBthn6XEg_scale-d.png"
      stats={[
        { value: "45%", label: "Reduced average SLAs" },
        { value: "60–68%", label: "Decreased Employee & Support response times" },
        { value: "9/10", label: "Employee (5000) NPS pulse" },
        { value: "19%", label: "Reduced average tickets vs. previous year" },
      ]}
      sections={[
        {
          heading: "What & Why",
          body: "Electronic Arts managed all employee support across the company globally with just email. Global employee feedback across all teams stated that support was one of the top 3 issues with workplace communications and productivity. Our goal: Create a streamlined portal and version of support for employees to reach out to customer support teams for any department with little issue and clear visibility to decrease SLAs and increase employee productivity.",
          image: "/assets/l1T2CxLT28HilpKsSgBthn6XEg_scale-d.png",
        },
        {
          heading: "Process at a glance",
          body: "Early stage process involved research from employees across the company that covered each respective support area, diving into product analysis of ticketing systems, and identifying solutions that would create impact for problem spaces. Process: Discover → Experiment → Design → Iterate → Support",
        },
        {
          heading: "Establishing a foundation",
          body: "Identified scope risks with building something from the ground up, and through research I identified ServiceNow as a platform we use and could incorporate. This helped support connect the services for baseline technology at little to no cost.",
          image: "/assets/QDJfVu4GwHctNEiaPwXonHMfS4_scale-d.png",
        },
        {
          heading: "Understanding our users",
          body: "Interviewed over 40 employees from different personas identified based on the business of the product and operations. This helped focus on solutions that solved for the needs of everyone, not just the immediate problem.",
        },
        {
          heading: "Rapid prototyping during wireframes",
          body: "During the wireframe stage I was leading the project as a lead IC. I proposed rapid prototyping to cover edge cases quicker with less meetings, and also to reduce the amount of time prototyping during the high fidelity stage.",
          image: "/assets/Je1ohRPq8GEqXeog2oNG74ZQU_width=1.png",
        },
        {
          heading: "Adapting to team changes",
          body: "During this phase I also transitioned into a management role and had 2 employees reporting to me that I mentored and worked hands on with to deliver.",
        },
        {
          heading: "Utilizing a recent brand change",
          body: "EA updated their brand globally prior to this project kicking off. It was an opportunity to get away from the old brand and introduce the new company wide.",
          image: "/assets/xaaCPsPCwSREPfZCeZTxhjePl8_width=6.png",
        },
        {
          heading: "Introducing early stages of AI",
          body: "Provided insight on ServiceNow capability to take advantage of AI Agents to handle automated and simple tasks and decrease tickets created.",
        },
        {
          heading: "Utilize META design system",
          body: "Design system components made it extremely easy to implement and move forward without creating new building blocks for a new product set.",
        },
        {
          heading: "Results",
          body: [
            "Reduced average SLAs by 45%",
            "Decreased both Employee and Support response times by 60–68%",
            "Employee (5000) pulse was 9 out of 10 for NPS",
            "Reduced average tickets in relation to previous year by 19%",
            "First large project to incorporate META design system and prove impact",
          ],
        },
        {
          heading: "Learnings & Reflection",
          body: [
            "Did not need to reinvent the wheel — discovered services the company was already using to bring solutions to the business and users.",
            "Learned the difficulties of switching from lead IC to a manager midway through, but adapting was something I really wanted to showcase to my employees.",
          ],
        },
      ]}
    />
  );
}
