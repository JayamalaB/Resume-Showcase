import Section from "./Section";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" icon={Mail} className="bg-secondary/30">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h3 className="text-3xl font-display font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:jayamalab333@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">jayamalab333@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+918056535850" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+91 80565 35850</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Cuddalore, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex gap-4">
              <a href="https://www.linkedin.com/in/b-jayamala-81274b237" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/JayamalaB" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-background rounded-2xl p-6 border border-border">
            <h4 className="text-xl font-bold mb-6">Send a Message</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground font-medium rounded-lg px-4 py-3 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
