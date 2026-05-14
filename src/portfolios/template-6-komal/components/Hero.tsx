import { ArrowDown } from "lucide-react";
import { person } from "../data";

const Hero = () => {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={person.heroBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img src={person.profileImage} alt={person.name} className="w-48 h-48 rounded-full border-4 border-white/20 shadow-xl object-cover object-top" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">{person.name}</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">{person.title}</p>
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">{person.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => scroll("experience")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">View My Work</button>
            <button onClick={() => scroll("contact")} className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">Get In Touch</button>
          </div>
          <div className="flex items-center justify-center text-gray-400">
            <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">{person.location}</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={() => scroll("about")} className="text-white/60 hover:text-white transition-colors"><ArrowDown size={24} /></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
