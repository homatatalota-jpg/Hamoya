import Link from "next/link";

export function WhatsAppFab({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_25%)] text-[var(--text)] shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)]"
      aria-label="Chat on WhatsApp"
    >
      WA
    </Link>
  );
}
