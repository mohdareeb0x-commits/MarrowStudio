import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';

export const metadata = {
  title: 'Work — Marrow Studio',
  description:
    "A curated selection of brand identity systems, custom packaging, and Next.js web experiences crafted for boutique brands by Marrow Studio.",
};

export default function WorkPage() {
  return (
    <div className="space-y-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-sand-text uppercase tracking-widest block mb-4">
              [ 02 / WORK ]
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal font-normal leading-[1.02] tracking-tight">
              Case studies from <span className="italic font-medium">marrow</span>'s practice.
            </h1>
            <p className="text-charcoal-muted text-lg font-light max-w-3xl leading-relaxed pt-6">
              Each project begins with a distillation phase and culminates in a complete visual system, tangible deliverables, and a digital home built as custom React applications.
            </p>
          </div>

          <div className="lg:col-span-4 bg-bone-dark/50 border border-sand-dark p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-sand-dark/60">
              <span className="font-mono text-[10px] text-sand-text uppercase tracking-widest">CASE STUDY COUNT</span>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl text-charcoal mb-1">{projects.length}</p>
              <p className="font-mono text-xs text-sand-text uppercase tracking-widest">Published Projects</p>
            </div>
            <div className="pt-4 border-t border-sand-dark/60">
              <p className="font-mono text-xs text-sand-text uppercase tracking-widest mb-2">Categories</p>
              <ul className="text-sm text-charcoal-muted space-y-1">
                <li>Brand Identity</li>
                <li>Ecommerce Platforms</li>
                <li>Packaging Systems</li>
                <li>Digital Archives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group space-y-6"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block overflow-hidden border border-sand-dark/60 hover:border-vermilion/60 transition-colors"
              >
                <div className="relative aspect-[4/3] bg-bone-dark">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] text-bone bg-charcoal/80 backdrop-blur-sm px-2.5 py-1 tracking-widest">
                    0{projects.indexOf(project) + 1} / {projects.length}
                  </div>
                </div>
              </Link>

              <div className="space-y-3">
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="font-serif text-2xl text-charcoal hover:text-vermilion transition-colors">
                    {project.title}
                  </h2>
                </Link>
                <p className="font-mono text-xs text-sand-text uppercase tracking-widest">
                  {project.client} • {project.year}
                </p>
                <p className="text-charcoal-muted text-sm font-light leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-vermilion hover:text-charcoal transition-colors pt-2"
                >
                  <span>Read Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center py-16">
        <p className="font-mono text-xs text-sand-text uppercase tracking-widest">
          [ PROJECTS ARCHIVED ]
        </p>
        <p className="font-serif text-charcoal text-lg mt-4">
          All projects are documented through custom-built Next.js case study pages with high-performance delivery.
        </p>
      </section>
    </div>
  );
}