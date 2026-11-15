import React from 'react';

export const metadata = {
  title: 'Contact — Marrow Studio',
  description:
    "Get in touch with Marrow Studio to discuss your brand identity or web design project. We're accepting new inquiries for Q2 2025.",
  openGraph: {
    title: 'Contact — Marrow Studio',
    description:
      "Get in touch with Marrow Studio to discuss your brand identity or web design project.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}