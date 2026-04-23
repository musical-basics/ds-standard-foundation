import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, EB_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: 'DS Standard Foundation - Alternative Piano Keyboards That Fit Every Hand',
  description: 'Setting a standard for alternatively sized keyboards recognized globally, so pianists may achieve their full musical potential while avoiding injury.',
  generator: 'v0.app',
  icons: {
    icon: '/icon-gold-32x32.png',
    apple: '/apple-icon-gold.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${ebGaramond.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
