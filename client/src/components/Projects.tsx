import Section from "./Section";
import { FolderGit2, CheckCircle2, ChevronRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      description: "A comprehensive web-based inventory management system designed to streamline stock tracking and management operations.",
      features: [
        "CRUD operations for product management",
        "Real-time tracking of stock levels",
        "Low stock alerts and automated notifications",
        "Interactive analytics dashboard"
      ],
      techStack: ["PHP/Python", "MySQL", "HTML", "CSS", "JavaScript"],
      impact: "Significantly reduced manual errors and improved overall inventory visibility for better decision-making."
    },
    {
      title: "ERP Module Development",
      description: "Custom Enterprise Resource Planning (ERP) modules built to integrate seamlessly with existing business workflows.",
      features: [
        "Dedicated sales and inventory modules",
        "Automated report generation",
        "Role-based access control and security"
      ],
      techStack: ["PHP/Python", "MySQL", "REST APIs"],
      impact: "Streamlined business operations and drastically reduced manual data entry time."
    },
    {
      title: "Business Websites using WordPress",
      description: "Development and delivery of professional, performant, and SEO-optimized business websites using WordPress.",
      features: [
        "Custom theme design and modifications",
        "Advanced plugin integration",
        "On-page SEO optimization",
        "Performance and speed tuning"
      ],
      techStack: ["WordPress", "Elementor", "HTML", "CSS"],
      impact: "Enhanced online presence for clients, coupled with much faster project deployment cycles."
    }
  ];

  return (
    <Section id="projects" title="Featured Projects" icon={FolderGit2}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <div className="p-8 flex-grow flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <FolderGit2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" /> Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 pt-4 border-t border-border/50">
                <p className="text-sm italic text-muted-foreground border-l-2 border-primary pl-3 py-1 bg-primary/5 rounded-r-md">
                  <span className="font-semibold text-foreground not-italic">Impact:</span> {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground border border-border rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
