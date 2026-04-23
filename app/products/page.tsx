"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

const grandOfferings = [
  {
    name: "Complete New Action",
    price: "US$16,800",
    badge: "Concert Grade",
    badgeVariant: "solid" as const,
    lede:
      "A complete new action with its own stack, built around new hammers and wippens. Interchangeable with the original keyboard in about five minutes.",
    installationNote:
      "Initial installation typically takes an afternoon or a day; technicians spend considerably more hours over time to regulate and voice the action to concert level.",
    specs: [
      { label: "Includes", value: "New hammers and wippens on a new action stack" },
      { label: "Swap Time", value: "Approximately five minutes" },
      { label: "Build Time", value: "Ships back a few days after measuring" },
      { label: "Best For", value: "Concert stage and touring instruments" },
    ],
  },
  {
    name: "DS Standard Keyboard",
    price: "US$10,800",
    badge: "Studio Favorite",
    badgeVariant: "outline" as const,
    lede:
      "A new DS Standard frame mounted with the piano's original hammers and wippens. Preserves the instrument's voice and can be reversed at any time by a competent technician. Because the build is made to measure, we will have your action for approximately three months.",
    specs: [
      { label: "Includes", value: "New frame with original hammers and wippens" },
      { label: "Voice", value: "Preserves the piano's original sound" },
      { label: "Build Time", value: "Approximately three months after measuring" },
      { label: "Best For", value: "Studios, teaching pianos, private residences" },
    ],
  },
]

const adultSizes = [
  {
    name: "DS6.5",
    badge: "Conventional",
    badgeVariant: "outline" as const,
    octave: '6.500" (165.1 mm)',
    width: '48.25"',
    note: "The historical default. Documented as punishing for the majority of adult female pianists and a substantial share of adult male pianists.",
  },
  {
    name: "DS6.0",
    badge: "Universal",
    badgeVariant: "solid" as const,
    octave: '6.000" (152.4 mm)',
    width: '44.53"',
    note: "The primary DS Standard specification. Restores natural relaxation across the broadest distribution of adult hands while allowing rapid adaptation from the conventional keyboard.",
  },
  {
    name: "DS5.5",
    badge: "7/8",
    badgeVariant: "solid" as const,
    octave: '5.538" (140.7 mm)',
    width: '41.10"',
    note: "Engineered for smaller adult hands. Gives a pianist of average span the geometry historically available only to large-handed virtuosi.",
  },
]

const childSizes = [
  {
    name: "DS5.1",
    octave: '5.100" (129.5 mm)',
    width: '37.88"',
    note: "A transitional specification for advancing adolescent students with smaller hand spans.",
  },
  {
    name: "DS4.7",
    octave: '4.700" (119.4 mm)',
    width: '34.91"',
    note: "Scaled for younger students, preserving the tactile ratios of the adult DS specifications.",
  },
]

