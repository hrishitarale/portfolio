import { ArrowRight } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "EV Charge",
    description:
      "Mobile app that allows users to find and reserve EV charging stations, built using React Native and expo ",
    image: "/projects/EVCharge.png",
    tags: ["React", "Expo", "Firebase"],
    githubUrl: "https://github.com/hrishitarale/EVCharge",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Farm Fresh",
    description:
      "Full-stack web app connecting farmers with customers for fresh produce. allowing users to buy fresh vegetables",
    image: "/projects/farmfresh.png",
    tags: ["React", "Node", "Firebase", "Vite"],
    githubUrl: "https://github.com/hrishitarale/FarmFresh",
    liveUrl: "#",
  },
];

const ProjectsSections = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
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
              className="group relative bg-card rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div className="group relative bg-card rounded-xl overflow-hidden shadow-md card-hover">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="px-4 py-2 bg-primary rounded-full"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="px-4 py-2 border border-white rounded-full"
                    >
                      Live Demo
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
