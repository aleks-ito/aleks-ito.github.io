"use client"

const points = [
  "Clean, maintainable code — easy for you or your team to take over or iterate",
  "Fast turnaround — I respect deadlines and communicate early if scope or timing shifts",
  "Clear communication and progress updates — async-friendly (Slack, email), no radio silence",
  "Strong attention to performance and UX — Core Web Vitals and conversion best practices built in",
  "Comfortable working with agency workflows — Slack, Jira, GitHub, and your existing tools",
  "Reliable long-term support mindset — I'm in it for lasting partnerships, not one-off handoffs",
  "AI for automation — I use Cursor, Claude, and AI-assisted workflows to automate repetitive tasks and ship faster without sacrificing quality",
]

export default function WorkStyle() {
  return (
    <section id="work-style" className="relative py-24 sm:py-32 bg-slate-900/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          My Work Style
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          How I approach projects so you know what to expect.
        </p>
        <ul className="mt-8 space-y-4">
          {points.map((point, i) => (
            <li key={i} className="flex gap-3 text-slate-300">
              <span className="mt-1.5 h-5 w-5 shrink-0 rounded-full bg-primary-500/20 flex items-center justify-center">
                <svg
                  className="h-3 w-3 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
