import Section from "./Section";
import { User, GraduationCap, Database, Code2 } from "lucide-react";

export default function About() {
  return (
    <Section id="about" title="About Me" icon={User} className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Bridging Data and Software
          </h3>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Hello! I'm Jayamala B, a recent graduate with a B.Tech in Artificial Intelligence & Data Science. I specialize in the intersection of data analytics, backend development, and machine learning.
            </p>
            <p>
              My expertise lies in translating complex datasets into actionable insights using tools like Power BI and SQL, while simultaneously building robust, scalable applications with Python Flask and PHP frameworks.
            </p>
            <p>
              I am driven by curiosity and a problem-solving mindset, continuously exploring new ways to optimize workflows, build intelligent dashboards, and create software that makes a tangible impact.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <p className="font-bold text-foreground">AI & DS</p>
                <p className="text-xs text-muted-foreground">B.Tech Graduate</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
              <Database className="w-8 h-8 text-primary" />
              <div>
                <p className="font-bold text-foreground">Analytics</p>
                <p className="text-xs text-muted-foreground">Data-Driven</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2 relative z-10 border border-white/10">
            <div className="w-full h-full bg-gradient-to-br from-secondary to-background rounded-xl flex items-center justify-center overflow-hidden">
               {/* Decorative tech illustration instead of just a placeholder */}
               <div className="text-center p-8 flex flex-col items-center">
                 <div className="relative">
                   <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
                   <Code2 className="w-32 h-32 text-primary relative z-10" strokeWidth={1} />
                 </div>
                 <h4 className="mt-6 text-xl font-display font-semibold">Jayamala B</h4>
                 <p className="text-primary/80">Data & Software</p>
               </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-1/2 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
        </div>
      </div>
    </Section>
  );
}
