import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface Project {
  id: number;
  brand: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, brand: "URBAN KICKS", category: "Moda Streetwear", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop" },
  { id: 2, brand: "ALMA COFFEE", category: "Gastronomia", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" },
  { id: 3, brand: "IRON GYM", category: "Fitness", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" },
  { id: 4, brand: "VELOCITY AUTO", category: "Automotivo", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-4xl md:text-6xl font-clash font-bold mb-4">PROJETOS RECENTES</h2>
        <p className="text-neutral-400 text-lg">Narrativas que convertem atenção em ação.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-[400px] md:h-[600px] overflow-hidden bg-neutral-900 cursor-pointer"
          >
            {/* Image acting as video thumbnail */}
            <img 
              src={project.image} 
              alt={project.brand}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                <Play className="w-6 h-6 text-black fill-black translate-x-0.5" />
              </div>
            </div>

            {/* Content Text */}
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-3xl font-clash font-bold text-white">{project.brand}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;