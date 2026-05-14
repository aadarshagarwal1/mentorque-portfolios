import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "../data";

const EducationSection = () => (
  <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
          <GraduationCap className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
          Academic Background
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <Card key={i} className="bg-[hsl(var(--card))] shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">{edu.degree}</CardTitle>
                <p className="text-lg font-semibold text-[hsl(var(--primary))]">{edu.institution}</p>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{edu.dates}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-foreground mb-3">Key Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, j) => (
                    <Badge key={j} variant="secondary" className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] text-sm hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200">
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
