"use client"

const testimonials = [
  {
    quote:
      "Consistent quality and fast turnaround. We've been working together for over a year — he's become our go-to for Shopify theme and speed work.",
    author: "Agency Partner",
    role: "Digital Agency, US",
  },
  {
    quote:
      "Clear communication and clean code. Our team could take over the project without any hassle. Exactly what we need from a developer.",
    author: "Ecommerce Manager",
    role: "D2C Brand, UK",
  },
  {
    quote:
      "Reliable and professional. Handled our emergency bug fixes and then stayed on for ongoing support. Highly recommend.",
    author: "Store Owner",
    role: "Shopify Store, AU",
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
            What agencies and clients say about working with me.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.role}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
            >
              <p className="text-slate-300 italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="block font-semibold text-white">
                    {t.author}
                  </span>
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
