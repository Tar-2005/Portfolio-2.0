"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 relative overflow-hidden">
      {/* Background Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-8 relative z-10 w-full max-w-4xl mx-auto text-center items-center"
      >
        <span className="text-foreground/80 font-mono text-sm tracking-[0.2em] uppercase glass-pill px-6 py-2 rounded-full border border-foreground/10 shadow-[0_0_15px_rgba(var(--foreground),0.05)]">
          Welcome to my universe
        </span>

        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-foreground leading-[1.1]">
          Hi, I&apos;m <span className="gradient-text drop-shadow-[0_0_25px_rgba(var(--foreground),0.3)]">Tarun Kumar</span>
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-foreground/70 h-[80px] md:h-auto">
          I am a{" "}
          <span className="text-primary text-glow font-semibold">
            <Typewriter
              words={["Vibe Coder", "Data Analyst", "Web Designer", "Tech Enthusiast"]}
              loop = { true}
              cursor
              cursorStyle = "_"
              typeSpeed = { 70}
              deleteSpeed = { 50}
              delaySpeed = { 1500}
                />
          </span>
        </h2>

        <p className="max-w-2xl text-lg md:text-xl text-foreground/60 leading-relaxed font-light mt-4">
          I build premium, responsive interfaces and analyze data to uncover actionable insights.
          Working towards becoming a full-stack developer with a passion for creative problem solving.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <a
            href="#projects"
            className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all box-glow active:scale-95"
          >
            View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 glass-pill text-foreground px-8 py-4 rounded-full font-semibold hover:bg-foreground/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all active:scale-95"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <SocialLink href="https://github.com/Tar-2005" icon={<Github size={24} />} />
          <SocialLink href="https://www.linkedin.com/in/tarun-kumar-saravanapandi-797a77326" icon={<Linkedin size={24} />} />
          <SocialLink href="mailto:tarunkumar051005@gmail.com" icon={<Mail size={24} />} />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 glass-pill rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-all hover:-translate-y-1 block"
    >
      {icon}
    </a>
  );
}
