export interface Project {
  slug: string;
  title: string;
  client: string;
  subtitle: string;
  category: string;
  year: string;
  location: string;
  heroImage: string;
  accentColor?: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  deliverables: string[];
  gallery: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  location: string;
  image: string;
  specialty: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  location: string;
  founded: string;
  email: string;
  phone: string;
  address: string;
  availability: string;
  socials: { label: string; url: string }[];
}

export const studioInfo: StudioInfo = {
  name: "Marrow Studio",
  tagline: "Uncompromising brand identity & bespoke digital spaces.",
  description: "Marrow is an independent 3-person brand and web design practice based in India. We strip away superficial noise to reveal the skeletal essence of ambitious boutique brands and early-stage founders globally.",
  location: "Goa & Bengaluru, India",
  founded: "2022",
  email: "mohdareeb0x@gmail.com",
  phone: "+91 7017470667",
  address: "Studio 04, Latin Quarter, Panjim, Goa 403001",
  availability: "Accepting 2 select projects for Q2 2025",
  socials: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "Read.cv", url: "https://read.cv" },
    { label: "Savee", url: "https://savee.it" },
    { label: "LinkedIn", url: "https://linkedin.com" },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    name: "Ananya Rao",
    role: "Founder & Creative Director",
    location: "Panjim, Goa",
    bio: "Former design lead at international branding consultancies with 10+ years shaping visual identity systems for architecture, luxury skincare, and hospitality brands.",
    specialty: "Brand Architecture & Typography",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Siddharth Menon",
    role: "Lead Brand Strategist & Writer",
    location: "Bengaluru",
    bio: "Obsessed with brand narrative clarity and editorial verbal systems. Siddharth ensures brand visual expressions are anchored in rigorous market positioning.",
    specialty: "Verbal Identity & Editorial Copy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Tarun Nair",
    role: "Design Engineer & Digital Craftsman",
    location: "Goa / Remote",
    bio: "Bridging the gap between fine typography and frontend performance. Tarun builds bespoke digital platforms using Next.js, modern web standards, and micro-animations.",
    specialty: "Interactive Design & Next.js Architecture",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
  },
];

