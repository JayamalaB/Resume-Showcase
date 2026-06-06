import Section from "./Section";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer & Data Analyst",
      company: "Neuralarc Global Pvt. Ltd., Coimbatore",
      period: "Jul 2024 – Present",
      bullets: [
        "Built and maintained REST API integrations in Python connecting multiple backend services — ensuring reliable data flow, structured error handling, and data integrity across production workflows.",
        "Developed a voice-enabled multilingual chatbot using Sarvam AI's Saras (STT) and Bulbul (TTS) models — supporting English and Tanglish, deployed in a production customer-facing interface.",
        "Applied RAG concepts to enhance chatbot response quality with context-aware, document-grounded answers — actively deepening practical LangChain expertise.",
        "Built backend automation scripts using ServiceNow integrations to streamline operational processes, significantly reducing manual effort.",
        "Managed MySQL databases in production — designed schemas, wrote optimised queries, resolved data integrity issues, and enforced access controls.",
        "Delivered Power BI dashboards providing operational metrics to product and business teams."
      ],
      skills: ["Python", "REST APIs", "Sarvam AI", "RAG", "LangChain", "ServiceNow", "MySQL", "Power BI", "JWT"]
    },
    {
      role: "Business Analyst Intern",
      company: "Digital Garage, Coimbatore",
      period: "Feb 2024 – May 2024",
      bullets: [
        "Collaborated within Agile/Scrum delivery cycles at a product startup using Jira — contributed to sprint planning and cross-functional delivery with design and engineering teams.",
        "Translated product requirements into clear BRDs and user stories, bridging communication between engineering and non-technical stakeholders."
      ],
      skills: ["Agile/Scrum", "Jira", "BRDs", "User Stories"]
    },
    {
      role: "Data Science Intern",
      company: "Cube N Square, Chennai",
      period: "Aug 2023 – Jan 2024",
      bullets: [
        "Wrote Python scripts for data preprocessing and analysis to build and evaluate ML models — reinforced clean coding and debugging practices.",
        "Produced technical documentation on data science workflows for varied audiences, demonstrating ability to communicate complex topics clearly."
      ],
      skills: ["Python", "Machine Learning", "EDA", "Data Science"]
    }
  ];

  return (
    <Section id="experience" title="Work Experience" icon={Briefcase}>
      <div className="relative">
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
                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
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
