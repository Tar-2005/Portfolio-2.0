"use client";

import { motion } from "framer-motion";

const skills = [
  "C / C++", "Python", "Java", "JavaScript", "TypeScript", 
  "ReactJS", "Next.js", "Tailwind CSS", "NodeJS", "MongoDB", 
  "MySQL", "Git", "Selenium", "Pandas", "OpenCV"
];

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          <div className="h-[1px] bg-border flex-1 ml-4 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8 text-foreground/70 text-lg leading-relaxed font-light">
            <p className="text-xl text-foreground/90 font-normal">
              Hi, I&apos;m Tarun. I am an enthusiastic developer and data analyst currently pursuing my B.E. in Electronics and Communication Engineering at SRM Valliammai Engineering College.
            </p>
            <p>
              My journey into programming started with a fascination for how things work behind the screen. Today, I enjoy building structured backend architectures, analyzing data sets to find stories, and designing intuitive, modern front-end experiences.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4 text-sm font-medium glass p-8 rounded-3xl">
              <div>
                <span className="text-foreground/40 block mb-2 uppercase tracking-[0.2em] text-[10px] font-bold">Degree</span>
                <span className="text-foreground">B.E. ECE</span>
              </div>
              <div>
                <span className="text-foreground/40 block mb-2 uppercase tracking-[0.2em] text-[10px] font-bold">Location</span>
                <span className="text-foreground">Chengalpattu, TN</span>
              </div>
              <div>
                <span className="text-foreground/40 block mb-2 uppercase tracking-[0.2em] text-[10px] font-bold">Email</span>
                <a href="mailto:tarunkumar051005@gmail.com" className="hover:text-primary transition-colors text-foreground">Contact Me</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-foreground">
              <span className="text-primary text-glow text-3xl leading-none">•</span> Technical Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, ease: "easeOut" }}
                  key={index}
                  className="px-5 py-2.5 glass rounded-xl text-sm font-medium text-foreground/80 hover:bg-foreground/5 hover:text-foreground hover:border-primary/50 transition-all cursor-default hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(92,107,192,0.3)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
