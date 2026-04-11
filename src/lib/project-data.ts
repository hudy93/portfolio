export interface ProjectData {
  image: string;
  category: string;
  name: string;
  desc: string;
  link: string;
  github: string;
}

export const projectData: ProjectData[] = [
  {
    image: "/work/5.png",
    category: "next js",
    name: "PerformanceHub",
    desc: "An employee performance management dashboard for tracking and analyzing worker performance metrics with interactive data visualizations.",
    link: "https://performance-hub-gilt.vercel.app",
    github: "https://github.com/hudy93/performance-hub",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "alittlehelp",
    desc: "An AI-powered bureaucracy assistant that helps expats and seniors in Germany understand complex official letters and generate formal reply drafts.",
    link: "https://alittlehelp.vercel.app",
    github: "https://github.com/hudy93/alittlehelp",
  },
  {
    image: "/work/2.png",
    category: "html",
    name: "Wedding Website",
    desc: "A beautiful static wedding website with RSVP functionality, event details, and animated decorative elements for a ceremony in Neresheim.",
    link: "https://wedding-opal-two.vercel.app",
    github: "https://github.com/hudy93/wedding",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Portfolio",
    desc: "This developer portfolio built with Next.js, Tailwind CSS, and Framer Motion, featuring dark mode, contact form, and project showcase.",
    link: "https://hudy.techg",
    github: "https://github.com/hudy93/portfolio",
  },
];
