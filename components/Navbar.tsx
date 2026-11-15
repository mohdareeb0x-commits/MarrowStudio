'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { studioInfo } from '@/lib/data';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Work', href: '/work', index: '01' },
    { label: 'About', href: '/about', index: '02' },
    { label: 'Contact', href: '/contact', index: '03' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone/90 backdrop-blur-md border-b border-sand-dark/40 py-4 shadow-sm'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <Link
          href="/"
          className="group flex items-baseline gap-2 text-charcoal focus:outline-none focus:ring-1 focus:ring-vermilion rounded-sm"
          aria-label="Marrow Studio Home"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-tight font-medium group-hover:text-vermilion transition-colors duration-200">
            Marrow
          </span>
          <span className="font-mono text-[10px] tracking-widest text-sand-text uppercase border-l border-sand-dark pl-2">
            Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-mono text-xs uppercase tracking-widest relative py-1 transition-colors duration-200 flex items-center gap-1.5 ${
                      isActive ? 'text-charcoal font-semibold' : 'text-sand-text hover:text-charcoal'
                    }`}
                  >
                    <span className="text-[10px] text-vermilion">{link.index}.</span>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-vermilion rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Availability Pill */}
          <Link
            href="/contact"
            className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-sand-dark/60 bg-bone-light/80 text-xs font-mono text-charcoal hover:border-vermilion/50 transition-all duration-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vermilion opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vermilion"></span>
            </span>
            <span className="text-[11px] tracking-wider uppercase text-sand-text group-hover:text-charcoal transition-colors">
              Available Q2
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sand-text group-hover:text-vermilion transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-charcoal hover:text-vermilion focus:outline-none focus:ring-1 focus:ring-vermilion"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-bone border-b border-sand-dark py-8 px-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-sm uppercase tracking-widest flex items-center justify-between pb-3 border-b border-sand/50 ${
                    isActive ? 'text-vermilion font-medium' : 'text-charcoal'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-sand-text">{link.index}</span>
                    <span className="text-lg font-serif italic capitalize tracking-normal">{link.label}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-sand-text" />
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-sand-text">
                <span className="h-2 w-2 rounded-full bg-vermilion inline-block"></span>
                <span>{studioInfo.availability}</span>
              </div>
              <Link
                href="/contact"
                className="w-full text-center py-3 bg-charcoal text-bone font-mono text-xs uppercase tracking-widest hover:bg-vermilion transition-colors"
              >
                Initiate Project Inquiry
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
