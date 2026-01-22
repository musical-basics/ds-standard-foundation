"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { StickySection } from "@/components/sticky-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Trophy, Building2, FlaskConical } from "lucide-react"

const activeUniversities = [
  { name: "SMU Meadows School of the Arts", location: "Dallas", contact: "Carol Leone – Chair and Professor of Piano" },
  { name: "University of North Texas", location: "Denton", contact: "Pamela Mia Paul – Professor of Piano" },
  { name: "University of Wisconsin-Madison", location: "Madison", contact: "Jessica Johnson – Professor of Piano" },
  { name: "Salem College", location: "Winston-Salem", contact: "Barbara Lister-Sink – Professor of Piano" },
  { name: "St. Olaf College", location: "Northfield", contact: "Kathryn Ananda-Owens – Chair of the Music Department" },
  { name: "San Diego State University", location: "San Diego", contact: "Tina Chong – Assistant Professor of Piano" },
  { name: "Ohio University", location: "Athens", contact: "Chris Purdy RPT – Head Technician" },
  { name: "Booker T. Washington High School", location: "Dallas", contact: "Leonardo Zuno Fernandez" },
  { name: "Appalachian State University", location: "Boone", contact: "Catherine Garner – Keyboard Area Coordinator" },
  { name: "University of Memphis", location: "Memphis", contact: "Artina McCain – Associate Professor of Piano" },
  { name: "Johns Hopkins Peabody Institute", location: "Baltimore", contact: "Kris Chesky – Chair Performing Arts & Health" },
  { name: "University of Colorado Boulder", location: "Boulder", contact: "Jennifer Hayghe – Chair and Associate Professor" },
]

const loanUniversities = [
  { name: "University of Montreal", contact: "Justine Pelletier – guest Professor of Piano" },
  { name: "Eastman School of Music", location: "Rochester", contact: "Alan Chow – Chair of Piano" },
  { name: "Stanford University", contact: "Elizabeth Schumann – Assistant Professor of Piano" },
  { name: "Colorado Mesa University", location: "Grand Junction", contact: "Kathryn Mientka – guest Professor of Piano" },
  { name: "Institute of Music Physiology and Musicians Medicine", location: "Hannover, Germany", contact: "Florian Worschech – Postdoctoral Researcher" },
]

