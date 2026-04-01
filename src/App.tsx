import React from 'react';
import { 
  Anchor, 
  Shield, 
  HardHat, 
  Waves, 
  MapPin, 
  Mail, 
  ExternalLink, 
  Award, 
  Briefcase, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const certifications = [
  { name: "IMCA Air Diver 2A", icon: Waves, description: "International Marine Contractors Association certification for surface supplied diving." },
  { name: "IRATA Level 1", icon: Shield, description: "Industrial Rope Access Trade Association certification for high-altitude work." },
  { name: "NDT Specialist", icon: Award, description: "Non-Destructive Testing (Lloyd's Register) for structural integrity assessment." },
  { name: "BOSIET / CATEC", icon: HardHat, description: "Offshore safety and confined space entry certifications." }
];

const experiences = [
  {
    company: "PETRODIVE",
    role: "Scaphandrier Offshore Air Diver NDT & Cordiste IRATA",
    period: "Dec 2025 - Mar 2026",
    location: "Cameroon",
    description: "Offshore diving operations, non-destructive testing, and rope access maintenance."
  },
  {
    company: "Ulis Group",
    role: "Scaphandrier",
    period: "Oct 2025 - Nov 2025",
    location: "Benin",
    description: "Submarine works and coastal infrastructure maintenance."
  },
  {
    company: "CAPEFRONT Energies",
    role: "Scaphandrier Offshore Air Diver",
    period: "Jun 2025 - Sep 2025",
    location: "Congo",
    description: "Deep sea diving operations for energy infrastructure."
  },
  {
    company: "Triangle Interim",
    role: "Scaphandrier",
    period: "Dec 2024 - May 2025",
    location: "France",
    description: "Civil engineering and underwater construction projects."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Anchor className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Quentin Pironi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#0a0a0a] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2070" 
            alt="Underwater Professional" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400">
              Normandie, France
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none">
              Quentin <span className="text-blue-600">Pironi</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              IMCA Air Diver 2A • IRATA Rope Access • NDT Specialist
              <br />
              Expertise in offshore operations and high-access industrial maintenance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                Get in Touch
              </a>
              <a href="#experience" className="w-full sm:w-auto px-8 py-4 border border-white/20 font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <ChevronRight className="rotate-90" size={32} />
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                Technical <span className="text-blue-600">Expertise</span>
              </h2>
              <p className="text-white/50 text-lg">
                Certified specialist in underwater operations and rope access, delivering precision in the most challenging environments.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-8xl font-black text-white/5 leading-none">01</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <cert.icon className="text-blue-500 group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{cert.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                Operational <span className="text-blue-600">History</span>
              </h2>
              <p className="text-white/50 text-lg">
                A track record of successful missions across Africa and Europe, specializing in offshore energy and civil infrastructure.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-8xl font-black text-white/5 leading-none">02</span>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Briefcase size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-2">
                        {exp.role}
                      </p>
                      <p className="text-white/40 text-sm max-w-xl">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-white/60 font-medium">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white/40 uppercase tracking-widest">
                      {exp.period}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
            Ready for the <br /> Next Mission?
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 font-medium">
            Available for offshore contracts, industrial maintenance, and specialized technical interventions worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:louisrouanet75@gmail.com" 
              className="group flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <Mail size={20} />
              Send Email
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-5 border-2 border-black/20 text-black font-bold uppercase tracking-widest rounded-full hover:bg-black/10 transition-all duration-300"
            >
              <ExternalLink size={20} />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Anchor className="text-blue-600" size={20} />
            <span className="font-bold uppercase tracking-tighter">Quentin Pironi</span>
          </div>
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Quentin Pironi. All rights reserved. Professional Diver & Rope Access.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-xs uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
