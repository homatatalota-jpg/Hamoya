import { notFound } from "next/navigation";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";
import { getServiceBySlugs } from "@/lib/services";

export default function ServiceDetailPage({
  params,
}: {
  params: { category: string; service: string };
}) {
  const { category, service } = getServiceBySlugs(params.category, params.service);

  if (!category || !service) notFound();

  const related = projects
    .filter(
      (p) =>
        p.categorySlug === category.slug && p.serviceSlugs.includes(service.slug)
    )
    .slice(0, 6);

  return (
    <div>
      <Section>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{category.title}</Badge>
          <Badge>Service</Badge>
        </div>

        <div className="mt-5 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-[var(--muted)]">
              {service.summary}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Get a Quote</Button>
              <Button href="/projects" variant="secondary">
                View Projects
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                What this is
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                {service.whatItIs}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Details"
          title="Sub-services"
          description="What’s included and how we scope delivery."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.subServices.map((x) => (
            <div
              key={x}
              className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6"
            >
              <div className="text-sm font-semibold text-[var(--text)]">{x}</div>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Scope and deliverables will be tailored to your objectives.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Use cases"
              title="Where this fits"
              description="Common scenarios where this service creates the most impact."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.useCases.map((u) => (
                <div
                  key={u}
                  className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-5"
                >
                  <div className="text-sm font-semibold text-[var(--text)]">
                    {u}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Deliverables"
              title="What you get"
              description="A clear set of outputs, aligned with corporate standards and channel needs."
            />
            <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6">
              <ul className="grid gap-3 text-sm text-[var(--muted)]">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Proof"
          title="Related projects"
          description="Examples filtered to this service and category."
          right={<Button href="/projects" variant="secondary">View all</Button>}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.length ? (
            related.map((p) => (
              <ProjectCard
                key={p.slug}
                title={p.title}
                summary={p.summary}
                year={p.year}
                categoryLabel={category.title}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6 text-sm text-[var(--muted)]">
              No related projects are listed yet. Add case studies to improve
              credibility.
            </div>
          )}
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
                Want a tailored proposal for {service.title}?
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Share your objective, timeline, and channels — we’ll respond with
                a structured plan.
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Button href="/contact">Get a Quote</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
