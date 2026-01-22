"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { StickySection } from "@/components/sticky-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Ruler, TestTube, Award, Wrench, Play } from "lucide-react"

const standardSizes = [
  {
    name: "DS6.5",
    description: "Conventional Keyboard",
    octave: '6.500" / 16.51cm',
    width: '48.25"',
    badge: "Standard",
  },
  {
    name: "DS6.0",
    description: "Universal Keyboard",
    octave: '6.000" / 15.24cm',
    width: '44.53"',
    badge: "Popular",
    highlight: true,
  },
  {
    name: "DS5.5",
    description: "7/8th Keyboard",
    octave: '5.538" / 14.06cm',
    width: '41.10"',
    badge: "Compact",
    highlight: true,
  },
]

const childSizes = [
  { name: "DS5.1", octave: '5.112" / 12.98cm', width: '37.93"' },
  { name: "DS4.7", octave: '4.719" / 11.98cm', width: '35.02"', description: "3/4th Keyboard" },
  { name: "DS4.3", octave: '4.356" / 11.06cm', width: '32.32"' },
  { name: "DS4.0", octave: '4.021" / 10.21cm', width: '29.83"', description: "5/8th Keyboard" },
]

const quickLinks = [
  { id: "research", label: "Our Research", icon: TestTube },
  { id: "method", label: "Our Method", icon: Ruler },
  { id: "standard", label: "The Standard", icon: Award },
  { id: "story", label: "Our Story", icon: BookOpen },
  { id: "easy", label: "It IS Easy", icon: Play },
  { id: "kit", label: "Technician's Kit", icon: Wrench },
]

