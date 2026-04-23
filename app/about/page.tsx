"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

const purposes = [
  {
    numeral: "I.",
    title: "Encourage Availability",
    description:
      "To encourage the availability and use of alternatively sized keyboards built to the DS Standard, so that the right instrument is within reach of the right pianist.",
  },
  {
    numeral: "II.",
    title: "Raise Awareness",
    description:
      "To raise awareness of what becomes possible when a keyboard actually fits the hand playing it: more repertoire, less strain, and fewer careers quietly ended by geometry.",
  },
  {
    numeral: "III.",
    title: "Assist Institutions",
    description:
      "To help universities, conservatories, and schools acquire DS keyboards, so that the students most affected by the conventional span are not the last to touch one.",
  },
  {
    numeral: "IV.",
    title: "Encourage Research",
    description:
      "To support the ongoing biomechanical, pedagogical, and performance research that continues to refine the case for alternatively sized keyboards.",
  },
]

type BoardLink = {
  label: string
  href: string
}

type BoardMember = {
  plate: string
  name: string
  role: string
  image: string
  imageClassName?: string
  splitImage?: boolean
  description: string
  paragraphs?: string[]
  links?: BoardLink[]
}

const boardMembers: BoardMember[] = [
  {
    plate: "Pl. 01",
    name: "David Steinbuhler",
    role: "President",
    image: "/the_ds_standard_David-Linda.jpg",
    description:
      "Drawing on a career in computer science and engineering, David has spent the last three decades developing a practical way to retrofit acoustic pianos with the highest quality alternatively sized keyboards. In May of 2018 he converted his manufacturing business, Steinbuhler & Company, into the non-profit DS Standard Foundation.",
    paragraphs: [
      "Supported by academic research, he has established keyboard sizes that comfortably accommodate virtually every hand.",
      "The non-profit DS Standard Foundation, which facilitates the study of these keyboards at schools and universities around the world, continues that work today.",
    ],
  },
  {
    plate: "Pl. 02",
    name: "Dr. Barry Cressman",
    role: "Secretary",
    image: "/about_Barry_Cressman.jpg",
    imageClassName: "scale-[1.6] origin-[50%_35%]",
    description:
      "A native of New York and an alumnus of William and Mary, the University of St. Andrews, and Princeton, Barry has devoted his entire career to building non-profit corporations and to philanthropy.",
  },
  {
    plate: "Pl. 03",
    name: "Alex Steinbuhler",
    role: "Treasurer",
    image: "/the_ds_standard_Alex-at-router-1024x701.jpg",
    imageClassName: "object-top scale-[1.75] origin-[50%_20%]",
    description:
      "Grandson of the Foundation's founder, Alex is committed to carrying the manufacturing work forward. Since 2016 he has built piano actions by hand and developed a high level of skill in every aspect of their construction.",
    paragraphs: [
      "Since 2019 he has also maintained the Foundation's operational books.",
    ],
  },
  {
    plate: "Pl. 04",
    name: "Dr. Carol Leone",
    role: "Board Member",
    image: "/the_ds_standard_Carol-Leone-with-keyboard-Corped.jpg",
    description:
      "Chair of Piano Studies and Professor of Piano at Southern Methodist University's Meadows School of the Arts in Dallas, Texas, Carol has taught and performed throughout the USA, Europe, and Asia, winning both prizes and acclaim in such venues as the National Beethoven Sonata Competition, the Missouri Southern International Piano Competition, and the International Masters Competition.",
    paragraphs: [
      "Her professional training included study at the renowned Curtis Institute of Music in Philadelphia, where she was a student of the Polish pianist Mieczyslaw Horszowski. She was also a student of Guido Agosti in Rome and holds the prestigious Honors Diploma from the Accademia Chigiana in Siena, Italy.",
      "Considered today's leading performer, teacher, and researcher on alternatively sized piano keyboards for the benefit of pianists with smaller hand spans, Carol has been published in journals such as American Music Teacher, Piano Professional, and Clavier Companion. Southern Methodist University was the first institution of higher learning to provide alternatively sized keyboards for students who wish to use them.",
    ],
    links: [
      {
        label: "carolleone.com/ergonomic-keyboards",
        href: "https://www.carolleone.com/ergonomic-keyboards",
      },
      {
        label: "YouTube channel",
        href: "https://www.youtube.com/@carolleonepianist",
      },
    ],
  },
  {
    plate: "Pl. 05",
    name: "Rhonda Boyle",
    role: "Board Member",
    image: "/about_rhonda-boyle.jpg",
    description:
      "An eager student of the piano since her childhood in Melbourne, Australia, and an environmental scientist with expertise in urban planning. In 2009 Rhonda was the first pianist in Australia to own and play a DS5.5 Keyboard.",
    paragraphs: [
      "Her extensive research relating to hand size and the piano has resulted in invitations to speak at piano conferences in Australia, Europe, and the USA. She has been published in the Music Teachers National Association e-Journal (USA) and the European Piano Teachers Association journal Piano Professional (UK).",
      "Rhonda co-founded the global network PASK (Pianists for Alternatively Sized Keyboards) with Erica Booker (Sydney) and Professor Carol Leone (SMU, Texas). The website paskpiano.org includes information on research, activities, and developments relevant to alternatively sized piano keyboards.",
    ],
    links: [
      {
        label: "paskpiano.org",
        href: "https://www.paskpiano.org",
      },
    ],
  },
  {
    plate: "Pl. 06",
    name: "Chase & Peter Steinbuhler",
    role: "Board Members",
    image: "/about_chasepeter.jpg",
    splitImage: true,
    description:
      "Added in February 2025 to help secure the future of the Foundation's manufacturing operations. They also run a family-owned textile business that has been thriving in Titusville, Pennsylvania since 1897.",
    links: [
      {
        label: "The Ribbon Factory, family-owned and operated since 1897",
        href: "https://www.ribbonfactory.com/about.html",
      },
    ],
  },
]

