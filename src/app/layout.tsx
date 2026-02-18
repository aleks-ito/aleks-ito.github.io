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
  title: "Aleks Ito — Shopify Developer for Agencies & Ecommerce Brands",
  description:
    "Shopify theme & app developer for agencies and ecommerce brands. Custom themes, apps, speed, CRO, SEO. White-label for agencies; direct partner for brands. Japan-based, remote worldwide.",
  keywords: [
    "Shopify developer",
    "Shopify theme development",
    "Shopify app development",
    "Shopify speed optimization",
    "Shopify CRO",
    "ecommerce developer",
    "white-label Shopify",
    "Cursor",
    "Claude",
    "AI automation",
  ],
  openGraph: {
    title: "Aleks Ito — Shopify Developer for Agencies & Ecommerce Brands",
    description:
      "I help ecommerce brands and Shopify agencies build fast, conversion-focused stores — custom themes, apps, speed, CRO, and SEO.",
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
