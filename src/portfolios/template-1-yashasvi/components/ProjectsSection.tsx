import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { projects } from "../data";

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Card key={i} className="bg-[hsl(var(--card))] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="aspect-video overflow-hidden bg-muted">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, j) => (
                    <Badge key={j} variant="secondary" className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/80 transition-colors duration-200">
                    <Github className="w-5 h-5" />
                    <span className="font-medium">View on GitHub</span>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
