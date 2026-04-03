import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "EA: Help Center — George Perez",
  description:
    "Providing a new means of support for all EA teams. Reduced SLAs by 45%, response times by 60-68%, employee NPS of 9/10.",
};

export default function EAHelpCenterPage() {
  return (
    <CaseStudyLayout
      title="EA: Help Center"
      subtitle="Providing a new means of support for all teams"
      tags={["Enterprise", "0-1 Product"]}
      role="Lead Designer"
      duration="6 months"
      team="Design, Engineering, IT, HR"
      heroImage="/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png"
      stats={[
        { value: "45%", label: "Reduction in SLAs" },
        { value: "60–68%", label: "Decrease in response times" },
        { value: "9/10", label: "Employee NPS rating" },
        { value: "19%", label: "Decrease in ticket volume" },
      ]}
      sections={[
        {
          heading: "What & Why",
          body: [
            "EA's internal employee support ran entirely through email — there was no portal, no visibility, and no way for employees to self-serve. Every request, from password resets to hardware provisioning, required a ticket and a wait.",
            "The goal: design a streamlined support portal that reduced friction for employees, empowered support agents, and gave administrators visibility into workload and resolution time.",
          ],
        },
        {
          heading: "Understanding Our Users",
          body: "We conducted interviews with 40+ employees across three personas: 24 employees, 16 support agents, and 6 administrators. Each group had distinct needs — employees wanted speed and clarity, agents wanted triage tools and context, admins wanted dashboards and reporting. Designing for all three without creating three separate products was the core design challenge.",
        },
        {
          heading: "Establishing a Foundation",
          body: [
            "We leveraged EA's existing ServiceNow platform as the infrastructure backbone — which constrained the design language but accelerated delivery. Every UI decision had to work within ServiceNow's component model.",
            "We applied the newly refreshed META design system to ServiceNow's component layer, bringing visual consistency to a platform that had previously felt disconnected from EA's internal brand.",
          ],
        },
        {
          heading: "Designing Effectively",
          body: [
            "The centrepiece of the new system was 'Aria' — an AI agent built to automate high-volume routine requests like password resets, access provisioning, and software requests. This alone deflected a significant share of incoming ticket volume.",
            "The employee-facing portal was designed around speed: a universal search bar, pre-built request types, and real-time status tracking. Support agents got a triage view with context and SLA indicators built in.",
          ],
        },
        {
          heading: "Results & Learnings",
          body: [
            "SLAs reduced by 45%. Response times decreased by 60–68%. Ticket volume decreased by 19%. Employee NPS: 9/10.",
            "The key learning: when you design for the support agent as much as the end user, the whole system improves. Empowered agents resolve faster, and that speed compounds across every employee interaction.",
          ],
        },
      ]}
    />
  );
}
