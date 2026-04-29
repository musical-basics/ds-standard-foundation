"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

type Institution = {
  name: string
  location?: string
  contact: string
}

const activeUniversities: Institution[] = [
  { name: "SMU Meadows School of the Arts", location: "Dallas", contact: "Carol Leone, Chair and Professor of Piano" },
  { name: "University of North Texas", location: "Denton", contact: "Pamela Mia Paul, Professor of Piano" },
  { name: "University of Wisconsin-Madison", location: "Madison", contact: "Jessica Johnson, Professor of Piano" },
  { name: "Salem College", location: "Winston-Salem", contact: "Barbara Lister-Sink, Professor of Piano" },
  { name: "St. Olaf College", location: "Northfield", contact: "Kathryn Ananda-Owens, Chair of the Music Department" },
  { name: "San Diego State University", location: "San Diego", contact: "Tina Chong, Assistant Professor of Piano" },
  { name: "Ohio University", location: "Athens", contact: "Chris Purdy RPT, Head Technician" },
  { name: "Booker T. Washington High School", location: "Dallas", contact: "Leonardo Zuno Fernandez" },
  { name: "Appalachian State University", location: "Boone", contact: "Catherine Garner, Keyboard Area Coordinator" },
  { name: "University of Memphis", location: "Memphis", contact: "Artina McCain, Associate Professor of Piano" },
  { name: "Johns Hopkins Peabody Institute", location: "Baltimore", contact: "Kris Chesky, Chair of Performing Arts and Health" },
  { name: "Musical Arts Center of San Antonio", location: "San Antonio", contact: "Ken Thompson, Advanced Piano Coach" },
  { name: "University of Colorado Boulder", location: "Boulder", contact: "Jennifer Hayghe, Chair and Associate Professor" },
]

const loanUniversities: Institution[] = [
  { name: "University of Montreal", contact: "Justine Pelletier, guest Professor of Piano" },
  { name: "Eastman School of Music", location: "Rochester", contact: "Alan Chow, Chair of Piano" },
  { name: "Stanford University", contact: "Elizabeth Schumann, Assistant Professor of Piano" },
  { name: "Colorado Mesa University", location: "Grand Junction", contact: "Kathryn Mientka, guest Professor of Piano" },
  { name: "Institute of Music Physiology and Musicians Medicine", location: "Hannover, Germany", contact: "Florian Worschech, Postdoctoral Researcher" },
  { name: "Rutgers University", contact: "Min Kwon, Head of Piano" },
]

type Researcher = {
  name: string
  location?: string
  student: string
}

const researchUniversities: Researcher[] = [
  { name: "University of Auckland", student: "Camila de Oliveira" },
  { name: "Shenandoah Conservatory", location: "Winchester", student: "Sarah Morris" },
  { name: "University of Michigan", location: "Ann Arbor", student: "Ceren Su Sahin" },
  { name: "University of Cape Town", student: "Leah Williams" },
]

