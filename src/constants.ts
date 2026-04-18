/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: "Pakistan" | "Europe";
  content: string;
  reply: string;
  avatar: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Elegance",
    description: "A luxury fashion store with seamless transitions and a minimalist interface.",
    tags: ["React", "Motion", "Tailwind"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/seed/luxury/800/600",
  },
  {
    id: "2",
    title: "SaaS Monitor Pro",
    description: "Real-time analytics dashboard for cloud infrastructures with heavy data visualization.",
    tags: ["TypeScript", "D3.js", "Express"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/seed/tech/800/600",
  },
  {
    id: "3",
    title: "EcoConnect Platform",
    description: "Connecting local sustainable businesses with environmentally conscious consumers.",
    tags: ["Next.js", "Firebase", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/seed/nature/800/600",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Arsalan Khan",
    role: "CEO at TechVerge",
    location: "Pakistan",
    content: "Zulfiqar transformed our old portal into a modern marvel. His attention to detail in the UI is unmatched in the local industry.",
    reply: "Thank you Arsalan! It was a pleasure working with the TechVerge team to redefine their digital presence.",
    avatar: "https://picsum.photos/seed/pk1/100/100",
  },
  {
    id: "t2",
    name: "Elena Rossi",
    role: "Product Manager at DesignFlow",
    location: "Europe",
    content: "Working with Zulfiqar was a breeze despite the distance. His understanding of European design standards is exceptional.",
    reply: "Grazie Elena! I really enjoyed the collaborative process and the focus on accessibility for the European market.",
    avatar: "https://picsum.photos/seed/eu1/100/100",
  },
  {
    id: "t3",
    name: "Hans Müller",
    role: "CTO at Berlin Systems",
    location: "Europe",
    content: "Zulfiqar's technical competence is top-notch. He delivered a complex frontend architecture ahead of schedule.",
    reply: "Vielen Dank Hans! I'm glad we could optimize the core architecture to meet Berlin Systems' performance goals.",
    avatar: "https://picsum.photos/seed/eu2/100/100",
  },
  {
    id: "t4",
    name: "Fatima Ahmed",
    role: "Founder of Kareem Solutions",
    location: "Pakistan",
    content: "Highly professional and skilled. Zulfiqar didn't just write code; he helped us iterate on the UX for better conversion.",
    reply: "It's always great to work on projects that have a direct impact on growth. Thanks Fatima!",
    avatar: "https://picsum.photos/seed/pk2/100/100",
  },
];

export const SKILLS = [
  "React & Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Motion (Framer)",
  "Express.js",
  "Postgres/Firestore",
  "UI/UX Design",
  "Performance Optimization",
];
