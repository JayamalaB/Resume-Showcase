import Section from "./Section";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <Section id="education" title="Education & Certifications" icon={GraduationCap}>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
            <GraduationCap className="text-primary w-6 h-6" /> Education
          </h3>
          
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <h4 className="text-xl font-bold text-foreground">B.Tech in Artificial Intelligence & Data Science</h4>
              <p className="text-muted-foreground mt-1 mb-3">University/College Name</p>
              <div className="inline-flex px-3 py-1 bg-secondary text-primary font-bold rounded-md">
                CGPA: 8.8
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <h4 className="text-lg font-bold text-foreground">Higher Secondary Certificate (HSC)</h4>
              <div className="inline-flex px-3 py-1 bg-secondary text-foreground font-medium rounded-md mt-3">
                Score: 91%
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
              <h4 className="text-lg font-bold text-foreground">Secondary School Leaving Certificate (SSLC)</h4>
              <div className="inline-flex px-3 py-1 bg-secondary text-foreground font-medium rounded-md mt-3">
                Score: 98%
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
            <Award className="text-primary w-6 h-6" /> Certifications
          </h3>
          
          <div className="grid gap-4">
            {[
              "NPTEL Certification",
              "Data Science Certification",
              "QCFI Gold Certification",
              "TCS NQT Certification"
            ].map((cert, index) => (
              <div key={index} className="glass-card p-5 rounded-xl flex items-center gap-4 group hover:bg-secondary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium text-foreground">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
