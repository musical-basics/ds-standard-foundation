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
    note: "The width inherited from the late nineteenth century. It rewards a long reach and quietly disadvantages the majority of adult female pianists along with a sizeable cohort of male hands.",
  },
  {
    name: "DS6.0",
    badge: "Universal",
    badgeVariant: "solid" as const,
    octave: '6.000" (152.4 mm)',
    width: '44.53"',
    profile: "Universal alternative",
    note: "The middle specification of the registry, and the one most often chosen by institutions. Nearly every adult hand finds relaxation here without losing the feel of the traditional keyboard.",
  },
  {
    name: "DS5.5",
    badge: "7/8",
    badgeVariant: "solid" as const,
    octave: '5.538" (140.7 mm)',
    width: '41.10"',
    profile: "Small-span relief",
    note: "The seven-eighths keyboard, built for smaller adult hands. It offers the pianist of average span the ease historically enjoyed only by very large hands.",
  },
]

export default function Home2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      {/* Masthead / dateline: floats in the same top band as the navbar pill, no background so nothing intersects the pill */}
      <div className="fixed top-0 right-0 z-40 px-6 md:px-10 lg:px-16 py-7 pointer-events-none">
        <div className="text-[0.65rem] uppercase tracking-[0.25em] text-primary font-[family-name:var(--font-inter)] text-right pointer-events-auto">
          <span>Est. 1993</span>
          <span className="hidden sm:inline mx-3 text-border">|</span>
          <span className="hidden sm:inline">501(c)(3)</span>
        </div>
      </div>

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

      {/* Section divider: reuses the centered vertical hairline used elsewhere on the page */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
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
                We research, certify, and help build alternatively sized piano
                keyboards, so that a pianist&rsquo;s reach is never the reason
                a piece stays out of reach.
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
                For more than three centuries the piano keyboard has been built in
                essentially one size. A single width, settled on in the late
                nineteenth century, has asked every kind of hand to adapt to the
                same geometry. The DS Standard Foundation exists because that is
                not a reasonable thing to ask.
              </p>
              <p className="text-xl lg:text-2xl leading-[1.6] text-foreground/75 mt-8 indent-10">
                Our work is simple in spirit: take pain out of learning the
                instrument, and put the whole repertoire back within reach, so that
                what a pianist can play is decided by what they can imagine, not
                by the size of their hand.
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
                What the Research Shows
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/50 font-[family-name:var(--font-inter)]">
                MTNA 2004, and the work that followed
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
                  Of adult female pianists have a hand span too small for the
                  traditional repertoire on a conventional keyboard. They can
                  play it, but the body usually pays.
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
                  Years of measuring hands, building prototypes, and working with
                  universities to figure out which keyboard sizes actually belong
                  in the registry.
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
                  One ratio (≈ 0.923) holds every size in the registry together,
                  from the conventional keyboard down through the smallest
                  keyboards for children.
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
                <span className="mt-6 text-[0.7rem] italic tracking-[0.08em] text-foreground/55 font-[family-name:var(--font-inter)] max-w-xl leading-relaxed">
                  &lsquo;Small Hands? Try This Keyboard, You&rsquo;ll Like It&rsquo;, Piano &amp; Keyboard Magazine, July/August 1998, pp. 41 to 43.
                </span>
                <Link
                  href="/the-benefits-of-narrower-keys"
                  className="mt-5 inline-flex items-center text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary hover:text-foreground transition-colors font-[family-name:var(--font-inter)] border-b border-primary/40 hover:border-foreground pb-0.5"
                >
                  Read the full testimonial
                </Link>
              </div>
            </AnimatedSection>
          </section>

          {/* 5b. Linda Gould pull quote */}
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
                The 7/8 keyboard has turned an endurance session into pure pleasure.
                I can&rsquo;t begin to describe how much fun it is to be able to
                access the notes so easily without fatigue.
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-primary mb-4" />
                <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
                  Linda Gould
                </cite>
                <span className="text-sm italic text-foreground/60 mt-1">
                  First DS Keyboard owner; concert pianist.
                </span>
                <Link
                  href="/its-easy-to-adapt"
                  className="mt-6 inline-flex items-center text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary hover:text-foreground transition-colors font-[family-name:var(--font-inter)] border-b border-primary/40 hover:border-foreground pb-0.5"
                >
                  Read the full testimonial
                </Link>
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
                  The Foundation grew out of Steinbuhler &amp; Company and now
                  carries on its work as a non-profit. Thirty years of research,
                  a few hundred retrofitted pianos, and a growing list of
                  universities and conservatories came with it.
                </p>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  We vet the makers, help schools get keyboards into practice
                  rooms, and keep the research going, so that the keyboard a
                  pianist sits down to tomorrow is actually sized for them.
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

              <div className="mt-10 pt-6 border-t border-border max-w-2xl">
                <h5 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-3 font-[family-name:var(--font-inter)]">
                  From the Archive
                </h5>
                <a
                  href="/GoldilocksFeature.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-2 text-[0.75rem] uppercase tracking-[0.2em] font-medium text-foreground hover:text-primary transition-colors font-[family-name:var(--font-inter)] border-b border-border hover:border-primary pb-1"
                >
                  <span className="text-accent">§</span>
                  Goldilocks Had a Choice: Carol Leone in American Music Teacher (PDF)
                </a>
              </div>
            </AnimatedSection>
          </section>

          {/* 6b. Warwick Dalton: archival dispatch */}
          <section className="py-24 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <span className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-primary font-[family-name:var(--font-inter)]">
                    From the Piano Technicians&rsquo; Guild, Melbourne
                  </span>
                  <div className="mt-4 flex justify-center">
                    <div className="w-16 h-px bg-border" />
                  </div>
                  <h2 className="mt-8 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground text-balance">
                    First 7/8 DS Keyboard Installation
                    <br />
                    <span className="italic text-primary">in the Southern Hemisphere</span>
                  </h2>
                  <p className="mt-6 font-[family-name:var(--font-display)] italic text-lg text-foreground/65">
                    by Warwick Dalton
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] max-w-2xl mx-auto mb-16">
                  <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                  <div className="relative overflow-hidden aspect-[4/3] [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                    <Image
                      src="/the_ds_standard_David-Linda-Chris.jpg"
                      alt="David Steinbuhler, Linda Steinbuhler, and Christopher Donison"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 text-center font-[family-name:var(--font-inter)]">
                    Pl. II. David Steinbuhler with colleagues
                  </figcaption>
                </figure>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="font-[family-name:var(--font-body)] text-lg md:text-xl leading-[1.7] text-foreground/85 space-y-6">
                  <p className="[&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[4.5rem] [&::first-letter]:leading-[0.85] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                    Last year, at short notice, a workshop was quickly arranged to
                    showcase David Steinbuhler&rsquo;s 7/8 concept keyboard. What is
                    a 7/8th keyboard, and who is David Steinbuhler?
                  </p>
                  <p>
                    A 7/8th is a keyboard for a grand piano, 7/8ths the size of a
                    regular keyboard. It consists of a keyframe, keys, and action.
                    It replaces the existing action with both actions being
                    interchangeable.
                  </p>
                  <p>
                    David is an engineer whose family owns a textile mill in
                    Titusville, USA. Whilst staying at a B&amp;B in
                    Niagara-on-the-Lake in 1991, he noticed a 7/8 keyboard in a
                    concert grand. The owner had it built in 1970 after realizing
                    his small hand size was preventing him from mastering much of
                    the great piano repertoire.
                  </p>

                  <blockquote className="my-10 pl-6 border-l-2 border-primary/50 italic font-[family-name:var(--font-display)] text-xl md:text-2xl leading-[1.55] text-foreground/90">
                    &ldquo;I believed this was an opportunity placed before me. I
                    had computer programming experience and the idea of building
                    keyboards out of a computer data base intrigued me. Never mind
                    I knew nothing about the piano industry. With the freedom of
                    no preconceived ideas about how to build them, I first started
                    tinkering more or less as a hobby. One thing led to another
                    and by the summer of 1994, on the loading dock of our textile
                    plant, using a computer driven router, I built the first
                    keyboard.&rdquo;
                    <footer className="mt-4 not-italic font-[family-name:var(--font-inter)] text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60">
                      David Steinbuhler
                    </footer>
                  </blockquote>

                  <p>
                    Building this keyboard threw up the issue of measuring the
                    piano. In America David can travel to and measure, but for
                    overseas orders it becomes impractical. Hence his trip to
                    Australia was not only to measure but to find technicians
                    competent in providing the necessary measurements.
                  </p>
                  <p>
                    David supplies a kit of jigs and measuring tools to enable
                    accurate measurements. He has built many 7/8th keyboards for
                    universities in America, and now the first has arrived in
                    Australia, for local musician Rhonda Boyle for fitting to her
                    Bernstein SG-185R.
                  </p>
                  <p>
                    I arrived at Rhonda&rsquo;s residence on a Saturday morning to
                    do the installation with, I must say, some misgivings. A
                    non-piano person building a complete piano action, half the
                    world away from the instrument, looked like a recipe for a
                    major disaster. The action was unboxed, the existing action
                    removed, and the new 7/8ths slid into the piano. It worked.
                    Unused to the reduced keyboard size, my octaves when playing
                    became 9ths and there was cacophony. However, after Rhonda
                    had practiced for 15 minutes, she had the hang of it, and the
                    smile on her face said it all.
                  </p>
                  <p>
                    The piano is not altered in any way. The action, which quickly
                    interchanges with the original, uses Renner action parts and
                    Arbel hammers. It required only four hours of regulation and
                    voicing to bring it to perfection.
                  </p>
                </div>

                <div className="mt-16 flex flex-col items-center">
                  <div className="w-16 h-px bg-border" />
                  <p className="mt-6 text-sm italic font-[family-name:var(--font-display)] text-foreground/70 text-center">
                    Warwick Dalton, piano technician, Melbourne, Australia
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* 6c. SMU Student Testimonials */}
          <section className="py-24 border-t border-border">
            <div className="mb-16 text-center">
              <AnimatedSection>
                <span className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  SMU Student Testimonials
                </span>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground text-balance">
                  Ten students at
                  <br />
                  <span className="italic text-primary">Southern Methodist University</span>
                </h2>
                <div className="mt-8 flex justify-center">
                  <div className="w-16 h-px bg-border" />
                </div>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sarah Michelini */}
              <AnimatedSection>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      Sarah Michelini
                    </h3>
                    <div className="space-y-6 text-foreground/80">
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">
                          Easier to play Chopin Prelude in C on the conventional
                          keyboard after practicing on 7/8
                        </h4>
                        <p className="italic font-[family-name:var(--font-display)] text-lg leading-relaxed pl-4 border-l border-border">
                          &ldquo;It was actually much easier to play! It was as if
                          practicing on the small keyboard allowed me to work out
                          the kinks, to figure out where my hand should fit, then
                          I could transfer that feeling and position to the larger
                          keyboard and miraculously could play it.&rdquo;
                        </p>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">
                          Barber Excursions
                        </h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;I amazed myself by the ease with which I was able to play many of the previously &lsquo;impossible&rsquo; sections.&rdquo;</p>
                          <p>&ldquo;My LH almost feels like it is too easily executed.&rdquo;</p>
                          <p>&ldquo;It&rsquo;s amazing when your hand can reach the notes w/o struggling how you really can practice it, things like rhythm, preciseness.&rdquo;</p>
                          <p>&ldquo;I almost feel like I&rsquo;m cheating.&rdquo;</p>
                          <p>&ldquo;Some of the tighter chords are causing me to feel &lsquo;bunched up.&rsquo;&rdquo;</p>
                          <p>&ldquo;My hands feel good after practicing, not stretched.&rdquo;</p>
                          <p>&ldquo;Sight reading the Debussy Preludes was an immense joy. I believe this keyboard may bring me to an enlightenment concerning impressionistic music.&rdquo;</p>
                          <p>&ldquo;The full-size keyboard has become &lsquo;other.&rsquo; Mysterious pain in my right forearm. I can&rsquo;t play legato! I keep expecting to play large intervals w/o any effort.&rdquo;</p>
                          <p>&ldquo;Amazing how fast one can adjust back. I&rsquo;ve only been practicing for 30 minutes and already I don&rsquo;t feel a disadvantage for practicing all the time on the 7/8.&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">
                          7/8 Keyboard
                        </h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;A whole new technique for this keyboard. I can get deep into the keys.&rdquo;</p>
                          <p>&ldquo;There&rsquo;s so much I can actually do that I had to fake before.&rdquo;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Priscilla Parrish */}
              <AnimatedSection delay={75}>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      Priscilla Parrish
                    </h3>
                    <div className="space-y-6 text-foreground/80">
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">
                          Jeux d&rsquo;eau
                        </h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;I&rsquo;ve struggled learning the notes to this piece for a long time. When I started practicing on the 7/8 keyboard I finished learning it in one week! The patterns fell naturally under my hand, no more stretching and leaping or looking up and down from the music to the keyboard.&rdquo;</p>
                          <p>&ldquo;The higher range felt closer to my body so that I didn&rsquo;t have to learn as far.&rdquo;</p>
                          <p>&ldquo;I experienced less fatique and strain on my hands and arms.&rdquo;</p>
                          <p>&ldquo;I was able to incorporate expression into my playing, where as I had not been able to before.&rdquo;</p>
                          <p>&ldquo;I&rsquo;m noticing that dom7th arpeggios are much easier on this keyboard!&rdquo;</p>
                          <p>&ldquo;My overall feeling is comfort. My hands feel more secure and strong.&rdquo;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Artina Hunter */}
              <AnimatedSection delay={150}>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      Artina Hunter
                    </h3>
                    <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/80">
                      <p>&ldquo;It&rsquo;s easier to have power because I don&rsquo;t have to struggle while stretching my hand.&rdquo;</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Carmela Casipit */}
              <AnimatedSection delay={225}>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      Carmela Casipit
                    </h3>
                    <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/80">
                      <p>&ldquo;My hands immediately adjusted to the keyboard in about 30 minutes.&rdquo;</p>
                      <p>&ldquo;Legato octaves, on 7/8 my hand feels directly over each octave.&rdquo;</p>
                      <p>&ldquo;It didn&rsquo;t sound correct rolled. On 7/8 keyboard, I finally understood the harmony.&rdquo;</p>
                      <p>&ldquo;Sight read La Campanella, if SR on Conventional, my RH would have been extremely tired. On 7/8 I was able to SR better in terms of accuracy.&rdquo;</p>
                      <p>&ldquo;If I want a strong octave with a ringing bass, I could place fingers 3-4-5 on the lower note of the octave and still felt comfortable.&rdquo;</p>
                      <p>&ldquo;I could do many repetitions w/o tiring.&rdquo;</p>
                      <p>&ldquo;I could feel closer and more connected to the keys.&rdquo;</p>
                      <p>&ldquo;Eliminated excess movement.&rdquo;</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Nicole Halton */}
              <AnimatedSection>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <figure className="mb-6 max-w-[240px] mx-auto">
                      <div className="relative bg-background p-2 border border-border">
                        <div className="absolute inset-1 border border-border/40 pointer-events-none z-10" />
                        <div className="relative overflow-hidden aspect-[252/300] [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                          <Image
                            src="/about_Nicoles-Recital-252x300.jpg"
                            alt="Nicole Halton at her recital"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <figcaption className="mt-3 text-[0.6rem] uppercase tracking-[0.2em] text-foreground/60 text-center font-[family-name:var(--font-inter)]">
                        Pl. Nicole Halton, recital
                      </figcaption>
                    </figure>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-2 text-center">
                      Nicole Halton
                    </h3>
                    <p className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60 mb-6 pb-4 border-b border-border text-center font-[family-name:var(--font-inter)]">
                      Recital Testimony
                    </p>
                    <div className="space-y-4 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/80">
                      <p>&ldquo;The greatest difference that I noticed while performing on the reduced size keyboard was the level of comfort I felt at the piano. On the regular piano, I sometimes feel uncomfortable and consequently not in control of the performance. On the reduced size keyboard I was able to carefully place each chord and note so that I was more easily able to shape my performance. I felt that for the first time I was in command of the instrument instead of feeling limited by the physical difficulty of playing the piano.&rdquo;</p>
                      <p>&ldquo;In preparation for my recital, I discovered that I could memorize music more quickly on the reduced size keyboard because the patterns were easier to feel and I could create better pathways for my hands and fingers.&rdquo;</p>
                      <p>&ldquo;Also, my practice time was not limited by physical issues. On the regular piano there are some passages and some pieces that I could not practice as much as I would have liked because of the amount of physical discomfort they caused. This virtually disappeared on the reduced size keyboard.&rdquo;</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Lindsay Nieves */}
              <AnimatedSection delay={75}>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      Lindsay Nieves
                    </h3>
                    <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/80">
                      <p>&ldquo;I could not practice Butterfly etude for long periods of time on the Conventional because my hands would become extremely stiff and would hurt.&rdquo;</p>
                      <p>&ldquo;7/8 much more comfortable.&rdquo;</p>
                      <p>&ldquo;I am able to play the right notes!!&rdquo;</p>
                      <p>&ldquo;I am less tense throughout the arms and shoulders.&rdquo;</p>
                      <p>&ldquo;Wow, I can actually do it!&rdquo;</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Sun Mi Goodwin */}
              <AnimatedSection delay={150}>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      Sun Mi Goodwin
                    </h3>
                    <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/80">
                      <p>&ldquo;I feel comfortable playing on the 7/8.&rdquo;</p>
                      <p>&ldquo;It&rsquo;s easier to play legato.&rdquo;</p>
                      <p>&ldquo;I don&rsquo;t have to stretch my fingers as much.&rdquo;</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Quynh Nguyen */}
              <AnimatedSection delay={225}>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      Quynh Nguyen
                    </h3>
                    <div className="space-y-6 text-foreground/80">
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">
                          Chopin Revolutionary Etude
                        </h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;On the conventional keyboard, the [RH chords] hurt my hand and I can&rsquo;t play them quickly. On the 7/8 keyboard, my hand is allowed to be in a comfortable position, making it possible for an accurate and SAFE landing. I am not as afraid to go for the chords.&rdquo;</p>
                          <p>&ldquo;The LH is smoother and more in control.&rdquo;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Yvonne Michalski */}
              <AnimatedSection>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      Yvonne Michalski
                    </h3>
                    <div className="space-y-6 text-foreground/80">
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Initial reactions</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;Unusual feel at first.&rdquo;</p>
                          <p>&ldquo;Tests the eyes and senses.&rdquo;</p>
                          <p>&ldquo;Visually difficult to get used to.&rdquo;</p>
                          <p>&ldquo;Hand position is extremely natural.&rdquo;</p>
                          <p>&ldquo;WOW an amazing feeling!&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Chopin G Minor Ballade</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;In the mirror, my hand looks so natural, high, strong bridge.&rdquo;</p>
                          <p>&ldquo;More opportunity for legato.&rdquo;</p>
                          <p>&ldquo;Stamina, not so easily tired in coda.&rdquo;</p>
                          <p>&ldquo;Can focus on musicianship; musical line rather than struggling in a non-legato manner.&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Chopin Etude Op.25, No.9</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;I can play fingerings which I could not do on conventional.&rdquo;</p>
                          <p>&ldquo;Conventional looks gigantic, shock to the eyes.&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Touch</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;More opportunity to think about different gradations of touch and sound quality.&rdquo;</p>
                          <p>&ldquo;Sound is not as choppy.&rdquo;</p>
                          <p>&ldquo;Ability to use less pedal. On conventional, we overuse pedal to cover technical deficiencies.&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Power</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;Much more power.&rdquo;</p>
                          <p>&ldquo;Bridge is extremely strong.&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Stamina</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;Less tired in technical passages, can concentrate on music line more.&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Relaxation</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;WOW it&rsquo;s a great feeling!&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Balance in chord</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;Goal of one overall linear motion is clear.&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Sight reading</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;Took only 20 minutes to adjust.&rdquo;</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-display)] italic text-primary text-base mb-3">Leaps</h4>
                        <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed">
                          <p>&ldquo;Most are avoided.&rdquo;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              {/* Jennifer Stark */}
              <AnimatedSection delay={75}>
                <article className="bg-card p-8 lg:p-10 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] relative h-full">
                  <div className="absolute inset-3 border border-border/40 pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-6 pb-4 border-b border-border">
                      Jennifer Stark
                    </h3>
                    <div className="space-y-3 pl-4 border-l border-border italic font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/80">
                      <p>&ldquo;I only taught first year students on the 7/8 piano. I noticed some interesting phenomena in the young students. Most did not notice the difference in size and I never addressed it, but I could see that their small hands fit the keys better and there was a lack of visible tension as they learned to keep a proper hand position.&rdquo;</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            </div>
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
                If you teach at a school thinking about a DS keyboard, build pianos
                and want to be credentialed, play and have questions, or would like
                to help fund the work, the board would like to hear from you.
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
