"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { navigation } from "@/lib/site";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg),transparent_10%)] backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[color-mix(in_srgb,var(--accent),transparent_10%)]" />
            <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
              {siteConfig.name}
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_45%)] px-4 text-sm font-medium text-[var(--text)] hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)] md:hidden"
            >
              Menu
            </button>

            <Button href="/contact" variant="secondary" className="hidden md:inline-flex">
              Contact
            </Button>
            <Button href="/contact">Get a Quote</Button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-[var(--border)] bg-[var(--bg)] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
                Navigation
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-10 rounded-full border border-[var(--border)] px-4 text-sm font-medium text-[var(--text)]"
              >
                Close
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_55%)] px-4 py-3 text-sm font-medium text-[var(--text)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