const researchUniversities = [
  { name: "University of Auckland", student: "Camila de Oliveira" },
  { name: "Shenandoah Conservatory", location: "Winchester", student: "Sarah Morris" },
  { name: "University of Michigan", location: "Ann Arbor", student: "Ceren Su Sahin" },
  { name: "University of Cape Town", student: "Leah Williams" },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Our Impact
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              Our Projects
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              From university partnerships to international competitions, discover how 
              the DS Standard Foundation is changing the landscape of piano education.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* History Section */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/projects_DS6.0R-Keyboard-at-SMU-Dallas-1024x494.jpg"
                    alt="DS6.0R Keyboard at SMU Dallas"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                A Short History
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                Pioneering Change
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In 1996 Linda Gould was the first to purchase a DS Keyboard. Her video 
                  &ldquo;My Piano Has a Secret&rdquo; powerfully describes the crying need 
                  for alternative keyboards to be adopted in the world of the piano.
                </p>
                <p>
                  In 2000 Dr. Carol Leone at SMU Meadows School of the Arts in Dallas was 
                  the first to study the practicality of using alternative size keyboards 
                  in a university setting.
                </p>
                <p>
                  Universities such as Texas Tech University and the University of 
                  Nebraska-Lincoln have collectively purchased many DS Keyboards, and today 
                  the movement continues to grow globally.
                </p>
              </div>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* Keyboard Loans Program */}
      <section className="py-32 bg-muted">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Loans of DS Keyboards
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                Universities and music schools are invited to apply to the DS Standard Foundation 
                to borrow a DS Keyboard for up to 12 months and have the option to purchase 
                the DS Keyboard at any time.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Priority Given To Institutions With:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Support from the piano faculty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Administrative backing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>A committed piano technician</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="rounded-full">
                  <Link href="/contact_us">
                    Apply for a Loan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Active Universities */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Universities Actively Working with DS Keyboards
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeUniversities.map((uni, index) => (
              <AnimatedSection key={uni.name} delay={index * 50}>
                <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-semibold text-foreground mb-1">{uni.name}</h3>
                  {uni.location && (
                    <p className="text-sm text-muted-foreground mb-2">{uni.location}</p>
                  )}
                  <p className="text-sm text-primary">{uni.contact}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Universities */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Universities Currently Studying DS Keyboards on Loan
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanUniversities.map((uni, index) => (
              <AnimatedSection key={uni.name} delay={index * 50}>
                <div className="p-6 bg-background rounded-2xl border border-border">
                  <h4 className="font-semibold text-foreground mb-1">{uni.name}</h4>
                  {uni.location && (
                    <p className="text-sm text-muted-foreground mb-2">{uni.location}</p>
                  )}
                  <p className="text-sm text-primary">{uni.contact}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10">
                <FlaskConical className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Universities Supporting Student Research
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchUniversities.map((uni, index) => (
              <AnimatedSection key={uni.name} delay={index * 50}>
                <div className="p-6 bg-card rounded-2xl border border-border text-center">
                  <h4 className="font-semibold text-foreground mb-1">{uni.name}</h4>
                  {uni.location && (
                    <p className="text-sm text-muted-foreground mb-2">{uni.location}</p>
                  )}
                  <p className="text-sm text-primary">{uni.student}</p>
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
              &ldquo;Since the life-changing moment I started practicing and performing on 
              an alternatively-sized piano keyboard, I experienced a whole new level of 
              artistic and technical freedom. The DS Standard keyboards offer all musicians, 
              regardless of hand-span, the opportunity to focus on what matters most: 
              making music with ease, imagination and joy.&rdquo;
            </blockquote>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="text-center">
              <p className="text-foreground font-semibold">Dr. Jessica Johnson</p>
              <p className="text-muted-foreground">
                Professor of Piano and Piano Pedagogy, University of Wisconsin-Madison
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <StickySection
            reverse
            stickyContent={
              <AnimatedSection>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/projects_Anna-Arazi-682x1024.jpg"
                    alt="Anna Arazi at the Dallas International Piano Competition"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            }
          >
            <AnimatedSection>
              <div className="p-3 rounded-2xl bg-primary/10 w-fit mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                Supporting Competitions
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The DS Standard Foundation will consider supporting any competition that 
                allows contestants to compete on DS Standard sized keyboards.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From 2014 to 2016 the Foundation supported the Dallas International Piano 
                Competition by contributing to keyboard preparation. This competition was 
                the first in the world to provide DS5.0 and DS6.0 keyboards for contestants.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">
                  Anna R. Arazi&apos;s Story
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  In March 2015, Anna arrived at the Dallas International Piano Competition 
                  and had never played on a smaller keyboard before. She immediately took to 
                  the DS6.0 size. By the end of the competition, she won 3rd place prize 
                  and the pain in her arms had completely disappeared!
                </p>
              </div>
            </AnimatedSection>
          </StickySection>
        </div>
      </section>

      {/* Pianodrome */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/projects_Pianodrome2.jpg"
                  alt="Pianodrome venue"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            
            <div className="space-y-6">
              <AnimatedSection>
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                  Showcasing DS Keyboards
                </h2>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Foundation has supported the promotion of Dr Carol Leone&apos;s CD: 
                  <em>Change of Keys: One piano, three keyboards</em> through MSR Classics. 
                  As a result the CD received much media exposure and airplay.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pianodrome is a Scottish company that builds amphitheaters as small 
                  entertainment venues. Their &ldquo;Royal Pianodrome&rdquo; provides the 
                  opportunity for pianists to experience DS Keyboards.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 text-balance">
              Want to Partner With Us?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground mb-12 text-balance">
              Whether you&apos;re an educational institution, competition organizer, or researcher, 
              we&apos;d love to hear from you.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact_us">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                <Link href="/donations">Support Our Projects</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
