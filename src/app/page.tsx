export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Creative business solutions
              </div>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                Premium creative solutions for brands that lead.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[var(--muted)] sm:text-lg">
                From campaigns and media production to immersive experiences and
                execution on the ground — we build high-impact work designed for
                clarity, trust, and scale.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold tracking-tight text-black transition-all duration-200 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
                >
                  Get a Quote
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_45%)] px-6 py-3 text-sm font-semibold tracking-tight text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)]"
                >
                  View Projects
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_45%)] p-5">
                  <div className="text-sm font-semibold text-[var(--text)]">
                    Corporate-ready
                  </div>
                  <div className="mt-2 text-sm text-[var(--muted)]">
                    Premium tone, clean execution.
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_45%)] p-5">
                  <div className="text-sm font-semibold text-[var(--text)]">
                    End-to-end delivery
                  </div>
                  <div className="mt-2 text-sm text-[var(--muted)]">
                    Strategy, production, rollout.
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_45%)] p-5">
                  <div className="text-sm font-semibold text-[var(--text)]">
                    Immersive solutions
                  </div>
                  <div className="mt-2 text-sm text-[var(--muted)]">
                    Interactive experiences at scale.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Highlights
                </div>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg),transparent_15%)] p-5">
                    <div className="text-sm font-semibold text-[var(--text)]">
                      Services built for global brands
                    </div>
                    <div className="mt-2 text-sm text-[var(--muted)]">
                      Clear hierarchy, modern storytelling, and fast access to
                      contact options.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg),transparent_15%)] p-5">
                    <div className="text-sm font-semibold text-[var(--text)]">
                      Projects with category filtering
                    </div>
                    <div className="mt-2 text-sm text-[var(--muted)]">
                      Find relevant work quickly by service category.
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--accent),transparent_75%)] blur-3xl" />
                  <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--accent2),transparent_80%)] blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Services
              </div>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
                Explore our capabilities
              </h2>
              <p className="mt-3 text-pretty text-base leading-7 text-[var(--muted)]">
                Use the Services hub to navigate to detailed pages for each
                offering.
              </p>
            </div>
            <a
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-5 text-sm font-semibold text-[var(--text)] hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)]"
            >
              View all services
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advertising Solutions",
                desc: "Production, campaigns, and brand systems.",
              },
              {
                title: "Marketing Solutions",
                desc: "Strategy, content, and social management.",
              },
              {
                title: "Interior Design",
                desc: "Concept, 3D visualization, supervision.",
              },
              {
                title: "Finishing & Decorations",
                desc: "Finishing works and premium decor.",
              },
              {
                title: "Event Management",
                desc: "Planning, production, on-ground execution.",
              },
              {
                title: "Interactive & Immersive",
                desc: "Holograms, VR/AR, interactive installations.",
              },
            ].map((c) => (
              <a
                key={c.title}
                href="/services"
                className="group rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
                  {c.title}
                </div>
                <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {c.desc}
                </div>
                <div className="mt-6 text-sm font-medium text-[var(--text)]">
                  Explore
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Ready to move
                </div>
                <div className="mt-3 text-balance text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
                  Tell us what you’re building — we’ll propose the right solution.
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Fast access to WhatsApp, email, and a quote-ready contact form.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-black transition-all duration-200 hover:brightness-110"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
