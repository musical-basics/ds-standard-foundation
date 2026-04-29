"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

type Plate = { src: string; numeral: string }

const pastPlates: Plate[] = [
  { src: "/past_slide_01.jpg", numeral: "Plate I" },
  { src: "/past_slide_02.jpg", numeral: "Plate II" },
  { src: "/past_slide_03.jpg", numeral: "Plate III" },
  { src: "/past_slide_04.jpg", numeral: "Plate IV" },
  { src: "/past_slide_05.jpg", numeral: "Plate V" },
  { src: "/past_slide_06.jpg", numeral: "Plate VI" },
  { src: "/past_slide_07.jpg", numeral: "Plate VII" },
  { src: "/past_slide_08.jpg", numeral: "Plate VIII" },
]

const futurePlateRomans = [
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

const futurePlates = Array.from({ length: 12 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0")
  return {
    src: `/future_slide_${num}.jpg`,
    plate: futurePlateRomans[i],
    alt: `Future of piano keyboards, ${futurePlateRomans[i]}`,
  }
})

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      {/* Masthead */}
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
              History
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              Looking back,
              <br />
              <span className="italic font-light text-primary">and looking forward.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto leading-relaxed text-balance">
              A short record of where smaller keyboards came from, and an imagined
              catalogue of what the next decades could look like if DS sizes become
              the default rather than the retrofit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical hairline */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      <div className="px-4 md:px-12 lg:px-24">
        <main className="w-full max-w-[1400px] mx-auto">
          {/* Part One: The Past */}
          <section className="pt-8 md:pt-12 pb-4">
            <AnimatedSection>
              <div className="flex items-baseline gap-6 border-b border-border pb-6 mb-12 md:mb-16">
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-primary font-[family-name:var(--font-inter)]">
                  Part I
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-foreground italic">
                  The Past
                </h2>
              </div>
            </AnimatedSection>

            {/* Josef Hofmann */}
            <section className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
              <div className="md:col-span-4 lg:col-span-3">
                <AnimatedSection>
                  <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-[2/3] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                      <Image
                        src="/history_josef_hofmann.jpg"
                        alt="Josef Hofmann, portrait by the Bain News Service"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </figure>
                  <figcaption className="mt-4 text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                    Bain News Service · Library of Congress
                  </figcaption>
                </AnimatedSection>
                <h3 className="mt-8 text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary sticky top-28 font-[family-name:var(--font-inter)]">
                  Josef Hofmann
                </h3>
              </div>
              <AnimatedSection className="md:col-span-8 lg:col-span-8">
                <p className="text-2xl lg:text-[1.75rem] leading-[1.55] text-foreground [&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[5.5rem] [&::first-letter]:leading-[0.8] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                  He was not only a highly acclaimed pianist, respected by the likes of
                  Rachmaninov, but also a keen inventor. He had powerful but small hands
                  and in this video he is playing the smaller keyboard with which he
                  concertized in the 1930s and 1940s.
                </p>
              </AnimatedSection>
            </section>

            <hr className="border-t border-border" />

            {/* Historical Pianos gallery */}
            <section className="py-16 md:py-24">
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
                <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic text-primary">
                  Historical Pianos
                </h3>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  Eight Plates from the Archive
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {pastPlates.map((plate, index) => (
                  <AnimatedSection key={plate.numeral} delay={(index % 2) * 100}>
                    <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
                      <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                      {/* Slides are 1920x1080; keep the container 16:9 so edge captions aren't cropped. */}
                      <div className="relative aspect-[16/9] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                        <Image
                          src={plate.src}
                          alt={`${plate.numeral}, historical piano keyboard`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </figure>
                    <figcaption className="mt-4 text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                      {plate.numeral}
                    </figcaption>
                  </AnimatedSection>
                ))}
              </div>
            </section>

            <hr className="border-t border-border" />

            {/* What Size Keyboard? */}
            <section className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary sticky top-28 font-[family-name:var(--font-inter)]">
                  What Size Keyboard?
                </h3>
              </div>
              <AnimatedSection className="md:col-span-8 lg:col-span-8">
                <p className="text-2xl lg:text-[1.75rem] leading-[1.55] text-foreground">
                  In the overhead views of this video the bass filler block, which takes
                  up the extra space in the piano, can be seen. The size of the
                  keyboard&rsquo;s octave is 6.25 inches.
                </p>
                <div className="mt-10">
                  <Link
                    href="/the_ds_standard"
                    className="inline-flex items-center text-[0.7rem] uppercase tracking-[0.25em] font-medium text-primary hover:text-foreground transition-colors font-[family-name:var(--font-inter)] border-b border-primary/40 hover:border-foreground pb-1"
                  >
                    See the full standard ledger &rarr;
                  </Link>
                </div>
              </AnimatedSection>
            </section>
          </section>

          {/* Part Two: The Future */}
          <section className="pt-16 md:pt-24 pb-4 border-t border-border">
            <AnimatedSection>
              <div className="flex items-baseline gap-6 border-b border-border pb-6 mb-12 md:mb-16">
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-primary font-[family-name:var(--font-inter)]">
                  Part II
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-foreground italic">
                  The Future
                </h2>
              </div>
            </AnimatedSection>

            {/* Forward View */}
            <section className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary sticky top-28 font-[family-name:var(--font-inter)]">
                  A Forward View
                </h3>
              </div>
              <AnimatedSection className="md:col-span-8 lg:col-span-9">
                <p className="text-xl md:text-2xl leading-[1.6] text-foreground/80">
                  The foundation&rsquo;s work has established that retrofitting works, that
                  pianists adapt quickly, and that the research supports a registry of
                  sizes rather than a single historical default. What remains is adoption
                  at scale. Manufacturers making DS-certified keyboards on the assembly
                  line; electronic keyboard makers offering DS5.5, DS6.0, and DS6.5 as
                  catalogue options; conservatories equipping every piano in every
                  practice room. The pages that follow sketch what that world could look
                  like.
                </p>
              </AnimatedSection>
            </section>

            <hr className="border-t border-border" />

            {/* Imagined Catalogue gallery */}
            <section className="py-16 md:py-24">
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
                <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic text-primary">
                  An Imagined Catalogue
                </h3>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  Twelve Plates, Future Adoption
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {futurePlates.map((slide, index) => (
                  <AnimatedSection key={slide.src} delay={index * 60}>
                    <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
                      <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                      {/* Slides are 1920x1080; keep the container 16:9 so edge captions aren't cropped. */}
                      <div className="relative aspect-[16/9] overflow-hidden [filter:grayscale(85%)_sepia(18%)_contrast(1.05)]">
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
            </section>
          </section>

          {/* CTA */}
          <section className="mt-8 pt-24 pb-24 border-t border-border flex flex-col items-center relative">
            <div className="w-px h-16 bg-border absolute -top-8 left-1/2 -ml-px" />
            <AnimatedSection className="text-center max-w-2xl flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                Continue
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-6 text-foreground">
                From retrofit to default.
              </h3>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Hofmann&rsquo;s smaller keyboard was not an oddity; it was evidence. Read
                how that thread runs through the Foundation&rsquo;s story, and into the
                specifications we maintain today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
