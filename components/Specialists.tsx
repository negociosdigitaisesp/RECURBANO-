import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Specialists: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Efeito Parallax sutil para a imagem e para a moldura
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yFrame = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="py-24 md:py-48 bg-[#0A0A0A] border-t border-neutral-900 relative overflow-hidden">
      
      {/* Background Decorative Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap">
        <span className="text-[25vw] font-clash font-bold leading-none uppercase tracking-tighter">
          CREATIVE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          
          {/* Coluna da Imagem com Design Assimétrico */}
          <div className="relative">
            {/* Moldura Flutuante (Background Frame) */}
            <motion.div 
              style={{ y: yFrame }}
              className="absolute -inset-4 border border-white/10 rounded-tr-[120px] rounded-bl-[120px] z-0"
            />

            {/* Container da Imagem Principal */}
            <motion.div
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 aspect-[4/5] overflow-hidden rounded-tr-[160px] rounded-bl-[160px] bg-neutral-900 shadow-2xl"
            >
              {/* Overlay de gradiente para fusão na base */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
              
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop" 
                alt="Jorge Castro"
                className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-105"
              />
            </motion.div>

            {/* Badge Flutuante Minimalista */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-4 md:right-10 z-30 bg-white p-6 md:p-8 shadow-2xl"
            >
              <div className="space-y-1">
                <p className="text-black text-[10px] font-black uppercase tracking-[0.4em]">Founder</p>
                <div className="h-px w-8 bg-neutral-200" />
                <p className="text-neutral-500 text-[9px] uppercase tracking-widest font-bold">Jorge Castro</p>
              </div>
            </motion.div>
          </div>

          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-neutral-800"></span>
              <span className="text-[10px] tracking-[0.5em] text-neutral-500 uppercase font-black">Estrategista & Visionário</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-clash font-bold leading-[1.1] tracking-[0.06em] [word-spacing:0.3em] uppercase mb-10">
              MENTE POR TRÁS <br />
              <span className="text-neutral-700">DA LENTE.</span>
            </h2>

            <div className="space-y-8 max-w-xl">
              <p className="text-neutral-400 font-light leading-relaxed text-lg md:text-xl">
                O "olho" da operação <span className="text-white font-medium">RECURBANO</span>. Especialista em traduzir a essência de marcas premium em narrativas magnéticas que não apenas ocupam espaço, mas dominam mercados.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-neutral-900">
                <div>
                  <h4 className="text-white font-clash font-bold text-2xl mb-1">8+ ANOS</h4>
                  <p className="text-neutral-600 text-[10px] uppercase tracking-widest font-black">De Experiência</p>
                </div>
                <div>
                  <h4 className="text-white font-clash font-bold text-2xl mb-1">47+ MARCAS</h4>
                  <p className="text-neutral-600 text-[10px] uppercase tracking-widest font-black">Impactadas</p>
                </div>
              </div>

              <p className="text-neutral-500 font-light leading-relaxed text-sm">
                Sua metodologia une a estética do cinema com a agilidade do mobile e a frieza dos dados de conversão. O objetivo nunca é apenas um vídeo bonito, mas sim um ativo financeiro inconfundível.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex gap-4">
                <a href="#" className="p-4 border border-neutral-800 text-neutral-500 hover:text-white hover:border-white transition-all duration-500 rounded-full">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-4 border border-neutral-800 text-neutral-500 hover:text-white hover:border-white transition-all duration-500 rounded-full">
                  <Linkedin size={20} />
                </a>
              </div>
              
              <a href="#" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-white hover:opacity-70 transition-all">
                Conheça a Jornada
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Specialists;