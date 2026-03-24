import Section from "./Section";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Data Analyst & Software Developer",
      company: "NeuralArc Global Private Limited",
      period: "Jul 2024 – Present",
      description: "Developing comprehensive Power BI dashboards to visualize key business metrics. Analyzing complex data using MySQL and managing robust backend architectures using Flask and PHP. Orchestrating ETL processes and automating workflows using ServiceNow to enhance operational efficiency.",
      skills: ["Power BI", "MySQL", "Python Flask", "PHP", "ETL", "ServiceNow"]
    },
    {
      role: "Business Analyst Intern",
      company: "Digital Garage",
      period: "Internship",
      description: "Drafted Business Requirements Documents (BRDs) to align project goals with stakeholder needs. Collaborated with cross-functional teams using Agile methodologies and managed project tracking and delivery via Jira.",
      skills: ["BRDs", "Agile", "Jira", "Business Analysis"]
    },
    {
      role: "Data Science Intern",
      company: "Cube N Square",
      period: "Internship",
      description: "Conducted comprehensive Exploratory Data Analysis (EDA) to uncover data trends. Designed and implemented predictive Machine Learning models using Python, contributing to data-driven decision-making.",
      skills: ["Python", "EDA", "Machine Learning", "Data Science"]
    }
  ];

  return (
    <Section id="experience" title="Work Experience" icon={Briefcase}>
      <div className="max-w-4xl relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-24">
              {/* Timeline dot */}
              <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
              
              <div className="glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium text-lg">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm px-3 py-1 bg-secondary rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