export default function About2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      {/* Masthead dateline: fixed top-right, no background, matches the pill band */}
      <div className="fixed top-0 right-0 z-40 px-6 md:px-10 lg:px-16 py-7 pointer-events-none">
        <div className="text-[0.65rem] uppercase tracking-[0.25em] text-primary font-[family-name:var(--font-inter)] text-right pointer-events-auto">
          <span>Est. 1993</span>
          <span className="hidden sm:inline mx-3 text-border">|</span>
          <span className="hidden sm:inline">501(c)(3)</span>
        </div>
      </div>

      <Navbar />

      <div className="px-4 md:px-12 lg:px-24">
        <main className="w-full max-w-[1400px] mx-auto">
          {/* 1. Masthead hero */}
          <section className="pt-32 md:pt-40 pb-12 md:pb-16">
            <AnimatedSection>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-primary mb-8 font-[family-name:var(--font-inter)]">
                About the DS Standard Foundation
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-10 text-balance max-w-5xl">
                A small foundation
                <br />
                <span className="italic font-light text-primary">for a very old instrument.</span>
              </h1>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <AnimatedSection delay={200} className="lg:col-span-7">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl">
                  The DS Standard Foundation is a 501(c)(3) non-profit headquartered
                  in Pennsylvania. We exist so that pianists whose hands cannot
                  easily reach notes on the traditional 6.5 inch span can play the
                  full repertoire without paying for it with injuries and strain.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300} className="lg:col-span-5">
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <Link
                    href="#mission"
                    className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
                  >
                    Read the Mission
                  </Link>
                  <Link
                    href="#board"
                    className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
                  >
                    Meet the Board
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* 2. Museum plate hero image */}
          <section className="pb-20">
            <AnimatedSection>
              <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <div className="relative aspect-[3/1] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                  <Image
                    src="/the_ds_standard_David-Linda.jpg"
                    alt="David and Linda Steinbuhler in the workshop"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </figure>
              <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
                <span>Pl. I. David &amp; Linda Steinbuhler, founders</span>
                <span className="text-right">Titusville, Pennsylvania</span>
              </figcaption>
            </AnimatedSection>
          </section>

          {/* vertical hairline divider */}
          <div className="w-full h-24 flex justify-center items-center">
            <div className="w-px h-full bg-border" />
          </div>

          {/* 3. Preamble */}
          <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary sticky top-28 font-[family-name:var(--font-inter)]">
                The Preamble
              </h2>
            </div>
            <AnimatedSection className="md:col-span-8 lg:col-span-8">
              <p className="text-2xl lg:text-[1.75rem] leading-[1.55] text-foreground [&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[5.5rem] [&::first-letter]:leading-[0.8] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                The Foundation was established as a non-profit corporation in the
                Commonwealth of Pennsylvania in 2018, and holds federal 501(c)(3)
                status. We are, in plain terms, the non-profit successor to a
                small workshop that had spent the previous three decades
                rethinking one part of the piano most people never question: the
                width of a key.
              </p>
              <p className="text-xl lg:text-2xl leading-[1.6] text-foreground/75 mt-8 indent-10">
                Incorporating the work was less about the organization and more
                about the instruments. Keyboards outlive their makers. By moving
                the research, the designs, and the stewardship into a permanent
                public-benefit entity, the tools remain where they should be:
                under pianists, not locked inside a business.
              </p>
            </AnimatedSection>
          </section>

          <hr className="border-t border-border" />

          {/* 4. Mission + Vision */}
          <section id="mission" className="grid grid-cols-1 md:grid-cols-2">
            <AnimatedSection className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-border flex flex-col gap-6">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-accent font-[family-name:var(--font-inter)]">
                I. The Mission
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
                A keyboard
                <br />
                <span className="italic font-light text-primary">for every hand.</span>
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg">
                To set a standard for alternatively sized keyboards recognized
                globally, so that pianists (amateur or professional) can pursue
                their full musical potential without injury, and perform anywhere
                in the world knowing a keyboard bearing the DS logo will be the
                size they know.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={120} className="p-8 md:p-16 bg-card flex flex-col gap-6">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-accent font-[family-name:var(--font-inter)]">
                II. The Vision
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
                Artistry
                <br />
                <span className="italic font-light text-primary">unencumbered.</span>
              </h3>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg">
                A musical world where what a pianist plays is decided by
                imagination and training, not by the distance from thumb to
                fifth finger. Where the phrase "she has small hands" is a
                description of anatomy and nothing else.
              </p>
            </AnimatedSection>
          </section>

          {/* vertical hairline divider */}
          <div className="w-full h-24 flex justify-center items-center">
            <div className="w-px h-full bg-border" />
          </div>

          {/* 5. Guiding Purposes */}
          <section className="py-24">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground max-w-xl">
                Four <span className="italic font-light text-primary">guiding purposes</span>
              </h2>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Statutory Objectives
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
              {purposes.map((purpose, index) => (
                <AnimatedSection key={purpose.title} delay={index * 100}>
                  <article className="p-8 md:p-12 flex items-start gap-8 border-r border-b border-border hover:bg-card transition-colors h-full">
                    <span className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-primary leading-none pt-1">
                      {purpose.numeral}
                    </span>
                    <div className="flex flex-col gap-4">
                      <h4 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-foreground font-[family-name:var(--font-inter)]">
                        {purpose.title}
                      </h4>
                      <p className="text-lg text-foreground/75 leading-relaxed">
                        {purpose.description}
                      </p>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
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
              <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-snug italic text-foreground mb-10 relative z-10">
                Having the opportunity to perform and teach on DS keyboards for the
                last 20 years has been an incredible gift. To fearlessly approach
                any significant work in the repertoire, knowing that it is within
                your grasp and that you needn&rsquo;t fear injury, has been a dream
                come true for me and for my students with smaller hand spans.
              </p>
              <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl lg:text-3xl leading-relaxed italic text-foreground/85 mb-12 relative z-10">
                That this previously unimaginable breakthrough hasn&rsquo;t been
                fully embraced yet is inconceivable to me, but I hope that in the
                culture of the 2020s, inflexible tradition will give way to
                reason. When one considers that 87% of adult females, 24% of
                adult males, and 100% of young children are musically and
                technically limited by a keyboard size that is too large for
                them, and that injuries continue at a wholly unacceptable rate,
                the only logical solution is to offer alternative standards.
                I&rsquo;m very grateful to the DS Standard Foundation for leading
                this initiative globally.
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-primary mb-4" />
                <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
                  Dr. Carol Leone
                </cite>
                <span className="text-sm italic text-foreground/60 mt-1">
                  Chair of Piano Studies, Professor of Piano, SMU Meadows School of the Arts, Dallas, Texas
                </span>
              </div>
            </AnimatedSection>
          </section>

          {/* 7. Board of Directors */}
          <section id="board" className="py-24">
            <AnimatedSection>
              <div className="mb-16 flex flex-col items-center text-center gap-4">
                <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-accent font-[family-name:var(--font-inter)]">
                  Governance
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-foreground">
                  The <span className="italic font-light text-primary">Board of Directors</span>
                </h2>
                <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
                  A working board of engineers, pianists, scholars, and stewards.
                  Each has some direct reason to care whether the next generation
                  of pianists finds the right keyboard waiting for them.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {boardMembers.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 100}>
                  <article className="flex flex-col gap-5 h-full">
                    <div className="flex justify-between items-end pb-2 border-b border-border">
                      <span className="text-[0.65rem] uppercase tracking-[0.25em] text-foreground/50 font-[family-name:var(--font-inter)]">
                        {member.plate}
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.25em] text-accent font-[family-name:var(--font-inter)]">
                        {member.role}
                      </span>
                    </div>
                    <figure className="relative bg-card p-3 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                      <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                      {member.splitImage ? (
                        <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)] grid grid-rows-2 gap-1 bg-card">
                          <div className="relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 w-[200%]">
                              <Image
                                src={member.image}
                                alt={`${member.name} (Chase)`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="relative overflow-hidden">
                            <div className="absolute inset-y-0 right-0 w-[200%]">
                              <Image
                                src={member.image}
                                alt={`${member.name} (Peter)`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className={`object-cover ${member.imageClassName || ""}`}
                          />
                        </div>
                      )}
                    </figure>
                    <div className="pt-2 flex flex-col gap-3">
                      <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-foreground leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-base text-foreground/75 leading-relaxed">
                        {member.description}
                      </p>
                      {member.paragraphs?.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-base text-foreground/75 leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                      {member.links && member.links.length > 0 && (
                        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                          {member.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-[0.65rem] uppercase tracking-[0.2em] font-medium text-foreground/70 border-b border-transparent hover:border-primary hover:text-primary transition-colors font-[family-name:var(--font-inter)] pb-0.5"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* vertical hairline divider */}
          <div className="w-full h-24 flex justify-center items-center">
            <div className="w-px h-full bg-border" />
          </div>

          {/* 7b. Lister-Sink pull quote (three-part) */}
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
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug italic text-foreground mb-8 relative z-10">
                I cannot begin to describe the career-changing, and even
                life-changing, benefits our students have reaped from having
                these instruments to practice on daily. Their first response
                though was, &ldquo;Why did it take so long? Why did we have to
                suffer so unnecessarily?&rdquo;
              </p>
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug italic text-foreground mb-8 relative z-10">
                Playing-related injury in the piano world is persistently and
                tragically prevalent; consensus among researchers is that female
                pianists are twice as likely to develop an injury, and smaller
                hands are implicated.
              </p>
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug italic text-foreground mb-12 relative z-10">
                Since the NASM now requires some form of education in
                injury-prevention and musculoskeletal health, it seems almost
                imperative that accredited music departments in the US acquire
                such keyboards. Addressing this glaring inequity is long overdue.
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-primary mb-4" />
                <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
                  Barbara Lister-Sink, Ed.D.
                </cite>
                <span className="text-sm italic text-foreground/60 mt-1 max-w-xl">
                  Salem College School of Music, Director, Graduate Music Program. Producer of the DVD Freeing the Caged Bird: Developing Well-Coordinated, Injury-Preventive Piano Technique.
                </span>
              </div>
            </AnimatedSection>
          </section>

          {/* vertical hairline divider */}
          <div className="w-full h-24 flex justify-center items-center">
            <div className="w-px h-full bg-border" />
          </div>

          {/* 8. Stewardship / heritage */}
          <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <AnimatedSection className="lg:col-span-5 relative">
              <figure className="relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <div className="relative overflow-hidden aspect-[4/5] [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                  <Image
                    src="/the_ds_standard_Craftsmanship-Early-Days-Adjusted.jpg"
                    alt="Early days of craftsmanship in the Steinbuhler workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </figure>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-primary/40" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-primary/40" />
              <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 font-[family-name:var(--font-inter)] pl-2">
                <span>Fig. II. Early craftsmanship</span>
                <span>Archive / 1990s</span>
              </figcaption>
            </AnimatedSection>

            <AnimatedSection delay={150} className="lg:col-span-7 flex flex-col justify-center h-full pt-4">
              <span className="mb-6 text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                Stewardship
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground leading-tight mb-8">
                Carrying a workshop
                <br />
                <span className="italic text-primary">into a second life.</span>
              </h2>

              <div className="space-y-6 max-w-2xl">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  The Foundation inherited everything Steinbuhler &amp; Company
                  had spent thirty years making and measuring: the actions, the
                  tooling, the correspondence, and the quiet network of
                  pianists, universities, and technicians who had started to
                  rely on the work.
                </p>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  Our job, plainly, is not to change any of that. Our job is to
                  keep it going, to keep the benches staffed, to keep placing
                  keyboards in schools, and to make sure a pianist looking for
                  a DS6.0 in 2050 can still find one.
                </p>
              </div>

              <dl className="mt-12 border-t border-border pt-8 max-w-2xl text-sm font-[family-name:var(--font-inter)]">
                <div className="py-3 flex justify-between border-b border-border">
                  <dt className="text-foreground/60 uppercase tracking-[0.2em] text-[0.65rem]">
                    Founded
                  </dt>
                  <dd className="font-medium text-foreground">Steinbuhler &amp; Company, 1993</dd>
                </div>
                <div className="py-3 flex justify-between border-b border-border">
                  <dt className="text-foreground/60 uppercase tracking-[0.2em] text-[0.65rem]">
                    Incorporated
                  </dt>
                  <dd className="font-medium text-foreground">May 2018, as a non-profit</dd>
                </div>
                <div className="py-3 flex justify-between border-b border-border">
                  <dt className="text-foreground/60 uppercase tracking-[0.2em] text-[0.65rem]">
                    Jurisdiction
                  </dt>
                  <dd className="font-medium text-foreground">Commonwealth of Pennsylvania</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-foreground/60 uppercase tracking-[0.2em] text-[0.65rem]">
                    Status
                  </dt>
                  <dd className="font-medium text-foreground">501(c)(3) public charity</dd>
                </div>
              </dl>
            </AnimatedSection>
          </section>

          {/* 9. Restrained CTA */}
          <section className="mt-24 pt-24 pb-24 border-t border-border flex flex-col items-center relative">
            <div className="w-px h-16 bg-border absolute -top-8 left-1/2 -ml-px" />
            <AnimatedSection className="text-center max-w-2xl flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                Correspond
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-6 text-foreground">
                Write to the <span className="italic text-primary">Foundation.</span>
              </h3>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Pianists, teachers, institutions, and philanthropists who want to
                support the archive, place a keyboard on a campus, or simply
                introduce themselves are warmly invited to be in touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact_us"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
                >
                  Contact the Foundation
                  <ArrowRight className="ml-2 h-4 w-4" />
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

          {/* 10. Acknowledgements */}
          <section className="py-16 border-t border-border">
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="md:col-span-4 lg:col-span-3">
                  <h2 className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary font-[family-name:var(--font-inter)]">
                    Acknowledgements
                  </h2>
                </div>
                <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-5">
                  <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
                    The sources of the images and other media used on this
                    website are listed in our acknowledgements document.
                  </p>
                  <Link
                    href="/DS-Foundation-website-acknowledgements.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center self-start text-[0.65rem] uppercase tracking-[0.2em] font-medium text-foreground/70 border-b border-transparent hover:border-primary hover:text-primary transition-colors font-[family-name:var(--font-inter)] pb-0.5"
                  >
                    Read the acknowledgements (PDF)
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}
