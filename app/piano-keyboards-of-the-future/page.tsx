"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

const plateRomans = [
  "Plate I",
  "Plate II",
  "Plate III",
  "Plate IV",
  "Plate V",
  "Plate VI",
  "Plate VII",
  "Plate VIII",
  "Plate IX",
  "Plate X",
  "Plate XI",
  "Plate XII",
]

const slides = Array.from({ length: 12 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0")
  return {
    src: `/future_slide_${num}.jpg`,
    plate: plateRomans[i],
    alt: `Future of piano keyboards, ${plateRomans[i]}`,
  }
})

export default function PianoKeyboardsOfTheFuturePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      {/* Masthead / dateline */}
      <div className="fixed top-0 right-0 z-40 px-6 md:px-10 lg:px-16 py-7 pointer-events-none">
        <div className="text-[0.65rem] uppercase tracking-[0.25em] text-primary font-[family-name:var(--font-inter)] text-right pointer-events-auto">
          <span>Est. 1993</span>
          <span className="hidden sm:inline mx-3 text-border">|</span>
          <span className="hidden sm:inline">501(c)(3)</span>
        </div>
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-primary mb-8 font-[family-name:var(--font-inter)]">
              Piano Keyboards of the Future
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              A future where the keyboard
              <br />
              <span className="italic font-light text-primary">fits the hand.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
              An imagined catalogue of what the next decades could look like: manufacturers offering sized keyboards by default, electronic keyboards in every span, conservatories equipped so that students never have to apologise for their hands.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical hairline divider */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* Section 2: Forward-looking preamble */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary sticky top-28 font-[family-name:var(--font-inter)]">
                  A Forward View
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection className="md:col-span-8 lg:col-span-9">
              <p className="text-xl md:text-2xl leading-[1.6] text-foreground/80">
                The foundation&rsquo;s work has established that retrofitting works, that pianists adapt quickly, and that the research supports a registry of sizes rather than a single historical default. What remains is adoption at scale. Manufacturers making DS-certified keyboards on the assembly line; electronic keyboard makers offering DS5.5, DS6.0, and DS6.5 as catalogue options; conservatories equipping every piano in every practice room. The pages that follow sketch what that world could look like.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vertical hairline divider */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* Section 1: 12-slide gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
            <AnimatedSection>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic text-primary">
                An Imagined Catalogue
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Twelve Plates, Future Adoption
              </span>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {slides.map((slide, index) => (
              <AnimatedSection key={slide.src} delay={index * 60}>
                <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
                  <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                  <div className="relative aspect-[4/3] overflow-hidden [filter:grayscale(85%)_sepia(18%)_contrast(1.05)]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                    <span>{slide.plate}</span>
                    <span className="text-right">Future Adoption</span>
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical hairline divider */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
              Continue the Record
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground mb-10 text-balance">
              From retrofit to <span className="italic font-light text-primary">default.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
              >
                Read Our Story
              </Link>
              <Link
                href="/the_ds_standard"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
              >
                The DS Standard
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
