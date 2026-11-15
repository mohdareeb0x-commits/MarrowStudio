import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, ChevronLeft, ChevronRight, MapPin, User, CheckCircle } from 'lucide-react';

export const revalidate = 3600;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  return {
    title: project
      ? `${project.title} · Marrow Studio`
      : 'Project Not Found · Marrow Studio',
    description: project
      ? `${project.title} case study: ${project.summary.substring(0, 150)}...`
      : 'Case study not found.',
    openGraph: {
      title: project
        ? `${project.title} · Marrow Studio`
        : 'Project Not Found',
      description: project?.summary,
      images: project ? [{ url: project.heroImage, alt: project.title }] : [],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project!.slug);
  const nextProject = projects[currentIndex + 1];
  const prevProject = projects[currentIndex - 1];

  return (
    <article className="space-y-32 pb-24 max-w-7xl mx-auto px-6 md:px-12">
      <nav className="flex items-center justify-between pt-8 border-b border-sand-dark pb-6">
        <Link href="/work" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sand-text hover:text-charcoal transition-colors">
          <ArrowLeft className="w-3 h-3" />
          <span>View Portfolio</span>
        </Link>

        <div className="font-mono text-xs text-sand-text uppercase tracking-widest">
          <span>Project • {currentIndex + 1} of {projects.length}</span>
        </div>
      </nav>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="font-mono text-xs text-sand-text uppercase tracking-widest space-y-2">
            <p>{project.category} • {project.year}</p>
            <p className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              {project.location}
            </p>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal font-normal leading-[1.02] tracking-tight">
            {project.title}
          </h1>

          <h2 className="font-serif text-2xl text-charcoal-muted italic font-medium">
            {project.client}
          </h2>

          <p className="text-charcoal-muted text-base font-light leading-relaxed max-w-lg">
            {project.summary}
          </p>

          <div className="pt-4">
            <div className="font-mono text-[10px] text-sand-text uppercase tracking-widest mb-3">
              [ IMPACT METRICS ]
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result, idx) => (
                <div key={idx} className="bg-bone-light border border-sand-dark/60 p-4 text-center">
                  <div className="font-serif text-2xl text-charcoal mb-1">{result.metric}</div>
                  <div className="font-mono text-xs text-sand-text uppercase tracking-wider">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] bg-bone-dark border border-sand-dark/60 overflow-hidden group">
            <Image
              src={project.heroImage}
              alt={`${project.title} hero`}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-bone bg-charcoal/80 backdrop-blur-sm px-3 py-1 tracking-widest">
              0{currentIndex + 1} / {projects.length}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <div className="border-l-l border-charcoal pl-8">
          <span className="font-serif text-2xl text-charcoal block">01</span>
        </div>
        <div className="pt-6">
          <h3 className="font-serif text-2xl text-charcoal mb-4">The Challenge</h3>
          <p className="text-charcoal-muted text-base font-light leading-relaxed">
            {project.challenge}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <div className="border-l-l border-charcoal pl-8">
          <span className="font-serif text-2xl text-charcoal block">02</span>
        </div>
        <div className="pt-6">
          <h3 className="font-serif text-2xl text-charcoal mb-4">Our Approach</h3>
          <p className="text-charcoal-muted text-base font-light leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((src, idx) => (
              <div
                key={idx}
                className="aspect-[4/3] border border-sand-dark/60 overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`${project.title} gallery image ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {project.quote && (
        <section className="max-w-4xl mx-auto py-24 border-y border-sand-dark">
          <blockquote className="relative bg-bone-light border-l-4 border-vermilion p-8 md:p-12">
            <span className="font-serif text-5xl text-charcoal/10 select-none -translate-y-4 -translate-x-2 absolute">
              &ldquo;
            </span>
            <p className="font-serif text-2xl text-charcoal italic mb-6 ml-10 mt-4">
              &ldquo;{project.quote.text}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-sand-dark/60">
              <div className="w-12 h-12 bg-sand-dark/60 flex items-center justify-center">
                <User className="w-6 h-6 text-charcoal" />
              </div>
              <div>
                <p className="font-serif text-charcoal font-medium">{project.quote.author}</p>
                <p className="font-mono text-xs text-sand-text">{project.quote.role}</p>
              </div>
            </div>
          </blockquote>
        </section>
      )}

      <section className="max-w-4xl mx-auto">
        <div className="border-l-l border-charcoal pl-8">
          <span className="font-serif text-2xl text-charcoal block">03</span>
        </div>
        <div className="pt-6">
          <h3 className="font-serif text-2xl text-charcoal mb-4">Deliverables</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.deliverables.map((del, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-vermilion" />
                <span className="text-charcoal-muted">{del}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="max-w-4xl mx-auto flex items-center justify-between pt-12 border-t border-sand-dark">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-charcoal hover:text-vermilion transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <div>
              <span className="text-sand-text block">Previous Project</span>
              <span className="font-serif text-lg">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-charcoal hover:text-vermilion transition-colors"
          >
            <span className="text-right">
              <span className="text-sand-text block">Next Project</span>
              <span className="font-serif text-lg">{nextProject.title}</span>
            </span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-charcoal">
            <ArrowRight className="w-4 h-4" />
            <span>View Portfolio</span>
          </div>
        )}
      </nav>

      <section className="max-w-4xl mx-auto py-16 text-center border-y border-sand-dark">
        <span className="font-mono text-xs text-vermilion uppercase tracking-widest block mb-4">
          [ NEXT PROJECT ]
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-6">
          Interested in something similar?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-vermilion text-bone font-mono text-xs uppercase tracking-widest hover:bg-vermilion-hover transition-all duration-200"
        >
          <span>Start a Project Brief</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </article>
  );
}