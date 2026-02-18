"use client"

const testimonials = [
  {
    quote:
      "He's helped us across multiple client sites — including Just My Look and Base London — with full website builds, bug fixes, custom features, Algolia search and recommendations, and Shopify Flow setup. Reliable, clear communication, and code we can maintain. We keep bringing him in for a reason.",
    author: "Wesley Brooks",
    role: "Agency Owner",
  },
  {
    quote:
      "He's been a key part of our agency build — full site builds, middleware setup, bug fixes, and ongoing support. He's built multiple complete stores for us, including Qtopix and heybee, on different theme bases. Delivers at agency scale and we're happy to keep working with him.",
    author: "Brad Haynes",
    role: "CEO, Drive Digital",
  },
  {
    quote:
      "He built our headless storefront — Shopify, React, and Sanity — and nailed the hard parts: custom variant switching for our furniture and fabrics, mixing content and commerce in one experience, and keeping everything fast and editable. We can now update our story and products independently without compromising the site.",
    author: "Close Company Living",
    role: "Furniture & Homeware, UK",
  },
  {
    quote:
      "He delivered our redesign on Warehouse plus the custom features we needed: PDP bundles, partner automatic discounts for SMARTY and Lebara, and filtered product grids on partner pages. Clean implementation and easy for us to maintain. We're really happy with how it turned out.",
    author: "Phil Kemish",
    role: "Co-Founder & CEO, Reboxed",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            What agencies and brands say about working with me.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10"
            >
              <p className="text-slate-300 italic text-lg">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block font-semibold text-white">{t.author}</span>
                  <span className="text-sm text-slate-500">{t.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
