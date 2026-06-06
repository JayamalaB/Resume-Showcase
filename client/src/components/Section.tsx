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
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            {Icon && <Icon className="w-6 h-6 text-primary" />}
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
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
