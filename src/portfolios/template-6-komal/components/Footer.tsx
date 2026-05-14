import { Mail, Linkedin } from "lucide-react";
import { person } from "../data";

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800 py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-white mb-2">{person.name}</h3>
          <p className="text-gray-400">{person.title}</p>
        </div>
        <div className="flex items-center space-x-6">
          <a href={`mailto:${person.email}`} className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Email"><Mail size={20} /></a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-500 text-sm">© 2024 {person.name}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
