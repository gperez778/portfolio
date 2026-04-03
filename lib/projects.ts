export interface Project {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  href: string;
  coverImage: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "imvu-hashtags",
    title: "IMVU : Hashtags",
    tags: ["Discover", "Engagement"],
    description:
      "Managed creation of a new foundation for connection, helping users engage through shared interests, locations, and products, while surfacing curated content and people to explore.",
    href: "/imvu-hashtags",
    coverImage: "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png",
    role: "Director, Product Design",
  },
  {
    slug: "ea-meta",
    title: "EA : 1st Internal Design System",
    tags: ["Design System", "Brand", "0-1 team"],
    description:
      "Led and created a design system to bring consistency to a growing product suite, where fragmented design was creating inconsistent experiences across products and teams.",
    href: "/ea-meta",
    coverImage: "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png",
    role: "Sr Manager / Lead UX Design",
  },
  {
    slug: "imvu-system-redesign",
    title: "IMVU : Redesign & Design System",
    tags: ["Design System", "Redesign", "Brand"],
    description:
      "Led a team through a redesign of IMVU in phases while introducing a cross-platform design system for iOS, Android, and Web, creating consistent experience to attract and retain users while creating team efficiency.",
    href: "/imvu-system-redesign",
    coverImage: "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png",
    role: "Director, Product Design",
  },
  {
    slug: "ea-help-center",
    title: "EA : Help Center",
    tags: ["0-1 Product", "Enterprise"],
    description:
      "Creating a new internal service tool that reduces SLA, increase resolutions, and unblock any employee across a large international team.",
    href: "/ea-help-center",
    coverImage: "/assets/PQqICxfobgL4joAir7TvPV8EI_scale-d.png",
    role: "Senior Manager, Experience Design",
  },
  {
    slug: "withme-design",
    title: "WithMe : Social & Games on Unreal",
    tags: ["Design System", "Unreal", "Redesign"],
    description:
      "Led and designed a 0–1 social 3D interactive application in Unreal, building features and UI libraries to achieve establishing our first userbase.",
    href: "/withme-design",
    coverImage: "/assets/00xi47s8h1p2WaMzYu25xE7GlcI_width=2.png",
    role: "Director, Product Design",
  },
];
