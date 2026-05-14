import { useState, useEffect } from 'react';
import {
  Palette, Target, Globe,
  Eye, X, ArrowUpRight, Clock,
  Sparkles, CheckCircle2, ChevronRight, Layout, MonitorSmartphone, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



// WhatsAppCTA inlined below

/* ─── data ──────────────────────────────────────────────────────────────── */

const templates = [
  {
    id: 1,
    name: 'Dark Animated',
    role: 'Data & AI Professionals',
    description:
      'Dark theme with a custom WebGL shader background, floating particle animations, and glowing accents. Ideal for technical roles that want to make a bold first impression.',
    tags: ['Dark Theme', 'Animated BG', 'Glow Effects'],
    previewImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    sections: ['Hero', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'],
    highlights: [
      'WebGL shader animated background',
      'Floating particle overlay',
      'Glow button effects',
      'Dark card theme',
    ],
    livePreviewUrl: '/portfolio/template-1',
  },
  {
    id: 2,
    name: 'Purple Gradient',
    role: 'Analysts & BI Professionals',
    description:
      'Dark purple gradient with Framer Motion animations, an interactive 3D-tilt profile card, rotating hero text, and a stacked scroll experience section.',
    tags: ['Framer Motion', '3D Profile Card', 'Purple Theme'],
    previewImage:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    sections: ['Hero', 'Experience', 'Projects', 'Skills', 'Education', 'Certificates', 'Contact'],
    highlights: [
      'Framer Motion page animations',
      '3D tilt profile card',
      'Rotating hero tagline',
      'Stacked scroll experience cards',
    ],
    livePreviewUrl: '/portfolio/template-2',
  },
  {
    id: 3,
    name: 'Video Background',
    role: 'Software Engineers',
    description:
      'Cinematic full-screen video background hero. Carousel achievements on mobile, impact-metric cards, and a key achievements section with summary stats.',
    tags: ['Video BG', 'Dark Theme', 'Carousel'],
    previewImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    sections: ['Hero', 'About', 'Experience', 'Key Achievements', 'Projects', 'Education', 'Contact'],
    highlights: [
      'Full-screen video hero',
      'Mobile carousel for achievements',
      'Impact metric cards',
      'Summary stats bar',
    ],
    livePreviewUrl: '/portfolio/template-3',
  },
  {
    id: 4,
    name: 'Photo Background',
    role: 'Frontend & React Developers',
    description:
      'Layered photo background with gradient overlays, resume download button, mobile carousel for experience, certification dialog, and a key achievements strip.',
    tags: ['Photo BG', 'Resume Download', 'Frontend'],
    previewImage:
      'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80',
    sections: ['Hero', 'About', 'Skills', 'Experience', 'Key Achievements', 'Projects', 'Education', 'Contact'],
    highlights: [
      'Photo + gradient overlay hero',
      'Resume PDF download button',
      'Certification dialog popup',
      'Mobile carousel for experience',
    ],
    livePreviewUrl: '/portfolio/template-4',
  },
  {
    id: 5,
    name: 'Video + Light Cards',
    role: 'Data Analysts & BI Professionals',
    description:
      'Video background hero with floating particles, paired with a clean white card theme throughout. Includes a dedicated certifications section and a 6-column skills grid.',
    tags: ['Video BG', 'Light Cards', 'Particles'],
    previewImage:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    sections: ['Hero', 'About', 'Skills', 'Experience', 'Projects', 'Education & Certifications', 'Contact'],
    highlights: [
      'Video hero + floating particles',
      'Light white card theme',
      'Certifications section',
      '6-column skills grid',
    ],
    livePreviewUrl: '/portfolio/template-5',
  },
];

const portfolioFeatures = [
  {
    title: 'Custom Design',
    description: 'Personalised layouts that reflect your unique brand and style.',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: 'Responsive Development',
    description: 'Mobile-first designs that look perfect on all devices.',
    icon: <MonitorSmartphone className="w-5 h-5" />,
  },
  {
    title: 'SEO Optimisation',
    description: 'Built for search engines to help recruiters find you.',
    icon: <Target className="w-5 h-5" />,
  },
  {
    title: 'Domain & Hosting',
    description: 'Professional domain setup and reliable hosting included.',
    icon: <Globe className="w-5 h-5" />,
  },
];

const portfolioExamples = [
  {
    title: 'Business Analyst Portfolio',
    industry: 'Data & Analytics',
    description: 'Clean, professional design showcasing data visualisation projects and analytical insights.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    features: ['Interactive Dashboards', 'Case Studies', 'Data Visualisations', 'Technical Skills'],
  },
  {
    title: 'Software Developer Portfolio',
    industry: 'Technology',
    description: 'Modern, tech-focused design highlighting coding projects and technical expertise.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    features: ['GitHub Integration', 'Live Project Demos', 'Tech Stack Display', 'Code Samples'],
  },
  {
    title: 'Business Development Portfolio',
    industry: 'Sales & Marketing',
    description: 'Results-driven design emphasising achievements and business growth metrics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: ['Revenue Metrics', 'Client Testimonials', 'Success Stories', 'Industry Awards'],
  },
  {
    title: 'Cybersecurity Professional',
    industry: 'Security & Compliance',
    description: 'Sleek, security-focused design showcasing certifications and security projects.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    features: ['Security Certifications', 'Penetration Testing', 'Risk Assessments', 'Compliance Reports'],
  },
  {
    title: 'Product Manager Portfolio',
    industry: 'Product & Strategy',
    description: 'Strategic design highlighting product launches and user experience focus.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    features: ['Product Roadmaps', 'User Research', 'Launch Metrics', 'Feature Development'],
  },
  {
    title: 'Creative Professional',
    industry: 'Design & Media',
    description: 'Visually stunning design showcasing creative work and artistic projects.',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80',
    features: ['Portfolio Gallery', 'Creative Process', 'Client Work', 'Design Tools'],
  },
];

const portfolioPackage = {
  duration: '2–3 days',
  includes: [
    'Custom portfolio website design',
    'Mobile-responsive development',
    'Professional domain setup',
    '1-year hosting included',
    'SEO optimisation',
    'Contact form integration',
    'Portfolio template selection',
    'Content organisation guidance',
    'Launch support & training',
  ],
};

/* ─── style helpers ──────────────────────────────────────────────────────── */

const serif: React.CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

/* ─── framer motion variants ─────────────────────────────────────────────── */

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const wordVariants: any = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const blobVariants: any = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

/* ─── component ──────────────────────────────────────────────────────────── */

export default function PortfolioTemplates() {
  const [activeTab, setActiveTab] = useState<'templates' | 'service'>('templates');
  const [previewTemplate, setPreviewTemplate] = useState<typeof templates[0] | null>(null);

  /* inject Cormorant Garamond */
  useEffect(() => {
    const id = 'cormorant-garamond-link';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (previewTemplate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [previewTemplate]);

  const heroTitleWords = ["Portfolio", "Development"];

  return (
    <>
      {/* page shell */}
      <motion.div 
        initial="hidden"
        animate="show"
        className="min-h-screen bg-[#F9F8F5] dark:bg-[#0A0A0A] text-[#111110] dark:text-[#F0EFE9] font-body antialiased relative overflow-hidden"
      >
        
        {/* Background Decorative Blobs */}
        <motion.div 
          variants={blobVariants}
          animate="animate"
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#ffc563]/10 dark:bg-[#ffc563]/5 rounded-full blur-[100px] pointer-events-none" 
        />
        <motion.div 
          variants={blobVariants}
          animate="animate"
          className="absolute top-[20%] right-[-5%] w-[30vw] h-[30vw] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" 
          style={{ animationDelay: '2s' }}
        />
        
        <div className="relative z-10">
          {/* Navbar removed — standalone app */}

          {/* ── HERO ─────────────────────────────────────────────────────── */}
          <section className="relative px-5 sm:px-8 lg:px-16 pt-16 pb-16 lg:pb-24 border-b border-[#E2DFDA]/50 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
              
              {/* eyebrow row */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-center justify-between mb-12"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ffc563]/10 dark:bg-[#ffc563]/20">
                    <Sparkles className="w-4 h-4 text-[#ffc563]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#ffc563] font-semibold">
                    Mentorque Premium
                  </span>
                </div>
                {/* CompletionBadge removed */}
              </motion.div>

              {/* headline + sub split */}
              <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end mb-16">
                {/* left: big serif headline */}
                <div className="overflow-hidden">
                  <h1
                    style={serif}
                    className="text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.9] tracking-tight text-[#111110] dark:text-[#ffffff] font-light"
                  >
                    <div className="flex flex-col">
                      {heroTitleWords.map((word, i) => (
                        <span key={i} className="block overflow-hidden">
                          <motion.span
                            custom={i}
                            variants={wordVariants}
                            className={`inline-block ${i === 1 ? 'italic relative' : ''}`}
                          >
                            {word}
                            {i === 1 && (
                              <motion.svg 
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                                className="absolute w-full h-[0.3em] -bottom-1 left-0 text-[#ffc563]/30" 
                                viewBox="0 0 100 10" 
                                preserveAspectRatio="none"
                              >
                                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
                              </motion.svg>
                            )}
                          </motion.span>
                        </span>
                      ))}
                    </div>
                  </h1>
                </div>

                {/* right: descriptor */}
                <motion.div 
                  variants={fadeInUp}
                  className="lg:max-w-sm lg:pb-3"
                >
                  <p className="text-[#5A5A56] dark:text-[#A0A09A] leading-relaxed text-[1rem] sm:text-[1.05rem]">
                    Architect-grade templates built for professionals who refuse to be forgettable. Pick a design, and our engineers will hand-craft it for you.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setActiveTab('templates');
                        window.scrollTo({ top: 500, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 bg-[#111110] dark:bg-white text-white dark:text-[#111110] px-5 py-3 rounded-full text-xs uppercase tracking-widest font-medium transition-all"
                    >
                      Browse Now
                    </motion.button>
                    <a href="https://www.mentorquedu.com/book-call" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-black/5 hover:shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">Request a Call Back</a>
                  </div>
                </motion.div>
              </div>

              {/* stats strip */}
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-4 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-[#E2DFDA] dark:border-white/10 rounded-2xl overflow-hidden shadow-sm"
              >
                {[
                  { n: '05', label: 'Premium Templates', icon: Layout },
                  { n: '06+', label: 'Industry Categories', icon: Target },
                  { n: '2–3', label: 'Days Delivery', icon: Clock },
                  { n: '09', label: 'Core Inclusions', icon: ShieldCheck },
                ].map((s, i) => (
                  <motion.div
                    variants={fadeInUp}
                    key={s.label}
                    className={`relative p-6 sm:p-8 group hover:bg-white dark:hover:bg-white/5 transition-colors ${
                      i !== 3 ? 'border-r border-[#E2DFDA] dark:border-white/10' : ''
                    } ${i === 1 ? 'max-sm:border-r-0' : ''} ${i === 0 || i === 1 ? 'max-sm:border-b border-[#E2DFDA] dark:border-white/10' : ''}`}
                  >
                    <s.icon className="w-5 h-5 text-[#ffc563] mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <p style={serif} className="text-[2.5rem] font-light text-[#111110] dark:text-white leading-none mb-2 group-hover:scale-105 transition-transform origin-left">
                      {s.n}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#5A5A56] dark:text-[#A0A09A]">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ── TABS ─────────────────────────────────────────────────────── */}
          <div className="sticky top-0 z-20 bg-[#F9F8F5]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[#E2DFDA] dark:border-white/10">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
              <div className="flex gap-8 pt-4">
                {(['templates', 'service'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 border-b-2 relative ${
                      activeTab === tab
                        ? 'border-[#ffc563] text-[#111110] dark:text-white'
                        : 'border-transparent text-[#9A9A92] hover:text-[#5A5A56] dark:hover:text-[#C8C8C0]'
                    }`}
                  >
                    {tab === 'templates' ? 'Browse Templates' : 'Our Service'}
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="activeTabIndicator" 
                        className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#ffc563]" 
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="min-h-[60vh]">
            <AnimatePresence mode="wait">
              {/* ══════════════════════════════════════════════════════════════
                  TEMPLATES TAB
              ══════════════════════════════════════════════════════════════ */}
              {activeTab === 'templates' && (
                <motion.div 
                  key="templates"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-16"
                >
                  {/* section head */}
                  <div className="flex items-end justify-between mb-12">
                    <div>
                      <h2 style={serif} className="text-4xl sm:text-5xl font-light text-[#111110] dark:text-white mb-3">
                        Curated <em className="italic text-[#ffc563]">Collection</em>
                      </h2>
                      <p className="text-[#5A5A56] dark:text-[#A0A09A] text-sm">Find the perfect foundation for your digital presence.</p>
                    </div>
                  </div>

                  {/* grid */}
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {templates.map((t, idx) => (
                      <motion.article
                        variants={itemVariants}
                        key={t.id}
                        className="group bg-white dark:bg-[#111111] border border-[#E2DFDA] dark:border-white/5 rounded-3xl overflow-hidden flex flex-col hover:border-[#ffc563]/40 dark:hover:border-[#ffc563]/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#ffc563]/5 dark:hover:shadow-[#ffc563]/10"
                      >
                        {/* thumbnail */}
                        <div className="relative h-64 overflow-hidden flex-shrink-0 bg-[#E2DFDA] dark:bg-[#1A1A1A]">
                          <img
                            src={t.previewImage}
                            alt={t.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/80 via-[#111110]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                          {/* Top Badges */}
                          <div className="absolute top-4 left-4 flex gap-2">
                            <span className="bg-black/40 backdrop-blur-md text-white text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
                              {t.role}
                            </span>
                          </div>

                          {/* Details Hover Button */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                              onClick={() => setPreviewTemplate(t)}
                              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-white/20 hover:scale-105 transition-all flex items-center gap-2"
                            >
                              <Eye className="w-4 h-4" /> Quick View
                            </button>
                          </div>
                        </div>

                        {/* body */}
                        <div className="p-7 flex flex-col flex-grow relative">
                          <div className="absolute -top-6 right-6 w-12 h-12 bg-white dark:bg-[#111111] border border-[#E2DFDA] dark:border-white/5 rounded-full flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
                            <span style={serif} className="text-xl font-medium text-[#111110] dark:text-white">
                              0{idx + 1}
                            </span>
                          </div>

                          <h3 style={serif} className="text-[1.75rem] font-medium leading-tight mb-3 text-[#111110] dark:text-white group-hover:text-[#ffc563] transition-colors">
                            {t.name}
                          </h3>
                          
                          <p className="text-[0.9rem] text-[#5A5A56] dark:text-[#A0A09A] leading-relaxed mb-6 flex-grow line-clamp-3">
                            {t.description}
                          </p>

                          {/* tags */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {t.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] uppercase tracking-[0.1em] bg-[#F9F8F5] dark:bg-white/5 text-[#5A5A56] dark:text-[#C8C8C0] px-3 py-1.5 rounded-md font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* actions */}
                          <div className="flex items-center justify-between border-t border-[#E2DFDA] dark:border-white/5 pt-5 mt-auto">
                            <button
                              onClick={() => setPreviewTemplate(t)}
                              className="text-xs font-semibold text-[#111110] dark:text-white hover:text-[#ffc563] dark:hover:text-[#ffc563] transition-colors flex items-center gap-1"
                            >
                              Details <ChevronRight className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => window.open(t.livePreviewUrl, '_blank')}
                              className="flex items-center justify-center gap-2 bg-[#111110] dark:bg-white text-white dark:text-[#111110] px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold hover:scale-105 transition-transform"
                            >
                              Live Demo <ArrowUpRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>

                  {/* bottom CTA nudge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 relative overflow-hidden border border-[#ffc563]/30 dark:border-[#ffc563]/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-white to-[#F9F8F5] dark:from-[#111111] dark:to-[#0A0A0A] shadow-xl shadow-[#ffc563]/5"
                  >
                    <div className="absolute right-0 top-0 w-64 h-64 bg-[#ffc563]/10 rounded-full blur-[80px] pointer-events-none" />
                    
                    <div className="relative z-10 text-center md:text-left">
                      <div className="inline-flex items-center gap-2 mb-4 bg-[#ffc563]/10 text-[#ffc563] px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                        <Sparkles className="w-3 h-3" /> End-to-end Service
                      </div>
                      <h3 style={serif} className="text-3xl sm:text-4xl font-medium mb-3 text-[#111110] dark:text-white">
                        Found your match?
                      </h3>
                      <p className="text-[1rem] text-[#5A5A56] dark:text-[#A0A09A] max-w-md">
                        We build, optimise, and host your professional portfolio in just 2–3 days. Handled entirely by our expert team.
                      </p>
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                      <button
                        onClick={() => setActiveTab('service')}
                        className="w-full sm:w-auto text-[11px] uppercase tracking-[0.15em] font-semibold text-[#111110] dark:text-white hover:text-[#ffc563] transition-colors border border-transparent hover:border-[#E2DFDA] dark:hover:border-white/10 px-6 py-3 rounded-full"
                      >
                        See Inclusions
                      </button>
                      <div className="w-full sm:w-auto">
                        <a href="https://www.mentorquedu.com/book-call" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-black/5 hover:shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">Start My Portfolio</a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* ══════════════════════════════════════════════════════════════
                  SERVICE TAB
              ══════════════════════════════════════════════════════════════ */}
              {activeTab === 'service' && (
                <motion.div
                  key="service"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* ── What We Include ─────────────────────────────────────── */}
                  <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 border-b border-[#E2DFDA] dark:border-white/5">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                      <h2 style={serif} className="text-4xl sm:text-5xl font-light mb-4">
                        Comprehensive <em className="italic text-[#ffc563]">Delivery</em>
                      </h2>
                      <p className="text-[#5A5A56] dark:text-[#A0A09A]">Everything you need to establish a commanding online presence, managed by us from start to finish.</p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {portfolioFeatures.map((f, i) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          key={i} 
                          className="group bg-white dark:bg-[#111111] p-8 rounded-3xl border border-[#E2DFDA] dark:border-white/5 hover:border-[#ffc563]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ffc563]/5"
                        >
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F9F8F5] dark:bg-white/5 rounded-2xl text-[#111110] dark:text-white group-hover:bg-[#ffc563] group-hover:text-[#111110] transition-colors duration-300 mb-6">
                            {f.icon}
                          </div>
                          <h3 style={serif} className="text-2xl font-medium mb-3 text-[#111110] dark:text-white">
                            {f.title}
                          </h3>
                          <p className="text-[0.9rem] text-[#5A5A56] dark:text-[#A0A09A] leading-relaxed">
                            {f.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* ── Package ─────────────────────────────────────────────── */}
                  <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20">
                    <div className="max-w-4xl mx-auto">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-[#111111] border border-[#E2DFDA] dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                      >
                        {/* Left Info */}
                        <div className="md:w-2/5 bg-[#111110] dark:bg-black p-10 flex flex-col justify-between relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc563]/20 blur-[100px] pointer-events-none" />
                          
                          <div className="relative z-10">
                            <h2 style={serif} className="text-4xl font-light leading-tight mb-4 text-white">
                              The Premium
                              <br />
                              <em className="italic text-[#ffc563]">Package</em>
                            </h2>
                            <p className="text-[#A0A09A] text-sm leading-relaxed mb-8">
                              A done-for-you service designed to position you as a top-tier candidate in your field.
                            </p>
                          </div>
                          
                          <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                              <div className="w-10 h-10 rounded-full bg-[#ffc563]/20 flex items-center justify-center text-[#ffc563]">
                                <Clock className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="text-[10px] uppercase tracking-widest text-[#A0A09A]">Turnaround</p>
                                <p className="text-white font-medium">{portfolioPackage.duration}</p>
                              </div>
                            </div>
                            
                            <a href="https://www.mentorquedu.com/book-call" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium bg-[#ffc563] text-[#111110] hover:opacity-90 transition-opacity">Claim Package</a>
                          </div>
                        </div>

                        {/* Right List */}
                        <div className="md:w-3/5 p-10 md:p-14 bg-white dark:bg-[#111111]">
                          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#111110] dark:text-white mb-8 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#ffc563]" /> What's Included
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                            {portfolioPackage.includes.map((item, i) => (
                              <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                key={i} 
                                className="flex items-start gap-3"
                              >
                                <div className="mt-1 w-5 h-5 rounded-full bg-[#F9F8F5] dark:bg-white/5 flex items-center justify-center flex-shrink-0">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffc563]" />
                                </div>
                                <span className="text-[0.95rem] text-[#5A5A56] dark:text-[#C8C8C0] leading-snug">
                                  {item}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* ── By Industry ─────────────────────────────────────────── */}
                  <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 border-t border-[#E2DFDA] dark:border-white/5">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                      <div>
                        <h2 style={serif} className="text-4xl sm:text-5xl font-light mb-2 text-[#111110] dark:text-white">
                          Tailored by <em className="italic text-[#ffc563]">Industry</em>
                        </h2>
                        <p className="text-[#5A5A56] dark:text-[#A0A09A]">Discover how we adapt our templates to suit specific professional needs.</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {portfolioExamples.map((ex, i) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          key={i}
                          className="group bg-white dark:bg-[#111111] border border-[#E2DFDA] dark:border-white/5 rounded-3xl overflow-hidden hover:border-[#ffc563]/40 transition-all duration-300"
                        >
                          <div className="h-48 overflow-hidden relative">
                            <img
                              src={ex.image}
                              alt={ex.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-4 left-5 right-5">
                              <p className="text-[10px] uppercase tracking-widest text-[#ffc563] font-bold mb-1">
                                {ex.industry}
                              </p>
                              <h3 style={serif} className="text-2xl font-medium text-white leading-tight">
                                {ex.title}
                              </h3>
                            </div>
                          </div>
                          <div className="p-6">
                            <p className="text-[0.85rem] text-[#5A5A56] dark:text-[#A0A09A] leading-relaxed mb-6">
                              {ex.description}
                            </p>
                            <div className="space-y-2">
                              {ex.features.map((feat, fi) => (
                                <div key={fi} className="flex items-center gap-3">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E2DFDA] dark:text-white/20" />
                                  <span className="text-[0.85rem] font-medium text-[#111110] dark:text-[#C8C8C0]">
                                    {feat}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── PREVIEW MODAL ────────────────────────────────────────────── */}
        <AnimatePresence>
          {previewTemplate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            >
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={() => setPreviewTemplate(null)}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white dark:bg-[#111111] rounded-[2rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E2DFDA] dark:border-white/10 relative z-10 flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* image header */}
                <div className="relative h-64 sm:h-80 overflow-hidden flex-shrink-0 bg-black">
                  <img
                    src={previewTemplate.previewImage}
                    alt={previewTemplate.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

                  {/* close */}
                  <button
                    onClick={() => setPreviewTemplate(null)}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/60 hover:scale-105 transition-all z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* title */}
                  <div className="absolute bottom-6 left-6 sm:left-8 pr-6">
                    <p className="inline-block bg-[#ffc563] text-black px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold mb-3">
                      {previewTemplate.role}
                    </p>
                    <h2 style={serif} className="text-4xl sm:text-5xl font-light text-white leading-tight">
                      {previewTemplate.name}
                    </h2>
                  </div>
                </div>

                {/* body */}
                <div className="p-6 sm:p-8 space-y-8 flex-grow bg-white dark:bg-[#111111]">
                  <p className="text-[1rem] text-[#5A5A56] dark:text-[#A0A09A] leading-relaxed">
                    {previewTemplate.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* sections */}
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-[#111110] dark:text-white font-bold mb-4 flex items-center gap-2">
                        <Layout className="w-4 h-4 text-[#ffc563]" /> Included Sections
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {previewTemplate.sections.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] uppercase tracking-wider bg-[#F9F8F5] dark:bg-white/5 border border-[#E2DFDA] dark:border-white/10 text-[#5A5A56] dark:text-[#C8C8C0] px-3 py-1.5 rounded-lg"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* highlights */}
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-[#111110] dark:text-white font-bold mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#ffc563]" /> Design Highlights
                      </h4>
                      <div className="space-y-3">
                        {previewTemplate.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-3">
                            <div className="mt-1 w-4 h-4 rounded-full bg-[#ffc563]/10 flex items-center justify-center flex-shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#ffc563]" />
                            </div>
                            <span className="text-[0.9rem] text-[#5A5A56] dark:text-[#A0A09A] leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* modal actions */}
                  <div className="pt-6 mt-4 border-t border-[#E2DFDA] dark:border-white/10 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => window.open(previewTemplate.livePreviewUrl, '_blank')}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#111110] dark:bg-white text-white dark:text-[#111110] hover:scale-[1.02] py-4 rounded-xl text-[11px] uppercase tracking-widest font-bold transition-transform shadow-xl shadow-black/10 dark:shadow-white/5"
                    >
                      <MonitorSmartphone className="w-4 h-4" /> View Live Demo
                    </button>
                    <div className="flex-1">
                      <a href="https://www.mentorquedu.com/book-call" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#ffc563] text-[#111110] hover:opacity-90 py-4 rounded-xl text-[11px] uppercase tracking-widest font-bold transition-opacity">Inquire — {previewTemplate.name}</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}