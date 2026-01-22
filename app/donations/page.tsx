"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { StickySection } from "@/components/sticky-section"
import { Button } from "@/components/ui/button"
import { CreditCard, Landmark, Building2, ShoppingBag, FileText, Heart, Piano, Trophy, Globe } from "lucide-react"

const donationMethods = [
  {
    icon: CreditCard,
    title: "Credit Card or PayPal",
    description: "Click the Donate button and enter your normal credit card and contact details. You do not need a PayPal account but you may use it if you have one.",
  },
  {
    icon: Landmark,
    title: "Send a Check",
    description: "DS Standard Foundation, 600 North Brown Street, Titusville, Pennsylvania 16354, USA. Contributions by US citizens are deductible on IRS Form 1040 Schedule A.",
  },
  {
    icon: Building2,
    title: "Bank Transfer",
    description: "PNC Bank, 123 Diamond Street, Titusville, PA 16354. Routing# 043300738, Account# 6013094058. No fees for international transfers.",
  },
  {
    icon: ShoppingBag,
    title: "Amazon Smile",
    description: "Name the DS Standard Foundation as the charitable organization of your choice every time you make a purchase through Amazon Smile.",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Name the DS Standard Foundation as a beneficiary in your estate plan to create a lasting legacy for future pianists.",
  },
]

const fundsUsage = [
  {
    icon: Piano,
    title: "New Keyboards for Education",
    description: "Making new alternatively sized keyboards for loan to educational institutions. A new DS keyboard costs US$9,800 plus shipping. A new DS Keyboard with alternative action costs US$14,800 plus shipping.",
  },
  {
    icon: Trophy,
    title: "Support Competitions",
    description: "Subsidizing piano competitions that make DS Standard keyboards available to contestants, opening doors for pianists of all hand sizes.",
  },
  {
    icon: Globe,
    title: "Promote Our Mission",
    description: "Promoting our global mission through research, publications, conferences, and awareness campaigns.",
  },
]

export default function DonationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Support Our Mission
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              Donations
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              We invite you to help us accomplish the mission of the DS Standard Foundation.
              Your contribution helps pianists worldwide achieve their full potential.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <div className="mt-12">
              <Button asChild size="lg" className="rounded-full px-8">
                <a
                  href="https://www.paypal.com/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-6 text-balance">
              &ldquo;The DS keyboard at St. Olaf College has been truly transformative for a 
              significant number of gifted young artists, on campus and in our community. 
              An invaluable resource for pianists returning to play following a playing-related 
              injury... a beloved pedagogical resource.&rdquo;
            </blockquote>
            <p className="font-semibold">Dr. Kathryn Ananda-Owens</p>
            <p className="text-primary-foreground/80">
              Professor of Music [Piano], St. Olaf College, Northfield, Minnesota
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Donate */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Contributions May Be Made By
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 100}>
                <div className="p-8 bg-card rounded-3xl border border-border h-full hover:border-primary/30 transition-all duration-300">
                  <div className="p-3 rounded-2xl bg-primary/10 w-fit mb-6">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Where Funds Go */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Funds Raised Go To
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your donation directly supports these initiatives
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fundsUsage.map((usage, index) => (
              <AnimatedSection key={usage.title} delay={index * 100}>
                <div className="p-8 bg-background rounded-3xl border border-border h-full text-center">
                  <div className="p-4 rounded-2xl bg-primary/10 w-fit mx-auto mb-6">
                    <usage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {usage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {usage.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Stories of Impact
              </h2>
              <p className="text-xl text-muted-foreground">
                See how DS keyboards have changed lives
              </p>
            </div>
          </AnimatedSection>

          <StickySection
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/donations_chris.jpg"
                    alt="Christopher Donison"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                &ldquo;Getting Larger Hands&rdquo;
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I have actually experienced &ldquo;getting larger hands.&rdquo; Although 
                  that sounds impossible, this was achieved by creating a 7/8-size keyboard 
                  for my Steinway concert grand.
                </p>
                <p>
                  I could finally use the correct fingerings. Wide, sweeping, left-hand 
                  arpeggiated figures so prevalent in Romantic music become possible. There 
                  was an increase of power. It was easier to make large leaps accurately.
                </p>
                <p>
                  I realize now, looking back, that most of the time I spent practicing was 
                  used trying to overcome difficulties because of my hand-size.
                </p>
                <p className="text-foreground font-semibold">
                  My great desire is for the small-handed pianists of the world to experience 
                  the great joy of playing the piano when the struggle of overcoming the 
                  limitations imposed by hand-size are gone.
                </p>
              </div>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* Second Story */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            reverse
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/donations_linda-web.jpg"
                    alt="Linda Gould"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Pain-Free Performance
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The pain aspect of the 7/8 keyboard is quite amazing. Sight-reading probably 
                  has the most dramatic effect.
                </p>
                <p>
                  I have found on a regular size keyboard I can last about an hour and then my 
                  hands and entire arms start to feel tired. If I persist, within about 20 
                  minutes I am in pain and must stop.
                </p>
                <p>
                  Playing similar pieces on the 7/8 keyboard I can sight-read for over two 
                  hours completely pain free! I can play large chords, octave passages, leaps, 
                  huge dynamic ranges and my brain fatigues long before my fingers or arms.
                </p>
                <p className="text-foreground font-semibold">
                  The 7/8 keyboard has turned an endurance session into pure pleasure. I 
                  can&apos;t begin to describe how much fun it is to be able to access the 
                  notes so easily without fatigue.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-foreground font-semibold mt-8">Linda Gould</p>
              <p className="text-muted-foreground">First DS Keyboard Owner</p>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* Nicole's Recital */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl max-w-sm mx-auto">
                <Image
                  src="/donations_Nicoles-Recital-252x300.jpg"
                  alt="Nicole Halton at her recital"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Nicole Halton&apos;s Recital Testimony
                </h3>
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                  &ldquo;The greatest difference that I noticed while performing on the reduced 
                  size keyboard was the level of comfort I felt at the piano. I felt that for 
                  the first time I was in command of the instrument instead of feeling limited 
                  by the physical difficulty of playing the piano.&rdquo;
                </blockquote>
                <p className="text-muted-foreground leading-relaxed">
                  In preparation for her recital, Nicole discovered that she could memorize 
                  music more quickly on the reduced size keyboard because the patterns were 
                  easier to feel and she could create better pathways for her hands and fingers.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="p-8 bg-card rounded-3xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Tax Deductible Donations
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The DS Standard Foundation is a 501(c)(3) non-profit organization. Contributions 
                made by US citizens are deductible on IRS Form 1040 Schedule A. Depending upon 
                the tax laws in your country of residence, this may be true for citizens of 
                other countries as well. Please check with your tax advisor.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-balance">
              Make a Difference Today
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground mb-12 text-balance">
              Your generosity helps us provide DS keyboards to educational institutions 
              and supports pianists in achieving their full potential.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <a
                  href="https://www.paypal.com/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                <Link href="/contact_us">Contact for Other Options</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
