import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { person } from "../data";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Contact</h2>
          <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Open to Software Engineer / Frontend roles.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-5">
          {[
            { icon: Mail, label: "Email", value: person.email, href: `mailto:${person.email}` },
            { icon: Linkedin, label: "LinkedIn", value: person.linkedinHandle, href: person.linkedin },
            { icon: Github, label: "GitHub", value: "GitHub profile", href: person.github },
          ].map((item, i) => (
            <Card key={i} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <CardContent className="p-6 text-center flex flex-col items-center gap-3">
                <item.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                <h4 className="text-sm font-semibold text-foreground">{item.label}</h4>
                <a href={item.href} {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-sm text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors break-all">
                  {item.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
