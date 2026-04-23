"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

type Director = {
  plate: string
  name: string
  role: string
  image: string
  email: string
  description: string
}

const directors: Director[] = [
  {
    plate: "Pl. 01",
    name: "David Steinbuhler",
    role: "President",
    image: "/the_ds_standard_David-Linda.jpg",
    email: "dskeyboards@tbscc.com",
    description:
      "Handles inquiries about the DS Standard itself, the manufacture of DS Keyboards, and customers looking to purchase.",
  },
  {
    plate: "Pl. 02",
    name: "Barry Cressman",
    role: "Secretary",
    image: "/about_Barry_Cressman.jpg",
    email: "bcressman@zoominternet.net",
    description:
      "Handles general questions about the Foundation and incoming donations.",
  },
  {
    plate: "Pl. 03",
    name: "Carol Leone",
    role: "Board Member",
    image: "/the_ds_standard_Carol-Leone-with-keyboard-Corped.jpg",
    email: "cleone@mail.smu.edu",
    description:
      "Handles outreach from educational institutions curious about how the Foundation might help them.",
  },
  {
    plate: "Pl. 04",
    name: "Rhonda Boyle",
    role: "Board Member",
    image: "/about_rhonda-boyle.jpg",
    email: "info@paskpiano.org",
    description:
      "Handles questions about hand-size research and the Pianists for Alternatively Sized Keyboards (PASK) network.",
  },
]

export default function ContactUs2Page() {
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

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-8 font-[family-name:var(--font-inter)]">
              Office of Correspondence
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-10 text-balance">
              Correspondence &amp;
              <br />
              <span className="italic font-light text-primary">the Foundation.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl leading-relaxed">
              For a small foundation, the best way to reach us is to write to the person
              whose portfolio your question touches. Each member of the board looks after
              a distinct part of our work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical hairline */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* Directory of board members */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
            <AnimatedSection>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic text-primary">
                The Directory
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60 font-[family-name:var(--font-inter)]">
                Board of Directors &middot; 2026
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-20">
            {directors.map((d, index) => (
              <AnimatedSection key={d.name} delay={index * 100}>
                <article className="flex flex-col">
                  <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                      <Image
                        src={d.image}
                        alt={d.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>

                  <div className="mt-6 flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/50 font-[family-name:var(--font-inter)] border-b border-border/60 pb-2 mb-5 inline-block self-start">
                      {d.plate}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl text-foreground mb-2">
                      {d.name}
                    </h3>
                    <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-5 font-[family-name:var(--font-inter)]">
                      {d.role}
                    </p>
                    <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                      {d.description}
                    </p>
                    <a
                      href={`mailto:${d.email}`}
                      className="text-[0.7rem] uppercase tracking-[0.2em] font-medium text-foreground hover:text-primary transition-colors font-[family-name:var(--font-inter)] border-b border-transparent hover:border-primary pb-1 self-start"
                    >
                      {d.email}
                    </a>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical hairline */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* Address + 501(c)(3) block */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="p-8 md:p-10 border border-border bg-card/60 h-full">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                  Mailing Address
                </p>
                <address className="not-italic text-lg md:text-xl leading-relaxed text-foreground">
                  DS Standard Foundation
                  <br />
                  600 North Brown Street
                  <br />
                  Titusville, Pennsylvania 16354
                  <br />
                  USA
                </address>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="p-8 md:p-10 border border-border bg-card/60 h-full">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                  Tax Status
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground">
                  The Foundation operates as a registered 501(c)(3) non-profit
                  organization. Contributions by US citizens are tax-deductible to the
                  fullest extent permitted by law.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vertical hairline */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* In the Public Record + closing CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <AnimatedSection>
              <div className="flex flex-col gap-5">
                <h4 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  In the Public Record
                </h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="http://facebook.com/dsstandardfoundation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.2em] text-foreground font-[family-name:var(--font-inter)]"
                    >
                      <span className="text-border group-hover:text-primary transition-colors">
                        Vol. 1
                      </span>
                      <span className="border-b border-transparent group-hover:border-primary pb-0.5 transition-colors group-hover:text-primary">
                        Facebook Dispatches
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/playlist?list=PLHBn-VaaOCGcGEZpA2CFBsMVP2RvcfiXb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.2em] text-foreground font-[family-name:var(--font-inter)]"
                    >
                      <span className="text-border group-hover:text-primary transition-colors">
                        Vol. 2
                      </span>
                      <span className="border-b border-transparent group-hover:border-primary pb-0.5 transition-colors group-hover:text-primary">
                        YouTube Archives
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="flex flex-col items-start md:items-end gap-6 text-left md:text-right">
                <p className="italic text-foreground/70 text-lg max-w-sm">
                  To read further on the Foundation&apos;s history and the people behind
                  the work.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
                >
                  Consult the About Page
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
