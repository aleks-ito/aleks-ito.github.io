"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">Remote worldwide</p>
          <nav className="flex items-center gap-6">
            <Link
              href="#hero"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Top
            </Link>
            <Link
              href="#contact"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} Aleks Ito. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
