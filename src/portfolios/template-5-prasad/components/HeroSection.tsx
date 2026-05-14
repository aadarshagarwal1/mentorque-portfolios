import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import { person } from "../data";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Video background */}
    <div className="absolute inset-0">
      <video autoPlay loop muted playsInline poster={person.heroBgImage} className="w-full h-full object-cover">
        <source src={person.heroBgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
    </div>

    {/* Floating particles */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float" style={{ animationDelay: "1s" }} />
    </div>

    <div className="container mx-auto px-4 text-center relative z-10">
      <div className="mb-8 animate-scale-in flex justify-center">
        <img src={person.profileImage} alt={person.name} className="w-56 h-56 rounded-full border-4 border-white shadow-glow object-cover object-center animate-float" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight animate-fade-in">{person.name}</h1>
      <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed animate-slide-up">{person.title}</p>
      <div className="flex items-center justify-center space-x-2 text-white/80 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <MapPin className="w-5 h-5 text-accent animate-glow" />
        <span className="text-lg">{person.location}</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <Button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} size="lg" className="bg-gradient-primary hover:shadow-glow text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-elegant hover:scale-105 transition-all duration-300">
          Get In Touch
        </Button>
        <Button onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })} variant="outline" size="lg" className="border-2 border-white bg-white/10 backdrop-blur text-white hover:bg-white hover:text-[hsl(var(--hero-bg))] font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105">
          Learn More
        </Button>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-white animate-glow" />
    </div>
  </section>
);

export default HeroSection;
