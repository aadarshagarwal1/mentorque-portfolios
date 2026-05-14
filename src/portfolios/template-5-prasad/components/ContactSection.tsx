import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { person } from "../data";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on data analytics projects or discuss business intelligence opportunities
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, label: "Phone", value: person.phone, href: `tel:${person.phone}` },
              { icon: Mail, label: "Email", value: person.email, href: `mailto:${person.email}` },
              { icon: MapPin, label: "Location", value: person.location, href: "" },
              { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: person.linkedin },
            ].map((info, i) => (
              <Card key={i} className="bg-[hsl(var(--skill-bg))] border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <info.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.label}</h4>
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors duration-200 text-sm break-words">{info.value}</a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
