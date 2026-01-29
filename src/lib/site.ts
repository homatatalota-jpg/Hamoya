export const siteConfig = {
  name: "Creative Business Solutions",
  shortName: "CBS",
  tagline: "Premium creative solutions for brands that lead.",
  email: "hello@example.com",
  phone: "+20 100 000 0000",
  whatsappNumber: "+201000000000",
  locationLine: "Cairo, Egypt",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
] as const;
