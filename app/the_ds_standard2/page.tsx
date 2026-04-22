"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { StickySection } from "@/components/sticky-section"

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
    note: "The middle specification of the registry, and the one most often chosen by institutions. Nearly every adult hand finds relaxation here without losing the geometry of the traditional keyboard.",
  },
  {
    name: "DS5.5",
    badge: "7/8",
    badgeVariant: "solid" as const,
    octave: '5.538" (140.7 mm)',
    width: '41.10"',
    profile: "Small-span relief",
    note: "The seven-eighths keyboard, engineered for smaller adult hands. It offers the pianist of average span the freedom historically enjoyed only by very large hands.",
  },
]

const childSizes = [
  {
    name: "DS5.1",
    octave: '5.112" (129.8 mm)',
    width: '37.93"',
    note: "Late primary pedagogy, where repertoire complexity begins to outpace physical growth.",
  },
  {
    name: "DS4.7",
    octave: '4.719" (119.8 mm)',
    width: '35.02"',
    note: "The 3/4 keyboard. A widely adopted intermediate size for developing hands.",
    highlight: true,
  },
  {
    name: "DS4.3",
    octave: '4.356" (110.6 mm)',
    width: '32.32"',
    note: "Early polyphonic work, kept within easy reach so no chronic tension accrues.",
  },
  {
    name: "DS4.0",
    octave: '4.021" (102.1 mm)',
    width: '29.83"',
    note: "The 5/8 keyboard. A comfortable entry point for the youngest pianists.",
  },
]

