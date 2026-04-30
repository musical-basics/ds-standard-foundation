"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

type Point = {
  numeral: string
  heading: string
  body: string
}

const points: Point[] = [
  {
    numeral: "I",
    heading: "I could finally use the correct fingerings.",
    body:
      "Broken-chord formations could be played on one hand position, instead of two. The sensation of what it feels like to play with the proper fingering is easier to remember, more reliable in terms of accuracy, less painful, and ultimately better sounding. That is because the fingers that must bring out specific pitches in concerted sounds are aligned more directly over the keys. The whole hand-shape is less stretched out, and so power can be directed down into the keys.",
  },
  {
    numeral: "II",
    heading:
      "Wide, sweeping, left-hand arpeggiated figures so prevalent in Romantic music become possible.",
    body:
      "I could actually get on with the business of cultivating the right sound, rather than repeatedly practicing the same passage. The larger the sweep, the greater the difference. On a 7/8-size keyboard, a two-and-a-half octave sweep is two-and-a-half normal key-widths smaller. That is about two-and-a-half inches! When the smaller-handed player attempts a sweep like this, the hand must be very loose, and it is almost flung from top to bottom to cover the distance. Landing in the right place is the great achievement. With a larger hand, landing in the right place is so easy that the force with which you land there is now an option. With the smaller keyboard, those washes of sound could now be controlled and manipulated.",
  },
  {
    numeral: "III",
    heading: "There was an increase of power.",
    body:
      "A small-handed person playing on a 7/8-size keyboard will sound like a larger person. The distance to travel is now proportionate to the size of the hand. Much of piano technique is about allowing the hand to be in its natural position as much of the time as possible. If the hand has to stretch itself like a pretzel for every task, the hand tires faster. Alternatively, when the hand, in its natural relaxed position, is already in the position it needs to be, the percentage of time that the muscles are engaged is reduced significantly, and the ability to rest the muscles is increased. Therefore, power and stamina are increased.",
  },
  {
    numeral: "IV",
    heading: "It was easier to make large leaps, with greater speed.",
    body:
      "It was easier to make large leaps, and I could do so accurately, with greater speed.",
  },
  {
    numeral: "V",
    heading: "It was easier to achieve proper balance.",
    body:
      "Getting the right amount of tone out of the lead melody-line in the right hand (or any internal line) was possible and enjoyable.",
  },
  {
    numeral: "VI",
    heading:
      "I was able to “walk” (legato finger) octaves with a 3,4,5 fingering.",
    body:
      "This created more bel canto playing, but it also made achieving speed and accuracy easier when I performed the famous octave passages in the repertoire.",
  },
]

export default function ChrisDonisonTestimonialPage() {
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
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] font-medium text-primary mb-8 font-[family-name:var(--font-inter)]">
              Christopher Donison · A Testimonial
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              I have actually experienced
              <br />
              <span className="italic font-light text-primary">getting larger hands.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-2xl leading-relaxed">
              Christopher Donison, on what changed after a 7/8 keyboard was
              fitted to his Steinway concert grand, and the multitude of
              discoveries that followed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Museum-plate image */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
              <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(85%)_sepia(18%)_contrast(1.05)]">
                <Image
                  src="/home_chris.jpg"
                  alt="Christopher Donison at the piano"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
            <figcaption className="mt-4 flex justify-between items-start text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
              <span>Plate I. Christopher Donison</span>
              <span className="text-right">Piano &amp; Keyboard, 1998</span>
            </figcaption>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical hairline */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* Testimonial body */}
      <div className="px-4 md:px-12 lg:px-24 pb-24">
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Side index */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                Discoveries
              </p>
              <ol className="space-y-2 font-[family-name:var(--font-inter)] text-sm">
                {points.map((p) => (
                  <li key={p.numeral} className="flex gap-3">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-foreground/40 pt-0.5 w-5 flex-shrink-0">
                      {p.numeral}.
                    </span>
                    <a
                      href={`#point-${p.numeral}`}
                      className="text-foreground/70 hover:text-primary transition-colors leading-tight"
                    >
                      {p.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Body */}
          <main className="lg:col-span-9 space-y-20">
            {/* Introduction */}
            <article className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                An Epiphany
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                A multitude of discoveries.
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p className="[&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[5rem] [&::first-letter]:leading-[0.85] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                  I have actually experienced &ldquo;getting larger
                  hands.&rdquo; Although that sounds impossible, this was
                  achieved by creating a 7/8-size keyboard for my Steinway
                  concert grand. I thus began the great discovery of what it
                  feels like to play the piano with larger hands. It was like
                  an epiphany. All the touches and techniques in piano
                  studies, and I stress, all of them, were made easier by a
                  factor of a hundred.
                </p>
                <p>
                  I would never have known this, however, if I had not had the
                  7/8-size keyboard made for me. Getting that keyboard made
                  became an obsession after the idea came to me while
                  practicing the coda of the G-minor Chopin Ballade for about
                  the thousandth time. I was staring at the keyboard and
                  looking at my hands, realizing they did not look right in
                  comparison to the keyboard to accomplish the task. (I cannot
                  stretch a sixth between the index finger and little finger
                  in the right hand.) I realized that my hands would never be
                  larger, but the keyboard could be smaller! After I got the
                  keyboard made and fitted to the piano, I made a multitude of
                  discoveries.
                </p>
              </div>
            </article>

            {/* Six numbered points */}
            {points.map((p) => (
              <article
                key={p.numeral}
                id={`point-${p.numeral}`}
                className="scroll-mt-28"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                  {p.numeral}
                </p>
                <h2 className="font-[family-name:var(--font-display)] italic text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                  {p.heading}
                </h2>
                <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </main>
        </div>
      </div>

      {/* Closing pull quote */}
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
          <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl leading-snug italic text-foreground mb-12 relative z-10">
            I realize now, looking back, that most of the time I spent
            practicing was used trying to overcome difficulties because of my
            hand-size. My great desire is for the small-handed pianists of the
            world to experience, as I have, the great joy of playing the piano
            when the struggle of overcoming the limitations imposed by
            hand-size are gone.
          </p>
          <div className="flex flex-col items-center">
            <div className="w-12 h-px bg-primary mb-4" />
            <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
              Christopher Donison
            </cite>
            <span className="text-sm italic text-foreground/60 mt-1">
              Music Director of the Shaw Festival; Co-founder of the DS Standard.
            </span>
          </div>
        </AnimatedSection>
      </section>

      {/* Source citation */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="border-t border-b border-border py-8 text-center">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Source
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-[family-name:var(--font-inter)]">
                Christopher Donison,{" "}
                <span className="italic">
                  &ldquo;Small Hands? Try This Keyboard, You&rsquo;ll Like
                  It&rdquo;
                </span>
                ,{" "}
                <span className="italic">Piano &amp; Keyboard Magazine</span>,
                July/August 1998, pp. 41-43.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical hairline */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* CTA */}
      <section className="mt-8 pt-16 pb-24 border-t border-border flex flex-col items-center">
        <AnimatedSection className="text-center max-w-2xl flex flex-col items-center px-6">
          <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
            Continue
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-6 text-foreground">
            Further Reading
          </h3>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            The long account of how the Donison-Steinbuhler Standard came to
            be, and a second testimonial from the first pianist to order one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/our-story"
              className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
            >
              Read the full story
            </Link>
            <Link
              href="/its-easy-to-adapt"
              className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
            >
              Read Linda Gould&rsquo;s testimonial
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  )
}
