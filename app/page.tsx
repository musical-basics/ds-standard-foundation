"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { StickySection } from "@/components/sticky-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Music, Hand, Zap, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              DS Standard Foundation
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 text-balance">
              Alternative Keyboards
              <br />
              <span className="text-primary">That Fit Every Hand</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
              Enabling pianists to achieve their full musical potential while avoiding injury, 
              with keyboards engineered to match every hand size.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/the_ds_standard">
                  Discover the Standard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative -mt-20 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative aspect-[3/1] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/home_Poster-3-Keyboards-Wide4-1024x307.jpg"
                alt="Three DS Standard keyboard sizes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-balance">
              Donison-Steinbuhler Standard
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Nearly all other musical instruments are manufactured in multiple sizes. 
              The DS Standard makes it possible for every pianist to choose which keyboard size 
              is most appropriate for their particular hands.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Why DS Standard?
              </h2>
              <p className="text-xl text-muted-foreground">
                Four key benefits for every pianist
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <AnimatedSection delay={100}>
              <div className="group relative bg-card rounded-3xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                <div className="absolute top-8 right-8 p-3 rounded-2xl bg-primary/10">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  Benefits of Narrower Keys
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use correct fingerings, play broken-chord formations in one hand position, 
                  and achieve proper balance with less strain.
                </p>
                <Link 
                  href="/the_ds_standard#benefits"
                  className="inline-flex items-center mt-6 text-primary font-medium hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Feature 2 */}
            <AnimatedSection delay={200}>
              <div className="group relative bg-card rounded-3xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                <div className="absolute top-8 right-8 p-3 rounded-2xl bg-primary/10">
                  <Hand className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  It&apos;s Easy to Adapt
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pianists adapt to the smaller keyboard in as little as 20-30 minutes, 
                  experiencing immediate comfort and control.
                </p>
                <Link 
                  href="/the_ds_standard#easy"
                  className="inline-flex items-center mt-6 text-primary font-medium hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Feature 3 */}
            <AnimatedSection delay={300}>
              <div className="group relative bg-card rounded-3xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                <div className="absolute top-8 right-8 p-3 rounded-2xl bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  Increased Power & Stamina
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When the hand is in its natural relaxed position, muscle engagement is reduced 
                  and power is increased.
                </p>
                <Link 
                  href="/the_ds_standard#power"
                  className="inline-flex items-center mt-6 text-primary font-medium hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Feature 4 */}
            <AnimatedSection delay={400}>
              <div className="group relative bg-card rounded-3xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                <div className="absolute top-8 right-8 p-3 rounded-2xl bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  Pain-Free Playing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sight-read for over two hours completely pain free. The keyboard has turned 
                  endurance sessions into pure pleasure.
                </p>
                <Link 
                  href="/donations#testimonials"
                  className="inline-flex items-center mt-6 text-primary font-medium hover:gap-2 transition-all"
                >
                  Read testimonials <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sticky Parallax Section - Testimonial */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/home_chris.jpg"
                    alt="Christopher Donison at the piano"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                Featured Testimonial
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                &ldquo;I have actually experienced getting larger hands.&rdquo;
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Although that sounds impossible, this was achieved by creating a 7/8-size 
                  keyboard for my Steinway concert grand. I thus began the great discovery 
                  of what it feels like to play the piano with larger hands.
                </p>
                <p>
                  It was like an epiphany. All the touches and techniques in piano studies 
                  and I stress all of them were made easier by a factor of a hundred.
                </p>
                <p>
                  I could finally use the correct fingerings. Wide, sweeping, left-hand 
                  arpeggiated figures so prevalent in Romantic music become possible.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-foreground font-semibold">
                Christopher Donison
              </p>
              <p className="text-muted-foreground">
                Music Director, Shaw Festival
              </p>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* Second Testimonial */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            reverse
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/home_linda-web.jpg"
                    alt="Linda Gould"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                Pain-Free Performance
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                &ldquo;The 7/8 keyboard has turned an endurance session into pure pleasure.&rdquo;
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The pain aspect of the 7/8 keyboard is quite amazing. Sight-reading 
                  probably has the most dramatic effect. On a regular size keyboard I can 
                  last about an hour and then my hands and entire arms start to feel tired.
                </p>
                <p>
                  Playing similar pieces on the 7/8 keyboard I can sight-read for over 
                  two hours completely pain free! I can play large chords, octave passages, 
                  leaps, huge dynamic ranges and my brain fatigues long before my fingers or arms.
                </p>
                <p>
                  I can&apos;t begin to describe how much fun it is to be able to access 
                  the notes so easily without fatigue.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-foreground font-semibold">
                Linda Gould
              </p>
              <p className="text-muted-foreground">
                First DS Keyboard Owner
              </p>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                The Numbers Speak
              </h2>
              <p className="text-xl text-background/70">
                Research-backed evidence for alternatively sized keyboards
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center p-8 rounded-3xl bg-background/5 backdrop-blur-sm">
                <p className="text-6xl md:text-7xl font-bold text-accent mb-4">87%</p>
                <p className="text-background/80 text-lg">
                  of adult females are limited by conventional keyboard size
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center p-8 rounded-3xl bg-background/5 backdrop-blur-sm">
                <p className="text-6xl md:text-7xl font-bold text-accent mb-4">24%</p>
                <p className="text-background/80 text-lg">
                  of adult males benefit from alternatively sized keyboards
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center p-8 rounded-3xl bg-background/5 backdrop-blur-sm">
                <p className="text-6xl md:text-7xl font-bold text-accent mb-4">30+</p>
                <p className="text-background/80 text-lg">
                  years of research and development
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-balance">
              Ready to Transform Your Playing?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground mb-12 text-balance">
              Join the growing community of pianists who have discovered the freedom 
              of playing on a keyboard that fits their hands.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                <Link href="/donations">Support Our Mission</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
