"use client"

const services = [
  {
    title: "Shopify Theme Development",
    description:
      "Custom Liquid themes, Shopify 2.0 sections, and theme architecture. From landing pages to full store builds that are easy to maintain.",
    icon: "Theme",
  },
  {
    title: "Shopify App Development",
    description:
      "Public and private apps using Admin API and Storefront API. Automations, integrations, and custom functionality for your store.",
    icon: "App",
  },
  {
    title: "Speed Optimization",
    description:
      "Core Web Vitals, LCP, CLS, and TBT. I audit and optimize so your store loads fast on mobile and desktop.",
    icon: "Speed",
  },
  {
    title: "CRO / UX Improvements",
    description:
      "Conversion-focused tweaks: product pages, cart experience, upsells, and UX improvements backed by best practices.",
    icon: "UX",
  },
  {
    title: "Ongoing Support & Maintenance",
    description:
      "Bug fixes, updates, and ongoing support so your store stays stable and your team can focus on growth.",
    icon: "Support",
  },
]

const iconPaths: Record<string, string> = {
  Theme:
    "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6z",
  App: "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v.5a1.5 1.5 0 01-3 0v-.5a1 1 0 00-1-1H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1v-.5z",
  Speed: "M13 10V3L4 14h7v7l9-11h-7z",
  UX: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  Support:
    "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            What I can help you with — from one-off projects to ongoing
            partnerships.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-800/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 transition-colors group-hover:bg-primary-500/20">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={iconPaths[service.icon] || iconPaths.Theme}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
