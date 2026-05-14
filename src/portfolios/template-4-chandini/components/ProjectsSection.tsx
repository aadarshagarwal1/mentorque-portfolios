import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data";

type Project = typeof projects[number];

const ProjectImageCarousel = ({ project }: { project: Project }) => {
  const images = [project.image];
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const showPrev = () => setActiveIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const showNext = () => setActiveIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <div
      className="relative aspect-video overflow-hidden border-b border-border/50 bg-white rounded-lg m-3 mb-0"
      onTouchStart={(e) => setTouchStartX(e.changedTouches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchStartX === null) return;
        const dx = touchStartX - (e.changedTouches[0]?.clientX ?? touchStartX);
        if (dx > 40) showNext(); else if (dx < -40) showPrev();
        setTouchStartX(null);
      }}
    >
      <img src={images[activeIndex] ?? project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover" />
      {images.length > 1 && (
        <>
          <button type="button" aria-label="Previous image" onClick={showPrev} className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/65 transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" aria-label="Next image" onClick={showNext} className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/65 transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Projects</h2>
          <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Card key={i} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col">
              <ProjectImageCarousel project={project} />
              <CardHeader className="pb-3 pt-4">
                <CardTitle className="text-xl font-semibold text-foreground">{project.title}</CardTitle>
                {project.subtitle && <p className="text-sm text-[hsl(var(--primary))] font-medium">{project.subtitle}</p>}
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 mb-4 flex-grow">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, j) => (
                    <Badge key={j} variant="secondary" className="text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{tech}</Badge>
                  ))}
                </div>
                {project.links?.map((link, j) => (
                  <a key={j} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(var(--primary))] hover:underline font-medium">{link.label} ↗</a>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
