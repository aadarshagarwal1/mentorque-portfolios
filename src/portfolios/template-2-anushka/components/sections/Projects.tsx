import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '../../data';

const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
          <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.15 }}>
            <div className="glass-card rounded-2xl p-6 h-full hover-lift flex flex-col">
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground font-body text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-body hover:bg-primary/20 hover:text-primary transition-colors">{tech}</span>
                ))}
              </div>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                  <Github className="w-4 h-4" /> View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
