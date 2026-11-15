import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Briefcase, CheckCircle2, Globe, MapPin, Users } from 'lucide-react';
import { teamMembers, studioInfo, processSteps } from '@/lib/data';

export const metadata = {
  title: 'About — Marrow Studio',
  description:
    'Marrow Studio is an independent 3-person branding and web design practice based in India. Meet the team, understand our process, and discover our design philosophy.',
};

export default function AboutPage() {
  return (
    <div className="space-y-32 pb-24">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-sand-text uppercase tracking-widest block mb-4">
              [ 03 / STUDIO ]
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal font-normal leading-[1.02] tracking-tight">
              Architecture of a design practice.
            </h1>
            <p className="text-charcoal-muted text-lg font-light max-w-3xl leading-relaxed pt-6">
              Marrow Studio emerged from the realization that digital creative work no longer needs a hierarchy of seniority and layers. Our three founders collaborate flat-on-coffee across two Indian cities, shipping work directly to clients in London to Singapore.
            </p>
          </div>

          <div className="lg:col-span-4 bg-bone-dark/50 border border-sand-dark p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-sand-dark/60">
              <Globe className="w-4 h-4 text-vermilion" />
              <span className="font-mono text-xs text-sand-text uppercase tracking-widest">
                FOUNDED • {studioInfo.founded}
              </span>
            </div>
            <div className="space-y-3">
              <p className="font-mono text-xs text-sand-text uppercase tracking-widest">Current Availability</p>
              <p className="font-serif text-lg text-charcoal">{studioInfo.availability}</p>
            </div>
            <div className="pt-4 border-t border-sand-dark/60">
              <p className="font-mono text-xs text-sand-text uppercase tracking-widest mb-2">Client Base</p>
              <ul className="text-sm text-charcoal-muted space-y-1">
                <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-vermilion" /> Global • UK • EU • US • India</li>
                <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-vermilion" /> Boutique Consumer Brands</li>
                <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-vermilion" /> Early-Stage Tech Startups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-normal mb-8">
              Our practice philosophy.
            </h2>
            <div className="space-y-10">
              <p className="text-charcoal-muted text-base font-light leading-relaxed">
                Most studios trade in velocity. We trade in permanence. Every identity system we construct is designed to survive platform migration, cultural shifts, and the erosion of attention spans. We believe in permanence achieved through radical clarity, not endless revision.
              </p>

              <p className="text-charcoal-muted text-base font-light leading-relaxed">
                We take on fewer than a dozen projects per year, each one requiring 80–120 hours of direct hands-on collaboration. There are no juniors, no task runners, no middlemen. The founder who sketches your logo also configures your Next.js deployment.
              </p>

              <p className="text-charcoal-muted text-base font-light leading-relaxed">
                We work from India, outside the global rate card ecosystem, but ship directly to international clients. This gives us access to a different creative economy—one that values craft over commodity, and rigor over reflex.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-bone-light border border-sand-dark/80 p-6">
              <h3 className="font-serif text-xl text-charcoal mb-4">Studio Values</h3>
              <ul className="font-mono text-xs text-sand-text space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-3 h-3 text-vermilion" />
                  <span>Permanence over Novelty</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-3 h-3 text-vermilion" />
                  <span>Direct Client Partnership</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-3 h-3 text-vermilion" />
                  <span>Architectural Rigor</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-3 h-3 text-vermilion" />
                  <span>Material Honesty</span>
                </li>
              </ul>
            </div>

            <div className="border-l-l border-charcoal pl-6">
              <p className="font-serif text-3xl text-charcoal leading-none">
                3
              </p>
              <p className="font-mono text-[10px] text-sand-text uppercase tracking-widest mt-1">
                PARTNERS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-bone-dark/40 py-24 border-y border-sand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-mono text-xs text-sand-text uppercase tracking-widest block mb-8">
            [ TEAM ]
          </span>

          <div className="space-y-24">
            {teamMembers.map((member, idx) => (
              <article
                key={member.name}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className={`lg:col-span-4 ${idx === 1 ? 'order-2' : ''}`}>
                  <div className="bg-bone border border-sand-dark/80 overflow-hidden flex">
                    <div className="aspect-square w-48 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={384}
                        height={384}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="w-48 flex items-center justify-center font-mono text-xs uppercase tracking-wider">
                      <div className="text-center space-y-1">
                        <span className="block text-sand-text">0</span>
                        <span className="block text-2xl font-serif text-charcoal font-normal">{idx + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-8 ${idx === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-bone-dark/40 border border-sand-dark/80 p-8">
                    <h3 className="font-serif text-2xl text-charcoal mb-2">{member.name}</h3>
                    <p className="font-mono text-xs text-vermilion uppercase tracking-widest mb-4">{member.role}</p>

                    <div className="space-y-3 text-charcoal-muted text-sm font-light mb-6">
                      <p className="leading-relaxed">{member.bio}</p>
                      <div className="flex items-center gap-2 pt-2 border-t border-sand-dark/60">
                        <MapPin className="w-3.5 h-3.5 text-vermilion" />
                        <span className="font-mono text-xs text-sand-text uppercase tracking-wider">{member.location}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sand-dark/60">
                      <span className="font-mono text-[10px] text-sand-text uppercase tracking-widest">SPECIALTY • {member.specialty}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <span className="font-mono text-xs text-sand-text uppercase tracking-widest block">
            [ METHOD ]
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-normal">
            A four-phase workflow, no handoffs.
          </h2>
          <p className="text-charcoal-muted text-lg font-light max-w-2xl mx-auto">
            We work in distinct, intentional phases. Each project moves through deliberate stages of discovery, architecture, craft, and systemization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12">
            {processSteps.map((step) => (
              <div key={step.number} className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 font-serif text-2xl text-charcoal bg-bone border border-sand-dark">
                  {step.number.split('/')[1]}
                </div>
                <h3 className="font-serif text-xl text-charcoal">{step.title}</h3>
                <p className="text-sm text-charcoal-muted font-light">{step.description.split('.')[0]}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-8">
        <span className="font-mono text-xs text-vermilion uppercase tracking-widest block">
          [ NEXT PROJECT ]
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl text-charcoal font-normal">
          Ready for a partnership?
        </h2>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 border-2 border-charcoal text-charcoal font-mono text-xs uppercase tracking-widest hover:bg-charcoal hover:text-bone transition-all duration-200"
          >
            <span>Send Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}