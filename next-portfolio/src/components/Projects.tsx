"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Interactive Portfolio Website",
    description: "A personal portfolio showcasing skills, projects, and achievements. Fully responsive and animated using React.js and Tailwind CSS. Deployed on GitHub Pages.",
    tags: ["React", "Custom Hook", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Tar-2005",
    demo: "https://tar-2005.github.io/newportfolio",
  },
  {
    title: "Smart Fence System",
    description: "AIoT-based security system using Raspberry Pi. Detects human presence near a fence and automatically cuts power using YOLO object detection with an ESP32-CAM.",
    tags: ["Python", "OpenCV", "YOLO", "Raspberry Pi", "IoT"],
    github: "https://github.com/Tar-2005",
    demo: "#",
  },
  {
    title: "Data Analysis Dashboard",
    description: "Built interactive dashboards to visualize complex datasets, providing actionable insights for business decisions.",
    tags: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com/Tar-2005",
    demo: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
        <div className="h-[1px] bg-border flex-1 ml-4 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="flex flex-col glass rounded-3xl p-8 transition-all duration-300 hover:border-primary/50 group relative overflow-hidden h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(92,107,192,0.1)]"
          >
            {/* Hover Spotlight Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
            
            <div className="absolute top-0 right-0 p-8 flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity z-10 text-foreground">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-110 transition-all">
                <Github size={22} />
              </a>
              {project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-110 transition-all">
                  <ExternalLink size={22} />
                </a>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-12 text-foreground group-hover:text-glow transition-all z-10">
              {project.title}
            </h3>
            
            <p className="text-foreground/60 text-base leading-relaxed mb-8 flex-grow z-10 font-light">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-foreground/10 z-10">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs font-mono font-bold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
