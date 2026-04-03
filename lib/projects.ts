export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  href: string;
  coverImage: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "imvu-hashtags",
    title: "IMVU: Hashtags Discover",
    subtitle: "Building the foundation for interest-based connections",
    tags: ["0-1 Product", "Design System"],
    description:
      "Managed creation of a new foundation for connection, helping users engage through shared interests.",
    href: "/imvu-hashtags",
    coverImage:
      "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png",
    year: "2024",
    role: "Director, Product Design",
  },
  {
    slug: "ea-meta",
    title: "EA: 1st Internal Design System",
    subtitle: "Creating solutions for a suite of teams & products",
    tags: ["Design System", "Enterprise"],
    description:
      "Led the creation of EA's first internal design system, unifying design language across 5 core products.",
    href: "/ea-meta",
    coverImage:
      "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png",
    year: "2023",
    role: "Manager & Designer",
  },
  {
    slug: "imvu-redesign",
    title: "IMVU: Redesign & Design System",
    subtitle: "Rebuilding the experience from the ground up",
    tags: ["Redesign", "Design System", "Brand"],
    description:
      "A comprehensive platform redesign alongside a scalable component system.",
    href: "/imvu-hashtags",
    coverImage:
      "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png",
    year: "2022",
    role: "Director, Product Design",
  },
  {
    slug: "ea-help-center",
    title: "EA: Help Center",
    subtitle: "Providing a new means of support for all teams",
    tags: ["Enterprise", "0-1 Product"],
    description:
      "Overhauled EA's employee support system from email-only to a unified portal, reducing SLAs by 45%.",
    href: "/ea-help-center",
    coverImage:
      "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png",
    year: "2023",
    role: "Lead Designer",
  },
  {
    slug: "withme-design",
    title: "WithMe: Social & Games on Unreal",
    subtitle: "Reimagining social connection through play",
    tags: ["0-1 Product", "Unreal"],
    description:
      "Designed a social gaming experience built on Unreal Engine, bridging virtual worlds and real connection.",
    href: "/withme-design",
    coverImage:
      "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png",
    year: "2021",
    role: "Director, Product Design",
  },
  {
    slug: "chill-cafe",
    title: "Chill Cafe",
    subtitle: "A calm virtual space for focus and creativity",
    tags: ["Brand", "0-1 Product"],
    description:
      "Designed a lo-fi inspired virtual space combining ambient sound, study tools, and community.",
    href: "/",
    coverImage:
      "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png",
    year: "2022",
    role: "Product Designer",
  },
];
