import React from 'react';
import { studioInfo } from '@/lib/data';

export const JsonLd = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://marrowstudio.design/#organization',
    name: studioInfo.name,
    url: 'https://marrowstudio.design',
    logo: 'https://marrowstudio.design/favicon.ico',
    description: studioInfo.description,
    email: studioInfo.email,
    telephone: studioInfo.phone,
    foundingDate: studioInfo.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: studioInfo.address,
      addressLocality: 'Panjim',
      addressRegion: 'Goa',
      postalCode: '403001',
      addressCountry: 'IN',
    },
    geoCoordinates: {
      '@type': 'GeoCoordinates',
      latitude: 15.4989,
      longitude: 73.8278,
    },
    sameAs: studioInfo.socials.map((s) => s.url),
    department: [
      {
        '@type': 'Organization',
        name: 'Brand Identity',
        description: 'Brand architecture and visual identity systems',
      },
      {
        '@type': 'Organization',
        name: 'Digital Craft',
        description: 'Next.js web development and interactive design',
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Brand Identity Design',
          description: 'Bespoke visual identity systems for boutique brands',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Packaging Design',
          description: 'Tactile packaging systems for luxury brands',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Next.js Web Development',
          description: 'High-performance digital platforms built with Next.js',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
