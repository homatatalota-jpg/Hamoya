import Link from "next/link";

import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import { toWaMeNumber } from "@/lib/utils";

export default function ContactPage() {
  const waHref = `https://wa.me/${toWaMeNumber(siteConfig.whatsappNumber)}`;

  return (
    <div>
      <Section>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build your next experience"
          description="Fast access to WhatsApp, email, and a quote-ready form."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid gap-4">
              <div className="rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  WhatsApp
                </div>
                <div className="mt-3 text-sm font-semibold text-[var(--text)]">
                  Quick response
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Chat with our team for a fast scope check and next steps.
                </p>
                <div className="mt-5">
                  <Button href={waHref} variant="secondary">
                    Talk on WhatsApp
                  </Button>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Email
                </div>
                <div className="mt-3 text-sm font-semibold text-[var(--text)]">
                  {siteConfig.email}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Prefer email? Send your brief and we’ll respond with a
                  structured proposal.
                </p>
                <div className="mt-5">
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-5 text-sm font-semibold text-[var(--text)] hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)]"
                  >
                    Email us
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Location
                </div>
                <div className="mt-3 text-sm font-semibold text-[var(--text)]">
                  {siteConfig.locationLine}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Remote-friendly delivery with on-ground execution options.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6 sm:p-8">
              <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
                Request a quote
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Tell us your objective, timeline, and the service you’re
                interested in.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
