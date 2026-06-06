import Section from "./Section";
import { User, GraduationCap, Database, MapPin, Mail, Phone, Sparkles } from "lucide-react";

export default function About() {
  return (
    <Section id="about" title="About Me" icon={User} className="bg-secondary/30">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: bio text (2 cols wide) */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Full Stack Developer · AI Enthusiast
          </h3>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              I'm Jayamala B, a Full Stack Developer with nearly 2 years of production experience building backend systems, REST APIs, and database-driven web applications.
            </p>
            <p>
              Proficient in Python, PHP (Laravel, CodeIgniter), and the MERN stack with JWT-based authentication. I built a voice-enabled multilingual chatbot using Sarvam AI — supporting English and Tanglish — deployed in a production customer-facing interface.
            </p>
            <p>
              I hold a B.Tech in AI & Data Science (CGPA 8.8) and am actively exploring LangChain and RAG pipelines. I work daily with Claude and GitHub Copilot for code generation, debugging, and documentation.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
              <GraduationCap className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm">AI & DS</p>
                <p className="text-xs text-muted-foreground">CGPA 8.8</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
              <Database className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm">~2 Years</p>
                <p className="text-xs text-muted-foreground">Production Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: quick info card */}
        <div className="glass-card rounded-2xl p-6 space-y-5 self-start">
          <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Quick Info</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-muted-foreground">Coimbatore, India</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:jayamalab333@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                jayamalab333@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span className="text-muted-foreground">+91 8056535850</span>
            </div>
          </div>
          <div className="pt-4 border-t border-border">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Currently Exploring
            </h4>
            <div className="flex flex-wrap gap-2">
              {["LangChain", "RAG Pipelines", "Docker", "TypeScript"].map((item) => (
                <span key={item} className="px-2.5 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