export default function Projects2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      {/* Fixed masthead, identical to homepage */}
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
              Foundation / Projects Ledger
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              Where the Standard
              <br />
              <span className="italic font-light text-primary">Meets the Stage</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              The Foundation&rsquo;s work in the field, recorded as it happens. Keyboard
              placements, university partnerships, student research, and the concert
              stages where alternatively sized actions earn their keep.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact_us"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
              >
                Partner With Us
              </Link>
              <Link
                href="/donations"
                className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
              >
                Support the Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero plate */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
              <div className="relative aspect-[3/1] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                <Image
                  src="/projects_Students-at-SMU-Institute-for-Young-Pianists-bb.jpg"
                  alt="Students at the SMU Institute for Young Pianists"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
            <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
              <span>Pl. I. SMU Institute for Young Pianists</span>
              <span className="text-right">Pl. 017</span>
            </figcaption>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical hairline divider */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      <div className="px-4 md:px-12 lg:px-24">
        <main className="w-full max-w-[1400px] mx-auto">
          {/* 1b. A Short History */}
          <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <AnimatedSection>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)] block">
                  Archival Note
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground leading-tight mt-4 sticky top-28">
                  A Short <span className="italic text-primary">History</span>.
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection className="md:col-span-8 lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <p className="text-lg lg:text-xl leading-[1.65] text-foreground/85">
                  In 1996 Linda Gould was the first to purchase a DS Keyboard. Her
                  video &ldquo;My Piano Has a Secret&rdquo; powerfully describes the
                  crying need for alternative keyboards to be adopted in the world of
                  the piano.
                </p>
                <div id="video-linda-gould" className="scroll-mt-32">
                  <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-video overflow-hidden">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/Jn9-c8n0Q3s"
                        title="My Piano Has A Secret"
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </figure>
                  <figcaption className="mt-4 text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                    Linda Gould · My Piano Has a Secret
                  </figcaption>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg lg:text-xl leading-[1.65] text-foreground/85">
                  In 2000 Dr. Carol Leone at SMU Meadows School of the Arts in Dallas
                  was the first to study the practicality of using alternative size
                  keyboards in a university setting.
                </p>
                <div id="video-carol-leone" className="scroll-mt-32">
                  <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-video overflow-hidden">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/wyoHP3B0mQU"
                        title="Increasing Piano Performance Potential with Narrower Keys"
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </figure>
                  <figcaption className="mt-4 text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                    Carol Leone · Increasing Piano Performance Potential with Narrower Keys
                  </figcaption>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg lg:text-xl leading-[1.65] text-foreground/85">
                  Universities such as Texas Tech University and the University of
                  Nebraska-Lincoln have collectively purchased many DS Keyboards, but
                  today there no longer is a piano faculty member, the
                  university&rsquo;s &ldquo;champion,&rdquo; to study them. Lionel
                  Yu&rsquo;s video &ldquo;Piano&rsquo;s Darkest Secret&rdquo;
                  describes some of the problems confronting adoption.
                </p>
                <div id="video-pianos-darkest-secret" className="scroll-mt-32">
                  <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-video overflow-hidden">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/ZXlknI-Jc48"
                        title="Piano's Darkest Secret"
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </figure>
                  <figcaption className="mt-4 text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                    Lionel Yu · Piano&rsquo;s Darkest Secret
                  </figcaption>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border">
                <a
                  href="https://www.paskpiano.org/performances-and-conferences/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary hover:text-foreground transition-colors font-[family-name:var(--font-inter)] inline-flex items-center gap-2"
                >
                  <span className="inline-block w-6 h-px bg-primary" />
                  PASK performances and conferences
                </a>
                <a
                  href="https://www.paskpiano.org/universities-schools/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary hover:text-foreground transition-colors font-[family-name:var(--font-inter)] inline-flex items-center gap-2"
                >
                  <span className="inline-block w-6 h-px bg-primary" />
                  PASK universities and schools
                </a>
              </div>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 2. Prospectus */}
          <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary sticky top-28 font-[family-name:var(--font-inter)]">
                The Prospectus
              </h2>
            </div>
            <AnimatedSection className="md:col-span-8 lg:col-span-8">
              <p className="text-2xl lg:text-[1.75rem] leading-[1.55] text-foreground [&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[5.5rem] [&::first-letter]:leading-[0.8] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                The mandate of the Foundation runs deeper than advocacy. We place
                proportionately sized keyboards inside conservatories, concert halls,
                and research centres, and we watch what happens next. The cases
                gathered below represent our working portfolio: partnerships in motion,
                instruments in residency, and pianists finding their hands again.
              </p>
              <p className="text-xl lg:text-2xl leading-[1.6] text-foreground/75 mt-8 indent-10">
                Some entries are decades old, some are a few months young. Each one
                marks a place where the Standard moved off the page and into somebody&rsquo;s
                studio, competition stage, or thesis.
              </p>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 3. Featured case studies */}
          <section className="py-32">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic text-primary">
                Featured Case Studies
              </h2>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Index, three selected records
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
              {/* Case 01: SMU */}
              <AnimatedSection>
                <article className="bg-background hover:bg-card transition-colors p-8 lg:p-10 h-full flex flex-col">
                  <figure className="relative bg-card p-3 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-[4/3] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                      <Image
                        src="/projects_DS6.0R-Keyboard-at-SMU-Dallas-1024x494.jpg"
                        alt="DS6.0R keyboard at SMU Meadows in Dallas"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <div className="pt-6">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium text-primary font-[family-name:var(--font-inter)]">
                      Fig. 01
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl mt-2 mb-3 text-foreground">
                      SMU Meadows, Dallas
                    </h3>
                    <p className="text-base text-foreground/75 leading-relaxed">
                      In 2000 Dr. Carol Leone began the first university study of
                      alternatively sized keyboards in a collegiate setting. The DS6.0R
                      has remained in active use at Meadows since, and the room is now
                      a reference point for every institution that follows.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              {/* Case 02: Arazi */}
              <AnimatedSection delay={100}>
                <article className="bg-background hover:bg-card transition-colors p-8 lg:p-10 h-full flex flex-col">
                  <figure id="video-anna-arazi" className="relative bg-card p-3 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] scroll-mt-32">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-[4/3] overflow-hidden bg-black">
                      <video
                        controls
                        preload="metadata"
                        poster="/projects_Anna-Arazi-682x1024.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source
                          src="https://dsstandardfoundation.org/wp-content/uploads/2020/03/Anna%20Arazi%20Finals%20DIPC.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </figure>
                  <div className="pt-6">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium text-primary font-[family-name:var(--font-inter)]">
                      Fig. 02
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl mt-2 mb-3 text-foreground">
                      Anna R. Arazi, Dallas 2015
                    </h3>
                    <p className="text-base text-foreground/75 leading-relaxed">
                      In March of 2015 Anna R. Arazi arrived at the Dallas
                      International Piano Competition on a Wednesday. Anna&rsquo;s
                      hands are small and she suffers from pain in her forearms when
                      playing conventional keyboards. She was eager to participate
                      in this particular competition because it offered pianists the
                      opportunity to compete using the smaller DS Standard
                      keyboards. She had never played on a smaller keyboard before,
                      but immediately took to the DS6.0 size. On Thursday she
                      advanced to the semifinals, on Friday she advanced to the
                      finals, and on Saturday she gave the performance where she
                      won the third place prize. The amazing fact is that by the
                      end of the competition the pain in Anna&rsquo;s arms had
                      completely disappeared.
                    </p>
                    <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-foreground/55 font-[family-name:var(--font-inter)] leading-relaxed">
                      Finals repertoire: Prokofiev Piano Concerto No. 1, 2015 Dallas
                      International Piano Competition.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              {/* Case 03: Pianodrome */}
              <AnimatedSection delay={200}>
                <article className="bg-background hover:bg-card transition-colors p-8 lg:p-10 h-full flex flex-col">
                  <figure className="relative bg-card p-3 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                    <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                    <div className="relative aspect-[4/3] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                      <Image
                        src="/projects_Pianodrome2.jpg"
                        alt="The Royal Pianodrome amphitheatre"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <div className="pt-6">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium text-primary font-[family-name:var(--font-inter)]">
                      Fig. 03
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl mt-2 mb-3 text-foreground">
                      The Royal Pianodrome
                    </h3>
                    <p className="text-base text-foreground/75 leading-relaxed">
                      Pianodrome, the Scottish company that builds small amphitheatres
                      from decommissioned uprights, hosts DS Keyboards inside its Royal
                      Pianodrome; a public venue in which any visiting pianist can sit
                      down and try the geometry for themselves.
                    </p>
                    <a
                      href="https://www.pianodrome.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary hover:text-foreground transition-colors font-[family-name:var(--font-inter)]"
                    >
                      <span className="inline-block w-6 h-px bg-primary" />
                      Read the Pianodrome blog post
                    </a>
                  </div>
                </article>
              </AnimatedSection>
            </div>
          </section>

          <hr className="border-t border-border" />

          {/* 4. Keyboard Loans Program */}
          <section className="py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  Field Operations
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mt-4 mb-8">
                  Keyboard Loans
                  <br />
                  <span className="italic text-primary">Program.</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl mb-6">
                  Universities and music schools are invited to apply to the Foundation
                  to borrow a DS Keyboard for up to twelve months, with the option to
                  purchase at any point during the residency.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
                  We read each inquiry against three quiet priorities: a piano faculty
                  that wants the instrument, administrative backing that will keep the
                  door open for it, and a technician who will actually tune it.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="mt-12 border-t border-border pt-8 max-w-2xl">
                  <h5 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                    Priority evaluation criteria
                  </h5>
                  <ul className="divide-y divide-border">
                    <li className="grid grid-cols-[3rem_1fr] items-start py-4">
                      <span className="font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-[0.2em] text-foreground/50">01.</span>
                      <span className="text-lg text-foreground/85">Support from the piano faculty.</span>
                    </li>
                    <li className="grid grid-cols-[3rem_1fr] items-start py-4">
                      <span className="font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-[0.2em] text-foreground/50">02.</span>
                      <span className="text-lg text-foreground/85">Administrative backing from the department.</span>
                    </li>
                    <li className="grid grid-cols-[3rem_1fr] items-start py-4">
                      <span className="font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-[0.2em] text-foreground/50">03.</span>
                      <span className="text-lg text-foreground/85">A committed piano technician on staff.</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={150} className="lg:col-span-5">
              <div className="bg-card border border-border p-8 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                    Formal request
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground mt-4 mb-6 leading-tight">
                    Apply for a Residency.
                  </h3>
                  <p className="text-base text-foreground/75 leading-relaxed mb-10">
                    Department chairs and faculty representatives are welcome to open
                    correspondence with the board. We will respond with current
                    inventory, shipping arrangements, and the formal terms of a
                    twelve-month residency loan.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact_us"
                    className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
                  >
                    Initiate Correspondence
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 5. Institutional Register */}
          <section className="py-32">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <div>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                  Official Record
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mt-4">
                  The Institutional <span className="italic text-primary">Register</span>.
                </h2>
              </div>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Partner institutions &amp; collaborators
              </span>
            </div>

            {/* Active partners */}
            <div className="mb-20">
              <h3 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                Partner institutions
              </h3>
              <div className="border-t-2 border-foreground/30">
                <div className="grid grid-cols-[3rem_2fr_1fr_2fr] gap-4 py-3 border-b border-border font-[family-name:var(--font-inter)] text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60">
                  <span>Ref.</span>
                  <span>Institution</span>
                  <span className="hidden md:block">Geography</span>
                  <span className="text-right">Focal point</span>
                </div>
                {activeUniversities.map((uni, index) => (
                  <AnimatedSection key={uni.name} delay={index * 25}>
                    <div className="grid grid-cols-[3rem_2fr_1fr_2fr] gap-4 py-4 border-b border-border items-start">
                      <span className="font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-[0.15em] text-foreground/40 pt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg text-foreground">{uni.name}</span>
                      <span className="hidden md:block text-base text-foreground/60">
                        {uni.location ?? ""}
                      </span>
                      <span className="text-base text-foreground/80 text-right">
                        {uni.contact}
                      </span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Two subtables side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Currently on loan */}
              <div>
                <h3 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                  Currently on loan
                </h3>
                <div className="border-t border-foreground/30">
                  {loanUniversities.map((uni, index) => (
                    <AnimatedSection key={uni.name} delay={index * 30}>
                      <div className="py-4 border-b border-border">
                        <div className="flex items-baseline justify-between gap-4">
                          <h4 className="text-lg text-foreground">{uni.name}</h4>
                          {uni.location && (
                            <span className="font-[family-name:var(--font-inter)] text-[0.65rem] uppercase tracking-[0.2em] text-foreground/50 whitespace-nowrap">
                              {uni.location}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-foreground/70 mt-1 italic">{uni.contact}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Student research */}
              <div>
                <h3 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                  Student research
                </h3>
                <div className="border-t border-foreground/30">
                  {researchUniversities.map((uni, index) => (
                    <AnimatedSection key={uni.name} delay={index * 30}>
                      <div className="py-4 border-b border-border">
                        <div className="flex items-baseline justify-between gap-4">
                          <h4 className="text-lg text-foreground">{uni.name}</h4>
                          {uni.location && (
                            <span className="font-[family-name:var(--font-inter)] text-[0.65rem] uppercase tracking-[0.2em] text-foreground/50 whitespace-nowrap">
                              {uni.location}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-foreground/70 mt-1 italic">{uni.student}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 6. Pull quote */}
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
              <div className="space-y-8 mb-12 relative z-10">
                <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug italic text-foreground">
                  Since the life-changing moment I started practicing and performing
                  on an alternatively-sized piano keyboard, I experienced a whole new
                  level of artistic and technical freedom.
                </p>
                <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug italic text-foreground">
                  The use of DS Standard keyboards has opened up new artistic realms
                  for my students with smaller hand-spans, including expanded
                  repertoire, enhanced musical possibilities, greater physical ease,
                  and even recovery from pain and injury.
                </p>
                <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug italic text-foreground">
                  The DS Standard keyboards offer all musicians, regardless of
                  hand-span, the opportunity to focus on what matters most: making
                  music with ease, imagination, and joy.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-primary mb-4" />
                <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
                  Dr. Jessica Johnson
                </cite>
                <span className="text-sm italic text-foreground/60 mt-1">
                  Professor of Piano and Piano Pedagogy, University of Wisconsin-Madison
                </span>
              </div>
            </AnimatedSection>
          </section>

          {/* 7. Competitions & showcases */}
          <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <AnimatedSection className="lg:col-span-7">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Competitions &amp; Showcases
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mt-4 mb-10">
                On the stage,
                <br />
                <span className="italic text-primary">on the record.</span>
              </h2>

              <div className="space-y-12">
                <article>
                  <h4 className="text-[0.65rem] uppercase tracking-[0.2em] font-medium text-foreground/60 mb-2 font-[family-name:var(--font-inter)]">
                    Dallas International Piano Competition
                  </h4>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-primary mb-4">
                    The 2014 to 2016 seasons
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                    From 2014 through 2016 the Foundation supported the Dallas
                    International Piano Competition by contributing to keyboard
                    preparation. This competition was the first in the world to
                    provide DS5.0 and DS6.0 keyboards for the contestants; a small
                    logistical act with an outsized effect on what the entrants
                    could attempt.
                  </p>
                  <p className="text-base text-foreground/70 leading-relaxed max-w-2xl mt-4">
                    The Foundation will consider supporting any competition that allows
                    contestants to compete on DS Standard sized keyboards.
                  </p>
                </article>

                <article>
                  <h4 className="text-[0.65rem] uppercase tracking-[0.2em] font-medium text-foreground/60 mb-2 font-[family-name:var(--font-inter)]">
                    Recording &amp; catalogue
                  </h4>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-foreground mb-4">
                    Change of Keys: One Piano, Three Keyboards
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                    The Foundation has supported the promotion of Dr. Carol
                    Leone&rsquo;s CD, Change of Keys: One piano, three keyboards,
                    through MSR Classics. As a result the CD received much media
                    exposure and airplay, and the disc remains a useful artifact
                    when a conversation with a new institution needs audible
                    evidence rather than argument.
                  </p>
                </article>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} className="lg:col-span-5 w-full relative">
              <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] rotate-[-0.6deg]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <div className="relative overflow-hidden aspect-[3/4] [filter:grayscale(85%)_sepia(18%)_contrast(1.05)]">
                  <Image
                    src="/projects_Anna-Arazi-682x1024.jpg"
                    alt="Competition plate: Anna Arazi, Dallas"
                    fill
                    className="object-cover"
                  />
                </div>
              </figure>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-primary/40" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-primary/40" />
              <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                <span>Fig. 04. Competition stage</span>
                <span className="text-right">Pl. 024</span>
              </figcaption>
            </AnimatedSection>
          </section>

          {/* 8. Restrained CTA */}
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
                Institutions exploring a loan, competition organisers considering an
                alternative keyboard category, and researchers looking for a subject
                population are all welcome to write to the board.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact_us"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
                >
                  Apply for a Loan
                </Link>
                <Link
                  href="/contact_us"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
                >
                  Contact the Board
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
