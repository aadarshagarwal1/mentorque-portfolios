import { TrendingUp, Database, BarChart } from "lucide-react";
import { expertiseCategories, keyAchievements } from "../data";

const icons = [TrendingUp, Database, BarChart];

const About = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">Areas of Expertise</h3>
        <div className="grid lg:grid-cols-3 gap-8">
          {expertiseCategories.map((cat, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group bg-gradient-to-br from-gray-700/60 to-gray-800/40 rounded-xl p-6 border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-400">{cat.title}</h4>
                </div>
                <div className="space-y-3">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="bg-gray-600/20 rounded-lg p-3 border border-gray-500/10 hover:bg-gray-600/30 transition-all">
                      <span className="text-gray-300 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white text-center mb-8">Key Achievements</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {keyAchievements.map((a, i) => (
            <div key={i} className="bg-gray-700/50 rounded-lg p-6 text-center border border-gray-600/30 hover:border-blue-400/50 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">{a.value}</div>
              <div className="text-sm font-medium text-white mb-2">{a.label}</div>
              <div className="text-xs text-gray-400">{a.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
