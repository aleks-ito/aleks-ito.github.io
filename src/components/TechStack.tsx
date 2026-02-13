"use client"

const techItems = [
  "Liquid",
  "Shopify CLI",
  "HTML",
  "CSS",
  "JavaScript",
  "Vue",
  "React",
  "PHP",
  "Node.js",
  "Shopify Admin API",
  "Storefront API",
  "GitHub",
  "SourceTree",
  "Postman",
  "Jira",
  "ClickUp",
  "Slack",
  "Hosting",
  "Cursor",
  "Claude",
  "AI & Automation",
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 bg-slate-900/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Tools and technologies I use — including AI and modern dev tools
            for faster, consistent delivery.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {techItems.map((name) => (
            <span
              key={name}
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
