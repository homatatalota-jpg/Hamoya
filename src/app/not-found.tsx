import Link from "next/link";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          404
        </div>
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-pretty text-base leading-7 text-[var(--muted)]">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-5 text-sm font-semibold text-[var(--text)] hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)]"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </Section>
  );
}
