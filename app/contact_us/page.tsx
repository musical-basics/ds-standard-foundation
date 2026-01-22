"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Mail, Facebook, Youtube, ArrowRight } from "lucide-react"

const directors = [
  {
    name: "David Steinbuhler",
    role: "President",
    image: "/the_ds_standard_David-Linda.jpg",
    email: "dskeyboards@tbscc.com",
    description: "For inquiries about the DS Standard, the manufacture of DS Keyboards, and for customers interested in a purchase.",
  },
  {
    name: "Barry Cressman",
    role: "Secretary",
    image: null,
    email: "bcressman@zoominternet.net",
    description: "For general inquiries about the Foundation and donations to the Foundation.",
  },
  {
    name: "Carol Leone",
    role: "Board Member",
    image: "/the_ds_standard_Carol-Leone-with-keyboard-Corped.jpg",
    email: "cleone@mail.smu.edu",
    description: "For inquiries from educational institutions with an interest in discussing how the Foundation might help them.",
  },
  {
    name: "Rhonda Boyle",
    role: "Board Member",
    image: "/about_rhonda-boyle.jpg",
    email: "info@paskpiano.org",
    description: "For general inquiries about research into hand size and the DS Standard and those interested in connecting with the Pianists for Alternatively Sized Keyboards network.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Get in Touch
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              Contact Us
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Have questions about the DS Standard? We&apos;re here to help.
              Reach out to the appropriate director based on your inquiry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Foundation Directors
              </h2>
              <p className="text-xl text-muted-foreground">
                Contact the right person for your inquiry
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directors.map((director, index) => (
              <AnimatedSection key={director.name} delay={index * 100}>
                <div className="p-8 bg-background rounded-3xl border border-border hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  {director.image && (
                    <div className="mb-6 relative aspect-video rounded-xl overflow-hidden bg-muted/30">
                      <Image
                        src={director.image}
                        alt={director.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {director.name}
                    </h3>
                    <p className="text-primary font-medium">{director.role}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {director.description}
                  </p>

                  <a
                    href={`mailto:${director.email}`}
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{director.email}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-center text-balance">
              &ldquo;The DS keyboard has offered our piano students at the University of Memphis
              a wonderful opportunity to expand their repertoire. It has promoted talent
              inclusivity amongst different hand sizes. For those students with smaller hand
              spans, it has changed our lesson focus to artistic concepts of phrasing, color,
              and dynamic shaping vs. discussing the cumbersome aspects of a piece for their
              hands.&rdquo;
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="text-center">
              <p className="text-foreground font-semibold">Dr. Artina McCain</p>
              <p className="text-muted-foreground">
                Assistant Professor of Piano, Coordinator of Piano Studies
                <br />
                The University of Memphis Rudi E. Scheidt School of Music
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social & Address */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Social Media */}
            {/* Social Media */}
            <AnimatedSection>
              <div className="p-8 bg-card rounded-3xl border border-border h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Connect With Us
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Follow our journey and stay updated on the latest news, events, and
                    research related to alternatively sized keyboards.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="http://facebook.com/dsstandardfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all group"
                  >
                    <Facebook className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Facebook
                    </span>
                  </a>

                  <a
                    href="https://www.youtube.com/playlist?list=PLHBn-VaaOCGcGEZpA2CFBsMVP2RvcfiXb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all group"
                  >
                    <Youtube className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      YouTube
                    </span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Address */}
            <AnimatedSection delay={100}>
              <div className="p-8 bg-card rounded-3xl border border-border h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Mailing Address
                  </h3>
                  <div className="space-y-2 text-muted-foreground text-lg mb-8">
                    <p>
                      <strong className="text-foreground">DS Standard Foundation</strong>
                    </p>
                    <p>600 North Brown Street</p>
                    <p>Titusville, Pennsylvania 16354</p>
                    <p>USA</p>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-xl">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground block mb-1">501(c)(3) Non-Profit</strong>
                    The DS Standard Foundation is a registered non-profit organization.
                    Contributions by US citizens are tax-deductible.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Quick Links
              </h2>
              <p className="text-muted-foreground">
                Explore more about the DS Standard Foundation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={100}>
              <Link
                href="/the_ds_standard"
                className="block p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group text-center"
              >
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  The DS Standard
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn about our research
                </p>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Link
                href="/products"
                className="block p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group text-center"
              >
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Products
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore our keyboards
                </p>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Link
                href="/projects"
                className="block p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group text-center"
              >
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Projects
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  See our impact
                </p>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Link
                href="/donations"
                className="block p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group text-center"
              >
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Donations
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Support our mission
                </p>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-balance">
              Ready to Get Started?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-xl text-background/80 mb-12 text-balance">
              Whether you&apos;re a pianist looking for the right keyboard size or an
              institution interested in our programs, we&apos;re excited to hear from you.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
                <a href="mailto:dskeyboards@tbscc.com">
                  Email Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-background/30 text-background hover:bg-background/10 bg-transparent"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
