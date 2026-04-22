import type { Metadata } from "next"
import { Playfair_Display, EB_Garamond, Inter } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  style: ["normal", "italic"],
  weight: ["400", "500"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "DS Standard Foundation — The Architecture of the Hand & Instrument",
  description:
    "A 501(c)(3) non-profit researching, validating, and certifying alternatively sized piano keyboards so every pianist can play without physiological limitation.",
}

export default function Home2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${ebGaramond.variable} ${inter.variable}`}>
      {children}
    </div>
  )
}
