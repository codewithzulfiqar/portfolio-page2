import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code, 
  MessageSquare,
  Send,
  Globe,
  User,
  CornerDownRight
} from 'lucide-react';
import { PROJECTS, TESTIMONIALS, SKILLS, Project, Testimonial } from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'Pakistan' | 'Europe'>('all');

  const filteredTestimonials = useMemo(() => {
    if (activeTab === 'all') return TESTIMONIALS;
    return TESTIMONIALS.filter(t => t.location === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans selection:bg-brand-accent/20 selection:text-brand-accent">
      {/* Header */}
      <header className="h-[70px] px-6 lg:px-10 flex justify-between items-center bg-brand-surface border-b border-brand-border sticky top-0 z-50">
        <div className="font-bold text-lg tracking-tight">ZA. Portfolio</div>
        <nav className="hidden md:flex gap-6 uppercase tracking-wider text-[10px] font-bold text-brand-text-sub">
          {['Home', 'Projects', 'Skills', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-brand-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Grid Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-[300px_1fr_280px] gap-6 items-start">
        
        {/* Left Sidebar: About & Contact */}
        <aside className="space-y-6">
          <div className="card-minimal">
            <div className="section-label">About Me</div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-brand-bg border-2 border-brand-accent overflow-hidden mb-4">
                <img 
                  src="https://picsum.photos/seed/zulfiqar/200/200" 
                  alt="Zulfiqar Ali" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="text-xl font-bold tracking-tight mb-2">Zulfiqar Ali</h1>
              <p className="text-[13px] text-brand-text-sub leading-relaxed mb-4">
                Frontend Developer based in Lahore, specializing in building high-performance, responsive web interfaces with modern JS frameworks.
              </p>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="text-brand-text-sub hover:text-brand-accent transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div id="contact" className="card-minimal">
            <div className="section-label">Get In Touch</div>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-2 bg-brand-bg border border-brand-border rounded-lg text-sm focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder:text-brand-text-sub/50" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-2 bg-brand-bg border border-brand-border rounded-lg text-sm focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder:text-brand-text-sub/50" 
              />
              <textarea 
                rows={3} 
                placeholder="Message" 
                className="w-full px-4 py-2 bg-brand-bg border border-brand-border rounded-lg text-sm focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none resize-none transition-all placeholder:text-brand-text-sub/50"
              ></textarea>
              <button 
                type="button"
                className="w-full py-2 bg-brand-text-main text-white rounded-lg text-[13px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-all flex items-center justify-center gap-2 group"
              >
                Send Message <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </aside>

        {/* Center: Projects & Skills */}
        <div className="space-y-6">
          <section id="projects" className="card-minimal">
            <div className="section-label">Featured Projects</div>
            <div className="grid grid-cols-1 gap-4">
              {PROJECTS.map((project) => (
                <div 
                  key={project.id}
                  className="flex flex-col md:flex-row gap-4 p-3 rounded-xl hover:bg-brand-accent/[0.03] border border-transparent hover:border-brand-accent/10 transition-all group"
                >
                  <div className="w-full md:w-32 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-brand-bg">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-[15px] leading-none">{project.title}</h3>
                      <div className="flex gap-4 text-brand-accent">
                        <a href={project.liveLink} className="text-[11px] font-bold flex items-center gap-1 hover:underline">Demo <ExternalLink size={10} /></a>
                        <a href={project.githubLink} className="text-[11px] font-bold flex items-center gap-1 hover:underline text-brand-text-sub">Github <Github size={10} /></a>
                      </div>
                    </div>
                    <p className="text-[13px] text-brand-text-sub leading-tight mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-brand-bg rounded border border-brand-border text-brand-text-sub font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="section-label mt-8">Skills & Expertise</div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <div 
                  key={skill}
                  className="px-4 py-1.5 bg-brand-bg border border-brand-border rounded-full text-[12px] font-medium text-brand-text-main shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar: Reviews */}
        <aside className="space-y-6">
          <section id="reviews" className="card-minimal flex flex-col h-full lg:max-h-[850px]">
            <div className="section-label">Client Reviews</div>
            
            <div className="flex bg-brand-bg p-1 rounded-lg mb-6 self-start">
              {(['all', 'Pakistan', 'Europe'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab 
                      ? 'bg-brand-surface text-brand-accent shadow-sm' 
                      : 'text-brand-text-sub hover:text-brand-text-main'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4 overflow-y-auto pr-1">
              <AnimatePresence mode="popLayout">
                {filteredTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 bg-brand-bg/40 rounded-xl border border-brand-border"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                        <User size={12} />
                      </div>
                      <div className="text-[11px] font-bold truncate max-w-[150px]">{testimonial.name}</div>
                      <div className="ml-auto text-[9px] font-bold text-brand-text-sub flex items-center gap-1">
                        <Globe size={10} /> {testimonial.location === 'Pakistan' ? 'PK' : 'EU'}
                      </div>
                    </div>
                    
                    <p className="text-[12px] text-brand-text-main leading-relaxed mb-3 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="pt-3 border-t border-brand-border/40">
                      <div className="text-[10px] font-bold text-brand-accent flex items-center gap-1 mb-1">
                        <CornerDownRight size={10} /> Zulfiqar's Reply
                      </div>
                      <p className="text-[11px] text-brand-text-sub leading-snug">
                        {testimonial.reply}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        </aside>
      </main>

      {/* Footer */}
      <footer className="h-[50px] px-6 lg:px-10 flex justify-between items-center border-t border-brand-border bg-brand-surface text-[11px] text-brand-text-sub font-medium">
        <div>&copy; 2026 Zulfiqar Ali. Engineering Clean Interfaces.</div>
        <div className="flex gap-4">
          <a href="#" className="text-brand-text-main font-bold hover:text-brand-accent transition-colors">LinkedIn</a>
          <a href="#" className="text-brand-text-main font-bold hover:text-brand-accent transition-colors">GitHub</a>
          <a href="#" className="text-brand-text-main font-bold hover:text-brand-accent transition-colors">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

