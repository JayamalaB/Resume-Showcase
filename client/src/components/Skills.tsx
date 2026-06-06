import Section from "./Section";
import { Code, Database, Terminal, Lightbulb } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Stacks",
      icon: Code,
      skills: ["Python", "JavaScript (ES6)", "PHP", "SQL", "MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      title: "Backend & APIs",
      icon: Terminal,
      skills: ["REST API Design", "Flask", "Laravel", "CodeIgniter", "JWT Auth", "ServiceNow", "Postman"]
    },
    {
      title: "AI & Data",
      icon: Lightbulb,
      skills: ["Sarvam AI (Saras STT, Bulbul TTS)", "RAG Concepts", "LangChain (exploring)", "Power BI", "ETL", "MySQL"]
    },
    {
      title: "Tools & Practices",
      icon: Database,
      skills: ["Git / GitHub / GitLab", "Jira", "Agile / Scrum", "Claude (Anthropic)", "GitHub Copilot", "Docker (exploring)", "TypeScript (exploring)"]
    }
  ];

  return (
    <Section id="skills" title="Skills & Expertise" icon={Code} className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-card p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <category.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
