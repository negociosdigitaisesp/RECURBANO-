import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFA] text-[#0A0A0A] py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-clash font-bold mb-6 tracking-tight">
            PRONTO PARA <br /> SER VISTO?
          </h2>
          <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto">
            Resposta em até 24 horas. Primeira conversa sem compromisso.
          </p>
          
          <motion.a 
            href="https://wa.me/"
            whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0] }} // Subtle shake effect
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-block bg-[#0A0A0A] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            Falar com Recurbano
          </motion.a>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p className="font-bold tracking-wider text-black mb-4 md:mb-0">RECURBANO</p>
          
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-black transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-black transition-colors"><Linkedin size={20} /></a>
          </div>

          <p>© {new Date().getFullYear()} São Benedito – CE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;