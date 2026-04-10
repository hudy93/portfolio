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
    image: "/work/1.png",
    category: "react js",
    name: "React Dashboard",
    desc: "A modern analytics dashboard built with React and TypeScript, featuring real-time data visualization and responsive design.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "angular",
    name: "Enterprise Platform",
    desc: "A scalable enterprise web application built with Angular, featuring role-based access control and complex workflow management.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "c#",
    name: "Cross-Platform App",
    desc: "A cross-platform mobile and desktop application developed with C# and .NET, delivering a seamless native experience.",
    link: "/",
    github: "/",
  },
];
