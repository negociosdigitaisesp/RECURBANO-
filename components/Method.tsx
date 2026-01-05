import React from 'react';
import { motion } from 'framer-motion';
import { Target, PenTool, Camera, Film, Star, Zap } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const steps = [
  {
    number: "01",
    icon: Target,
    title: "PLANEJAMENTO ESTRATÉGICO",
    label: "FASE: INTELIGÊNCIA",
    description: "Engenharia de público e mercado. Antes de gravar, definimos o caminho exato para o lucro através de análise de dados e comportamento.",
    topics: ["Análise de Nicho", "Mapeamento de Dores", "Gatilhos Mentais", "Definição de KPIs"],
    impact: "ROI OTIMIZADO"
  },
  {
    number: "02",
    icon: PenTool,
    title: "ROTEIRO ESTRATÉGICO",
    label: "FASE: NARRATIVA",
    description: "Scripts de alta retenção baseados em psicologia do consumo. Narrativas que não permitem o scroll e geram desejo imediato.",
    topics: ["Hook de 3 Segundos", "Storytelling Autoral", "Copy de Conversão", "CTA Magnético"],
    impact: "ALTA RETENÇÃO"
  },
  {
    number: "03",
    icon: Camera,
    title: "CAPTAÇÃO PREMIUM",
    label: "FASE: EXECUÇÃO",
    description: "O poder do cinema no seu bolso. Captação 4K HDR com técnica de iluminação e áudio de elite para autoridade máxima no mercado.",
    topics: ["Resolução 4K HDR", "Áudio de Estúdio", "Luz Adaptativa", "Estabilização Pro"],
    impact: "LOOK CINEMATOGRÁFICO"
  },
  {
    number: "04",
    icon: Film,
    title: "EDIÇÃO ESTRATÉGICA",
    label: "FASE: CONVERSÃO",
    description: "Transformamos frames em ativos financeiros. Edição dinâmica focada em manter a atenção até o último segundo do seu vídeo.",
    topics: ["Cortes Dinâmicos", "Legendas Motion", "Sound Design", "Color Grading"],
    impact: "ENTREGA ÁGIL"
  },
  {
    number: "05",
    icon: Star,
    title: "EXCLUSIVIDADE TOTAL",
    label: "FASE: IDENTIDADE",
    description: "Sua marca com estética única e inconfundível. Zero templates. Design visual focado em liderança e diferenciação competitiva.",
    topics: ["Alinhamento de Marca", "Motion Personalizado", "Voz de Autoridade", "Estética Única"],
    impact: "LÍDER DE MERCADO"
  }
];

const Method: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="method" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-neutral-900">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.4 : 0.6 }}
          className="mb-16 border-b border-neutral-900 pb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="text-[10px] tracking-[0.5em] text-neutral-500 uppercase font-black">Engenharia Visual de Alto Impacto</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-clash font-bold leading-[1.1] tracking-tight [word-spacing:0.15em] uppercase mb-6">
            A CIÊNCIA POR TRÁS <br />
            <span className="text-neutral-800">DO SEU RESULTADO.</span>
          </h2>
        </motion.div>

        {/* Modules Grid */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              // Simplified animation on mobile: opacity only, no x translation
              initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              // Reduced delays on mobile for faster perceived load
              transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? index * 0.05 : index * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-[100px_1fr_220px] border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-900/40 transition-all duration-500"
            >
              {/* Coluna 1: Meta-dados */}
              <div className="p-6 border-b md:border-b-0 md:border-r border-neutral-900 flex flex-row md:flex-col justify-start md:justify-between items-center md:items-start gap-6 md:gap-0">
                <motion.span
                  initial={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
                  whileInView={{ WebkitTextStroke: '1px rgba(255,255,255,1)' }}
                  viewport={{ margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl md:text-5xl font-clash font-bold text-transparent transition-all duration-500"
                >
                  {step.number}
                </motion.span>
                <div className="p-2.5 bg-neutral-900 rounded-lg border border-neutral-800 group-hover:bg-white transition-all duration-500">
                  <step.icon className="w-4 h-4 text-neutral-500 group-hover:text-black transition-colors" />
                </div>
              </div>

              {/* Coluna 2: Conteúdo Principal */}
              <div className="p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-neutral-900">
                <span className="text-[9px] font-black text-neutral-600 tracking-[0.4em] mb-2 uppercase">
                  {step.label}
                </span>
                <h3 className="text-xl md:text-2xl font-clash font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-lg font-light">
                  {step.description}
                </p>
              </div>

              {/* Coluna 3: Especificações Técnicas */}
              <div className="p-8 md:p-10 bg-black/40 flex flex-col justify-between">
                <ul className="space-y-2">
                  {step.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                      <div className="w-1 h-1 bg-neutral-800 rounded-full group-hover:bg-white transition-colors" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 pt-6 border-t border-neutral-900 mt-4">
                  <Zap size={10} className="text-white fill-white animate-pulse" />
                  <span className="text-[9px] font-black text-white tracking-[0.2em] uppercase italic">
                    {step.impact}
                  </span>
                </div>
              </div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

        {/* Nota de Encerramento e CTA */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-700 text-[10px] uppercase tracking-[0.5em] font-black">
            Fim do processo — Pronto para escala
          </p>
          <a href="#packages" className="px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            Começar Agora
          </a>
        </div>

      </div>

      <style>{`
        .stroke-neutral {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          -webkit-text-fill-color: transparent;
        }
        .group:hover .stroke-neutral {
          -webkit-text-stroke: 1px rgba(255,255,255,1);
        }
      `}</style>
    </section>
  );
};

export default Method;