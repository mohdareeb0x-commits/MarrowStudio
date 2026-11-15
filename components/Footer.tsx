import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { studioInfo } from '@/lib/data';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-bone pt-20 pb-12 border-t border-charcoal-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-charcoal-soft">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs text-sand uppercase tracking-widest block">
              [ INITIATE DIALOGUE ]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-bone">
              Have an ambitious project in mind? Let&apos;s build something essential.
            </h2>
            <p className="text-sand/80 max-w-xl text-base md:text-lg font-light">
              We take on 8–10 select studio projects per year to ensure uncompromised craftsmanship and personal partner involvement.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end space-y-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-vermilion text-bone font-mono text-xs uppercase tracking-widest hover:bg-vermilion-hover transition-all duration-200"
            >
              <span>Start a Project Brief</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <div className="space-y-2 text-left lg:text-right font-mono text-xs text-sand/70">
              <p className="text-bone font-medium">{studioInfo.email}</p>
              <p>{studioInfo.phone}</p>
              <p>{studioInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Links & Subfooter */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-4 space-y-2">
            <Link href="/" className="font-serif text-2xl tracking-tight text-bone block">
              Marrow Studio
            </Link>
            <p className="font-mono text-xs text-sand/60">
              15°29&apos;N 73°49&apos;E • Panjim, Goa &amp; Bengaluru, India
            </p>
          </div>

          <div className="md:col-span-4 flex gap-8">
            <div>
              <span className="font-mono text-[10px] text-sand/50 uppercase tracking-widest block mb-3">
                Navigation
              </span>
              <ul className="space-y-2 font-mono text-xs text-sand">
                <li><Link href="/" className="hover:text-vermilion transition-colors">Home</Link></li>
                <li><Link href="/work" className="hover:text-vermilion transition-colors">Selected Work</Link></li>
                <li><Link href="/about" className="hover:text-vermilion transition-colors">Studio &amp; Practice</Link></li>
                <li><Link href="/contact" className="hover:text-vermilion transition-colors">Inquiries</Link></li>
              </ul>
            </div>
            <div>
              <span className="font-mono text-[10px] text-sand/50 uppercase tracking-widest block mb-3">
                Presence
              </span>
              <ul className="space-y-2 font-mono text-xs text-sand">
                {studioInfo.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-vermilion transition-colors flex items-center gap-1"
                    >
                      {social.label}
                      <ArrowUpRight className="w-3 h-3 text-sand/40" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 md:text-right space-y-2">
            <p className="font-mono text-[11px] text-sand/50">
              &copy; {new Date().getFullYear()} Marrow Studio. All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-sand/40">
              Built with Next.js 14, TypeScript &amp; Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
