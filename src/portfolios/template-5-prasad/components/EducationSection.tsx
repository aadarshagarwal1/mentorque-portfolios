import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education, certifications } from "../data";

const EducationSection = () => (
  <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6" />
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
          <GraduationCap className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
          Education
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, i) => (
            <Card key={i} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">{edu.degree}</CardTitle>
                <p className="text-lg font-semibold text-[hsl(var(--primary))]">{edu.institution}</p>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{edu.dates}</span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
          <Award className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
          Certifications
        </h3>
        <div className="grid md:grid-cols-1 gap-6">
          {certifications.map((cert, i) => (
            <Card key={i} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-foreground mb-2">{cert.title}</CardTitle>
                <p className="text-lg font-semibold text-[hsl(var(--primary))] mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