export default function DSStandard2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      {/* Fixed masthead */}
      <div className="fixed top-0 right-0 z-40 px-6 md:px-10 lg:px-16 py-7 pointer-events-none">
        <div className="text-[0.65rem] uppercase tracking-[0.25em] text-primary font-[family-name:var(--font-inter)] text-right pointer-events-auto">
          <span>Est. 1993</span>
          <span className="hidden sm:inline mx-3 text-border">|</span>
          <span className="hidden sm:inline">501(c)(3)</span>
        </div>
      </div>

      <Navbar />

      {/* 1. Masthead hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-primary mb-8 font-[family-name:var(--font-inter)]">
              The DS Standard Registry
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              A Standard,
              <span className="italic font-light text-primary"> finally</span>,
              <br />
              for the Hand at the Piano.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              A considered registry of certified keyboard sizes, developed so that every
              pianist, at every age and every span, can meet the instrument on fair ground.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#ledger"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
              >
                View the Ledger
              </Link>
              <Link
                href="#narrative"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
              >
                Read the History
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero museum plate */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
              <div className="relative aspect-[3/1] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                <Image
                  src="/home_Poster-3-Keyboards-Wide4-1024x307.jpg"
                  alt="The three DS Standard keyboard specifications for adult hands, shown at scale"
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

      {/* Hairline divider */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      <div className="px-4 md:px-12 lg:px-24">
        <main className="w-full max-w-[1400px] mx-auto">
          {/* 2. Preamble */}
          <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary sticky top-28 font-[family-name:var(--font-inter)]">
                A Preamble
              </h2>
            </div>
            <AnimatedSection className="md:col-span-8 lg:col-span-8">
              <p className="text-2xl lg:text-[1.75rem] leading-[1.55] text-foreground [&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[5.5rem] [&::first-letter]:leading-[0.8] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                For more than three centuries the piano keyboard has been manufactured in
                essentially one size. A single width, fixed in the late nineteenth century,
                has asked every human hand to bend itself to the same geometry. The DS
                Standard is the first formal registry of alternatively sized keyboards:
                a small family of certified specifications, each engineered to meet a
                different hand where it actually lives.
              </p>
              <p className="text-xl lg:text-2xl leading-[1.6] text-foreground/75 mt-8 indent-10">
                The aim is not to replace the conventional keyboard, but to place it in
                honest company. Pain should not be a prerequisite for musicianship, and a
                student&rsquo;s span should not quietly decide which repertoire they are
                allowed to love.
              </p>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 4. Adult Ledger: specimen cards */}
          <section id="ledger" className="py-32 scroll-mt-24">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic text-primary">
                The Adult Ledger
              </h2>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Three certified specifications
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
              {adultSizes.map((size, index) => (
                <AnimatedSection key={size.name} delay={index * 100}>
                  <article className="bg-background hover:bg-card transition-colors p-8 lg:p-12 h-full">
                    <header className="flex justify-between items-center border-b border-border pb-4 mb-8">
                      <h3 className="font-[family-name:var(--font-display)] text-3xl text-foreground">
                        {size.name}
                        <sup className="text-sm">&reg;</sup>
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
                        <dt className="text-foreground/60">Profile</dt>
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

          {/* 5. Child sizes row */}
          <section className="pb-24">
            <div className="mb-8 flex flex-col md:flex-row justify-between md:items-end gap-2 border-b border-border pb-4">
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-foreground">
                Four Keyboards for Young Pianists
              </h3>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Pedagogical extensions
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {childSizes.map((size, index) => (
                <AnimatedSection key={size.name} delay={index * 75}>
                  <article className="bg-background p-6 lg:p-8 h-full">
                    <header className="flex justify-between items-baseline border-b border-border pb-3 mb-5">
                      <h4 className="font-[family-name:var(--font-display)] text-2xl text-foreground">
                        {size.name}
                        <sup className="text-xs">&reg;</sup>
                      </h4>
                      {size.highlight ? (
                        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary font-[family-name:var(--font-inter)]">
                          3/4
                        </span>
                      ) : null}
                    </header>
                    <dl className="text-xs font-[family-name:var(--font-inter)]">
                      <div className="py-2 flex justify-between border-b border-border">
                        <dt className="text-foreground/60">Octave</dt>
                        <dd className="font-medium text-foreground">{size.octave}</dd>
                      </div>
                      <div className="py-2 flex justify-between">
                        <dt className="text-foreground/60">Width</dt>
                        <dd className="font-medium text-foreground">{size.width}</dd>
                      </div>
                    </dl>
                    <p className="mt-4 text-sm text-foreground/70 italic leading-relaxed">
                      {size.note}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* thin centered rule */}
          <div className="w-full h-24 flex justify-center items-center">
            <div className="w-px h-full bg-border" />
          </div>

          {/* 6. Research narrative (sticky) */}
          <section id="narrative" className="py-24 scroll-mt-24">
            <StickySection
              stickyContent={
                <AnimatedSection>
                  <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                      <Image
                        src="/the_ds_standard_David-Linda.jpg"
                        alt="David and Linda Steinbuhler in the Titusville showroom"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 font-[family-name:var(--font-inter)] pl-2">
                    David and Linda Steinbuhler, hosts of the Titusville sessions
                  </figcaption>
                </AnimatedSection>
              }
            >
              <AnimatedSection>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  The Research, 1998 to 2005
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mt-4">
                  A Showroom that Turned into a Laboratory.
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-foreground/80 leading-relaxed mt-6">
                  From 1998 to 2005, Steinbuhler &amp; Company (which would become the DS
                  Standard Foundation in 2018) invited pianists to Titusville, Pennsylvania,
                  to find out, at their own pace, which keyboard size actually suited them.
                  The welcome was simple: coffee, several pianos, keyboards of different
                  widths on the bench, and an afternoon or a weekend to play them.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  What looked like hospitality at the time, we now understand was research.
                  As far as we can tell, nothing comparable has happened in the 320 year
                  history of the instrument. The hands we observed belonged to mature adult
                  pianists, both men and women, every one of them motivated simply by the
                  hope of finding a keyboard that felt right.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  The patterns in that room eventually became the registry you see on this
                  page. The dimensions are not guesses; they are what real pianists, working
                  without anyone looking over their shoulder, kept reaching for.
                </p>
              </AnimatedSection>
            </StickySection>
          </section>

          <hr className="border-t border-border" />

          {/* 7. Method (reversed) */}
          <section className="py-24">
            <StickySection
              reverse
              stickyContent={
                <AnimatedSection>
                  <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                      <Image
                        src="/the_ds_standard_Keyboards2.jpg"
                        alt="Keyboards of various sizes lined up for comparison"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 font-[family-name:var(--font-inter)] pl-2">
                    Keyboards built for the Steinway B, side by side
                  </figcaption>
                </AnimatedSection>
              }
            >
              <AnimatedSection>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  The Method
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mt-4">
                  How the Sizes Found Us.
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-foreground/80 leading-relaxed mt-6">
                  The average modern conventional keyboard measures just over 48 inches.
                  The first keyboards we built were 42 inches wide. By 1998 we had also made
                  keyboards at 39 inches and at 45 inches, so that we could watch pianists
                  slide between them.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We learned very quickly that one alternative was not enough. Many
                  pianists felt a genuine relief on the 42 inch keyboard and immediately
                  wanted to try something even smaller. Others welcomed the relief but
                  found 42 inches too small for their own hand. No single reduction solved
                  the problem.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  It became clear that the adult population needed at least two certified
                  sizes beyond the conventional keyboard. That realisation is what turned
                  a set of prototypes into a standard.
                </p>
              </AnimatedSection>
            </StickySection>
          </section>

          {/* 8. The 48/52 ratio on dark */}
          <section className="py-32 my-12 bg-foreground text-background border-y border-border">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <AnimatedSection>
                <span className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-background/60 font-[family-name:var(--font-inter)]">
                  The DS Standard Ratio
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="font-[family-name:var(--font-display)] text-7xl md:text-9xl text-primary mt-6 mb-6 leading-none">
                  48
                  <span className="text-background/50 mx-2">/</span>
                  52
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="font-[family-name:var(--font-display)] italic text-2xl md:text-3xl text-background/90 max-w-3xl mx-auto leading-snug">
                  Every step of the registry is governed by a single ratio (approximately
                  0.923). Multiply any certified octave by it and you land, cleanly, on
                  the next smaller size.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <p className="text-base text-background/65 mt-8 max-w-2xl mx-auto leading-relaxed">
                  It is an elegant piece of arithmetic, and a practical one: the same
                  hand-to-keyboard relationship repeats consistently from the conventional
                  keyboard all the way down to the smallest child size.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* 9. Numeral statistics row */}
          <section className="py-24">
            <div className="border-b border-border pb-6 mb-16 flex justify-between items-end">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                The Record
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/50 font-[family-name:var(--font-inter)]">
                At a glance
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              <AnimatedSection>
                <span className="font-[family-name:var(--font-display)] text-7xl lg:text-8xl text-primary relative inline-block">
                  320
                  <span className="text-2xl lg:text-3xl text-foreground/60 absolute top-4 -right-6 font-[family-name:var(--font-inter)] tracking-widest">
                    yrs
                  </span>
                </span>
                <hr className="border-t border-border mt-6 mb-4 w-1/2" />
                <h4 className="font-[family-name:var(--font-display)] italic text-2xl mb-2 text-foreground">
                  A Single Size
                </h4>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  Roughly three centuries in which the piano keyboard has been built to
                  essentially one dimension, no matter who was sitting in front of it.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <span className="font-[family-name:var(--font-display)] text-7xl lg:text-8xl text-primary relative inline-block">
                  7
                  <span className="text-5xl lg:text-6xl absolute top-2 -right-8 text-accent">+</span>
                </span>
                <hr className="border-t border-border mt-6 mb-4 w-1/2" />
                <h4 className="font-[family-name:var(--font-display)] italic text-2xl mb-2 text-foreground">
                  Certified Sizes
                </h4>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  Three specifications for adult hands and four for young pianists, each
                  dimensioned by research and each built to the same geometric law.
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
                  One ratio (approximately 0.923) connects every certified size in the
                  registry, from the conventional 6.5 inch keyboard down to the smallest
                  4.0 inch child size.
                </p>
              </AnimatedSection>
            </div>
          </section>

          <hr className="border-t border-border" />

          {/* 10. Our Story: A Big Idea */}
          <section id="story" className="py-24 scroll-mt-24">
            <StickySection
              stickyContent={
                <AnimatedSection>
                  <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                      <Image
                        src="/the_ds_standard_David-Linda-Chris.jpg"
                        alt="David, Linda, and Christopher Donison"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 font-[family-name:var(--font-inter)] pl-2">
                    David, Linda, and Christopher, on the occasion of measuring Linda&rsquo;s piano
                  </figcaption>
                </AnimatedSection>
              }
            >
              <AnimatedSection>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  Our Story
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mt-4">
                  A Big Idea, at a Bed and Breakfast.
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mt-6">
                  <p>
                    A chance meeting in the summer of 1991 changed my life. I was visiting the
                    Shaw Festival in Niagara-on-the-Lake and, as luck would have it, stayed at
                    the bed and breakfast run by Christopher Donison, the festival&rsquo;s
                    music director.
                  </p>
                  <p>
                    Christopher had a 7/8 keyboard fitted into his concert grand. An octave on
                    his keyboard was equal to a seventh on a conventional one. He explained,
                    almost matter of factly, that while he was studying music at the University
                    of Victoria he had realised that his small hand was quietly closing off
                    much of the great piano repertoire to him.
                  </p>
                  <p>
                    I play the piano a little. What startled me was how naturally I adapted to
                    his smaller keyboard, and how clearly Christopher described the new world
                    that had opened up to him the first time he sat down at one.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <p className="font-[family-name:var(--font-display)] italic text-2xl md:text-3xl text-primary mt-10 leading-snug">
                  &ldquo;This,&rdquo; I said, &ldquo;is a big idea.&rdquo;
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.25em] font-medium text-foreground/70 mt-4 font-[family-name:var(--font-inter)]">
                  David Steinbuhler, Founder
                </p>
              </AnimatedSection>
            </StickySection>
          </section>

          <hr className="border-t border-border" />

          {/* 11. It IS Easy */}
          <section id="easy" className="py-24 scroll-mt-24">
            <StickySection
              reverse
              stickyContent={
                <AnimatedSection>
                  <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                      <Image
                        src="/the_ds_standard_linda-web.jpg"
                        alt="Linda Gould at the piano"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 font-[family-name:var(--font-inter)] pl-2">
                    Linda Gould, at the first DS keyboard
                  </figcaption>
                </AnimatedSection>
              }
            >
              <AnimatedSection>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  The First Keyboard
                </span>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mt-4 italic">
                  &ldquo;It IS Easy.&rdquo;
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mt-6">
                  <p>
                    With no preconceived ideas about how keyboards ought to be built, I began
                    tinkering more or less as a hobby. One thing led to another, and in the
                    summer of 1994, on the loading dock of our textile plant, using a computer
                    driven router, a coworker and I finished our first keyboard.
                  </p>
                  <p>
                    Linda Gould, an acquaintance of Christopher&rsquo;s, flew from Victoria,
                    British Columbia, to try it. Years earlier she had set aside her dream of
                    becoming a concert artist because of the pain she felt every time she
                    played.
                  </p>
                  <p className="font-[family-name:var(--font-display)] italic text-2xl md:text-3xl text-primary leading-snug">
                    I will never forget her exclaiming &ldquo;It IS Easy!&rdquo; after spending
                    one emotional afternoon at the instrument.
                  </p>
                  <p>
                    Linda decided on the spot to order a keyboard for her Yamaha grand. Two
                    months later we sold our first DS Standard keyboard.
                  </p>
                </div>
              </AnimatedSection>
            </StickySection>
          </section>

          {/* 12. Pull quote: Pamela Mia Paul */}
          <section className="py-32 my-16 bg-card border-y border-border relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center">
              <span className="font-[family-name:var(--font-display)] text-lg text-accent leading-none">
                &#10086;
              </span>
            </div>

            <AnimatedSection className="max-w-4xl mx-auto px-8 text-center relative">
              <span
                aria-hidden
                className="font-[family-name:var(--font-display)] text-[10rem] leading-none text-border absolute -top-20 left-0 select-none pointer-events-none"
              >
                &ldquo;
              </span>
              <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-snug italic text-foreground mb-12 relative z-10">
                Our Music and Medicine department has conducted ground breaking research on
                the relationship of hand pain in small-handed pianists to the use of the
                standard size keyboard. And simultaneously, hard evidence that for smaller
                hands, the smaller piano keyboard dramatically REDUCES this pain.
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-primary mb-4" />
                <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
                  Dr. Pamela Mia Paul
                </cite>
                <span className="text-sm italic text-foreground/60 mt-1">
                  Regents Professor of Piano, University of North Texas College of Music
                </span>
              </div>
            </AnimatedSection>
          </section>

          {/* 13. Technician's Kit */}
          <section id="kit" className="py-24 scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <AnimatedSection className="lg:col-span-5 relative">
              <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <div className="relative aspect-[4/3] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                  <Image
                    src="/the_ds_standard_Technicians-Kit-Web.jpg"
                    alt="The Technician's Kit: jigs and measuring tools"
                    fill
                    className="object-cover"
                  />
                </div>
              </figure>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-primary/40" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-primary/40" />
              <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 font-[family-name:var(--font-inter)] pl-2">
                The Technician&rsquo;s Kit, jigs and gauges
              </figcaption>
            </AnimatedSection>

            <AnimatedSection delay={150} className="lg:col-span-7 flex flex-col justify-center h-full pt-8">
              <span className="mb-6 text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Implementation
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mb-8">
                The Technician&rsquo;s Kit.
              </h2>

              <div className="space-y-6 max-w-2xl text-lg text-foreground/80 leading-relaxed">
                <p>
                  David supplies a kit of jigs and measuring tools that make it possible
                  for a competent piano technician to take the precise measurements a DS
                  keyboard requires. He has built many DS keyboards for American
                  universities, and the first international order travelled to Australia,
                  for the musician Rhonda Boyle.
                </p>
                <p>
                  Building keyboards across borders quickly raised a practical question:
                  how does one measure a piano one cannot visit? Within the United States,
                  David can drive out and measure the instrument himself. For overseas
                  orders this is rarely feasible. The technician&rsquo;s kit exists to
                  close that distance, by equipping trusted technicians with everything
                  they need to send accurate measurements back to the workshop.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground bg-transparent hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
                >
                  View Products
                </Link>
              </div>
            </AnimatedSection>
          </section>

          {/* 14. Restrained CTA */}
          <section className="mt-24 pt-24 pb-24 border-t border-border flex flex-col items-center relative">
            <div className="w-px h-16 bg-border absolute -top-8 left-1/2 -ml-px" />
            <AnimatedSection className="text-center max-w-2xl flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                Engage with the Standard
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-6 text-foreground">
                Meet the Keyboard that Fits.
              </h3>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Review certified keyboards and components, or write to the Foundation about
                institutional acquisition, credentialing, or a pianist&rsquo;s individual
                search for the right size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
                >
                  View Products
                </Link>
                <Link
                  href="/contact_us"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
                >
                  Contact the Foundation
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
