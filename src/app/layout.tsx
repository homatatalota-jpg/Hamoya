import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { siteConfig } from "@/lib/site";
import { toWaMeNumber } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Creative Business Solutions",
    template: "%s · Creative Business Solutions",
  },
  description:
    "Premium creative business solutions for brands and corporate clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const waHref = `https://wa.me/${toWaMeNumber(siteConfig.whatsappNumber)}`;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute -left-40 -top-48 h-[520px] w-[520px] rounded-full bg-[color-mix(in_srgb,var(--accent),transparent_80%)] blur-3xl" />
            <div className="absolute -bottom-56 -right-40 h-[620px] w-[620px] rounded-full bg-[color-mix(in_srgb,var(--accent2),transparent_85%)] blur-3xl" />
          </div>

          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />

          <WhatsAppFab href={waHref} />
        </div>
      </body>
    </html>
  );
}
