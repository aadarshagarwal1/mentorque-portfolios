import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "../data";

const ExperienceSection = () => (
  <section id="experience" className="py-20 bg-[hsl(var(--section-bg))]">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6" />
        </div>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <Card key={i} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">{exp.title}</CardTitle>
                    <h4 className="text-lg font-semibold text-[hsl(var(--primary))]">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <Badge variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">{exp.dates}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{r}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
