import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, CheckCircle2, Sparkles, MoveRight } from 'lucide-react';
import { projects, processSteps, studioInfo } from '@/lib/data';

export const metadata = {
  title: 'Marrow Studio — Essentialist Brand Identity & Web Design',
  description:
    'An independent 3-person branding and web design studio in India. We craft pure visual identity systems and high-performance Next.js platforms for boutique brands globally.',
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-28 md:space-y-40 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column - Headline & Index */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-vermilion uppercase tracking-widest px-2.5 py-1 bg-vermilion-light/60 border border-vermilion/20 rounded-full inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-vermilion animate-pulse" />
                Goa &amp; Bengaluru, India
              </span>
              <span className="font-mono text-xs text-sand-text uppercase tracking-widest hidden sm:inline">
                [ EST. 2022 ]
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[82px] font-normal leading-[1.02] tracking-tight text-charcoal">
              We strip away digital noise to reveal the{' '}
              <span className="italic font-normal text-vermilion font-serif">skeletal core</span> of ambitious brands.
            </h1>

            <p className="font-sans text-lg md:text-xl text-charcoal-muted max-w-2xl leading-relaxed font-light">
              Marrow Studio is a boutique 3-person brand architecture &amp; design engineering practice. We partner with founders who value high-contrast typography, material restraint, and high-performance digital craft.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-charcoal text-bone font-mono text-xs uppercase tracking-widest hover:bg-vermilion transition-all duration-200"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-mono text-xs text-charcoal uppercase tracking-widest py-3 border-b border-charcoal/30 hover:border-vermilion hover:text-vermilion transition-colors"
              >
                <span>Read Studio Ethos</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sand-text group-hover:text-vermilion transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Studio Snapshot Metrics */}
          <div className="lg:col-span-4 bg-bone-dark/50 border border-sand-dark/60 p-8 space-y-8 lg:mt-6">
            <div className="space-y-2 pb-6 border-b border-sand-dark/60">
              <span className="font-mono text-[10px] text-sand-text uppercase tracking-widest block">
                [ STUDIO PROFILE ]
              </span>
              <h2 className="font-serif text-2xl text-charcoal italic">3 Partners. Uncompromised Focus.</h2>
              <p className="text-xs text-sand-text leading-relaxed font-sans">
                No account managers, no junior handoffs. You work directly with the creative directors who design and code your brand.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 font-mono">
              <div>
                <span className="text-2xl md:text-3xl font-serif text-charcoal block">08</span>
                <span className="text-[11px] text-sand-text uppercase tracking-wider">Projects / Year</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif text-charcoal block">100%</span>
                <span className="text-[11px] text-sand-text uppercase tracking-wider">Direct Access</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif text-charcoal block">&lt; 1.0s</span>
                <span className="text-[11px] text-sand-text uppercase tracking-wider">LCP Benchmark</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif text-charcoal block">100%</span>
                <span className="text-[11px] text-sand-text uppercase tracking-wider">Custom Code</span>
              </div>
            </div>

            <div className="pt-2 border-t border-sand-dark/60 text-xs font-mono text-sand-text flex items-center justify-between">
              <span>CURRENT STATUS</span>
              <span className="text-vermilion font-medium flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-vermilion"></span>
                Q2 2025 Booking
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sand-dark pb-8 gap-6">
          <div>
            <span className="font-mono text-xs text-sand-text uppercase tracking-widest block mb-2">
              [ 02 / SELECTED WORK ]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-sm font-mono text-sand-text max-w-sm">
            Visual identities, tactile packaging, and custom Next.js storefronts built for enduring brand equity.
          </p>
        </div>

        <div className="space-y-24">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={project.slug}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image Container */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Link href={`/work/${project.slug}`} className="block overflow-hidden relative aspect-[16/10] bg-bone-dark border border-sand-dark">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 font-mono text-[11px] text-bone bg-charcoal/80 backdrop-blur-sm px-3 py-1 tracking-widest">
                      0{idx + 1} / {project.year}
                    </div>
                  </Link>
                </div>

                {/* Text Content */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-sand-text uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-sand-dark">•</span>
                    <span className="font-mono text-xs text-sand-text">{project.location}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-charcoal group-hover:text-vermilion transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="text-charcoal-muted text-base font-light leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Impact Metric Badge */}
                  <div className="p-4 bg-bone-light border-l-2 border-vermilion flex items-center justify-between">
                    <div>
                      <span className="font-serif text-2xl text-charcoal block leading-none">
                        {project.results[0].metric}
                      </span>
                      <span className="font-mono text-[10px] text-sand-text uppercase tracking-wider">
                        {project.results[0].label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-sand-text uppercase">
                      [ Key Result ]
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-charcoal group-hover:text-vermilion transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center pt-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 px-8 py-4 border border-charcoal text-charcoal font-mono text-xs uppercase tracking-widest hover:bg-charcoal hover:text-bone transition-all duration-200"
          >
            <span>View All {projects.length} Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* STUDIO PHILOSOPHY / PROCESS */}
      <section className="bg-bone-dark/40 py-24 border-y border-sand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs text-sand-text uppercase tracking-widest block">
              [ 03 / METHODOLOGY ]
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-normal leading-tight">
              An architectural approach to brand identity &amp; web craft.
            </h2>
            <p className="text-charcoal-muted text-lg font-light leading-relaxed">
              We reject high-velocity assembly-line design. Every identity system we construct is engineered to endure platform shifts and cultural trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-bone p-8 border border-sand-dark/80 space-y-6 flex flex-col justify-between group hover:border-vermilion/60 transition-colors"
              >
                <div className="space-y-4">
                  <span className="font-mono text-2xl font-serif italic text-vermilion block">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal">{step.title}</h3>
                  <p className="text-sand-text text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-sand/60 font-mono text-[10px] text-sand-text uppercase tracking-widest">
                  Phase {step.number} Protocol
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL FEATURE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-charcoal text-bone p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 font-serif text-9xl text-charcoal-soft select-none -translate-y-8 translate-x-4">
            &ldquo;
          </div>
          <div className="relative z-10 max-w-4xl space-y-8">
            <span className="font-mono text-xs text-sand uppercase tracking-widest block">
              [ CLIENT PERSPECTIVE ]
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-bone leading-snug font-normal">
              &ldquo;Marrow stripped away everything we thought we needed and left us with a brand identity so pure that stockists reach out to us before we even pitch.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-charcoal-muted font-mono text-xs">
              <div>
                <span className="text-bone font-medium block">Priya Sharma</span>
                <span className="text-sand-text">Founder, Kavya Botanicals — Shimla &amp; Paris</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INQUIRY BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-8">
        <span className="font-mono text-xs text-vermilion uppercase tracking-widest block">
          [ 04 / DIRECT ENGAGEMENT ]
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl text-charcoal font-normal max-w-3xl mx-auto">
          Ready to build something essential?
        </h2>
        <p className="text-sand-text text-base md:text-lg max-w-xl mx-auto font-light">
          We are currently taking on select visual identity and Next.js web projects for Q2 2025.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-5 bg-vermilion text-bone font-mono text-xs uppercase tracking-widest hover:bg-vermilion-hover transition-all duration-200 shadow-sm"
          >
            <span>Start a Project Brief</span>
            <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
