import { education } from "../data";

const Education = () => (
  <section id="education" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto" />
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, i) => (
          <div key={i} className="bg-gray-700/50 rounded-lg p-8 border border-gray-600/30 hover:border-blue-400/50 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-400 mb-2">{edu.degree}</h3>
                <div className="text-lg font-semibold text-white mb-1">{edu.institution}</div>
                <div className="text-sm text-gray-400 flex flex-wrap items-center gap-2">
                  <span>{edu.duration}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                  {edu.grade && <><span>•</span><span className="font-medium text-blue-400">{edu.grade}</span></>}
                </div>
              </div>
              <div className="mt-4 lg:mt-0">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${edu.type === "masters" ? "bg-blue-600/20 text-blue-400" : "bg-gray-600/20 text-gray-400"}`}>
                  {edu.type === "masters" ? "Master's Degree" : "Bachelor's Degree"}
                </span>
              </div>
            </div>
            {edu.coursework.length > 0 && (
              <div className="mt-6">
                <h4 className="text-base font-semibold text-white mb-4">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((c, j) => (
                    <span key={j} className="px-3 py-1 rounded-md text-sm bg-blue-600/10 text-blue-400 border border-blue-500/20">{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
