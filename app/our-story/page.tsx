"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

type Chapter = { id: string; numeral: string; title: string }

const chapters: Chapter[] = [
  { id: "big-idea", numeral: "I", title: "A Big Idea" },
  { id: "its-easy", numeral: "II", title: "It IS Easy!" },
  { id: "catch-22", numeral: "III", title: "The Catch 22" },
  { id: "what-sizes", numeral: "IV", title: "What Size Keyboards?" },
  { id: "professional", numeral: "V", title: "Suitable for Professional Use?" },
  { id: "first-university", numeral: "VI", title: "First University Study" },
  { id: "interchangeable", numeral: "VII", title: "Interchangeable Keyboards" },
  { id: "growing-interest", numeral: "VIII", title: "Growing University Interest" },
  { id: "children", numeral: "IX", title: "Working with Children" },
  { id: "ncnkp-2007", numeral: "X", title: "NCKP 2007" },
  { id: "technicians-kit", numeral: "XI", title: "The Technician's Kit" },
  { id: "proformavision", numeral: "XII", title: "Another Demonstration" },
  { id: "first-manufacturer", numeral: "XIII", title: "First Piano Manufacturer" },
  { id: "how-far", numeral: "XIV", title: "How Far We Have Come" },
  { id: "where-going", numeral: "XV", title: "Where We Are Going" },
  { id: "why-persist", numeral: "XVI", title: "Why We Persist" },
]

