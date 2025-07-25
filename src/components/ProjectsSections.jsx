import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "EV Charge",
    description:
      "A mobile application that allows users to find and reserve EV charging stations, using react native and expo ",
    image: "/projects/EVCharge.png",
    tags: ["React", "Expo", "Firebase"],
    githubUrl: "https://github.com/hrishitarale/EVCharge",
  },
  {
    id: 2,
    title: "Farm Fresh",
    description:
      "FarmFresh is a full-stack web application designed to connect farmers directly with customers and businesses, allowing users to buy fresh vegetables",
    image: "/projects/farmfresh.png",
    tags: ["React", "Node", "Firebase", "Vite"],
    githubUrl: "https://github.com/hrishitarale/FarmFresh",
  },
];

const ProjectsSections = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
          Below are some of my featured projects that I have worked on. You can
          find more on my GitHub.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href=""
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-15">
          <a
            href="https://github.com/hrishitarale"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSections;
