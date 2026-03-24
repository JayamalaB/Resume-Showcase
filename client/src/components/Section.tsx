import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  icon: Icon, 
  children,
  className = "" 
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            {Icon && <Icon className="w-8 h-8 text-primary" />}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
          </div>
          {subtitle && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mt-6 rounded-full" />
        </motion.div>
        
        {children}
      </div>
    </section>
  );
}
