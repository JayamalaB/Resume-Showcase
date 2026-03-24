import Section from "./Section";
import { Code, Database, Terminal, Lightbulb } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python (Flask)", "PHP (Laravel/CodeIgniter)", "React", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Data Science",
      icon: Database,
      skills: ["Power BI", "SQL (MySQL)", "Machine Learning", "EDA", "Data Analytics"]
    },
    {
      title: "Tools & Technologies",
      icon: Terminal,
      skills: ["ServiceNow", "Git", "Firebase", "WordPress", "Jira"]
    },
    {
      title: "Professional Skills",
      icon: Lightbulb,
      skills: ["Analytical Thinking", "Problem-Solving", "Communication", "Agile Methodologies"]
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
