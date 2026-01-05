import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

const Manifesto: React.FC = () => {
  const comparisons = [
    {
      bad: "Vídeo bonito que não vende",
      good: "Vídeo estratégico que atrai cliente qualificado"
    },
    {
      bad: "Produção cara e demorada",
      good: "Método mobile: 70% mais barato, entrega em 3 dias"
    },
    {
      bad: "Conteúdo genérico que todo mundo faz",
      good: "Exclusividade total: sua identidade, seu público, seu resultado"
    }
  ];

  return (
    <section id="manifesto" className="py-24 md:py-40 px-6 md:px-12 bg-[#0A0A0A] border-b border-neutral-900">
      <div className="max-w-6xl mx-auto">

        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-neutral-800"></span>
            <span className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase font-black italic">Diagnóstico de Mercado</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-clash font-bold leading-[1.1] tracking-tight [word-spacing:0.15em] uppercase mb-8">
            VOCÊ POSTA. SEUS CONCORRENTES POSTAM. <br />
            <span className="text-neutral-700">MAS QUEM O CLIENTE LEMBRA?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
              O problema não é falta de conteúdo. <span className="text-white font-medium italic">É falta de estratégia.</span> Você já postou vídeos que tiveram curtidas... mas zero ligações? Já investiu em produção cara que ficou linda no feed, mas não trouxe paciente ou cliente nenhum?
            </p>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
              A verdade: Sem planejamento estratégico, vídeo é só decoração digital. Com estratégia, o vídeo se torna sua <span className="text-white font-medium">força de vendas trabalhando 24h por dia</span>, filtrando curiosos e atraindo quem realmente paga.
            </p>
          </div>
        </motion.div>

        {/* Comparison Grid - UX Optimized for Mobile */}
        <div className="grid grid-cols-1 gap-4 md:gap-0 border border-neutral-900 bg-neutral-950/20">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 group"
            >
              {/* Pain Point */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-900 group-hover:bg-red-500/[0.02] transition-colors duration-500">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-full border border-neutral-800">
                    <X size={12} className="text-neutral-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-600 font-black uppercase tracking-widest mb-1">Cenário Comum</span>
                    <p className="text-neutral-500 text-lg line-through decoration-neutral-800">{item.bad}</p>
                  </div>
                </div>
              </div>

              {/* Solution Point */}
              <div className="p-8 group-hover:bg-white/[0.02] transition-colors duration-500 relative overflow-hidden">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="mt-1 p-1 rounded-full border border-white/20">
                    <Check size={12} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/40 font-black uppercase tracking-widest mb-1 italic">Método Recurbano</span>
                    <p className="text-white text-lg font-bold tracking-tight">{item.good}</p>
                  </div>
                </div>
                {/* Subtle visual accent */}
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-10 transition-opacity">
                  <ArrowRight size={40} className="text-white -rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Hook */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          {/* SVG Logos Row */}
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            {[1, 2, 3, 4, 5].map(i => (
              <img
                key={i}
                src={`/${i}.svg`}
                alt={`Brand ${i}`}
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            ))}
          </div>
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-bold">
            +47 Marcas que pararam de postar e começaram a vender
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Manifesto;