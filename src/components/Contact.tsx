"use client"

export default function Contact() {
  const email = "dzisevaleksandar@gmail.com"
  const linkedinUrl = "https://www.linkedin.com/in/aleksandar-ert2324242/"

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-slate-900/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            If you&apos;re looking for a reliable Shopify developer for your next
            project, feel free to reach out.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-primary-600 px-6 py-4 font-semibold text-white hover:bg-primary-500 transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Gmail
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-4 font-semibold text-slate-200 hover:bg-slate-700 hover:border-slate-500 hover:text-white transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-center text-slate-500 text-sm">
            <a href={`mailto:${email}`} className="text-slate-400 hover:text-primary-400 transition-colors">
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
