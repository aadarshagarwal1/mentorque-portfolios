import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { person } from "../data";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scroll = (href: string) => { document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); setIsMenuOpen(false); };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="font-semibold text-lg text-foreground font-space-grotesk">{person.name}</span>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => scroll(item.href)} className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors duration-200 text-sm font-medium">
                {item.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button key={item.href} onClick={() => scroll(item.href)} className="block px-3 py-2 text-muted-foreground hover:text-[hsl(var(--primary))] rounded-md text-sm font-medium w-full text-left transition-colors duration-200">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
