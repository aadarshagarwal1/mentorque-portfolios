import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data';

const Education = () => (
  <section id="education" className="py-24 relative">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
          <span className="text-gradient">Education</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {education.map((edu, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.15 }}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.school}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 font-body">{edu.details}</p>
                <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground font-body text-sm">{edu.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
