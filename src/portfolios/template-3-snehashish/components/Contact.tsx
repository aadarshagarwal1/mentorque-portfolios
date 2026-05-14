import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { person } from "../data";

const Contact = () => (
  <section id="contact" className="py-24 px-4 bg-gray-800">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
          Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="card-gradient border-primary/20 shadow-elevated">
          <CardContent className="p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gradient">Get In Touch</h3>
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-6 h-6" />, label: "Email", value: person.email, href: `mailto:${person.email}`, primary: true },
                { icon: <Phone className="w-6 h-6" />, label: "Phone", value: person.phone, href: `tel:${person.phone}` },
                { icon: <MapPin className="w-6 h-6" />, label: "Location", value: person.location, href: "#" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className={`p-3 rounded-lg ${c.primary ? 'bg-primary/20 text-primary' : 'bg-secondary text-secondary-foreground'} group-hover:scale-110 transition-transform`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    {c.href !== "#" ? (
                      <a href={c.href} className="text-foreground font-medium hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-foreground font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: person.linkedin, color: "text-blue-500" },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: person.github, color: "text-gray-300" },
                ].map((s, i) => (
                  <Button key={i} variant="outline" size="sm" asChild className="group hover:scale-105">
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span className={s.color}>{s.icon}</span>
                      {s.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient border-primary/20 shadow-elevated">
          <CardContent className="p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gradient">Current Status</h3>
            <div className="space-y-6">
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <Badge variant="default" className="text-xs">Available</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Currently open to new opportunities and exciting projects</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {["Full-Stack Development", "Cloud Architecture", "Machine Learning", "System Optimization", "DevOps"].map((interest, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{interest}</Badge>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <Button variant="gradient" className="w-full" asChild>
                  <a href={`mailto:${person.email}`}><Mail className="w-4 h-4" />Send Message</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Contact;
