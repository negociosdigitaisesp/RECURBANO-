import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Camera, UserCheck, Target, TrendingUp } from 'lucide-react';

const differentials = [
  { icon: Clock, title: "Entrega em 48h", copy: "Da captação à publicação em dois dias úteis. Agilidade sem comprometer qualidade." },
  { icon: DollarSign, title: "Custo real", copy: "70% mais acessível que produções tradicionais. Profissionalismo sem taxa de produtora." },
  { icon: Camera, title: "Qualidade técnica", copy: "Captação 4K, estabilização óptica, correção de cor profissional. Mobile não é amador." },
  { icon: UserCheck, title: "Autenticidade", copy: "Menos produzido, mais real. O público conecta com verdade, não com perfeição artificial." },
  { icon: Target, title: "Estratégia primeiro", copy: "Cada vídeo responde: por que isso agora? Roteiro pensado para resultado." },
  { icon: TrendingUp, title: "Produção escalável", copy: "Constância é autoridade. Método mobile permite volume sem perder propósito." },
];

const Differentials: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-neutral-900 hover:border-neutral-700 bg-neutral-950/50 transition-colors duration-300"
            >
              <item.icon className="w-8 h-8 text-white mb-6 stroke-[1.5]" />
              <h3 className="text-xl font-bold font-clash text-white mb-3">{item.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;