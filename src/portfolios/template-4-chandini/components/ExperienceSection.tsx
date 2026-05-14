import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";
import { experiences } from "../data";

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-4 bg-[hsl(var(--section-bg))]">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground font-space-grotesk">
          Work{" "}
          <span className="bg-gradient-to-r from-[hsl(202_100%_42%)] to-[hsl(202_85%_28%)] bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Enterprise React and TypeScript delivery, API-driven dashboards, and performance-focused front-end engineering.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="rounded-lg border border-border/70 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-[9.5rem] sm:w-[10.5rem] shrink-0 rounded-xl bg-white border border-border px-2.5 py-2 shadow-sm flex items-center justify-start">
                    <img src={exp.logoSrc} alt={exp.logoAlt} className="h-14 sm:h-16 w-auto max-w-none object-contain object-left" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-space-grotesk">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-semibold text-lg mt-1">
                      <Building2 className="w-4 h-4 shrink-0" />{exp.company}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 shrink-0" />{exp.duration}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" />{exp.location}</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Desktop */}
              <div className="hidden md:block space-y-4">
                {exp.achievements.map((a, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-primary/10">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" />
                      </div>
                    </div>
                    <div className="space-y-2 min-w-0">
                      <div className="text-[hsl(var(--primary))] font-semibold text-lg leading-snug">{a.impact}</div>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{a.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile carousel */}
              <div className="md:hidden">
                <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
                  <CarouselContent className="-ml-2">
                    {exp.achievements.map((a, i) => (
                      <CarouselItem key={i} className="pl-2 basis-full">
                        <div className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-primary/10">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" />
                            </div>
                          </div>
                          <div className="space-y-2 min-w-0">
                            <div className="text-[hsl(var(--primary))] font-semibold text-lg leading-snug">{a.impact}</div>
                            <p className="text-muted-foreground leading-relaxed text-sm">{a.description}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 border-border bg-background shadow-sm" />
                  <CarouselNext className="right-2 border-border bg-background shadow-sm" />
                </Carousel>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs font-normal rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
