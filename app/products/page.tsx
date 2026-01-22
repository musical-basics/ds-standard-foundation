"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { StickySection } from "@/components/sticky-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, Check } from "lucide-react"

const grandPianoOptions = [
  {
    title: "Complete New Action",
    price: "$16,800",
    description: "A complete new action with its own action stack (new hammers and wippens)",
    features: [
      "New hammers and wippens included",
      "Interchangeable with original keyboard in ~5 minutes",
      "Perfect for concert stage use",
      "Ships back a few days after measuring",
    ],
    highlight: true,
  },
  {
    title: "DS Standard Keyboard",
    price: "$10,800",
    description: "A DS Standard keyboard with new frame using original action stack",
    features: [
      "Original hammers and wippens mounted on new frame",
      "Preserves piano's original sound",
      "Technician can restore original keyboard",
      "3 months build time after measuring",
    ],
    highlight: false,
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Precision Crafted
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              Products
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Two ways to bring the DS Standard to your grand piano, plus partnership 
              options for upright pianos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/products_DS5.5-Yamaha-CFX-3-1024x711.jpg"
                alt="DS5.5 keyboard on Yamaha CFX"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grand Piano Options */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                DS Standard for Grand Pianos
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Two options to purchase a DS Standard keyboard for your grand piano
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {grandPianoOptions.map((option, index) => (
              <AnimatedSection key={option.title} delay={index * 100}>
                <div
                  className={`relative p-8 md:p-12 rounded-3xl border h-full flex flex-col ${
                    option.highlight
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border"
                  }`}
                >
                  {option.highlight && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs font-medium">
                      Recommended
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <p className={`text-sm uppercase tracking-wider mb-2 ${
                      option.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                      Option {index + 1}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                    <p className={`${option.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {option.description}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-4xl font-bold">{option.price}</p>
                    <p className={`text-sm ${option.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      plus shipping and installation
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          option.highlight ? "text-primary-foreground" : "text-primary"
                        }`} />
                        <span className={option.highlight ? "text-primary-foreground/90" : "text-foreground"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    variant={option.highlight ? "secondary" : "default"}
                    className="rounded-full w-full"
                  >
                    <Link href="/contact_us">
                      Inquire Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200}>
            <div className="mt-12 p-6 bg-muted rounded-2xl text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Note:</strong> For both options, your action must 
                first be sent to us in Titusville, PA for precise measurements. We provide 
                a shipping box for this purpose.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/products_Bass-Treble-Engineering-1024x696.jpg"
                    alt="DS Standard keyboard engineering"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                Precision Engineering
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                Built to Concert Standards
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Every DS Standard keyboard is precision-engineered using computer-driven 
                  manufacturing processes developed over three decades.
                </p>
                <p>
                  The engineering is extremely accurate in all regards. The design of key 
                  leveling alone is genius and has made what was once a complex adjustment 
                  into a fifteen minute job.
                </p>
                <p>
                  From the strength of the keys to the response of the action, every component 
                  meets the highest standards for professional use.
                </p>
              </div>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* Technician Quote */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-center text-balance">
              &ldquo;As the piano technician at Ohio University, I am pleased to add my voice 
              to those praising the DS Standard keyboards. From a technical standpoint, these 
              pianos are a joy to work on. The engineering is extremely accurate in all regards. 
              I am continually impressed with the precision and manufacture of all the components.&rdquo;
            </blockquote>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="text-center">
              <p className="text-background font-semibold">Christopher D. Purdy R.P.T.</p>
              <p className="text-background/70">
                Registered Piano Technician, Ohio University School of Music
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upright Pianos */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                DS Standard for Upright Pianos
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Through our partnership with Hailun, the only major acoustic piano manufacturer 
                offering DS keyboards
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={100}>
              <div className="relative aspect-[16/8] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/products_DS6.0R-Hailun-Upright-1024x504.jpg"
                  alt="DS6.0R Hailun Upright Piano"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground mt-4">DS6.0 Hailun Upright</p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative aspect-[16/8] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/products_DS5.5R-Hailun-Upright-1024x446.jpg"
                  alt="DS5.5R Hailun Upright Piano"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground mt-4">DS5.5 Hailun Upright</p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <div className="bg-background rounded-3xl p-8 md:p-12 border border-border max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hailun HU1P with DS Keyboard
              </h3>
              <p className="text-4xl font-bold text-primary mb-2">US$15,800</p>
              <p className="text-muted-foreground mb-6">
                Available in DS5.5 and DS6.0 sizes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="rounded-full">
                  <a
                    href="http://www.hailun-pianos.com/my-size-keys/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    USA Customers: Vienna International
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-transparent">
                  <Link href="/contact_us">
                    International Inquiries
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-center text-balance">
              &ldquo;In 2014, the School of Music at the University of Central Oklahoma was 
              extremely fortunate to acquire a DS6.0 keyboard action fitted to a Steinway D 
              concert grand. Students with smaller hand sizes have since been able to 
              unhesitatingly take on and confidently perform repertoire which would normally 
              have been off limits.&rdquo;
            </blockquote>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="text-center">
              <p className="text-foreground font-semibold">Dr. David Forbat</p>
              <p className="text-muted-foreground">
                Professor of Piano, University of Central Oklahoma, School of Music
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-balance">
              Ready to Transform Your Piano?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground mb-12 text-balance">
              Contact us to discuss your needs and learn more about how we can help 
              you achieve your full musical potential.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="tel:+18148270296"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">(814) 827-0296</span>
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a
                href="mailto:dskeyboards@tbscc.com"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">dskeyboards@tbscc.com</span>
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact_us">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
