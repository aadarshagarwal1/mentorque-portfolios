import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Linkedin, GraduationCap, Calendar, Globe, Award } from "lucide-react";
import { person, about } from "../data";

const quickFactIcons = [MapPin, GraduationCap, Calendar, Globe];

const AboutSection = () => (
  <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Professional Summary</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{about.summary}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Phone, value: person.phone, href: `tel:${person.phone}` },
                { icon: Mail, value: person.email, href: `mailto:${person.email}` },
                { icon: MapPin, value: person.location },
                { icon: Linkedin, value: "LinkedIn", href: person.linkedin },
              ].map((contact, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 rounded-lg bg-[hsl(var(--card))]/50 hover:bg-[hsl(var(--card))] transition-colors duration-200">
                  <contact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                  {contact.href ? (
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-[hsl(var(--primary))] transition-colors">
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{contact.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-[hsl(var(--card))] shadow-lg border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />
                  Quick Facts
                </h4>
                <div className="space-y-6">
                  {about.quickFacts.map((fact, i) => {
                    const Icon = quickFactIcons[i];
                    return (
                      <div key={i} className="flex items-start space-x-3 pb-4 border-b border-[hsl(var(--border))] last:border-0 last:pb-0">
                        <Icon className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm uppercase tracking-wide">{fact.label}:</p>
                          <p className="text-muted-foreground mt-1 font-medium">{fact.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
