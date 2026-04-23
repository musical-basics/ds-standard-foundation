"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

const PAYPAL_URL =
  "https://www.paypal.com/donate?token=2qgGOfIl_L5nq4GEiaalo09tstRsyYbVQEQlkPX6K3oEeMFEzKXw_arunl7vd7idzQXKklfEjsGpgJss"

const givingLevels = [
  {
    numeral: "I",
    title: "Friend",
    range: "Gifts up to $999",
    note: "Sustaining the day to day work of the archive; research correspondence, publications, and the quiet administration of a 501(c)(3).",
  },
  {
    numeral: "II",
    title: "Benefactor",
    range: "$1,000 to $4,999",
    note: "Supporting conferences, scholarly publication, and the promotion of our mission through awareness campaigns worldwide.",
  },
  {
    numeral: "III",
    title: "Patron",
    range: "$5,000 to $9,799",
    note: "Helping subsidize piano competitions that make DS Standard keyboards available to contestants of every hand size.",
  },
  {
    numeral: "IV",
    title: "Keyboard Underwriter",
    range: "$9,800 or $14,800",
    note: "Placing an alternatively sized keyboard at a college or conservatory; $9,800 for a DS keyboard, $14,800 for one with alternative action.",
  },
]

const givingMethods = [
  {
    label: "Credit Card or PayPal",
    copy: "The Donate button accepts ordinary credit cards and contact details. A PayPal account is welcome but not required.",
  },
  {
    label: "By Mail",
    copy: "Checks payable to the DS Standard Foundation, 600 North Brown Street, Titusville, Pennsylvania 16354, USA. Contributions by U.S. citizens are deductible on IRS Form 1040 Schedule A.",
  },
  {
    label: "Bank Transfer",
    copy: "PNC Bank, 123 Diamond Street, Titusville, PA 16354. Routing 043300738. Account 6013094058. No fees for international transfers.",
  },
  {
    label: "Estate Planning",
    copy: "Name the DS Standard Foundation as a beneficiary in your estate plan, and create a lasting provision for future pianists.",
  },
]