export default function Products2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      {/* Fixed masthead, matches homepage */}
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
              Products / The Catalog
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              The DS Standard
              <br />
              <span className="italic font-light text-primary">in Specimen and Specification</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              A working catalog of the keyboards and actions we build. Whether you are
              outfitting a concert hall, a teaching studio, or a single beloved instrument
              at home, the registry below is where the conversation usually begins.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact_us"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
              >
                Begin an Inquiry
              </Link>
              <Link
                href="/the_ds_standard"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
              >
                The Standard Explained
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Plate hero image */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
              <div className="relative aspect-[3/1] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                <Image
                  src="/products_yamahacfx.jpg"
                  alt="Yamaha CFX concert grand fitted with a DS Standard keyboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
            <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
              <span>Pl. I. DS5.5 fitted to Yamaha CFX, concert grand</span>
              <span className="text-right">Pl. 001</span>
            </figcaption>
          </AnimatedSection>
        </div>
      </section>

      {/* hairline divider */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      <div className="px-4 md:px-12 lg:px-24">
        <main className="w-full max-w-[1400px] mx-auto">
          {/* 3. The Ledger: grand piano offerings */}
          <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="sticky top-28">
                <h2 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)] mb-6">
                  The Ledger
                </h2>
                <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground leading-tight mb-6">
                  Grand Piano
                  <br />
                  <span className="italic font-light text-primary">Offerings</span>
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  Two ways to bring a DS Standard keyboard to a grand piano. In both cases
                  the instrument&rsquo;s action travels to Titusville, Pennsylvania for precise
                  measurement before we begin work. We provide the crate.
                </p>
              </div>
            </div>

            <AnimatedSection className="md:col-span-8 lg:col-span-9">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
                {grandOfferings.map((option, index) => (
                  <AnimatedSection key={option.name} delay={index * 100}>
                    <article className="bg-background hover:bg-card transition-colors p-8 lg:p-12 h-full flex flex-col">
                      <header className="flex justify-between items-center border-b border-border pb-4 mb-8">
                        <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-foreground">
                          {option.name}
                        </h3>
                        <span
                          className={
                            option.badgeVariant === "solid"
                              ? "text-[0.65rem] uppercase tracking-[0.2em] px-2 py-1 bg-primary text-primary-foreground font-[family-name:var(--font-inter)]"
                              : "text-[0.65rem] uppercase tracking-[0.2em] px-2 py-1 border border-accent/50 text-accent font-[family-name:var(--font-inter)]"
                          }
                        >
                          {option.badge}
                        </span>
                      </header>

                      <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-6">
                        {option.price}
                      </p>
                      <p className="text-base text-foreground/75 italic leading-relaxed mb-6">
                        {option.lede}
                      </p>
                      {"installationNote" in option && option.installationNote ? (
                        <p className="text-sm text-foreground/65 leading-relaxed mb-8 font-[family-name:var(--font-inter)]">
                          {option.installationNote}
                        </p>
                      ) : null}

                      <dl className="text-sm font-[family-name:var(--font-inter)] mt-auto">
                        {option.specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="py-3 flex justify-between gap-6 border-b border-border last:border-b-0"
                          >
                            <dt className="text-foreground/60 uppercase tracking-[0.15em] text-[0.65rem] pt-1">
                              {spec.label}
                            </dt>
                            <dd className="font-medium text-foreground text-right">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>

                      <div className="mt-8">
                        <Link
                          href="/contact_us"
                          className="inline-flex items-center justify-center px-8 py-3 text-[0.7rem] uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
                        >
                          Inquire
                        </Link>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>

              <p className="mt-8 text-sm text-foreground/60 italic leading-relaxed max-w-3xl">
                Plus shipping and installation. For both offerings the action must first be
                sent to us in Titusville, Pennsylvania for precise measurement. We provide a
                shipping box for that purpose.
              </p>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 4. Adult size ledger (specimen cards) */}
          <section className="py-32">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic text-primary">
                Adult Sizes, at a Glance
              </h2>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Certified Dimensions
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
                      <div className="py-3 flex justify-between">
                        <dt className="text-foreground/60">Overall Width</dt>
                        <dd className="font-medium text-foreground">{size.width}</dd>
                      </div>
                    </dl>
                    <p className="mt-6 text-base text-foreground/75 italic leading-relaxed">
                      {size.note}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            {/* Child sizes appendix */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
              {childSizes.map((size, index) => (
                <AnimatedSection key={size.name} delay={index * 100}>
                  <article className="bg-background hover:bg-card transition-colors p-8 lg:p-10 h-full">
                    <header className="flex justify-between items-center border-b border-border pb-4 mb-6">
                      <h4 className="font-[family-name:var(--font-display)] text-2xl text-foreground">
                        {size.name}
                      </h4>
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] px-2 py-1 border border-accent/50 text-accent font-[family-name:var(--font-inter)]">
                        Student
                      </span>
                    </header>
                    <dl className="text-sm font-[family-name:var(--font-inter)]">
                      <div className="py-2 flex justify-between border-b border-border">
                        <dt className="text-foreground/60">Octave Span</dt>
                        <dd className="font-medium text-foreground">{size.octave}</dd>
                      </div>
                      <div className="py-2 flex justify-between">
                        <dt className="text-foreground/60">Overall Width</dt>
                        <dd className="font-medium text-foreground">{size.width}</dd>
                      </div>
                    </dl>
                    <p className="mt-4 text-sm text-foreground/75 italic leading-relaxed">
                      {size.note}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </section>

          <hr className="border-t border-border" />

          {/* 5. Bass and treble engineering */}
          <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <AnimatedSection className="lg:col-span-7">
              <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <div className="relative aspect-[16/11] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                  <Image
                    src="/products_Bass-Treble-Engineering-1024x696.jpg"
                    alt="Bass to treble engineering of the DS Standard keyboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </figure>
              <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                <span>Fig. II. Bass to treble engineering</span>
                <span className="text-right">Pl. 018</span>
              </figcaption>
            </AnimatedSection>

            <AnimatedSection delay={150} className="lg:col-span-5 flex flex-col justify-center">
              <span className="mb-6 text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Precision Engineering
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mb-8">
                Bass to Treble,
                <br />
                <span className="italic font-light text-primary">by the Millimetre.</span>
              </h2>

              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Every DS Standard keyboard is precision engineered using the same computer
                  driven manufacturing processes we have refined over three decades. The
                  result is quiet, consistent, and remarkably easy for a technician to live
                  with.
                </p>
                <p>
                  The design of key leveling alone is a small piece of genius. What used to
                  be a delicate, patience testing adjustment has become a fifteen minute job,
                  and every other regulation step benefits from the same dimensional
                  discipline.
                </p>
                <p>
                  From the strength of the keys through the response of the action, every
                  component is built to meet the standards of serious professional use, and
                  to keep meeting them decade after decade.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <dl className="grid grid-cols-2 gap-8">
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60 font-[family-name:var(--font-inter)] mb-2">
                      Leveling
                    </dt>
                    <dd className="font-[family-name:var(--font-display)] text-2xl text-primary">
                      ~15 minutes
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60 font-[family-name:var(--font-inter)] mb-2">
                      Manufacturing
                    </dt>
                    <dd className="font-[family-name:var(--font-display)] text-2xl text-primary">
                      CNC milled
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60 font-[family-name:var(--font-inter)] mb-2">
                      Swap Time
                    </dt>
                    <dd className="font-[family-name:var(--font-display)] text-2xl text-primary">
                      ~5 minutes
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60 font-[family-name:var(--font-inter)] mb-2">
                      Calibration
                    </dt>
                    <dd className="font-[family-name:var(--font-display)] text-2xl text-primary">
                      Concert grade
                    </dd>
                  </div>
                </dl>
              </div>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 6. Technician's kit / field report */}
          <section className="py-32 my-8 bg-card border-y border-border relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center">
              <span className="font-[family-name:var(--font-display)] text-lg text-accent leading-none">&#10086;</span>
            </div>

            <AnimatedSection className="max-w-4xl mx-auto px-8 text-center relative">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-10 inline-block font-[family-name:var(--font-inter)]">
                Fig. III / Field Report
              </span>
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug italic text-foreground mb-12 relative z-10">
                &ldquo;As the piano technician at Ohio University, I am pleased to add my voice
                to those praising the DS Standard keyboards. From a technical standpoint,
                these pianos are a joy to work on. The engineering is extremely accurate in
                all regards. I am continually impressed with the precision and manufacture
                of all the components.&rdquo;
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-primary mb-4" />
                <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
                  Christopher D. Purdy, R.P.T.
                </cite>
                <span className="text-sm italic text-foreground/60 mt-1">
                  Registered Piano Technician, Ohio University School of Music
                </span>
              </div>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 7. Upright pianos: Hailun */}
          <section className="py-32">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <div>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 inline-block font-[family-name:var(--font-inter)]">
                  Upright Partnership
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight">
                  Uprights, <span className="italic font-light text-primary">by Hailun.</span>
                </h2>
              </div>
              <p className="max-w-md text-base text-foreground/75 leading-relaxed">
                Through our partnership with Hailun, the only major acoustic piano
                manufacturer currently offering DS Standard keyboards, alternatively sized
                uprights can be placed in practice rooms, conservatories, and homes without
                the custom retrofit cycle.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <AnimatedSection delay={100}>
                <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                  <div className="relative aspect-[2/1] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                    <Image
                      src="/products_DS6.0R-Hailun-Upright-1024x504.jpg"
                      alt="DS6.0 Hailun Upright piano"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>
                <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                  <span>Pl. II. DS6.0 Hailun Upright</span>
                  <span>HU1P / DS6.0</span>
                </figcaption>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                  <div className="relative aspect-[2/1] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                    <Image
                      src="/products_DS5.5R-Hailun-Upright-1024x446.jpg"
                      alt="DS5.5 Hailun Upright piano"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>
                <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                  <span>Pl. III. DS5.5 Hailun Upright</span>
                  <span>HU1P / DS5.5</span>
                </figcaption>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={300}>
              <div className="bg-card border border-border p-10 md:p-12 max-w-3xl mx-auto text-center">
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 inline-block font-[family-name:var(--font-inter)]">
                  Stock Offering
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground mb-4">
                  Hailun HU1P with DS Keyboard
                </h3>
                <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-primary mb-3">
                  US$15,800
                </p>
                <p className="text-sm text-foreground/70 mb-10 uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
                  Available in DS5.5 and DS6.0 specifications
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="http://www.hailun-pianos.com/my-size-keys/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
                  >
                    USA / Vienna International
                  </a>
                  <Link
                    href="/contact_us"
                    className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
                  >
                    International Inquiries
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 8. Pull quote */}
          <section className="py-24 md:py-32">
            <AnimatedSection className="max-w-4xl mx-auto px-6 text-center">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-10 inline-block font-[family-name:var(--font-inter)]">
                Institutional Impact
              </span>
              <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-snug italic text-foreground mb-12">
                &ldquo;In 2014, the School of Music at the University of Central Oklahoma
                was extremely fortunate to acquire a DS6.0 keyboard action fitted to a
                Steinway D concert grand. Students with smaller hand sizes have since been
                able to unhesitatingly take on and confidently perform repertoire which
                would normally have been off limits.&rdquo;
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-primary mb-4" />
                <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
                  Dr. David Forbat
                </cite>
                <span className="text-sm italic text-foreground/60 mt-1">
                  Professor of Piano, University of Central Oklahoma, School of Music
                </span>
              </div>
            </AnimatedSection>
          </section>

          {/* 9. Correspondence CTA */}
          <section className="mt-8 pt-24 pb-24 border-t border-border flex flex-col items-center relative">
            <div className="w-px h-16 bg-border absolute -top-8 left-1/2 -ml-px" />
            <AnimatedSection className="text-center max-w-2xl flex flex-col items-center px-6">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                Correspondence
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-6 text-foreground leading-tight">
                To commission, to consult,
                <br />
                <span className="italic font-light text-primary">or simply to hear one played.</span>
              </h3>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Institutional orders, private inquiries, and technician consultations all
                begin the same way. Write or call, and we will walk you through measurement,
                options, and timing without any pressure.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 font-[family-name:var(--font-inter)]">
                <a
                  href="tel:+18148270296"
                  className="text-sm uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors border-b border-border hover:border-primary pb-1"
                >
                  +1 814 827 0296
                </a>
                <span className="hidden sm:inline text-border">/</span>
                <a
                  href="mailto:dskeyboards@tbscc.com"
                  className="text-sm tracking-[0.1em] text-foreground/80 hover:text-primary transition-colors border-b border-border hover:border-primary pb-1"
                >
                  dskeyboards@tbscc.com
                </a>
              </div>

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
