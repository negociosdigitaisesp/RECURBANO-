import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  // Marcas de prestígio para preencher o marquee
  const brands = [
    "MERCADO LIBRE", "MERCEDES-BENZ", "SHOPIFY", "PHILIPS", 
    "SOCIETE GENERALE", "SPOTIFY", "VODAFONE", "NEXUS",
    "VERTIGO", "LUMINA", "ORBIT", "AURA", "ZENITH", "PRISMA"
  ];

  // Triplicamos a lista para garantir que o loop seja fluido em qualquer resolução
  const doubleBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 border-t border-neutral-900 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-neutral-500 text-[10px] uppercase tracking-[0.5em] font-black"
        >
          MARCAS QUE CONFIAM NO REC URBANO
        </motion.p>
      </div>
      
      {/* Container do Marquee com Máscara de Degradê nas laterais (estilo GitHub) */}
      <div className="relative flex overflow-hidden">
        {/* Camadas de Degradê nas Bordas (Vibe Motion Designer) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 z-20 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 z-20 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />

        {/* Motion Wrapper para o Scroll Infinito de Alta Performance */}
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center py-4 select-none"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // Velocidade constante e luxuosa
              ease: "linear",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {doubleBrands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-max"
            >
              <h4 className="text-xl md:text-3xl font-clash font-bold text-neutral-500 hover:text-white transition-all duration-500 tracking-tighter opacity-80 hover:opacity-100 hover:scale-105 cursor-default">
                {brand}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;