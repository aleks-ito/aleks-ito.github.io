import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
  type CaseStudy,
} from "@/data/caseStudies"
import { caseStudyAssetImages } from "@/assets/casestudies"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return { title: "Work not found" }
  return {
    title: `${study.title} — Selected Work`,
    description: study.problem,
  }
}

function WorkContent({ study }: { study: CaseStudy }) {
  return (
    <article className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-primary-400 transition-colors mb-10"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Selected Work
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {study.title}
            </h1>
            {study.clientName && (
              <p className="mt-1 text-slate-400">{study.clientName}</p>
            )}
          </div>
          {study.projectUrl && (
            <a
              href={study.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-white hover:border-primary-500 hover:bg-slate-800 transition-colors"
            >
              View live site
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-2">
              Problem
            </h2>
            <p className="text-slate-300 leading-relaxed">{study.problem}</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-2">
              Solution
            </h2>
            <p className="text-slate-300 leading-relaxed">{study.solution}</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-2">
              Results
            </h2>
            <p className="text-slate-300 leading-relaxed">{study.results}</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-2">
              Tech
            </h2>
            <p className="text-slate-300 leading-relaxed">{study.tech}</p>
          </section>

          {study.content && (
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-2">
                More
              </h2>
              <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                {study.content}
              </div>
            </section>
          )}

          {(() => {
            const assetImgs = caseStudyAssetImages[study.id]
            const screenshots = (
              assetImgs?.length ? assetImgs : study.screenshots ?? []
            ) as (typeof assetImgs extends (infer T)[] ? T : never)[] | string[]
            if (!screenshots.length) return null
            return (
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
                  Screenshots
                </h2>
                <div className="space-y-6">
                  {screenshots.map((src, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900/50"
                    >
                      <Image
                        src={src}
                        alt={`Screenshot ${i + 1} for ${study.title}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 48rem"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )
          })()}
        </div>
      </div>
    </article>
  )
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) notFound()
  return <WorkContent study={study} />
}