export default function DSStandardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              The Foundation of Change
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 text-balance">
              The DS Standard<sup className="text-2xl md:text-4xl">®</sup>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              A precisely engineered system of keyboard sizes that accommodates virtually 
              every hand, backed by decades of research and real-world performance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/the_ds_standard_DS6.0-Straightened-1-1024x788.jpg"
                alt="DS6.0 Keyboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Need Section */}
      <section className="py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-balance">
              The Need for the DS Standard<sup className="text-lg">®</sup>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Nearly all other musical instruments are manufactured in multiple sizes and 
              with design differences that accommodate the uniqueness of a particular artist.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The DS Standard makes it possible for every pianist to choose which keyboard 
              size is most appropriate for their particular hands and go from home to school 
              or a performance venue in the confidence that a keyboard bearing the DS logo 
              in their preferred size will be a perfect match.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Three Sizes for Adults */}
      <section id="standard" className="py-32 bg-background scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Three Sizes for Adult Hands
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Research has demonstrated that most adult pianists find today&apos;s conventional 
                keyboard limits their ability to play.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standardSizes.map((size, index) => (
              <AnimatedSection key={size.name} delay={index * 100}>
                <div
                  className={`relative p-8 rounded-3xl border transition-all duration-500 hover:shadow-xl ${
                    size.highlight
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:border-primary/30"
                  }`}
                >
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      size.highlight
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {size.badge}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{size.name}<sup className="text-lg">®</sup></h3>
                  <p className={`mb-6 ${size.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {size.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className={`text-xs uppercase tracking-wider ${size.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                        Octave Size
                      </p>
                      <p className="font-semibold">{size.octave}</p>
                    </div>
                    <div>
                      <p className={`text-xs uppercase tracking-wider ${size.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                        Overall Width
                      </p>
                      <p className="font-semibold">{size.width}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Child Sizes */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Four Child Size Keyboards
              </h3>
              <p className="text-muted-foreground">
                Additionally engineered for young pianists
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {childSizes.map((size, index) => (
              <AnimatedSection key={size.name} delay={index * 50}>
                <div className="p-6 bg-card rounded-2xl border border-border text-center">
                  <h4 className="text-xl font-bold text-foreground mb-1">{size.name}</h4>
                  {size.description && (
                    <p className="text-xs text-muted-foreground mb-3">{size.description}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{size.octave}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hand Size Chart */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Hand Span Research Data
              </h2>
              <p className="text-muted-foreground">
                Data collected at the 2004 MTNA National Convention
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="relative aspect-[3/1] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/the_ds_standard_Hand-Size-Chart-Data-1024x336.jpg"
                alt="Hand size chart data showing relationship between hand span and keyboard size"
                fill
                className="object-contain bg-card"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Research */}
      <section id="research" className="py-32 bg-card scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            stickyContent={
              <AnimatedSection>
                <div className="space-y-6">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/the_ds_standard_David-Linda.jpg"
                      alt="Hosts Linda and David Steinbuhler"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Hosts Linda and David Steinbuhler
                  </p>
                </div>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                Our Research
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From 1998 to 2005 Steinbuhler & Company (which in 2018 became the DS Standard 
                Foundation) extended an invitation to pianists to come to Titusville, Pennsylvania 
                and discover what size piano keyboard was most comfortable for them.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Looking back at the activity that took place in our showroom, we now realize 
                that it constituted vital research. As far as we know there has been no other 
                comparable research in the 320 year history of the piano.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The hands we observed were ones that had reached maturity, both male and female. 
                The pianists who came were motivated by the desire to find the keyboard size 
                that best suited them. In an uninterrupted afternoon or an entire weekend they 
                worked with keyboards of every size.
              </p>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* Our Method */}
      <section id="method" className="py-32 bg-background scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            reverse
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/the_ds_standard_Keyboards2.jpg"
                    alt="Various keyboard sizes for testing"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Keyboards for the Steinway B
                </p>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                Our Method
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The average modern conventional keyboard measures just over 48&quot;. The first 
                keyboards we built were 42&quot; in width. By 1998 we also had keyboards that 
                measured 39&quot; and 45&quot;.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We immediately learned that there was strong interest in more than just one 
                additional size. The great relief experienced by the 42&quot; keyboard was 
                accompanied by a desire to go smaller. There were also those pianists who 
                desired relief but found the 42&quot; keyboard too small.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It quickly became very clear that we needed at least two more keyboard sizes 
                in addition to the conventional keyboard to satisfy the range of adult hands.
              </p>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* DS Standard Ratio */}
      <section className="py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              The DS Standard Ratio<sup className="text-lg">™</sup>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="text-7xl md:text-9xl font-bold text-accent mb-8 font-mono">
              48/52
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl text-background/80 leading-relaxed mb-8">
              The percentage jump from one keyboard size to the next is always the same. 
              Multiply any octave size in the DS Standard by this ratio (≈ 0.923) and the 
              next lower size is the result.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <p className="text-background/60">
              This elegant mathematical relationship ensures consistency across all keyboard sizes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-32 bg-card scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/the_ds_standard_David-Linda-Chris.jpg"
                    alt="David, Linda, and Christopher"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  David, Linda, and Christopher on the occasion of measuring Linda&apos;s piano
                </p>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                Our Story
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                A Big Idea
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A chance meeting in the summer of 1991 changed my life. I was visiting the 
                  Shaw Festival in Niagara-On-The-Lake and providentially stayed at the bed 
                  and breakfast run by Christopher Donison, the Festival&apos;s music director.
                </p>
                <p>
                  Christopher had a 7/8 keyboard installed in his concert grand piano! An octave 
                  on his keyboard was equal to a 7th on the conventional keyboard! While studying 
                  music at the University of Victoria, he realized that his small hand size was 
                  preventing him from mastering much of the great piano repertoire.
                </p>
                <p>
                  I play the piano a little, and the ease with which I adapted to his smaller 
                  keyboard amazed me. Christopher explained how a whole new unknown world opened 
                  before him when he first got the keyboard.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-foreground font-semibold italic text-xl mt-8">
                &ldquo;This,&rdquo; I said, &ldquo;is a big idea!&rdquo;
              </p>
              <p className="text-muted-foreground mt-2">
                David Steinbuhler, Founder
              </p>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* It IS Easy */}
      <section id="easy" className="py-32 bg-muted scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            reverse
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/the_ds_standard_linda-web.jpg"
                    alt="Linda Gould at the piano"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                &ldquo;It IS Easy!&rdquo;
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In the freedom of having no preconceived ideas about how to build keyboards, 
                  I started tinkering more or less as a hobby. One thing led to another, and by 
                  the summer of 1994, on the loading dock of our textile plant, using a computer 
                  driven router, a coworker and I built our first keyboard.
                </p>
                <p>
                  Linda Gould, an acquaintance of Christopher&apos;s, flew from Victoria, BC to 
                  try it. She had given up her dream of becoming a concert artist because of 
                  the pain she experienced when playing.
                </p>
                <p className="text-foreground font-semibold text-xl">
                  I will never forget her exclaiming &ldquo;It IS Easy!&rdquo; after spending 
                  an emotional afternoon with the piano.
                </p>
                <p>
                  On the spot Linda made the decision to buy a keyboard for her Yamaha grand. 
                  Two months later we sold our first DS Standard keyboard.
                </p>
              </div>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* Technician's Kit */}
      <section id="kit" className="py-32 bg-background scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/the_ds_standard_Technicians-Kit-Web.jpg"
                  alt="The Technician's Kit"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            
            <div className="space-y-6">
              <AnimatedSection>
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                  The Technician&apos;s Kit
                </h2>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  David supplies a kit of jigs and measuring tools to enable accurate 
                  measurements. He has built many DS keyboards for universities in America, 
                  and the first arrived in Australia for local musician Rhonda Boyle.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Building keyboards threw up the issue of measuring the piano. In America 
                  David can travel to and measure, but for overseas orders it becomes impractical. 
                  Hence the development of the technician&apos;s kit to find technicians competent 
                  in providing the necessary measurements.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <Button asChild className="rounded-full">
                  <Link href="/products">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8 text-balance">
              &ldquo;Our Music and Medicine department has conducted ground breaking research 
              on the relationship of hand pain in small-handed pianists to the use of the 
              standard size keyboard. And simultaneously, hard evidence that for smaller hands, 
              the smaller piano keyboard dramatically REDUCES this pain.&rdquo;
            </blockquote>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-foreground font-semibold">
              Dr. Pamela Mia Paul
            </p>
            <p className="text-muted-foreground">
              Regents Professor of Piano, University of North Texas College of Music
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-balance">
              Experience the DS Standard
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground mb-12 text-balance">
              Discover how the right keyboard size can transform your playing experience.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/products">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                <Link href="/contact_us">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
