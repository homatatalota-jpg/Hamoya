import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <div>
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              About us
            </div>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              A premium creative partner built for corporate standards.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[var(--muted)]">
              We help brands deliver clear messaging, cinematic production, and
              immersive experiences — with reliability, structured execution,
              and a premium finish.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/services">Explore Services</Button>
              <Button href="/contact" variant="secondary">
                Get a Quote
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Snapshot
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Years", value: "10+" },
                  { label: "Projects", value: "250+" },
                  { label: "Services", value: "Multi" },
                  { label: "Delivery", value: "End-to-end" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg),transparent_15%)] p-5"
                  >
                    <div className="text-2xl font-semibold tracking-tight text-[var(--text)]">
                      {s.value}
                    </div>
                    <div className="mt-2 text-sm text-[var(--muted)]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Approach"
          title="A process built for trust"
          description="Clear alignment, premium execution, and consistent outcomes across channels and touchpoints."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Discover",
              desc: "Goals, audience, and constraints aligned early.",
            },
            {
              title: "Design",
              desc: "Concepts shaped into a clear system and story.",
            },
            {
              title: "Produce",
              desc: "Quality-first production with structured workflow.",
            },
            {
              title: "Deliver",
              desc: "On-time handover with platform-ready outputs.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6"
            >
              <div className="text-sm font-semibold text-[var(--text)]">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Next step
              </div>
              <div className="mt-3 text-balance text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
                Ready to plan your next launch?
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Share your objective — we’ll propose the right service mix.
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Button href="/contact">Contact Us</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
