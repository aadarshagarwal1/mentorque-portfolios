import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "../data";

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-[hsl(var(--section-bg))]">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, i) => (
            <Card key={i} className="bg-[hsl(var(--skill-bg))] border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <Badge key={j} variant="secondary" className="bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90 px-3 py-1 text-sm font-medium">
                      {skill}
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

export default SkillsSection;
