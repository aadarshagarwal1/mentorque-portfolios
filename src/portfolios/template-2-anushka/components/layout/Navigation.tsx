import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { person } from '../../data';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const scroll = (href: string) => { document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16">
        <span className="font-display font-bold text-lg text-gradient">{person.name}</span>
        <div className="hidden md:flex gap-6">
          {navItems.map(item => (
            <button key={item.href} onClick={() => scroll(item.href)} className="text-muted-foreground hover:text-primary transition-colors text-sm font-body">{item.label}</button>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 border-t border-border/50 px-4 pb-4">
          {navItems.map(item => (
            <button key={item.href} onClick={() => scroll(item.href)} className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body">{item.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
