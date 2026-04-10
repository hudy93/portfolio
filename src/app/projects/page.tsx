"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/projectCard";
import { projectData } from "@/lib/project-data";

const categories = [
  "all",
  ...Array.from(new Set(projectData.map((p) => p.category))),
];

const Projects = () => {
  const [category, setCategory] = useState("all");
  const filtered =
    category === "all"
      ? projectData
      : projectData.filter((p) => p.category === category);

  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue="all" className="mb-12 xl:mb-16">
          <TabsList className="w-full h-full md:flex md:flex-wrap md:justify-center gap-2 md:border dark:border-none">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="capitalize"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
