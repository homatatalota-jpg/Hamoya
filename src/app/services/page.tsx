import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { serviceCategories } from "@/lib/services";

export default function ServicesPage() {
  return (
    <div>
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="A gateway to detailed solutions"
          description="Explore our service categories and jump into individual service pages for definitions, use cases, and related projects."
        />

        <div className="mt-10 grid gap-6">
          {serviceCategories.map((category) => (
            <div
              key={category.slug}
              id={category.slug}
              className="rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-7 sm:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                    Category
                  </div>
                  <div className="mt-3 text-xl font-semibold tracking-tight text-[var(--text)]">
                    {category.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {category.description}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {category.services.map((s) => (
                      <ServiceCard
                        key={s.slug}
                        title={s.title}
                        summary={s.summary}
                        href={`/services/${category.slug}/${s.slug}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
