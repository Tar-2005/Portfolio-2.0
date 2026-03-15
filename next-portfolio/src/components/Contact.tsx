"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <span className="text-foreground/80 font-mono text-sm tracking-[0.2em] uppercase glass-pill px-6 py-2 rounded-full border border-foreground/10 shadow-[0_0_15px_rgba(0,0,0,0.05)] mb-6 inline-block">What&apos;s Next?</span>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground text-glow">Get In Touch</h2>
        <p className="max-w-xl mx-auto text-foreground/60 text-lg font-light">
          Whether you have a question, a project opportunity, or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-col gap-6"
        >
          <div className="flex items-start gap-5 glass p-6 rounded-2xl hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(var(--primary-glow))] transition-all hover:-translate-y-1 group">
            <div className="bg-primary/10 p-4 rounded-xl text-primary mt-1 shadow-[0_0_15px_rgba(92,107,192,0.3)] group-hover:shadow-[0_0_25px_rgba(92,107,192,0.6)] transition-all">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1 text-foreground">Email</h4>
              <p className="text-foreground/50 text-sm mb-3">My inbox is always open.</p>
              <a href="mailto:tarunkumar051005@gmail.com" className="text-primary hover:text-foreground transition-colors font-medium text-lg">
                tarunkumar051005@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-5 glass p-6 rounded-2xl hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(var(--primary-glow))] transition-all hover:-translate-y-1 group">
            <div className="bg-primary/10 p-4 rounded-xl text-primary mt-1 shadow-[0_0_15px_rgba(92,107,192,0.3)] group-hover:shadow-[0_0_25px_rgba(92,107,192,0.6)] transition-all">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1 text-foreground">Phone</h4>
              <p className="text-foreground/50 text-sm mb-3">Available for urgent inquiries.</p>
              <a href="tel:+918610745126" className="text-primary hover:text-foreground transition-colors font-medium text-lg">
                +91 8610745126
              </a>
            </div>
          </div>

          <div className="flex items-start gap-5 glass p-6 rounded-2xl hover:border-primary/50 hover:shadow-[0_4px_20px_rgba(var(--primary-glow))] transition-all hover:-translate-y-1 group">
            <div className="bg-primary/10 p-4 rounded-xl text-primary mt-1 shadow-[0_0_15px_rgba(92,107,192,0.3)] group-hover:shadow-[0_0_25px_rgba(92,107,192,0.6)] transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1 text-foreground">Location</h4>
              <p className="text-foreground/50 text-sm leading-relaxed">
                27/6A LIG NH-3 Thilagar ST<br />
                Maraimalai Nagar, Chengalpattu<br />
                Tamil Nadu, India
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-6 w-full glass p-8 rounded-3xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-foreground/50 ml-1">Name</label>
              <input type="text" id="name" placeholder="John Doe" className="bg-foreground/5 border border-foreground/10 text-foreground rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:bg-foreground/10 transition-all font-sans placeholder:text-foreground/20" />
            </div>
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-foreground/50 ml-1">Email</label>
              <input type="email" id="email" placeholder="john@example.com" className="bg-foreground/5 border border-foreground/10 text-foreground rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:bg-foreground/10 transition-all font-sans placeholder:text-foreground/20" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="subject" className="text-xs font-bold tracking-widest uppercase text-foreground/50 ml-1">Subject</label>
            <input type="text" id="subject" placeholder="Project Inquiry" className="bg-foreground/5 border border-foreground/10 text-foreground rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:bg-foreground/10 transition-all font-sans placeholder:text-foreground/20" />
          </div>

          <div className="flex flex-col gap-2 relative mb-2">
            <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-foreground/50 ml-1">Message</label>
            <textarea id="message" rows={5} placeholder="Hello Tarun..." className="bg-foreground/5 border border-foreground/10 text-foreground rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:bg-foreground/10 transition-all resize-y font-sans placeholder:text-foreground/20"></textarea>
          </div>

          <button type="submit" className="bg-foreground text-background font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all w-full box-glow hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 mt-4">
            Send Message <Mail size={20} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