export default function OurStoryPage() {
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
              The Foundation&rsquo;s Story
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
              A chance meeting,
              <br />
              <span className="italic font-light text-primary">and everything that followed.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-foreground/75 max-w-2xl leading-relaxed">
              A long narrative, by David Steinbuhler, on how the Donison-Steinbuhler
              Standard came to be, and the three decades of work that turned a good idea
              into a growing body of evidence and practice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <figure className="relative bg-card p-3 md:p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
              <div className="relative aspect-[3/1] overflow-hidden [filter:grayscale(80%)_sepia(15%)_contrast(1.05)]">
                <Image
                  src="/the_ds_standard_David-Linda-Chris.jpg"
                  alt="David Steinbuhler, Linda Gould, and Christopher Donison at the piano where Linda's keyboard was measured"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
            <figcaption className="mt-4 text-[0.65rem] text-foreground/60 uppercase tracking-[0.2em] pl-2 font-[family-name:var(--font-inter)]">
              David, Linda, and Christopher on the occasion of measuring Linda&rsquo;s piano
            </figcaption>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical hairline */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="w-px h-full bg-border" />
      </div>

      {/* Chapter list + narrative */}
      <div className="px-4 md:px-12 lg:px-24 pb-24">
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky chapter nav */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-6 font-[family-name:var(--font-inter)]">
                Chapters
              </p>
              <ol className="space-y-2 font-[family-name:var(--font-inter)] text-sm">
                {chapters.map((c) => (
                  <li key={c.id} className="flex gap-3">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-foreground/40 pt-0.5 w-5 flex-shrink-0">
                      {c.numeral}.
                    </span>
                    <a
                      href={`#${c.id}`}
                      className="text-foreground/70 hover:text-primary transition-colors leading-tight"
                    >
                      {c.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Narrative body */}
          <main className="lg:col-span-9 space-y-24">
            <article id="big-idea" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter I
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                A Big Idea
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p className="[&::first-letter]:float-left [&::first-letter]:font-[family-name:var(--font-display)] [&::first-letter]:text-[5rem] [&::first-letter]:leading-[0.85] [&::first-letter]:pr-3 [&::first-letter]:pt-1 [&::first-letter]:text-primary">
                  A chance meeting in the summer of 1991 changed my life. I was visiting the
                  Shaw Festival in Niagara-On-The-Lake and providentially stayed at the bed
                  and breakfast run by Christopher Donison, the Festival&rsquo;s music director.
                  Christopher had a 7/8 keyboard installed in his concert grand piano. An octave
                  on his keyboard was equal to a 7th on the conventional keyboard. While studying
                  music at the University of Victoria he had realized that his small hand size
                  was preventing him from mastering much of the great piano repertoire, and had
                  the keyboard built in the late 1970s.
                </p>
                <p>
                  I play the piano a little, and the ease with which I adapted to his smaller
                  keyboard amazed me. Christopher explained how a whole new unknown world had
                  opened before him when he first got the keyboard, and that this had inspired
                  the concept of creating a second standard. &ldquo;This,&rdquo; I said, &ldquo;is
                  a big idea.&rdquo;
                </p>
                <p>
                  I had been developing products in our family-owned textile business in
                  Titusville, PA, and believed this was an opportunity placed before me. I had
                  computer programming experience, and the idea of building keyboards out of a
                  computer database intrigued me. Never mind that I knew nothing about the piano
                  industry. I told Christopher I would try to build small keyboards, and he
                  conceived the idea of calling the new proposed keyboard size the Donison-Steinbuhler
                  Standard. The DS Standard<sup>®</sup> was born. To designate it on the keyboard
                  itself, Christopher designed the DS logo we would attach to the front of the
                  first bass key.
                </p>
              </div>
            </article>

            <article id="its-easy" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter II
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                &ldquo;It IS Easy!&rdquo;
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  In the freedom of having no preconceived ideas about how to build keyboards,
                  I started tinkering more or less as a hobby. One thing led to another, and by
                  the summer of 1994, on the loading dock of our textile plant, using a
                  computer-driven router, a coworker and I built our first keyboard, which we
                  installed in my mother&rsquo;s Steinway upright. Linda Gould, an acquaintance
                  of Christopher&rsquo;s, flew from Victoria, BC to try it. She had given up her
                  dream of becoming a concert artist because of the pain she experienced when
                  playing. I will never forget her exclaiming &ldquo;It IS Easy!&rdquo; after
                  spending an emotional afternoon with the piano. It was my first experience
                  watching a serious pianist discover the smaller keyboard.
                </p>
                <p>
                  On the spot Linda decided to buy a keyboard for her Yamaha grand. I turned my
                  attention to grand keyboards and the nagging key-strength issue. By January
                  1996, after building prototype keyboards for my Steinway B, I was ready, and
                  we flew to Victoria to measure Linda&rsquo;s piano. Two months later, relying
                  heavily on Linda&rsquo;s technician to mount the action stack and do the
                  fitting, we sold our first DS Standard<sup>™</sup> keyboard.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/its-easy-to-adapt"
                  className="inline-flex items-center text-[0.7rem] uppercase tracking-[0.25em] font-medium text-primary hover:text-foreground transition-colors font-[family-name:var(--font-inter)] border-b border-primary/40 hover:border-foreground pb-1"
                >
                  Read Linda Gould&rsquo;s full testimonial &rarr;
                </Link>
              </div>
            </article>

            <article id="catch-22" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter III
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                The Catch 22
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  We knew that before acceptance of the keyboard could become a reality,
                  universities would have to work with and endorse them, so we got a grant and
                  &ldquo;seeded&rdquo; five universities with keyboards. There followed a flurry
                  of news media attention. National Canadian TV interviewed Christopher with his
                  keyboard; newspapers, loving the story, ran feature articles. The lay person
                  intuitively understands that pianists with different hand sizes need pianos
                  with different keyboard sizes and wonders why it had never been done before.
                </p>
                <p>
                  Piano teachers and serious students, on the other hand, were afraid to touch
                  them. We got no immediate response from the media attention, and no one at the
                  seeded universities worked with the keyboards. Since the keyboards did not
                  exist elsewhere, everyone believed their careers would be hurt by working with
                  them. Acceptance was probably going to take a generation.
                </p>
              </div>
            </article>

            <article id="what-sizes" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter IV
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                What Size Keyboards?
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  The lack of response to the media attention was a blessing, because much work
                  needed to be done. I was convinced of the keyboard&rsquo;s importance; but to
                  make recommendations as to size, there needed to be a study evaluating the
                  complete range of possible standards. We began building keyboards of every size
                  and one by one pianists started coming to Titusville to play them. They were
                  young and old, male and female, pianists who struggled with pain and pianists
                  who simply wanted to play a larger repertoire. It was fascinating to observe
                  them experiment, and this research gave me a solid basis for determining what
                  standards to recommend. In addition to a 7/8 keyboard we also added a size in
                  the middle that we called the &ldquo;Universal,&rdquo; designated 15/16.
                </p>
                <p>
                  We used the nomenclature 7/8 and 15/16 to designate the two sizes, but over the
                  years the use of these fractions proved to be confusing. In 2014 we changed the
                  nomenclature to one that reflects the size of the keyboard&rsquo;s octave:
                  instead of DS-7/8 we now use DS5.5<sup>®</sup>, and instead of DS-15/16 we now
                  use DS6.0<sup>®</sup>.
                </p>
              </div>
            </article>

            <article id="professional" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter V
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Suitable for Professional Use?
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  To be taken seriously, our keyboards needed to be of the highest quality.
                  Early on, a keyboard we made for a Steinway C was rejected by a prestigious
                  piano rebuilder in New York City who told us it was &ldquo;not suitable for
                  professional use.&rdquo; In those days we needed to work with rebuilders, as
                  our rough frame needed to be fitted to the piano and the action stack mounted.
                  Their complaint was the springy nature of the highly angled keys in the bass.
                </p>
                <p>
                  That rejection led us to develop techniques for measuring key strength and,
                  ultimately, the &ldquo;brace,&rdquo; which completely eliminated the problem.
                  Attention to the engineering aspects of the keys has always been of deep
                  interest to me; I needed to know whether a truly professional reduced-size
                  keyboard could be built at all.
                </p>
              </div>
            </article>

            <article id="first-university" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter VI
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                First University Study
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  Through the inspiration of Dr. Carol Leone, Southern Methodist University
                  became the first university to purchase and study an alternative size piano
                  keyboard. In the fall of 2000 we fitted the Steinway B in her studio with a 7/8
                  (DS5.5<sup>®</sup>) keyboard. She and several of her students started working
                  with and performing on it, enjoying remarkable results. By the end of the school
                  year, Carol had personally committed herself to using the DS5.5<sup>®</sup>,
                  believing that it would revolutionize traditional teaching of children and
                  small-handed pianists and offer relief to pianists with injuries.
                </p>
                <p>
                  For a full account of her findings, please read her article{" "}
                  <a
                    href="/GoldilocksFeature.pdf"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    <span className="italic">Goldilocks Had a Choice</span>
                  </a>{" "}
                  published in <span className="italic">American Music Teacher</span>.
                </p>
              </div>
            </article>

            <article id="interchangeable" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter VII
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Interchangeable Keyboards
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  Carol Leone&rsquo;s desire to demonstrate these findings at other universities
                  inspired us to build a keyboard with adjustable features that would allow it to
                  be installed in the Steinway concert grand pianos of different universities. We
                  wanted to see how practical and transportable such a keyboard might be. By the
                  spring of 2002 the keyboard was ready, and Carol scheduled recital demonstrations
                  at five universities. I took the keyboard to each in advance to see how well it
                  would fit. We found that it could be adjusted and regulated to play quite well,
                  and that spring the University of Oklahoma, Baylor, Rice, Texas Tech, and the
                  University of Nebraska&ndash;Lincoln were witness to recitals given on a
                  Steinway concert grand with a DS5.5<sup>®</sup> keyboard.
                </p>
                <p>
                  Although it has not proven practical for an artist to take her DS Keyboard with
                  her to be installed in the pianos of different venues, the experience we gained
                  developing the adjustable features was valuable. It gave us the ability to build
                  a replacement keyboard that can easily be installed in a grand piano without
                  changing anything on the piano. Once a new keyboard has been installed, it can
                  be exchanged back and forth with the conventional keyboard in just a matter of
                  minutes. This has opened the way for universities to provide keyboards that
                  best fit their students&rsquo; hands and to study all the practical ramifications.
                </p>
              </div>
            </article>

            <article id="growing-interest" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter VIII
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Growing University Interest and Research
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  Southern Methodist University purchased a DS5.5<sup>®</sup> keyboard for their
                  concert hall and two uprights with DS5.5<sup>®</sup> keyboards for practice
                  rooms. Under the direction of Dr. Lora Deahl, Texas Tech University worked with
                  three DS5.5<sup>®</sup> keyboards: one in Lora Deahl&rsquo;s studio Steinway B,
                  one for their concert hall, and one in an upright in a practice room. Lora
                  measured the preferences of pianists of different ages, genders, and hand sizes
                  for the conventional versus the 7/8 keyboards. Students at both SMU and Texas
                  Tech performed recitals on them, and the two universities collaborated with
                  each other in joint recitals.
                </p>
                <p>
                  Dr. Pamela Mia Paul and Dr. Kris Chesky worked with DS6.0<sup>®</sup> keyboards
                  at the University of North Texas. Kris, director of the Texas Center for Music
                  and Medicine, initiated formal research to address the increasing evidence that
                  a high percentage of pianists struggle with arm, wrist, and hand pain and have
                  associated medical problems. They endeavored to understand why these problems
                  occur and whether the risk is reduced with the use of alternative keyboards.
                </p>
                <p>
                  Using DS5.5<sup>®</sup> keyboards at the University of Nebraska&ndash;Lincoln,
                  Dr. Brenda Wristen also initiated a formal study of the factors that cause
                  injuries among pianists. She collaborated with Dr. Susan Hallbeck in the
                  department of engineering to electronically measure the stress in the muscles
                  of pianists as they play different size keyboards. Their results showed a big
                  difference in levels of fatigue.
                </p>
              </div>
            </article>

            <article id="children" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter IX
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Working with Children
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  Dr. Carol Leone again led the way as the first teacher to conduct studies with
                  children. In January of 2005 she began teaching young Aaron Kurz, who had an
                  upright piano with a 7/8 keyboard on which to practice in his home. Carol wrote,
                  &ldquo;I have performed a preliminary study with one student, ten-year-old
                  Aaron Kurz, who after one year of study on the 7/8 piano keyboard performed a
                  Rachmaninov prelude at the national MTNA 2006 conference. His powerful
                  performance of a piece previously reserved for large-handed pianists broke new
                  ground and astounded those in attendance. One well-known American piano
                  professor was brought to tears by sheer wonderment at a child possessing the
                  ability to present this advanced repertoire by virtue of having a keyboard that
                  suited a child-sized hand.&rdquo;
                </p>
                <p>
                  Aaron has since grown, made the transition to the conventional keyboard, and
                  gone on to be a winner in two international piano competitions.
                </p>
              </div>
            </article>

            <article id="ncnkp-2007" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter X
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                National Conference on Keyboard Pedagogy, 2007
              </h2>
              <p className="text-lg italic text-primary mb-8">
                Tradition and Transformation: Learning, Playing, and Teaching Outside the Box
              </p>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  The first day of the conference featured the use of the 7/8 DS5.5<sup>®</sup>
                  keyboard in a concert by Dr. Carol Leone playing a Steinway concert grand
                  fitted with the smaller keyboard. After the concert, the piano was on display
                  in a separate room so that all in attendance could personally experience the
                  keyboard. Two informative videos about the 7/8 keyboard were produced by Mario
                  Ajero: Carol playing the conventional keyboard and then immediately playing the
                  same piece on the 7/8, demonstrating that switching between them is a learnable
                  skill similar to playing the viola and then the violin; and Carol demonstrating
                  the shape of her hand playing chords on a conventional keyboard and then on the
                  7/8. A third video showed the ease of removing the conventional keyboard from
                  the Steinway concert grand and replacing it with the 7/8.
                </p>
                <p>
                  Dr. Anita Renfroe from Millersville University was recorded playing the 7/8
                  keyboard for the first time, with her comments. Sarah Evans and Dr. Peter Davis
                  from Bob Jones University shared the results of a study that tested the ability
                  of pianists to adapt to playing on a smaller keyboard. Pianists who practiced
                  one hour a day for five days found significant improvement in accuracy in a
                  short amount of time, and an attitudinal survey revealed that pianists adapted
                  more quickly than they had expected.
                </p>
              </div>
            </article>

            <article id="technicians-kit" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter XI
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Development of our Technician&rsquo;s Kit
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  Rhonda Boyle, who lives in Melbourne on the other side of the world, was
                  determined to get a 7/8 keyboard, and I needed a foolproof method for getting
                  the measurements of her piano. So I put together a set of tools with a booklet
                  of instructions packaged in a handy carrying case, and my wife and I flew to
                  Australia to have a very interesting vacation in late 2008. Rhonda was bubbling
                  with energy to promote alternative keyboards, and I was trying to figure out
                  how to provide them while testing our new Technician&rsquo;s Kit. Back home,
                  with the data from the kit entered into our computer, we cut out Rhonda&rsquo;s
                  set of DS5.5<sup>®</sup> keys, built the action, sent it off, and waited to see
                  if it would fit.
                </p>
              </div>
              <figure className="mt-10 relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <blockquote className="relative z-20 px-6 md:px-10 py-10 text-center">
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-display)] text-7xl leading-none text-border absolute -top-2 left-2 select-none pointer-events-none"
                  >
                    &ldquo;
                  </span>
                  <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl italic text-foreground leading-snug relative z-10">
                    The installation of Rhonda&rsquo;s 7/8 action was pretty much flawless. Four
                    hours of regulation was all that it required to bring it to perfection, a lot
                    less than some new pianos require. Rhonda is delighted. Look forward to the
                    next installation.
                  </p>
                  <footer className="mt-6 text-[0.65rem] uppercase tracking-[0.25em] text-foreground/70 font-[family-name:var(--font-inter)]">
                    Warwick Dalton, piano technician, Melbourne
                  </footer>
                </blockquote>
              </figure>
              <div className="mt-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  Rhonda has become a driving force with her{" "}
                  <a
                    href="https://www.paskpiano.org"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    PASK (Pianists for Alternatively Sized Keyboards)
                  </a>{" "}
                  website. We continue to refine the Technician&rsquo;s Kits and send them to
                  technicians around the world to get the measurements we need to build a DS
                  Keyboard.
                </p>
              </div>
            </article>

            <article id="proformavision" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter XII
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Another Powerful Demonstration
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  At the National Conference on Keyboard Pedagogy 2009, Dr. Kathleen Riley
                  demonstrated her work with ProformaVision, a new product that monitors a
                  pianist&rsquo;s performance with video and muscle tension, giving real-time
                  visual feedback. Its use helps teachers prove what works in an indisputable
                  manner.
                </p>
                <p>
                  Juilliard Piano Department Chair Veda Kaplinsky stated that both
                  Riley&rsquo;s research and ProformaVision are a tremendous help to the teaching
                  profession: &ldquo;Finally we are able to see what is happening as our students
                  play. It is irrefutable proof of what is correct in terms of piano
                  technique.&rdquo; Former MTNA President Gail Berenson noted that
                  &ldquo;ProformaVision enables students and their teachers to finally see what
                  is taking place physiologically as they play. They are able to make changes in
                  their physical approach to the instrument to achieve greater efficiency and
                  effortlessness in their playing.&rdquo;
                </p>
              </div>
            </article>

            <article id="first-manufacturer" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter XIII
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                First Piano Manufacturer Installing Our Keyboards
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  The Walter Piano Company was the first manufacturer allowing us to sell their
                  pianos worldwide built with our keyboards. Our customers select the model,
                  style, and finish of the Walter upright they want, we supply the DS Keyboard
                  size they want, and the Walter Piano Company builds the piano. Walter is a
                  family-owned company located in the USA that has built an impeccable reputation
                  for the quality of their products. Their uprights are known for the richness of
                  their tone and fullness of their bass, and their long keys are especially
                  suited to accommodate the higher angles of our DS Keyboards. We have shipped
                  Walter Studio Upright pianos all around the world, to Australia, Japan, Asia,
                  and Europe.
                </p>
              </div>
            </article>

            <article id="how-far" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter XIV
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                How Far We Have Come
              </h2>
              <figure className="mb-10 relative bg-card p-4 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="absolute inset-2 border border-border/40 pointer-events-none z-10" />
                <blockquote className="relative z-20 px-6 md:px-10 py-10 text-center">
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-display)] text-7xl leading-none text-border absolute -top-2 left-2 select-none pointer-events-none"
                  >
                    &ldquo;
                  </span>
                  <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl italic text-foreground leading-snug relative z-10">
                    There are two great secrets in the world of piano playing. The first is how
                    much easier the instrument is to play with larger hands, and the second is
                    how impossible it can be with smaller hands.
                  </p>
                  <footer className="mt-6 text-[0.65rem] uppercase tracking-[0.25em] text-foreground/70 font-[family-name:var(--font-inter)]">
                    Christopher Donison
                  </footer>
                </blockquote>
              </figure>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  Today, for the first time in the history of the piano, there is a growing list
                  of universities that own and are studying alternative size keyboards. And there
                  is a growing list of pianists who are absolutely thrilled to be playing a
                  keyboard that has literally changed their lives. All the time we get feedback
                  such as: &ldquo;musically speaking, the DS5.5<sup>®</sup> has been the greatest
                  spiritual experience of my life. All I want to do is play on it for the rest of
                  my life,&rdquo; or simply, &ldquo;It&rsquo;s fabulous.&rdquo;
                </p>
                <p>
                  Taken as a whole, great evidence is accumulating that pianists in general are
                  locked in a one-size-fits-all world of profound discrimination. Students who
                  study piano are mostly female, and yet universities provide only pianos with
                  large size keyboards. When we step back to reflect on this, is it not astounding
                  to realize that universities around the world do not provide their students with
                  instruments appropriate to the size of their hands? Today, slowly, they are
                  becoming aware of the two great secrets Christopher Donison discovered when he
                  first got his 7/8 keyboard.
                </p>
              </div>
            </article>

            <article id="where-going" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter XV
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Where We Are Going
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>
                  We now know that the smaller keyboards work and that grand pianos are easy to
                  retrofit. But the world of the piano is tied to tradition and will not change
                  easily. How will we ever overcome this impasse? One of the main drivers is
                  probably the growing awareness that alternative keyboards greatly reduce
                  piano-related pain. It is not too strong a statement to say that it is really
                  a question of human rights.
                </p>
                <p>
                  Interestingly, many of the inquiries we receive are requests for smaller
                  electronic keyboards. As awareness and acceptance grow, one day an electronic
                  keyboard manufacturer will provide them; the ability to take your 7/8 keyboard
                  with you when you travel would be liberating.
                </p>
                <p>
                  The Chinese could be a huge factor. A high percentage of the students who study
                  piano are of Chinese ethnicity, and their hand spans measure at the small end
                  of the spectrum. It would seem natural for their piano industry to lead the way.
                  In 2019 we started to work with Hailun USA, a Chinese-based piano company that
                  is enthusiastically promoting DS Standard keyboards. For an industry that has
                  generally been in decline for decades, promotion of the keyboards could be a
                  most welcome boon.
                </p>
                <p>
                  My grandson Alex Steinbuhler and April Larson are committed to keeping our
                  manufacturing operation going.
                </p>
              </div>
            </article>

            <article id="why-persist" className="scroll-mt-28">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-primary mb-4 font-[family-name:var(--font-inter)]">
                Chapter XVI
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Why We Persist in Our Efforts
              </h2>
              <div className="space-y-6 text-xl leading-[1.6] text-foreground/80">
                <p>Dr. Carol Leone spoke for all of us who are working on this project with a story:</p>
                <blockquote className="border-l-2 border-primary/40 pl-6 italic text-foreground/85">
                  Yesterday I gave an audition lesson to an incoming graduate student. She played
                  a challenging Romantic work with a lot of struggle, even though she intentionally
                  left out many notes to accommodate her small hands. I then found out that she
                  is an injured pianist, with chronic carpal tunnel and nerve damage in her right
                  arm. Then she told me that she came to SMU specifically to study on the 7/8
                  keyboard. So, over to the 7/8 Steinway we went, and she proceeded to play
                  passages from her piece perfectly with all of the notes. She looked at me
                  incredulously and burst into tears, apologizing over how emotional she felt and
                  exclaiming how she has been trying for years to &ldquo;discipline myself to
                  stay away from Romantic repertoire.&rdquo;
                </blockquote>
                <p>
                  More than three decades have passed since I first met Christopher Donison with
                  his vision of a second keyboard standard. Giving thanks for the many blessings
                  and opportunities we have enjoyed, I patiently ask, &ldquo;What next?&rdquo; I
                  remain available.
                </p>
                <p>
                  It is clear that piano manufacturers must be involved. To expedite that, the DS
                  Standard Foundation has relinquished the intellectual property rights it has
                  developed through its patents at the margins of keyboard manufacture,
                  specifically the patent for the &ldquo;brace&rdquo; (which ensures adequate key
                  strength in the DS5.5<sup>®</sup> and smaller sizes) and for the use of
                  key-leveling plates.
                </p>
                <p>
                  Pressure is growing beneath the surface, and, although it may take decades, at
                  some point the use of alternative keyboards will become commonplace. In the
                  meantime, building them has become routine for us, and we remain committed to
                  this exciting adventure, believing that we are witnessing the beginnings of an
                  ergonomic revolution.
                </p>
              </div>
            </article>
          </main>
        </div>
      </div>

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
            Read The Standard in Detail
          </h3>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            The specifications, the research behind them, and the ratio that holds every
            size in the registry together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/the_ds_standard"
              className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-background border border-foreground bg-foreground hover:bg-primary hover:border-primary transition-colors font-[family-name:var(--font-inter)]"
            >
              The DS Standard
            </Link>
            <Link
              href="/contact_us"
              className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors font-[family-name:var(--font-inter)]"
            >
              Contact the Foundation
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  )
}
