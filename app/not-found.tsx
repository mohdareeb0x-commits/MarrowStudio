import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Not Found — Marrow Studio',
  description: 'Page not found. Return to the Marrow Studio portfolio.',
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center max-w-7xl mx-auto px-6 md:px-12 text-center">
      <div className="space-y-8">
        <div className="font-serif text-7xl sm:text-9xl text-charcoal opacity-20 select-none">
          404
        </div>

        <div className="space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-charcoal-muted text-base font-light">
            The page you&apos;re looking for has been archived or never existed.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-charcoal text-charcoal font-mono text-xs uppercase tracking-widest hover:bg-charcoal hover:text-bone transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}