export default function Donations2Page() {
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
              Patronage
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              An Invitation to
              <br />
              <span className="italic font-light text-primary">Patronage.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              The Foundation is sustained by the considered generosity of those who share
              our mission: to enable pianists of every hand size to play without pain, and
              to secure the alternatively sized keyboard its rightful place in the concert
              hall and the conservatory.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PAYPAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
              >
                Make a Gift
              </a>
              <Link
                href="/the_ds_standard"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
              >
                Read the Mission
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Museum plate hero image */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
              <div className="relative aspect-[3/1] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                <Image
                  src="/home_Poster-3-Keyboards-Wide4-1024x307.jpg"
                  alt="The three certified DS Standard keyboard specifications"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
            <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
              <span>Pl. I. DS6.5, DS6.0, DS5.5 at scale</span>
              <span className="text-right">Patronage No. 001</span>
            </figcaption>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      <div className="px-4 md:px-12 lg:px-24">
        <main className="w-full max-w-[1400px] mx-auto">
          {/* 3. Preamble */}
          <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary sticky top-28 font-[family-name:var(--font-inter)]">
                On Giving
              </h2>
            </div>
            <AnimatedSection className="md:col-span-8 lg:col-span-8">
              <p className="text-2xl lg:text-[1.75rem] leading-[1.55] text-foreground [&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[5.5rem] [&::first-letter]:leading-[0.8] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                Patronage, for a foundation like ours, is an act of shared stewardship; a
                quiet commitment to the physical health and artistic liberty of the
                musicians who come after us. Every gift funds the construction and
                placement of alternatively sized keyboards at colleges and conservatories,
                and sustains the research that makes such instruments credible.
              </p>
              <p className="text-xl lg:text-2xl leading-[1.6] text-foreground/75 mt-8 indent-10">
                We ask for generosity, not urgency. A gift of any size enters a ledger of
                support that spans thirty years, and it meets a pianist somewhere in the
                world who has waited for a keyboard that fits.
              </p>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 4. Giving levels: specimen cards */}
          <section className="py-32">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic text-primary">
                Levels of Patronage
              </h2>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                A Register of Support
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
              {givingLevels.map((level, index) => (
                <AnimatedSection key={level.title} delay={index * 100}>
                  <article className="bg-background hover:bg-card transition-colors p-8 lg:p-12 h-full">
                    <header className="flex justify-between items-baseline border-b border-border pb-4 mb-8">
                      <span className="font-[family-name:var(--font-display)] text-4xl text-primary/50 italic font-light">
                        {level.numeral}.
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 font-[family-name:var(--font-inter)]">
                        {level.range}
                      </span>
                    </header>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl text-foreground mb-6">
                      {level.title}
                    </h3>
                    <p className="font-[family-name:var(--font-display)] italic text-xl text-foreground/80 leading-relaxed">
                      {level.note}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </section>

          <hr className="border-t border-border" />

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
                &ldquo;
              </span>
              <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-snug italic text-foreground mb-12 relative z-10">
                I have actually experienced getting larger hands. My great desire is for
                the small-handed pianists of the world to experience the great joy of
                playing the piano when the struggle of overcoming the limitations imposed
                by hand size are gone.
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-primary mb-4" />
                <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
                  Christopher Donison
                </cite>
                <span className="text-sm italic text-foreground/60 mt-1">
                  Pianist and Founder of the DS Standard
                </span>
              </div>
            </AnimatedSection>
          </section>

          {/* 6. Numerals */}
          <section className="py-24">
            <div className="border-b border-border pb-6 mb-16 flex justify-between items-end">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Stewardship in Figures
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/50 font-[family-name:var(--font-inter)]">
                DS Standard Foundation, 501(c)(3)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              <AnimatedSection>
                <span className="font-[family-name:var(--font-display)] text-7xl lg:text-8xl text-primary">
                  $9,800
                </span>
                <hr className="border-t border-border mt-6 mb-4 w-1/2" />
                <h4 className="font-[family-name:var(--font-display)] italic text-2xl mb-2 text-foreground">
                  A Keyboard Placed
                </h4>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  The cost, plus shipping, to build and deliver a new DS keyboard for loan
                  to an educational institution. A keyboard with alternative action is
                  $14,800.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <span className="font-[family-name:var(--font-display)] text-7xl lg:text-8xl text-primary relative inline-block">
                  3
                  <span className="text-4xl lg:text-5xl absolute top-2 -right-10 text-accent">0+</span>
                </span>
                <hr className="border-t border-border mt-6 mb-4 w-1/2" />
                <h4 className="font-[family-name:var(--font-display)] italic text-2xl mb-2 text-foreground">
                  Years of Research
                </h4>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  Three decades of biometric inquiry, university partnerships, and
                  engineering, now carried forward by the Foundation as a non-profit
                  successor to Steinbuhler &amp; Company.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <span className="font-[family-name:var(--font-display)] text-6xl lg:text-7xl text-primary">
                  501(c)(3)
                </span>
                <hr className="border-t border-border mt-6 mb-4 w-1/2" />
                <h4 className="font-[family-name:var(--font-display)] italic text-2xl mb-2 text-foreground">
                  Deductible Status
                </h4>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  Contributions by U.S. citizens are deductible on IRS Form 1040 Schedule
                  A. Depending on your country of residence, similar provisions may apply;
                  please consult your tax advisor.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* 7. Stewardship / transparency */}
          <section
            id="methods"
            className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
          >
            <AnimatedSection className="lg:col-span-5 relative">
              <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <div className="relative overflow-hidden aspect-[3/4] [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                  <Image
                    src="/the_ds_standard_David-Linda.jpg"
                    alt="David and Linda Steinbuhler, founders"
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

            <AnimatedSection
              delay={150}
              className="lg:col-span-7 flex flex-col justify-center h-full pt-8"
            >
              <span className="mb-6 text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Stewardship
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mb-8">
                Where Every Gift
                <br />
                <span className="italic font-light text-primary">Goes.</span>
              </h2>

              <div className="space-y-6 max-w-2xl">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  Funds raised support three quiet lines of work: building new
                  alternatively sized keyboards for loan to educational institutions;
                  subsidizing piano competitions that make DS Standard keyboards available
                  to contestants; and promoting our mission through research,
                  publications, conferences, and awareness.
                </p>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  The Foundation keeps its accounting simple and its obligations to its
                  patrons clear.
                </p>
              </div>

              <div className="mt-12 border-t border-border pt-8 max-w-2xl">
                <h5 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                  Ways to Give
                </h5>
                <dl className="divide-y divide-border">
                  {givingMethods.map((method) => (
                    <div
                      key={method.label}
                      className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6"
                    >
                      <dt className="sm:col-span-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary font-medium font-[family-name:var(--font-inter)] pt-1">
                        {method.label}
                      </dt>
                      <dd className="sm:col-span-8 text-lg text-foreground/80 leading-relaxed italic">
                        {method.copy}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </AnimatedSection>
          </section>

          {/* 8. Closing CTA */}
          <section className="mt-24 pt-24 pb-24 border-t border-border flex flex-col items-center relative">
            <div className="w-px h-16 bg-border absolute -top-8 left-1/2 -ml-px" />
            <AnimatedSection className="text-center max-w-2xl flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                Make a Gift
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-6 text-foreground">
                With <span className="italic font-light text-primary">Gratitude.</span>
              </h3>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Every contribution, of any size, is received with care and applied to the
                placement of keyboards and the advancement of the standard. We are
                grateful for your patronage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PAYPAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
                >
                  Donate Now
                </a>
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
