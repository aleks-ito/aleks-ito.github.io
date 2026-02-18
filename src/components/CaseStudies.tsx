import Link from "next/link"
import Image from "next/image"
import { getVisibleCaseStudies } from "@/data/caseStudies"
import { caseStudyAssetImages } from "@/assets/casestudies"

export default function CaseStudies() {
  const studies = getVisibleCaseStudies()

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected Work
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            I help Shopify brands increase conversion rate and revenue through
            high-performance store optimization — including CRO (conversion rate
            optimization), SEO, speed, and tailored builds. Below are a few
            recent projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {studies.map((study) => (
            <article
              key={study.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 transition-all hover:border-slate-700 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white">{study.title}</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-400 flex-1">
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
              {(() => {
                const assetImgs = caseStudyAssetImages[study.id]
                const thumbnails =
                  (assetImgs?.length ? assetImgs : study.screenshots ?? []) as (
                    | string
                    | (typeof assetImgs)[number]
                  )[]
                if (thumbnails.length === 0) return null
                return (
                  <div className="mt-4 flex gap-1.5 flex-wrap">
                    {thumbnails.slice(0, 4).map((src, i) => (
                      <div
                        key={i}
                        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-slate-700/50 bg-slate-800/50 shrink-0"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ))}
                  </div>
                )
              })()}
              <Link
                href={`/work/${study.id}`}
                className="mt-6 inline-block text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
              >
                View case study →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
