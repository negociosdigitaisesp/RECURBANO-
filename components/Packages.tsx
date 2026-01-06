import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const WHATSAPP_LINK = "https://wa.link/7ibz86";

interface PackageProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  icon: React.ElementType;
  isMobile: boolean;
}

const PackageCard: React.FC<PackageProps> = ({ title, subtitle, price, features, cta, isPopular, icon: Icon, isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={isMobile ? undefined : { y: -10 }}
    transition={{ duration: isMobile ? 0.4 : 0.5 }}
    className={`
      relative p-8 flex flex-col justify-between h-full border transition-all duration-500 group
      ${isPopular
        ? 'bg-white text-black border-white shadow-[0_20px_50px_rgba(255,255,255,0.1)]'
        : 'bg-neutral-950/50 text-white border-neutral-900 hover:border-neutral-700'}
    `}
  >
    {isPopular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-black px-4 py-1 uppercase tracking-[0.3em] whitespace-nowrap">
        Mais Escolhido
      </div>
    )}

    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-clash font-bold uppercase tracking-wider mb-1">{title}</h3>
          <p className={`${isPopular ? 'text-neutral-500' : 'text-neutral-500'} text-[10px] uppercase tracking-[0.2em] font-bold`}>
            {subtitle}
          </p>
        </div>
        <Icon size={24} className={isPopular ? 'text-black' : 'text-neutral-700'} />
      </div>

      <div className="mb-10">
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-bold opacity-60">R$</span>
          <span className="text-5xl font-clash font-bold tracking-tighter">{price}</span>
          <span className="text-[10px] uppercase font-black opacity-40">/mês</span>
        </div>
      </div>

      <ul className="space-y-4 mb-12">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <Check size={14} className={isPopular ? 'text-black/30' : 'text-white/20'} />
            <span className={`text-[11px] uppercase tracking-widest font-bold ${isPopular ? 'text-black' : 'text-neutral-300'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        w-full py-5 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300
        ${isPopular
          ? 'bg-black text-white hover:bg-neutral-800'
          : 'bg-white text-black hover:bg-neutral-200'}
      `}
    >
      {cta}
      <ArrowRight size={14} />
    </a>
  </motion.div>
);

const Packages: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="packages" className="py-24 md:py-40 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-neutral-800"></span>
            <span className="text-[10px] tracking-[0.5em] text-neutral-500 uppercase font-black">Planos de Investimento</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-clash font-bold leading-[1.1] tracking-[0.05em] [word-spacing:0.25em] uppercase">
            ESCOLHA SEU <br />
            <span className="text-neutral-800">NÍVEL DE ESCALA.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PackageCard
            title="Essencial"
            subtitle="De invisível a presente"
            price="600"
            icon={Zap}
            isMobile={isMobile}
            features={[
              "10 Vídeos Verticais",
              "Planejamento Estratégico",
              "Roteiros de Alta Conversão",
              "Entrega em 3 Dias",
              "Exclusividade Visual",
              "Suporte via WhatsApp"
            ]}
            cta="Começar Agora"
          />

          <PackageCard
            title="Posicionamento"
            subtitle="De presente a lembrado"
            price="970"
            isPopular={true}
            icon={Star}
            isMobile={isMobile}
            features={[
              "10 Vídeos Verticais",
              "Planejamento Estratégico",
              "Roteiros de Alta Conversão",
              "Entrega em 3 Dias",
              "Exclusividade Visual",
              "Suporte via WhatsApp",
              "+ 8 Vídeos Integrados",
              "Story Maker Semanal",
              "Roteiros Personalizados",
              "Direção Criativa In-Loco",
              "Linguagem de Autoridade",
              "18 Vídeos/Mês Total"
            ]}
            cta="Agendar Conversa"
          />

          <PackageCard
            title="Autoridade"
            subtitle="Referência Incontestável"
            price="1.700"
            icon={Crown}
            isMobile={isMobile}
            features={[
              "10 Vídeos Verticais",
              "Planejamento Estratégico",
              "Roteiros de Alta Conversão",
              "Entrega em 3 Dias",
              "Exclusividade Visual",
              "Suporte via WhatsApp",
              "Story Maker Semanal",
              "Roteiros Personalizados",
              "Direção Criativa In-Loco",
              "Linguagem de Autoridade",
              "+ 20 Vídeos Premium",
              "Gestão de Redes Sociais",
              "Planejamento Comercial",
              "Consultoria Mensal",
              "Prioridade de Agenda",
              "30 Vídeos/Mês Total"
            ]}
            cta="Solicitar Análise"
          />
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-neutral-900 pt-8">
          <p className="text-neutral-700 text-[10px] uppercase tracking-[0.4em] font-black">
            *Investimento sem fidelidade — cancelamento livre.
          </p>
          <span className="text-neutral-500 text-[9px] uppercase tracking-widest font-bold">12 vagas disponíveis para este mês</span>
        </div>

      </div>
    </section>
  );
};

export default Packages;