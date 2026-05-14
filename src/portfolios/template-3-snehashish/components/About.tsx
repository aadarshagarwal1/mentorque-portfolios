import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Zap } from "lucide-react";
import { about } from "../data";

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
};

const About = () => (
  <section id="about" className="py-24 px-4 bg-gray-800">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
          About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{about.summary}</p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <Card className="card-gradient border-primary/20 shadow-elevated">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
            <div className="space-y-4 text-muted-foreground">
              {about.highlights.map((h, i) => (
                <p key={i}>
                  Contributed to a <span className="text-primary font-semibold">{h.metric}</span> — {h.detail}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-center">
          Areas of <span className="text-gradient">Expertise</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.skillCategories.map((category, i) => (
            <Card key={i} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary group-hover:text-accent transition-colors">{iconMap[category.icon]}</div>
                  <h4 className="font-bold text-lg">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <Badge key={j} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Concepts</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {about.coreConcepts.map((concept, i) => (
            <Badge key={i} variant="outline" className="text-sm px-4 py-2">{concept}</Badge>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
