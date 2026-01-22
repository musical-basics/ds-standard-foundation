"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Heart, GraduationCap, BookOpen } from "lucide-react"

const purposes = [
  {
    icon: Target,
    title: "Encourage Availability",
    description: "To encourage the availability and use of alternatively sized keyboards using the DS Standard®",
  },
  {
    icon: Heart,
    title: "Raise Awareness",
    description: "To raise awareness of the possibilities for accomplishment that the various DS Standard® size keyboards offer",
  },
  {
    icon: GraduationCap,
    title: "Assist Institutions",
    description: "To assist educational institutions in the acquisition of DS Keyboards",
  },
  {
    icon: BookOpen,
    title: "Encourage Research",
    description: "To encourage research related to the use of alternatively sized keyboards",
  },
]

const boardMembers = [
  {
    name: "David Steinbuhler",
    role: "President",
    image: "/the_ds_standard_David-Linda.jpg",
    description: "Using his expertise in computer science and engineering, David has over the past three decades developed and perfected the ability to easily retrofit acoustic pianos with the highest quality alternatively sized keyboards. In May of 2018 David converted his manufacturing business, Steinbuhler & Company, into the non-profit DS Standard Foundation.",
  },
  {
    name: "Dr. Barry Cressman",
    role: "Secretary",
    image: null,
    description: "A native of New York and an alumnus of William and Mary, the University of St. Andrews, and Princeton, Barry has devoted his entire career to building non-profit corporations and philanthropy.",
  },
  {
    name: "Alex Steinbuhler",
    role: "Treasurer",
    image: "/the_ds_standard_Alex-at-router-1024x701.jpg",
    description: "Grandson of the Foundation's founder, Alex has a strong commitment to carrying on the Foundation's manufacturing operations. Since 2016 Alex has worked building piano actions and acquired high level skills in all aspects of their manufacture.",
  },
  {
    name: "Dr. Carol Leone",
    role: "Board Member",
    image: "/the_ds_standard_Carol-Leone-with-keyboard-Corped.jpg",
    description: "Chair of Piano Studies and Professor of Piano at Southern Methodist University's Meadows School of the Arts in Dallas, Texas. Considered today's leading performer, teacher, and researcher on alternatively sized piano keyboards for the benefit of pianists with smaller hand spans.",
  },
  {
    name: "Rhonda Boyle",
    role: "Board Member",
    image: "/about_Original-Action-Rhonda.jpg",
    description: "An eager student of the piano since her childhood in Melbourne, Australia, and an environmental scientist with expertise in urban planning. In 2009 Rhonda was the first pianist in Australia to own and play a DS5.5® Keyboard.",
  },
  {
    name: "Chase & Peter Steinbuhler",
    role: "Board Members",
    image: null,
    description: "Added in February 2025 to ensure the future of manufacturing operations. They manage a family-owned textile business that has been thriving in Titusville since 1897.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-background">
              <Image
                src="/about_DS-SF-Logo-1.png"
                alt="DS Standard Foundation Logo"
                fill
                className="object-contain p-2"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Our Foundation
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              About Us
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              The DS Standard Foundation, Inc. was established as a non-profit corporation
              in the Commonwealth of Pennsylvania, USA in 2018 and has been awarded 501(c)(3) status.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-relaxed text-balance">
                To set a standard for alternatively sized keyboards that is recognized globally,
                so that pianists, whether amateurs or professionals, may achieve their full
                musical potential while avoiding injury and perform with confidence anywhere
                in the world, knowing that a keyboard bearing the DS® logo will be the size
                with which they are familiar.
              </h2>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-center text-balance">
              &ldquo;Having the opportunity to perform and teach on DS keyboards for the last
              20 years has been an incredible gift! To fearlessly approach any significant work
              in the repertoire, knowing that it is within your grasp and that you needn&apos;t
              fear injury has been a dream come true for me and for my students with smaller
              hand spans.&rdquo;
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20">
                <Image
                  src="/the_ds_standard_Carol-Leone-with-keyboard-Corped.jpg"
                  alt="Dr. Carol Leone"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-foreground font-semibold">Dr. Carol Leone</p>
              <p className="text-muted-foreground">
                Chair of Piano Studies, Professor of Piano
                <br />
                SMU Meadows School of the Arts, Dallas, Texas
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Purposes */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Our Purposes
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {purposes.map((purpose, index) => (
              <AnimatedSection key={purpose.title} delay={index * 100}>
                <div className="flex gap-6 p-8 bg-card rounded-3xl border border-border hover:border-primary/30 transition-all duration-500">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-primary/10">
                      <purpose.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {purpose.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {purpose.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Quote */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-center text-balance">
              &ldquo;I cannot begin to describe the career-changing, and even life-changing,
              benefits our students have reaped from having these instruments to practice on daily.
              Their first response though was, &apos;Why did it take so long? Why did we have to
              suffer so unnecessarily?&apos;&rdquo;
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="text-center">
              <p className="text-background font-semibold">Barbara Lister-Sink, Ed.D.</p>
              <p className="text-background/70">
                Salem College School of Music, Director, Graduate Music Program
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Board of Directors
              </h2>
              <p className="text-xl text-muted-foreground">
                Leadership dedicated to making DS keyboards accessible worldwide
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <div className="p-8 bg-background rounded-3xl border border-border h-full flex flex-col">
                  {member.image && (
                    <div className="mb-6 relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {member.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Impact Through Research
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={100}>
              <div className="p-8">
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4">87%</p>
                <p className="text-muted-foreground text-lg">
                  of adult females are musically and technically limited by conventional keyboard size
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-8">
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4">24%</p>
                <p className="text-muted-foreground text-lg">
                  of adult males benefit from alternatively sized keyboards
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="p-8">
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4">100%</p>
                <p className="text-muted-foreground text-lg">
                  of young children are limited by standard keyboard size
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-balance">
              Join Our Mission
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground mb-12 text-balance">
              Help us make alternatively sized keyboards accessible to pianists everywhere.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/donations">
                  Support the Foundation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                <Link href="/contact_us">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
