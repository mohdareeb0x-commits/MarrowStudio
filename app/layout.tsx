import type { Metadata } from 'next';
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marrowstudio.design'),
  title: {
    default: 'Marrow Studio — Essentialist Brand Identity & Web Design',
    template: '%s | Marrow Studio',
  },
  description:
    'Marrow Studio is an independent 3-person brand and web design practice based in India. We craft minimalist brand identities, packaging, and high-performance Next.js digital platforms for boutique brands globally.',
  keywords: [
    'Brand Identity Studio India',
    'Minimalist Web Design',
    'Next.js 14 Web Development',
    'Boutique Packaging Design',
    'Goa Design Agency',
    'Art Direction Studio',
  ],
  authors: [{ name: 'Marrow Studio', url: 'https://marrowstudio.design' }],
  creator: 'Marrow Studio',
  publisher: 'Marrow Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marrowstudio.design',
    title: 'Marrow Studio — Essentialist Brand Identity & Web Design',
    description:
      'Independent 3-person brand and web design practice based in India. Crafting minimalist brand identities and Next.js digital platforms.',
    siteName: 'Marrow Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1608248597261-e4d29447437c?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Marrow Studio Selected Brand Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marrow Studio — Essentialist Brand Identity & Web Design',
    description:
      'Independent 3-person brand and web design practice based in India. Uncompromising digital craft for boutique brands.',
    images: ['https://images.unsplash.com/photo-1608248597261-e4d29447437c?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: {
      url: '/favicon.svg',
      sizes: '180x180',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bone text-charcoal font-sans antialiased selection:bg-vermilion selection:text-bone flex flex-col min-h-screen">
        <JsonLd />
        <Navbar />
        <main className="flex-grow pt-24 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}