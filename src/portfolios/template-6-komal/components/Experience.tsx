import { experience } from "../data";

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto" />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
              <h4 className="text-xl text-blue-400 mb-2">{experience.company}</h4>
              <p className="text-gray-400">{experience.duration} | {experience.location}</p>
            </div>
            <span className="mt-4 md:mt-0 inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">{experience.badge}</span>
          </div>

          <h4 className="text-lg font-semibold text-white mb-6">Key Responsibilities & Achievements:</h4>
          <div className="space-y-4 mb-8">
            {experience.responsibilities.map((r, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">{r}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700/50 pt-8">
            <h4 className="text-lg font-semibold text-white mb-6 text-center">Key Performance Metrics:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {experience.metrics.map((m, i) => (
                <div key={i} className="text-center p-4 bg-blue-600/10 rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400">{m.value}</div>
                  <div className="text-sm text-gray-400">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
