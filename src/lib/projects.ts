export type ProjectItem = {
  title: string;
  slug: string;
  categorySlug: string;
  serviceSlugs: string[];
  summary: string;
  year: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Corporate Brand Film",
    slug: "corporate-brand-film",
    categorySlug: "advertising-solutions",
    serviceSlugs: ["media-production", "campaigns"],
    summary: "Premium corporate storytelling with cinematic visuals and platform-ready adaptations.",
    year: "2025",
  },
  {
    title: "Product Launch Campaign",
    slug: "product-launch-campaign",
    categorySlug: "advertising-solutions",
    serviceSlugs: ["campaigns", "digital-production"],
    summary: "Integrated launch assets and content system for multi-channel distribution.",
    year: "2025",
  },
  {
    title: "Executive Social Presence",
    slug: "executive-social-presence",
    categorySlug: "marketing-solutions",
    serviceSlugs: ["content-creation", "social-media-management"],
    summary: "A consistent content system with editorial control and premium visual direction.",
    year: "2024",
  },
  {
    title: "Growth Marketing Sprint",
    slug: "growth-marketing-sprint",
    categorySlug: "marketing-solutions",
    serviceSlugs: ["marketing-strategy", "digital-marketing"],
    summary: "Strategy-led planning and activation with clear KPIs and structured reporting.",
    year: "2024",
  },
  {
    title: "Retail Experience Concept",
    slug: "retail-experience-concept",
    categorySlug: "interior-design",
    serviceSlugs: ["design-concepts", "3d-visualization"],
    summary: "A premium retail concept with photorealistic visualization for stakeholder approvals.",
    year: "2025",
  },
  {
    title: "Corporate Office Fit-out Supervision",
    slug: "office-fitout-supervision",
    categorySlug: "interior-design",
    serviceSlugs: ["execution-supervision"],
    summary: "On-site supervision to ensure build quality and alignment with approved design.",
    year: "2025",
  },
  {
    title: "Finishing Upgrade",
    slug: "finishing-upgrade",
    categorySlug: "finishing-decorations",
    serviceSlugs: ["finishing-works", "decorations"],
    summary: "Finishing and decorative styling designed to elevate a corporate environment.",
    year: "2024",
  },
  {
    title: "Conference Production",
    slug: "conference-production",
    categorySlug: "event-management",
    serviceSlugs: ["event-planning", "event-production", "on-ground-management"],
    summary: "End-to-end planning, production delivery, and on-ground operations for a premium event.",
    year: "2025",
  },
  {
    title: "Custom Installation Build",
    slug: "custom-installation-build",
    categorySlug: "customized-replica",
    serviceSlugs: ["special-productions", "custom-designs"],
    summary: "Special fabrication with controlled execution and quality checkpoints.",
    year: "2024",
  },
  {
    title: "Immersive Product Showcase",
    slug: "immersive-product-showcase",
    categorySlug: "interactive-immersive-solutions",
    serviceSlugs: ["hologram-displays", "interactive-installations"],
    summary: "An immersive showcase combining holographic moments and interactive storytelling.",
    year: "2025",
  },
];
