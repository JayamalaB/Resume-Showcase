import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Available for new opportunities</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight"
          >
            Hi, I'm <span className="text-gradient">Jayamala B</span>
            <br />
            <span className="text-4xl md:text-6xl text-foreground/90">Data Analyst & Software Developer</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            An AI & Data Science graduate passionate about unlocking insights through analytics, 
            building robust backend architectures, and driving data-informed decisions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium flex items-center gap-2 hover:bg-secondary/80 transition-colors border border-border">
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Cuddalore, India
            </p>
            <div className="hidden sm:block h-px w-12 bg-border"></div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
