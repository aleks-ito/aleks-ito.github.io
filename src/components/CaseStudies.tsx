"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

const caseStudies = [
  {
    id: "speed-optimization",
    title: "Shopify Speed Optimization",
    problem:
      "Agency client's store had poor mobile performance (PageSpeed 35) and high bounce rate, hurting conversions.",
    solution:
      "Full audit, theme cleanup, lazy loading, critical CSS, image optimization, and hosting/config tweaks. Delivered in staging for QA before go-live.",
    results:
      "Mobile PageSpeed 35 → 88. Desktop 72 → 95. Bounce rate down ~15% in the first month.",
    tech: "Liquid, Shopify theme, Core Web Vitals, Lighthouse",
  },
  {
    id: "product-page-sections",
    title: "Custom Shopify Product Page + Sections",
    problem:
      "Brand needed unique product page layouts and modular sections for campaigns without locking into a single theme.",
    solution:
      "Built custom sections (hero, feature grid, testimonials, CTA, countdown) with JSON templates. All editable in the theme editor for non-devs.",
    results:
      "Faster campaign launches; client reported higher conversion on new landing and product pages.",
    tech: "Liquid, Shopify 2.0, JSON templates, CSS/JS",
  },
  {
    id: "api-integration",
    title: "Shopify App / API Integration Automation",
    problem:
      "Agency's internal ops required manual syncing between Shopify and their ERP, causing delays and errors.",
    solution:
      "Private app with Admin API: order and inventory sync, status updates, and webhooks. Documented for their team to maintain.",
    results:
      "Manual data entry largely removed; fewer support tickets from the fulfillment team.",
    tech: "Shopify Admin API, Node.js, webhooks",
  },
  {
    id: "bug-fix-cleanup",
    title: "Bug Fix + Theme Cleanup for Agency Client",
    problem:
      "Legacy theme had checkout and cart bugs, plus a lot of unused code. Client needed stability and a clear handoff.",
    solution:
      "Fixed critical bugs, removed dead code, refactored key snippets. Wrote a short handoff doc for future developers.",
    results:
      "Stable production; client and agency could plan the next phase with confidence.",
    tech: "Liquid, JavaScript, Shopify theme",
  },
]

type CaseStudy = (typeof caseStudies)[number]

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)

  useEffect(() => {
    if (!selectedStudy) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedStudy(null)
    }
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [selectedStudy])

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected Work
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A few recent projects — theme work, apps, speed, and support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 transition-all hover:border-slate-700"
            >
              <h3 className="text-xl font-semibold text-white">{study.title}</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>
                  <span className="font-medium text-slate-300">Problem: </span>
                  {study.problem}
                </p>
                <p>
                  <span className="font-medium text-slate-300">Solution: </span>
                  {study.solution}
                </p>
                <p>
                  <span className="font-medium text-slate-300">Results: </span>
                  {study.results}
                </p>
                <p>
                  <span className="font-medium text-slate-300">Tech: </span>
                  {study.tech}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStudy(study)}
                className="mt-6 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
              >
                View Details →
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Modal — portaled to body so position is always relative to viewport */}
      {selectedStudy &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex min-h-screen items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setSelectedStudy(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3
                id="modal-title"
                className="text-xl font-semibold text-white pr-8"
              >
                {selectedStudy.title}
              </h3>
              <div className="mt-4 space-y-4 text-slate-400">
                <div>
                  <span className="block text-sm font-medium text-slate-300 mb-1">
                    Problem
                  </span>
                  <p>{selectedStudy.problem}</p>
                </div>
                <div>
                  <span className="block text-sm font-medium text-slate-300 mb-1">
                    Solution
                  </span>
                  <p>{selectedStudy.solution}</p>
                </div>
                <div>
                  <span className="block text-sm font-medium text-slate-300 mb-1">
                    Results
                  </span>
                  <p>{selectedStudy.results}</p>
                </div>
                <div>
                  <span className="block text-sm font-medium text-slate-300 mb-1">
                    Tech stack
                  </span>
                  <p>{selectedStudy.tech}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}
