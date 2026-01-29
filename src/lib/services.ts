export type ServiceItem = {
  title: string;
  slug: string;
  summary: string;
  whatItIs: string;
  subServices: string[];
  useCases: string[];
  deliverables: string[];
};

export type ServiceCategory = {
  title: string;
  slug: string;
  description: string;
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Advertising Solutions",
    slug: "advertising-solutions",
    description:
      "High-impact brand presence through world-class production and campaign execution.",
    services: [
      {
        title: "Media Production",
        slug: "media-production",
        summary: "Premium video and photo production for brands and corporate campaigns.",
        whatItIs:
          "End-to-end media production that translates brand strategy into cinematic visuals and precise messaging.",
        subServices: [
          "Creative direction",
          "Shooting & production crew",
          "Post-production",
          "Photography",
        ],
        useCases: [
          "Brand campaigns",
          "Corporate films",
          "Product launches",
          "Social-first content",
        ],
        deliverables: [
          "Creative treatment",
          "Production plan",
          "Final edited assets",
          "Adaptations for platforms",
        ],
      },
      {
        title: "Digital Production",
        slug: "digital-production",
        summary: "High-quality digital assets optimized for modern channels.",
        whatItIs:
          "Digital content and production workflows tailored for performance, consistency, and multi-channel distribution.",
        subServices: [
          "Motion graphics",
          "Short-form edits",
          "Platform adaptations",
          "Digital asset kits",
        ],
        useCases: [
          "Always-on social",
          "Product announcements",
          "Performance creatives",
          "Brand refreshes",
        ],
        deliverables: [
          "Asset library",
          "Motion templates",
          "Multiple cut-downs",
          "Brand-safe exports",
        ],
      },
      {
        title: "Campaigns",
        slug: "campaigns",
        summary: "Concept-to-launch campaigns designed for measurable impact.",
        whatItIs:
          "Integrated campaign planning and execution combining creative, production, and channel readiness.",
        subServices: [
          "Campaign concept",
          "Key visuals",
          "Content system",
          "Launch coordination",
        ],
        useCases: [
          "Seasonal campaigns",
          "New market entry",
          "Corporate initiatives",
          "Product launches",
        ],
        deliverables: [
          "Campaign toolkit",
          "Key visual set",
          "Content calendar",
          "Channel-ready deliverables",
        ],
      },
      {
        title: "Branding",
        slug: "branding",
        summary: "Premium identity systems built for scale and consistency.",
        whatItIs:
          "Brand identity and guidelines designed to align perception, messaging, and visual expression.",
        subServices: [
          "Visual identity",
          "Brand guidelines",
          "Tone of voice",
          "Brand assets",
        ],
        useCases: [
          "New brands",
          "Rebrands",
          "Sub-brand launches",
          "Corporate identity systems",
        ],
        deliverables: [
          "Logo suite",
          "Brand book",
          "Typography & color system",
          "Asset kit",
        ],
      },
    ],
  },
  {
    title: "Marketing Solutions",
    slug: "marketing-solutions",
    description:
      "Strategy-led marketing execution across digital channels, content, and community.",
    services: [
      {
        title: "Marketing Strategy",
        slug: "marketing-strategy",
        summary: "Clear positioning, messaging, and channel strategy built for growth.",
        whatItIs:
          "A structured strategy that aligns business goals, audience insights, and brand narrative into an actionable plan.",
        subServices: [
          "Positioning",
          "Audience & competitor research",
          "Channel strategy",
          "Messaging framework",
        ],
        useCases: [
          "Growth planning",
          "New launch strategy",
          "Brand repositioning",
          "Go-to-market alignment",
        ],
        deliverables: [
          "Strategy deck",
          "Messaging framework",
          "Channel plan",
          "KPIs & measurement approach",
        ],
      },
      {
        title: "Digital Marketing",
        slug: "digital-marketing",
        summary: "Performance-ready execution across key digital touchpoints.",
        whatItIs:
          "Digital planning and activation across paid and owned channels with a focus on clarity and measurable outcomes.",
        subServices: [
          "Media planning",
          "Campaign setup",
          "Optimization cycles",
          "Reporting",
        ],
        useCases: [
          "Lead generation",
          "Brand awareness",
          "Product sales support",
          "Event promotion",
        ],
        deliverables: [
          "Campaign plan",
          "Creative requirements",
          "Optimization reports",
          "Performance dashboard summary",
        ],
      },
      {
        title: "Content Creation",
        slug: "content-creation",
        summary: "Content systems that look premium and stay consistent.",
        whatItIs:
          "A scalable content engine producing on-brand visuals and copy for digital channels.",
        subServices: [
          "Content direction",
          "Design & editing",
          "Copywriting",
          "Content calendars",
        ],
        useCases: [
          "Social content systems",
          "Corporate communication",
          "Product storytelling",
          "Employer branding",
        ],
        deliverables: [
          "Content plan",
          "Design templates",
          "Monthly content sets",
          "Copy library",
        ],
      },
      {
        title: "Social Media Management",
        slug: "social-media-management",
        summary: "Community, content, and brand voice managed with precision.",
        whatItIs:
          "Operational management of social channels with strong editorial control and consistent execution.",
        subServices: [
          "Publishing & scheduling",
          "Community management",
          "Monthly reporting",
          "Brand voice management",
        ],
        useCases: [
          "Corporate social presence",
          "Brand reputation support",
          "Community building",
          "Campaign rollouts",
        ],
        deliverables: [
          "Editorial calendar",
          "Community guidelines",
          "Monthly performance report",
          "Content publishing",
        ],
      },
    ],
  },
  {
    title: "Interior Design",
    slug: "interior-design",
    description:
      "Premium spatial experiences combining concept, visualization, and on-site supervision.",
    services: [
      {
        title: "Design Concepts",
        slug: "design-concepts",
        summary: "High-end design concepts aligned with brand identity and purpose.",
        whatItIs:
          "Concept development that defines layout, mood, and functional goals before detailed execution.",
        subServices: [
          "Moodboards",
          "Space planning",
          "Material direction",
          "Concept proposals",
        ],
        useCases: [
          "Retail spaces",
          "Office environments",
          "Brand experience corners",
          "Exhibition booths",
        ],
        deliverables: [
          "Concept deck",
          "Moodboard & references",
          "Preliminary layouts",
          "Material direction",
        ],
      },
      {
        title: "3D Visualization",
        slug: "3d-visualization",
        summary: "Photorealistic 3D renders for confident decision-making.",
        whatItIs:
          "High-fidelity visualization that communicates design intent and reduces risk before build.",
        subServices: [
          "3D modeling",
          "Rendering",
          "Lighting & materials",
          "Animation walkthroughs",
        ],
        useCases: [
          "Stakeholder approvals",
          "Client presentations",
          "Pre-build alignment",
          "Marketing collateral",
        ],
        deliverables: [
          "Still renders",
          "Optional walkthrough",
          "Material palettes",
          "Presentation deck",
        ],
      },
      {
        title: "Execution Supervision",
        slug: "execution-supervision",
        summary: "On-site supervision to ensure quality and design accuracy.",
        whatItIs:
          "Project oversight that ensures the final execution matches the approved design and quality standards.",
        subServices: [
          "Site visits",
          "Quality checks",
          "Vendor coordination",
          "Progress reporting",
        ],
        useCases: [
          "Fit-outs",
          "Brand spaces",
          "Retail rollouts",
          "Corporate interiors",
        ],
        deliverables: [
          "Supervision plan",
          "Progress reports",
          "Issue tracking",
          "Handover checklist",
        ],
      },
    ],
  },
  {
    title: "Finishing & Decorations",
    slug: "finishing-decorations",
    description:
      "Finishing works and decorative solutions delivered with premium quality control.",
    services: [
      {
        title: "Finishing Works",
        slug: "finishing-works",
        summary: "High-quality finishing works with reliable execution.",
        whatItIs:
          "Finishing and fit-out execution with attention to detail, timelines, and corporate standards.",
        subServices: [
          "Fit-out coordination",
          "Material sourcing",
          "Installation management",
          "Quality assurance",
        ],
        useCases: [
          "Retail finishing",
          "Office fit-outs",
          "Brand experience upgrades",
          "Event space preparation",
        ],
        deliverables: [
          "Execution plan",
          "Material schedule",
          "Site coordination",
          "Final handover",
        ],
      },
      {
        title: "Decorations",
        slug: "decorations",
        summary: "Decorative styling and premium finishing details.",
        whatItIs:
          "Decorative solutions that elevate spaces and create a branded, cohesive atmosphere.",
        subServices: [
          "Decor selection",
          "Styling",
          "Installation",
          "Seasonal updates",
        ],
        useCases: [
          "Corporate environments",
          "Retail styling",
          "Seasonal brand activations",
          "Events",
        ],
        deliverables: [
          "Decoration concept",
          "Procurement list",
          "Installation delivery",
          "Maintenance recommendations",
        ],
      },
    ],
  },
  {
    title: "Event Management",
    slug: "event-management",
    description:
      "End-to-end event planning, production, and on-ground execution.",
    services: [
      {
        title: "Event Planning",
        slug: "event-planning",
        summary: "Concept, agenda, and planning built for smooth execution.",
        whatItIs:
          "Structured event planning that aligns objectives, experience, and logistics into a clear roadmap.",
        subServices: [
          "Concept & theme",
          "Agenda planning",
          "Vendor sourcing",
          "Budgeting",
        ],
        useCases: [
          "Corporate events",
          "Product launches",
          "Conferences",
          "Brand activations",
        ],
        deliverables: [
          "Event plan",
          "Timeline & run of show",
          "Vendor list",
          "Budget structure",
        ],
      },
      {
        title: "Event Production",
        slug: "event-production",
        summary: "Production execution including staging, AV, and experience build.",
        whatItIs:
          "Production delivery focused on quality, reliability, and premium guest experience.",
        subServices: [
          "Stage & set build",
          "AV & lighting",
          "Branding applications",
          "Technical rehearsals",
        ],
        useCases: [
          "Keynotes",
          "Awards",
          "Exhibitions",
          "Corporate gatherings",
        ],
        deliverables: [
          "Production plan",
          "Technical setup",
          "On-site crew",
          "Post-event wrap report",
        ],
      },
      {
        title: "On-ground Management",
        slug: "on-ground-management",
        summary: "On-site team management for flawless operations.",
        whatItIs:
          "On-ground coordination ensuring every touchpoint runs on time and to standard.",
        subServices: [
          "Floor management",
          "Guest flow",
          "Registration",
          "Vendor coordination",
        ],
        useCases: [
          "Multi-zone events",
          "Exhibitions",
          "Conferences",
          "VIP experiences",
        ],
        deliverables: [
          "Operations checklist",
          "On-site coordination",
          "Live issue handling",
          "Post-event notes",
        ],
      },
    ],
  },
  {
    title: "Customized Replica",
    slug: "customized-replica",
    description:
      "Custom builds and special productions that deliver memorable brand experiences.",
    services: [
      {
        title: "Custom Designs",
        slug: "custom-designs",
        summary: "One-of-one custom design solutions tailored to brand needs.",
        whatItIs:
          "Custom concepting and design for unique structures, displays, and brand moments.",
        subServices: [
          "Concept development",
          "Design engineering",
          "Material selection",
          "Prototype planning",
        ],
        useCases: [
          "Retail installations",
          "Brand activations",
          "Exhibition builds",
          "Launch moments",
        ],
        deliverables: [
          "Design package",
          "Material specs",
          "Production drawings",
          "Build plan",
        ],
      },
      {
        title: "Special Productions",
        slug: "special-productions",
        summary: "Complex builds and special fabrication delivered with control.",
        whatItIs:
          "Special production and fabrication services that turn ambitious concepts into reality.",
        subServices: [
          "Fabrication",
          "Custom props",
          "Large-scale builds",
          "Installation",
        ],
        useCases: [
          "Immersive brand spaces",
          "Event scenography",
          "Exhibition fabrication",
          "High-visibility installations",
        ],
        deliverables: [
          "Fabrication plan",
          "Build schedule",
          "Installation delivery",
          "Quality control checkpoints",
        ],
      },
    ],
  },
  {
    title: "Interactive & Immersive Solutions",
    slug: "interactive-immersive-solutions",
    description:
      "Immersive experiences powered by modern interactive technologies.",
    services: [
      {
        title: "Hologram Displays",
        slug: "hologram-displays",
        summary: "High-impact hologram setups for premium showcases.",
        whatItIs:
          "Holographic display experiences designed to captivate audiences and elevate product storytelling.",
        subServices: [
          "Content planning",
          "Hardware setup",
          "On-site calibration",
          "Experience flow",
        ],
        useCases: [
          "Product launches",
          "Retail showcases",
          "Exhibitions",
          "VIP demonstrations",
        ],
        deliverables: [
          "Experience plan",
          "Content specs",
          "Installation & calibration",
          "On-site operation support",
        ],
      },
      {
        title: "VR / AR",
        slug: "vr-ar",
        summary: "Immersive VR/AR experiences for training, demos, and storytelling.",
        whatItIs:
          "Virtual and augmented reality experiences designed to communicate complex stories and increase engagement.",
        subServices: [
          "Experience design",
          "3D assets",
          "Prototype",
          "Deployment support",
        ],
        useCases: [
          "Product demonstrations",
          "Training",
          "Brand activations",
          "Interactive booths",
        ],
        deliverables: [
          "Experience flow",
          "Prototype build",
          "Final application delivery",
          "Deployment checklist",
        ],
      },
      {
        title: "Interactive Installations",
        slug: "interactive-installations",
        summary: "Interactive installations combining design, tech, and storytelling.",
        whatItIs:
          "Physical-digital installations that invite participation and create memorable brand moments.",
        subServices: [
          "Interaction design",
          "Hardware integration",
          "Content triggers",
          "On-site setup",
        ],
        useCases: [
          "Public activations",
          "Mall pop-ups",
          "Brand experience zones",
          "Events",
        ],
        deliverables: [
          "Installation concept",
          "Technical plan",
          "Setup & operation",
          "Experience documentation",
        ],
      },
    ],
  },
];

export const allServices = serviceCategories.flatMap((c) =>
  c.services.map((s) => ({ ...s, category: c }))
);

export function getCategoryBySlug(slug: string) {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServiceBySlugs(categorySlug: string, serviceSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  const service = category?.services.find((s) => s.slug === serviceSlug);
  return { category, service };
}
