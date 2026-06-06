import Section from "./Section";
import { FolderGit2, CheckCircle2, ChevronRight, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Multilingual Voice Chatbot",
      description: "Production voice-enabled chatbot supporting English and Tanglish — integrated Sarvam AI for speech recognition and natural voice responses, deployed in a customer-facing interface.",
      features: [
        "Sarvam AI Saras STT for speech recognition",
        "Bulbul TTS for natural voice responses",
        "RAG to ground responses in internal documents",
        "Improved contextual accuracy for real user queries"
      ],
      techStack: ["Python", "Sarvam AI", "Saras STT", "Bulbul TTS", "RAG"],
      impact: "Deployed in production — enabled multilingual voice interaction for real end-users.",
      github: null
    },
    {
      title: "Inventory Management System",
      description: "Full-stack inventory management system on the MERN stack with JWT-secured REST APIs and real-time stock tracking.",
      features: [
        "JWT-secured REST APIs across all endpoints",
        "MongoDB document schema design",
        "React.js frontend for real-time stock tracking",
        "Secure API practices tested via Postman"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Postman"],
      impact: "End-to-end MERN project demonstrating secure API design and full-stack ownership.",
      github: null
    },
    {
      title: "ERP Module Development",
      description: "Backend ERP modules with REST API integrations in CodeIgniter — built frontend views, optimised MySQL queries, and debugged cross-layer integration issues.",
      features: [
        "REST API integrations in CodeIgniter",
        "Frontend views and backend business logic",
        "Optimised MySQL queries for performance",
        "Cross-layer debugging across API, backend, and DB"
      ],
      techStack: ["PHP", "CodeIgniter", "MySQL", "REST APIs"],
      impact: "Streamlined business operations and reduced manual data entry in production ERP workflows.",
      github: null
    },
    {
      title: "Leave Management System",
      description: "Full-stack PHP/MySQL web application for managing employee leave requests with role-based access control for Admins, Managers, and Employees.",
      features: [
        "Role-based access: Admin, Manager, Employee",
        "Leave request submission and approval workflows",
        "Admin dashboard for managing users and leave types",
        "MySQL-backed with secure session management"
      ],
      techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      impact: "Demonstrates production-grade role-based access design and full CRUD workflows in PHP.",
      github: "https://github.com/JayamalaB/leave-management"
    },
    {
      title: "FooDash — Order Management App",
      description: "Full-stack food delivery order management system with a React + Vite frontend and Node.js + Express backend.",
      features: [
        "React + Vite frontend for fast, responsive UI",
        "Node.js + Express REST API backend",
        "Order placement and real-time status tracking",
        "Clean separation of client and server codebases"
      ],
      techStack: ["React", "Vite", "Node.js", "Express.js", "JavaScript"],
      impact: "End-to-end full-stack project showcasing MERN-adjacent architecture and API integration.",
      github: "https://github.com/JayamalaB/Foodash"
    }
  ];

  return (
    <Section id="projects" title="Featured Projects" icon={FolderGit2}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <div className="p-8 grow flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <FolderGit2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mb-6 grow">
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
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" /> View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
