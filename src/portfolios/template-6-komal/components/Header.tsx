import { useState } from "react";
import { Menu, X, Linkedin, Mail } from "lucide-react";
import { person } from "../data";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">{person.name}</div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scroll(l.id)} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href={`mailto:${person.email}`} className="text-gray-400 hover:text-blue-400 transition-colors"><Mail size={20} /></a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-800 flex flex-col space-y-3">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scroll(l.id)} className="text-gray-300 hover:text-blue-400 transition-colors text-left text-sm">
                {l.label}
              </button>
            ))}
            <div className="flex items-center space-x-4 pt-3">
              <a href={`mailto:${person.email}`} className="text-gray-400 hover:text-blue-400 transition-colors"><Mail size={20} /></a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
