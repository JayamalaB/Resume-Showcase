import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Jayamala B. All rights reserved.</p>
      </footer>
    </main>
  );
}
