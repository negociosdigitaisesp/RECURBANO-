import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 border-b border-neutral-900 overflow-hidden">
      
      {/* Background Video & Motion Design Elements */}
      <div className="absolute inset-0 z-0">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        
        {/* Film Grain Texture for Professional Look */}
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* Dynamic Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
          className="w-full h-full object-cover scale-105" // Scale prevents edge flickering
          src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} // Custom easing
        className="text-center max-w-4xl mx-auto z-20 relative"
      >
        <p className="text-xs md:text-sm tracking-[0.2em] text-neutral-300 mb-6 uppercase font-medium drop-shadow-md">
          Recurbano
        </p>
        <h1 className="text-5xl md:text-8xl font-clash font-bold leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
          VÍDEO NÃO É <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">CONTEÚDO.</span> <br />
          É ESTRATÉGIA.
        </h1>
        
        <h2 className="text-lg md:text-xl text-neutral-200 font-light max-w-xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
          Presença digital que gera lembrança, autoridade e conversão. Direto do celular.
        </h2>

        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.05, backgroundColor: "#FAFAFA", color: "#0A0A0A" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-none uppercase tracking-widest text-xs font-bold transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-xl"
        >
          Ver Projetos
        </motion.a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
         <ArrowDown className="w-6 h-6 text-white animate-bounce drop-shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;