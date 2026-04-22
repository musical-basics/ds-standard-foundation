"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

const adultSizes = [
  {
    name: "DS6.5",
    badge: "Conventional",
    badgeVariant: "outline" as const,
    octave: '6.500" (165.1 mm)',
    width: '48.25"',
    profile: "Historical default",
    note: "The standard codified in the late 19th century. Research demonstrates it strains the majority of adult female pianists and a substantial cohort of male practitioners.",
  },
  {
    name: "DS6.0",
    badge: "Universal",
    badgeVariant: "solid" as const,
    octave: '6.000" (152.4 mm)',
    width: '44.53"',
    profile: "Universal alternative",
    note: "The primary DS Standard specification. Restores natural relaxation for the broadest distribution of adult hand spans while permitting rapid adaptation.",
  },
  {
    name: "DS5.5",
    badge: "7/8",
    badgeVariant: "solid" as const,
    octave: '5.538" (140.7 mm)',
    width: '41.10"',
    profile: "Small-span relief",
    note: "Engineered for smaller adult hands. Delivers to a pianist of average span the geometry historically enjoyed only by large-handed virtuosi.",
  },
]

export default function Home2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      {/* Masthead / dateline: fixed strip that shares the top band with the navbar pill */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-6 flex justify-end items-center">
          <div className="text-[0.65rem] uppercase tracking-[0.25em] text-primary font-[family-name:var(--font-inter)] text-right">
            <span>Est. 1993</span>
            <span className="hidden sm:inline mx-3 text-border">|</span>
            <span className="hidden sm:inline">501(c)(3)</span>
          </div>
        </div>
      </header>

      <Navbar />

      {/* Top hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-primary mb-8 font-[family-name:var(--font-inter)]">
              DS Standard Foundation
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              Alternative Keyboards
              <br />
              <span className="italic font-light text-primary">That Fit Every Hand</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              Enabling pianists to achieve their full musical potential while avoiding injury,
              with keyboards engineered to match every hand size.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/the_ds_standard"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
              >
                Discover the Standard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
              >
                View Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Top hero image: museum plate */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
              <div className="relative aspect-[3/1] overflow-hidden">
                <Image
                  src="/home_Poster-3-Keyboards-Wide4-1024x307.jpg"
                  alt="The three DS Standard keyboard specifications for adult hands"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
            <figcaption className="mt-4 text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
              Pl. I. DS6.5, DS6.0, DS5.5 at scale
            </figcaption>
          </AnimatedSection>
        </div>
      </section>

      {/* Section divider between top hero and institutional body */}
      <div className="py-12 md:py-16 flex items-center justify-center">
        <div className="w-20 md:w-28 h-px bg-border" />
        <span className="mx-6 text-lg text-accent leading-none select-none">❦</span>
        <div className="w-20 md:w-28 h-px bg-border" />
      </div>

      <div className="px-4 md:px-12 lg:px-24">
        <main className="w-full max-w-[1400px] mx-auto">
          {/* 1. Hero: institutional cover */}
          <section className="min-h-[85vh] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <AnimatedSection className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-12">
              <span className="mb-8 block text-[0.65rem] uppercase tracking-[0.25em] font-medium text-accent font-[family-name:var(--font-inter)]">
                Standardization &amp; Equity
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8 text-foreground">
                The Architecture
                <br />
                <span className="italic font-light">of the</span> Hand
                <br />
                &amp; Instrument.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-xl leading-relaxed">
                Researching, validating, and certifying alternatively sized piano keyboards
                so that virtuosic intent is never limited by physiological span.
              </p>
              <div className="mt-12 flex flex-wrap gap-4 items-center">
                <Link
                  href="/the_ds_standard"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground bg-transparent hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
                >
                  Read the Standard
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground/70 hover:text-foreground transition-colors font-[family-name:var(--font-inter)]"
                >
                  About the Foundation →
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} className="lg:col-span-5 w-full relative mt-12 lg:mt-0">
              <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] rotate-[0.8deg]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <div className="relative overflow-hidden aspect-[4/5] [filter:grayscale(85%)_sepia(18%)_contrast(1.05)]">
                  <Image
                    src="/the_ds_standard_DS6.0-Straightened-1-1024x788.jpg"
                    alt="DS6.0 keyboard plate"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </figure>
              <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                <span>Fig. 1. DS6.0 Universal Specification</span>
                <span className="text-right">Pl. 042</span>
              </figcaption>
            </AnimatedSection>
          </section>

          {/* thin centered rule */}
          <div className="w-full h-24 flex justify-center items-center">
            <div className="w-px h-full bg-border" />
          </div>

          {/* 2. Preamble */}
          <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary sticky top-28 font-[family-name:var(--font-inter)]">
                The Preamble
              </h2>
            </div>
            <AnimatedSection className="md:col-span-8 lg:col-span-8">
              <p className="text-2xl lg:text-[1.75rem] leading-[1.55] text-foreground [&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[5.5rem] [&::first-letter]:leading-[0.8] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                For more than three centuries the piano keyboard has remained largely
                immutable. A single span, codified in the late nineteenth century, has
                demanded uniform physical adaptation from the irreducibly heterogeneous
                human hand. The DS Standard Foundation exists to rectify this anatomical
                incongruity through biomechanical research and the credentialing of
                distinct alternative specifications.
              </p>
              <p className="text-xl lg:text-2xl leading-[1.6] text-foreground/75 mt-8 indent-10">
                Our mandate is simple yet considered: to remove pain from pedagogy, and
                to make the entire repertoire accessible, so that musical expression
                is governed by imagination, not by the span of a metacarpal.
              </p>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 3. Certified sizes: specimen cards */}
          <section className="py-32">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic text-primary">
                The Certified Ledger
              </h2>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Dimensions for Adult Hands
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
              {adultSizes.map((size, index) => (
                <AnimatedSection key={size.name} delay={index * 100}>
                  <article className="bg-background hover:bg-card transition-colors p-8 lg:p-12 h-full">
                    <header className="flex justify-between items-center border-b border-border pb-4 mb-8">
                      <h3 className="font-[family-name:var(--font-display)] text-3xl text-foreground">
                        {size.name}
                        <sup className="text-sm">®</sup>
                      </h3>
                      <span
                        className={
                          size.badgeVariant === "solid"
                            ? "text-[0.65rem] uppercase tracking-[0.2em] px-2 py-1 bg-primary text-primary-foreground font-[family-name:var(--font-inter)]"
                            : "text-[0.65rem] uppercase tracking-[0.2em] px-2 py-1 border border-accent/50 text-accent font-[family-name:var(--font-inter)]"
                        }
                      >
                        {size.badge}
                      </span>
                    </header>
                    <dl className="text-sm font-[family-name:var(--font-inter)]">
                      <div className="py-3 flex justify-between border-b border-border">
                        <dt className="text-foreground/60">Octave Span</dt>
                        <dd className="font-medium text-foreground">{size.octave}</dd>
                      </div>
                      <div className="py-3 flex justify-between border-b border-border">
                        <dt className="text-foreground/60">Overall Width</dt>
                        <dd className="font-medium text-foreground">{size.width}</dd>
                      </div>
                      <div className="py-3 flex justify-between">
                        <dt className="text-foreground/60">Pedagogy Profile</dt>
                        <dd className="font-medium text-right text-foreground">{size.profile}</dd>
                      </div>
                    </dl>
                    <p className="mt-6 text-base text-foreground/75 italic leading-relaxed">
                      {size.note}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* 4. Research numerals */}
          <section className="py-24">
            <div className="border-b border-border pb-6 mb-16 flex justify-between items-end">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Biomechanical Data &amp; Analysis
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/50 font-[family-name:var(--font-inter)]">
                MTNA National Convention, 2004 &amp; subsequent studies
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              <AnimatedSection>
                <span className="font-[family-name:var(--font-display)] text-7xl lg:text-8xl text-primary relative inline-block">
                  87
                  <span className="text-4xl lg:text-5xl absolute top-2 -right-8">%</span>
                </span>
                <hr className="border-t border-border mt-6 mb-4 w-1/2" />
                <h4 className="font-[family-name:var(--font-display)] italic text-2xl mb-2 text-foreground">
                  Asymmetric Risk
                </h4>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  Of adult female pianists possess a hand span too small to execute
                  the traditional repertoire on a conventional keyboard without
                  cumulative strain.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <span className="font-[family-name:var(--font-display)] text-7xl lg:text-8xl text-primary relative inline-block">
                  30
                  <span className="text-4xl lg:text-5xl absolute top-2 -right-8">+</span>
                </span>
                <hr className="border-t border-border mt-6 mb-4 w-1/2" />
                <h4 className="font-[family-name:var(--font-display)] italic text-2xl mb-2 text-foreground">
                  Years of Inquiry
                </h4>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  Decades of biometric study, university partnerships, and mechanical
                  engineering dedicated to establishing global dimensional benchmarks
                  for the keyboard.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <span className="font-[family-name:var(--font-display)] text-7xl lg:text-8xl text-primary relative inline-block">
                  48
                  <span className="text-3xl lg:text-4xl text-accent">/</span>
                  52
                </span>
                <hr className="border-t border-border mt-6 mb-4 w-1/2" />
                <h4 className="font-[family-name:var(--font-display)] italic text-2xl mb-2 text-foreground">
                  The DS Ratio
                </h4>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  A single geometric ratio (≈ 0.923) governs every certified
                  specification, ensuring consistent scaling from conventional through
                  child-sized keyboards.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* 5. Pull quote */}
          <section className="py-32 my-16 bg-card border-y border-border relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center">
              <span className="font-[family-name:var(--font-display)] text-lg text-accent leading-none">❦</span>
            </div>

            <AnimatedSection className="max-w-4xl mx-auto px-8 text-center relative">
              <span
                aria-hidden
                className="font-[family-name:var(--font-display)] text-[10rem] leading-none text-border absolute -top-20 left-0 select-none pointer-events-none"
              >
                “
              </span>
              <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-snug italic text-foreground mb-12 relative z-10">
                I have actually experienced getting larger hands. All the touches and
                techniques in piano studies were made easier by a factor of a hundred.
                I could finally use the correct fingerings.
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-primary mb-4" />
                <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
                  Christopher Donison
                </cite>
                <span className="text-sm italic text-foreground/60 mt-1">
                  Music Director of the Shaw Festival; inventor of the 7/8 keyboard
                </span>
              </div>
            </AnimatedSection>
          </section>

          {/* 6. Stewardship */}
          <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <AnimatedSection className="lg:col-span-5 relative">
              <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <div className="relative overflow-hidden aspect-[3/4] [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                  <Image
                    src="/the_ds_standard_David-Linda.jpg"
                    alt="David and Linda Steinbuhler"
                    fill
                    className="object-cover"
                  />
                </div>
              </figure>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-primary/40" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-primary/40" />
              <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 font-[family-name:var(--font-inter)] pl-2">
                David &amp; Linda Steinbuhler, founders
              </figcaption>
            </AnimatedSection>

            <AnimatedSection delay={150} className="lg:col-span-7 flex flex-col justify-center h-full pt-8">
              <span className="mb-6 text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Stewardship
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mb-8">
                Preserving the Artist,
                <br />
                <span className="italic text-primary">Protecting the Pedagogy.</span>
              </h2>

              <div className="space-y-6 max-w-2xl">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  The Foundation was established as the non-profit successor to
                  Steinbuhler &amp; Company, carrying forward three decades of research
                  into alternatively sized actions and the universities, conservatories,
                  and pianists who now rely upon them.
                </p>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  We credential manufacturers, support institutional acquisition, and
                  maintain the biomechanical archive, so that the keyboard a pianist
                  encounters tomorrow will be the one most fit for their hand.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border pt-8 max-w-2xl">
                <div>
                  <h5 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-3 font-[family-name:var(--font-inter)]">
                    Activities
                  </h5>
                  <ul className="italic text-foreground/75 space-y-2 text-lg">
                    <li>
                      <span className="text-accent pr-2">♦</span>Manufacturer Credentialing
                    </li>
                    <li>
                      <span className="text-accent pr-2">♦</span>University Acquisition
                    </li>
                    <li>
                      <span className="text-accent pr-2">♦</span>Biomechanical Research
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-3 font-[family-name:var(--font-inter)]">
                    Governance
                  </h5>
                  <ul className="italic text-foreground/75 space-y-2 text-lg">
                    <li>
                      <span className="text-accent pr-2">♦</span>Board of Directors
                    </li>
                    <li>
                      <span className="text-accent pr-2">♦</span>Medical Advisory Counsel
                    </li>
                    <li>
                      <span className="text-accent pr-2">♦</span>501(c)(3) Transparency
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* 7. Restrained CTA */}
          <section className="mt-24 pt-24 pb-24 border-t border-border flex flex-col items-center relative">
            <div className="w-px h-16 bg-border absolute -top-8 left-1/2 -ml-px" />
            <AnimatedSection className="text-center max-w-2xl flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                Inquire
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-6 text-foreground">
                Correspondence with the Foundation
              </h3>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Institutions, builders, pianists, and philanthropists seeking to support
                the archive, verify a builder&rsquo;s credentials, or apply for collegiate
                implementation may write to the board of directors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact_us"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
                >
                  Contact the Foundation
                </Link>
                <Link
                  href="/donations"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
                >
                  Support the Mission
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
