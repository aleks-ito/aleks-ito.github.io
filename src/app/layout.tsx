import type { Metadata } from "next"
import { DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "[Your Name] — Shopify Theme & App Developer | Agencies & Stores",
  description:
    "Personal Shopify developer for agencies and ecommerce brands. Custom theme development, app development, and performance optimization. US-based, remote worldwide.",
  keywords: [
    "Shopify developer",
    "Shopify theme development",
    "Shopify app development",
    "Shopify speed optimization",
    "ecommerce developer",
    "white-label Shopify",
    "Cursor",
    "Claude",
    "AI automation",
  ],
  openGraph: {
    title: "[Your Name] — Shopify Theme & App Developer",
    description:
      "I help Shopify agencies and ecommerce brands build fast, conversion-focused stores with custom theme development, app development, and performance optimization.",
    type: "website",
  },
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