export const projects: Project[] = [
  {
    slug: "kavya-botanicals",
    title: "Kavya Botanicals",
    client: "Kavya Organics Ltd.",
    subtitle: "Tactile brand identity & high-altitude skincare ecommerce experience",
    category: "Brand Identity & Ecommerce",
    year: "2024",
    location: "Shimla & Mumbai",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=80",
    summary: "Reimagining traditional Himalayan herbal formulation into a quiet luxury ritual for stockists in Paris, Tokyo, and London.",
    challenge: "Traditional Ayurvedic skincare packaging in India often leans either into noisy mass-market foil stamps or overly ornate spiritual motifs. Kavya needed an understated visual language that spoke to discerning international skincare buyers while honoring its high-altitude Himalayan sourcing.",
    solution: "We engineered an architectural identity built around bespoke Devanagari-inspired Latin typography, raw stone-grey unbleached cardstock, and a serene high-performance Next.js storefront that lets the botanical textures breathe.",
    results: [
      { metric: "180%", label: "Increase in Direct DTC Revenue" },
      { metric: "14", label: "International Boutique Stockists Secured" },
      { metric: "< 0.8s", label: "Storefront LCP Page Load Time" },
    ],
    deliverables: ["Brand Identity", "Visual System", "Custom Packaging", "Next.js Ecommerce", "Art Direction"],
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542882954-2a4fd8b7b4a2?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    quote: {
      text: "Marrow stripped away everything we thought we needed and left us with a brand identity so pure that stockists reach out to us before we even pitch.",
      author: "Priya Sharma",
      role: "Founder, Kavya Botanicals",
    },
  },
  {
    slug: "solura-coffee",
    title: "Solura Coffee Roasters",
    client: "Solura Estate Collective",
    subtitle: "Monospaced inventory system & spatial design for artisanal single-origin coffee",
    category: "Brand Architecture & Spatial",
    year: "2024",
    location: "Chikmagalur & Bengaluru",
    heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1400&auto=format&fit=crop",
    summary: "Elevating a 90-year-old family estate into a direct-trade specialty coffee micro-roastery with global reach.",
    challenge: "Solura was transitioning from bulk green bean export to direct-to-consumer specialty micro-batches. They needed a packaging and digital identity system flexible enough to accommodate weekly variable roast lots without incurring massive reprinting costs.",
    solution: "We crafted an industrial monospaced labeling grid inspired by agricultural harvest crates. Standardized recycled tin canisters feature modular hand-stamped batch labels, supported by an interactive roast profile web platform.",
    results: [
      { metric: "4.2x", label: "Average Order Value Growth" },
      { metric: "100%", label: "Roast Batch Traceability" },
      { metric: "18", label: "Boutique Cafes Onboarded" },
    ],
    deliverables: ["Brand Strategy", "Packaging System", "Spatial Signage", "Web Platform", "Copywriting"],
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    ],
    quote: {
      text: "The label system Marrow designed allowed us to launch 12 seasonal micro-lots in six months without re-budgeting for new print runs.",
      author: "Vikram Estate Lead",
      role: "Managing Partner, Solura Estate",
    },
  },
  {
    slug: "object-and-form",
    title: "Object & Form Practice",
    client: "Object & Form Architects",
    subtitle: "Brutalist architectural monograph & digital archival platform",
    category: "Digital Monograph & Web Design",
    year: "2023",
    location: "Goa & New Delhi",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    summary: "A digital sanctuary for a modern brutalist architectural studio capturing material honesty and raw spatial volume.",
    challenge: "Object & Form's previous website was a generic grid template that failed to convey their sculptural use of exposed concrete, natural light, and local stone.",
    solution: "We designed an asymmetrical digital monograph featuring dynamic viewport-based image framing, quiet sans typography, and an interactive spatial archive categorized by structural material.",
    results: [
      { metric: "350%", label: "Increase in High-Value Inquiry Rate" },
      { metric: "Awwwards", label: "Site of the Day Nominee" },
      { metric: "99/100", label: "Lighthouse Performance Rating" },
    ],
    deliverables: ["Digital Strategy", "UI/UX Architecture", "Next.js Platform", "Editorial Design"],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    ],
    quote: {
      text: "The website feels like walking through one of our buildings — quiet, deliberate, and entirely free of unnecessary ornamentation.",
      author: "Kabir Mehta",
      role: "Principal Architect, Object & Form",
    },
  },
  {
    slug: "jardin-tea",
    title: "Jardin Tea Collective",
    client: "Jardin Beverage Co.",
    subtitle: "Editorial identity & packaging design for rare single-estate tea infusions",
    category: "Packaging & Brand Identity",
    year: "2023",
    location: "Darjeeling & London",
    heroImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1400&auto=format&fit=crop",
    summary: "Celebrating Darjeeling's tea traditions through modern editorial typography and botanical precision.",
    challenge: "Connecting younger, health-conscious urban consumers in European capitals with rare, micro-harvested single-origin teas.",
    solution: "We crafted a tactile visual identity utilizing high-contrast serif headlines, pressed leaf blind embossing on recycled cotton paper, and a clean web experience centered on origin storytelling.",
    results: [
      { metric: "$1.2M", label: "First Year Direct Sales ARR" },
      { metric: "64%", label: "Quarterly Subscription Retention Rate" },
      { metric: "22", label: "Retail Outlets Across Europe" },
    ],
    deliverables: ["Visual Identity", "Custom Packaging", "E-commerce Experience", "Content Strategy"],
    gallery: [
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1200&auto=format&fit=crop",
    ],
    quote: {
      text: "Marrow turned our raw estate story into an exquisite luxury experience that resonates equally in Darjeeling and Mayfair.",
      author: "Nandini Sen",
      role: "Co-Founder, Jardin Tea",
    },
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Unearth & Distill",
    description: "We dive deep into your operational truth, founder intent, and audience dynamics. We strip away generic industry tropes until only the irreducible core remains.",
  },
  {
    number: "02",
    title: "Architectural Identity",
    description: "We build high-contrast typographic systems, bespoke color harmonies, and tactile packaging rules that position your brand as an undeniable category authority.",
  },
  {
    number: "03",
    title: "Digital Craftsmanship",
    description: "We engineer lightning-fast Next.js web environments built around spatial hierarchy, generous negative space, and quiet, purposeful micro-interactions.",
  },
  {
    number: "04",
    title: "Stewardship & Guidelines",
    description: "We deliver systematic brand books, web design component libraries, and asset kits that allow your team to scale without diluting visual integrity.",
  },
];
