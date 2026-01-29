import Link from "next/link";

import { Container } from "@/components/Container";
import { navigation, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--bg),transparent_5%)]">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
              {siteConfig.name}
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Pages
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--muted)] hover:text-[var(--text)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Contact
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              <div>{siteConfig.locationLine}</div>
              <a className="hover:text-[var(--text)]" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              <a className="hover:text-[var(--text)]" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Fast access
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <Link className="text-sm text-[var(--muted)] hover:text-[var(--text)]" href="/services">
                Explore Services
              </Link>
              <Link className="text-sm text-[var(--muted)] hover:text-[var(--text)]" href="/projects">
                View Projects
              </Link>
              <Link className="text-sm text-[var(--muted)] hover:text-[var(--text)]" href="/contact">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[var(--border)] py-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
