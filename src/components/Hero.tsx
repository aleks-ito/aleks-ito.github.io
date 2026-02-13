"use client"

import Link from "next/link"

const bullets = [
  "Shopify Theme Development (Liquid / Shopify 2.0)",
  "Shopify App Development (Admin API / Storefront API)",
  "Speed Optimization (Core Web Vitals)",
  "CRO / UX Improvements",
  "AI for automation — Cursor, Claude, and modern tooling",
  "Available for International clients",
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 pt-28 pb-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />

      <div className="relative mx-auto max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left: profile photo placeholder */}
          <div
            className="shrink-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-slate-700/50 bg-slate-800/80 shadow-2xl animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Placeholder: replace src with your photo and add width/height */}
            <div className="w-full h-full bg-slate-700/50 flex items-center justify-center text-slate-500 text-sm text-center px-2">
              Your photo
            </div>
            {/* When you have a photo, use:
            <Image
              src="/your-photo.jpg"
              alt="[Your Name]"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
            */}
          </div>

          {/* Right: intro text */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Hi, I&apos;m [Your Name] — Shopify Theme & App Developer
            </h1>
            <p
              className="mt-5 text-lg text-slate-400 sm:text-xl max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              I help Shopify agencies and ecommerce brands build fast,
              conversion-focused Shopify stores with custom theme development,
              Shopify app development, and performance optimization.
            </p>

            <ul
              className="mt-6 space-y-2 text-slate-400 text-sm sm:text-base animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {bullets.map((item, i) => (
                <li key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-primary-500 transition-all hover:shadow-primary-500/25 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Contact Me
              </Link>
              <Link
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3.5 text-base font-semibold text-white hover:bg-slate-700/50 hover:border-slate-500 transition-all"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
