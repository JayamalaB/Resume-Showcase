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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <div>
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight"
            >
              Hi, I'm <span className="text-gradient">Jayamala B</span>
              <br />
              <span className="text-3xl md:text-4xl text-foreground/90">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10 leading-relaxed"
            >
              Nearly 2 years of production experience building REST APIs, backend systems, and database-driven apps — Python · MERN Stack · PHP · Sarvam AI
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
              <a href="/Jayamala_B_Resume.pdf" download className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium flex items-center gap-2 hover:bg-secondary/80 transition-colors border border-border">
                <Download className="w-4 h-4" /> Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Coimbatore, India
              </p>
              <div className="hidden sm:block h-px w-12 bg-border"></div>
              <div className="flex gap-4">
                <a href="https://github.com/JayamalaB" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/b-jayamala-81274b237" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:jayamalab333@gmail.com" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="w-full h-full rounded-3xl overflow-hidden glass-card p-2 border border-white/10">
                <img
                  src="/jayamala.jpeg"
                  alt="Jayamala B"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-56 h-56 bg-primary/15 rounded-full blur-[60px] -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-56 h-56 bg-blue-500/15 rounded-full blur-[60px] -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
