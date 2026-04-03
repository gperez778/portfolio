import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "EA - Help Center — George Perez",
  description:
    "Providing a new means of support for all EA teams. 45% SLA reduction, 60-68% response time improvement, employee NPS of 9/10.",
};

export default function EAHelpCenterPage() {
  return (
    <CaseStudyLayout
      title="EA - Help Center"
      subtitle="Providing a new means of support for all teams"
      tags={["Enterprise", "0-1 Product", "ServiceNow"]}
      role="Senior Manager, Experience Design"
      duration="6 months"
      team="1 Designer, Engineering, Product"
      platforms="Case Management, ServiceNow"
      heroImage="/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png"
      stats={[
        { value: "45%", label: "SLA reduction" },
        { value: "60–68%", label: "Response time improvement (employees & support agents)" },
        { value: "9/10", label: "Employee NPS (5,000 participants)" },
        { value: "19%", label: "Ticket volume decrease year-over-year" },
      ]}
      sections={[
        {
          heading: "Problem & Opportunity",
          body: [
            "Electronic Arts relied solely on email for global employee support, ranking among the top 3 workplace communication issues. Teams had no unified way to submit requests across departments.",
            "Objective: construct an accessible portal enabling employees to submit requests across departments while reducing response times and enhancing productivity.",
          ],
          image: "/assets/iZrJ4hRtw3m8hTFXzAMf24aITIk_scale-d.png",
        },
        {
          heading: "Research — Understanding Users",
          body: "Conducted 40+ employee interviews across three personas: 24 employees, 16 support agents, and 6 administrators. This cross-sectional approach ensured the portal addressed needs from every angle of the support workflow.",
          image: "/assets/s2bSuSYdOzHIBTqg5YPSr2hx9Tw_scale-d.png",
        },
        {
          heading: "Strategic Foundation",
          body: [
            "Key strategic decision: leveraged the existing ServiceNow platform rather than building a custom solution, minimizing costs while maintaining full functionality.",
            "Process framework: Discover → Experiment → Design → Iterate → Support.",
          ],
          image: "/assets/nEV6kUb7XhHa92riHTNaeAK750_scale-d.png",
        },
        {
          heading: "Design Execution",
          body: [
            "Three critical initiatives: (1) Rapid prototyping strategy — accelerated wireframe testing to address edge cases and reduce high-fidelity iteration time. (2) Organizational transition — promoted to management mid-project, mentoring 2 direct reports while maintaining hands-on involvement. (3) Brand & technology integration — incorporated EA brand refresh and introduced AI assistant 'Aria' leveraging ServiceNow ML for automating routine requests.",
            "Aria handled: password resets, software requests, building access queries, and folder provisioning based on role — reducing manual request volume significantly.",
          ],
          image: "/assets/09FJaDbxIbMmKElO6Kuye8S8Ibw_scale-d.png",
        },
        {
          heading: "Design System Integration",
          body: "Leveraged META design system components throughout, eliminating custom component creation. This was the first major project demonstrating the META system's real-world impact at scale.",
          image: "/assets/54ZuATZ3QVeooyP0Dh3eouA8Zqg_scale-d.png",
        },
        {
          heading: "Results & Learnings",
          body: [
            "45% SLA reduction. 60–68% response time improvement for both employees and support agents. Employee NPS of 9/10 from 5,000 participants. 19% year-over-year ticket volume decrease.",
            "Learnings: (1) Prioritized existing company tools over reinvention — ServiceNow avoided months of custom build time. (2) Navigating IC-to-manager transition mid-project modeled adaptability for the team and built trust quickly.",
          ],
        },
      ]}
    />
  );
}
