"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function ItsEasyToAdaptPage() {
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
              It&rsquo;s Easy to Adapt
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              The 7/8 keyboard has turned an endurance session into{" "}
              <span className="italic font-light text-primary">pure pleasure.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-2xl leading-relaxed">
              A full testimonial from the pianist who, in the summer of 1994,
              became the first to sit down at a DS Keyboard.
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
              <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                <Image
                  src="/home_linda-web.jpg"
                  alt="Linda Gould at the piano"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
            <figcaption className="mt-4 text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
              Plate I. Linda Gould
            </figcaption>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical hairline */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* Paragraph 1: body with drop cap */}
      <section className="px-4 md:px-12 lg:px-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
              In Her Own Words
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground mb-10 leading-tight">
              On pain, sight-reading, and the fatigue that never arrives.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
              <p className="[&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[5rem] [&::first-letter]:leading-[0.85] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                The pain aspect of the 7/8 keyboard is quite amazing. Sight-reading
                probably has the most dramatic effect. When you are sight reading
                difficult music (especially with other chamber musicians) you do not
                have the time to work out the easiest way of playing a passage, you
                just plow through it. I am talking about pieces like Brahms Horn
                Trio, Saint Saens Piano Trios, Frank Trios. I have found on a regular
                size keyboard I can last about an hour and then my hands and entire
                arms start to feel tired. If I persist, within about 20 minutes I am
                in pain and must stop. Playing the similar pieces on the 7/8 keyboard
                I can sight-read for over two hours completely pain free. It simply
                is not an issue. I can play large chords, octave passages, leaps,
                huge dynamic ranges and my brain fatigues long before my fingers or
                arms. The 7/8 keyboard has turned an endurance session into pure
                pleasure. I can&rsquo;t begin to describe how much fun it is to be
                able to access the notes so easily without fatigue.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pull quote with ornament */}
      <section className="py-32 my-16 bg-card border-y border-border relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center">
          <span className="font-[family-name:var(--font-display)] text-lg text-accent leading-none">
            &#10087;
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
            It IS Easy!
          </p>
          <div className="flex flex-col items-center">
            <div className="w-12 h-px bg-primary mb-4" />
            <cite className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground not-italic block font-[family-name:var(--font-inter)]">
              Linda Gould
            </cite>
            <span className="text-sm italic text-foreground/60 mt-1">
              after her first afternoon with the DS Keyboard, 1994
            </span>
          </div>
        </AnimatedSection>
      </section>

      {/* Paragraph 2: Rhapsody in Blue anecdote with archival image */}
      <section className="px-4 md:px-12 lg:px-24 py-24">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:col-span-5">
            <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
              <div className="relative aspect-[4/5] overflow-hidden [filter:grayscale(85%)_sepia(20%)_contrast(1.05)]">
                <Image
                  src="/home_linda-web.jpg"
                  alt="Linda Gould at the 7/8 grand"
                  fill
                  className="object-cover"
                />
              </div>
            </figure>
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-primary/40" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-primary/40" />
            <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 font-[family-name:var(--font-inter)] pl-2">
              Plate II. At the 7/8 Grand
            </figcaption>
          </AnimatedSection>

          <AnimatedSection delay={100} className="lg:col-span-7">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
              June 2005
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground mb-8 leading-tight">
              Rhapsody in Blue.
            </h3>
            <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
              <p>
                Last year in June (2005) I had a fabulous opportunity to perform
                Gershwin&rsquo;s Rhapsody in Blue with orchestra. My wonderful
                husband moved my 7/8 grand to both concert halls for the Saturday
                and Sunday performance. It was fantastic! I felt so secure with the
                big chords and played the piece with ease. I was freed up from all
                technical issues and could concentrate on making music.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical hairline */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* Extended bio / closing line */}
      <section className="px-4 md:px-12 lg:px-24 pb-24">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
              About Linda Gould
            </p>
            <p className="text-lg md:text-xl leading-[1.7] text-foreground/80 italic font-[family-name:var(--font-display)]">
              Linda Gould began playing piano at age three and debuted at age
              eleven. Throughout her youth in British Columbia she won
              first-place medals six times in provincial competitions. She
              studied at the University of Victoria under Robin Wood, earning
              her Bachelor of Music in performance with distinction, and
              received her ARCT. Having abandoned her concert-artist aspirations
              because of playing-related pain, she purchased a DS5.5 keyboard
              in spring 1996, reclaiming her musical career.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-8 pt-16 pb-24 border-t border-border flex flex-col items-center">
        <AnimatedSection className="text-center max-w-2xl flex flex-col items-center px-6">
          <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
            Continue
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-6 text-foreground">
            Follow the Story Further
          </h3>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            Read the Foundation&rsquo;s full narrative, or explore the benefits
            pianists have found in narrower keys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/our-story"
              className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
            >
              Our Story
            </Link>
            <Link
              href="/chris-donison-testimonial"
              className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
            >
              Read Donison&rsquo;s Testimonial
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  )
}
