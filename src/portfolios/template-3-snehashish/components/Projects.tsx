import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, Zap, Brain, Target } from "lucide-react";
import { projects, person } from "../data";

const iconMap: Record<string, React.ReactNode> = {
  "Machine Learning": <Brain className="w-8 h-8" />,
  "Optimization": <Target className="w-8 h-8" />,
};

const Projects = () => (
  <section id="projects" className="py-24 px-4 bg-gray-800">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
          Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>
      </div>

      <div className="relative">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                <div className="h-full min-h-[600px]">
                  <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {iconMap[project.category] ?? <Zap className="w-8 h-8" />}
                        </div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="text-xs mb-2">{project.category}</Badge>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow flex flex-col px-4 md:px-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{project.description}</p>
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Key Achievements</h4>
                        {project.achievements.map((a, i) => (
                          <div key={i} className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Zap className="w-3 h-3 text-primary" />
                            </div>
                            <div>
                              <div className="text-primary font-semibold text-sm">{a.metric}</div>
                              <p className="text-xs text-muted-foreground">{a.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 pt-4 mt-auto">
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" /> Source Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </div>

      <div className="text-center mt-16">
        <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
              Interested in <span className="text-gradient">Collaboration?</span>
            </h3>
            <p className="text-muted-foreground mb-6 text-center">Let's discuss how we can build something amazing together.</p>
            <div className="flex justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href={`mailto:${person.email}`}>Get In Touch</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Projects;
