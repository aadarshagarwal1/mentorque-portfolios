import { ArrowDown } from 'lucide-react';
import { person } from '../data';

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
    <div className="absolute inset-0 w-full h-full">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={person.heroBgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-44 h-44 rounded-full border-4 border-white/20 shadow-xl overflow-hidden">
              <img src={person.profileImage} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">{person.name.split(' ')[0]}</span>
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {person.name.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">{person.title}</p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">{person.bio}</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-gray-300">
          <span>📧 {person.email}</span>
          <span>📱 {person.phone}</span>
          <span>📍 {person.location}</span>
        </div>

        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Learn More About Me
          <ArrowDown className="animate-bounce" size={20} />
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
