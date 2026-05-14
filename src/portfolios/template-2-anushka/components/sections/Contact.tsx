import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { person } from '../../data';

const Contact = () => (
  <section id="contact" className="py-24 relative bg-gradient-subtle">
    <div className="absolute inset-0 bg-gradient-glow opacity-20" />
    <div className="section-container relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
          <span className="text-gradient">Let's Connect</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-body">
          Open to data analyst and analytics roles, project collaboration, and opportunities.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }} className="glass-card rounded-3xl p-8 sm:p-12 text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <a href={`mailto:${person.email}`} className="group p-4 rounded-xl bg-secondary hover:bg-primary/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:scale-110 transition-transform"><Mail className="w-5 h-5 text-primary" /></div>
                <div><p className="text-xs text-muted-foreground mb-1 font-body">Email</p><p className="text-sm font-medium text-foreground font-display break-all">{person.email}</p></div>
              </div>
            </a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-secondary hover:bg-primary/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:scale-110 transition-transform"><Linkedin className="w-5 h-5 text-primary" /></div>
                <div><p className="text-xs text-muted-foreground mb-1 font-body">LinkedIn</p><p className="text-sm font-medium text-foreground font-display flex items-center justify-center gap-1">{person.linkedinHandle}<ArrowUpRight className="w-3 h-3 text-primary shrink-0" /></p></div>
              </div>
            </a>
            <a href={`tel:${person.phone}`} className="group p-4 rounded-xl bg-secondary hover:bg-primary/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:scale-110 transition-transform"><Phone className="w-5 h-5 text-primary" /></div>
                <div><p className="text-xs text-muted-foreground mb-1 font-body">Phone</p><p className="text-sm font-medium text-foreground font-display">{person.phone}</p></div>
              </div>
            </a>
            <div className="group p-4 rounded-xl bg-secondary">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/30"><MapPin className="w-5 h-5 text-primary" /></div>
                <div><p className="text-xs text-muted-foreground mb-1 font-body">Location</p><p className="text-sm font-medium text-foreground font-display">{person.location}</p></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton asChild><a href={`mailto:${person.email}`}><Mail className="w-4 h-4 mr-2" />Send Email</a></GradientButton>
            <GradientButton variant="variant" asChild><a href={person.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4 mr-2" />Connect on LinkedIn</a></GradientButton>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
