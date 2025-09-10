import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Hrishikesh Tarale"
            className="rounded-2xl shadow-lg w-72"
          />
        </div>

        {/* Right side Image */}
        <div className="space-y-6 text-left">
          <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
          <p className="text-muted-foreground">
            I create elegant, scalable web applications using modern tools like
            React, Node, and Tailwind. Always learning, always building.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="/HrishikeshTarale_resume.pdf"
              download
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
