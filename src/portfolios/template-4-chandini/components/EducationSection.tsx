import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "../data";

const EducationSection = () => {
  const [certDialogOpen, setCertDialogOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<{ title: string; issuer: string; date: string; description?: string } | null>(null);

  const allCerts = education.flatMap((e) => e.certifications);

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Education</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((edu, i) => (
              <Card key={i} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-[hsl(var(--primary))]">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">{edu.degree}</CardTitle>
                  <p className="text-lg font-semibold text-[hsl(var(--primary))]">{edu.institution}</p>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium text-sm">{edu.dates}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-3 text-sm">Key Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((c, j) => (
                      <Badge key={j} variant="secondary" className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] text-xs hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200">{c}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {allCerts.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {allCerts.map((cert, i) => (
                  <Card key={i} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" onClick={() => { setActiveCert(cert); setCertDialogOpen(true); }}>
                    <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))]/15 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                      <p className="text-sm font-semibold text-foreground leading-snug">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={certDialogOpen} onOpenChange={setCertDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{activeCert?.title}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">{activeCert?.issuer} · {activeCert?.date}</p>
          {activeCert?.description && <p className="text-sm text-foreground mt-2">{activeCert.description}</p>}
          <Button variant="outline" size="sm" onClick={() => setCertDialogOpen(false)} className="mt-4 w-full">Close</Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EducationSection;
