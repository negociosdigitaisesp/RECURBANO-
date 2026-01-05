import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFA] text-[#0A0A0A] py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <img
            src="/logo sem fundo.png"
            alt="Rec Urbano"
            className="h-10 md:h-12 w-auto mx-auto mb-8 invert"
          />

          <h2 className="text-4xl md:text-7xl font-clash font-bold mb-6 tracking-tight">
            PRONTO PARA <br /> SER VISTO?
          </h2>
          <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto">
            Resposta em até 24 horas. Primeira conversa sem compromisso.
          </p>

          <motion.a
            href="https://wa.link/7ibz86"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0] }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-block bg-[#0A0A0A] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            AGENDAR CONSULTORIA ESTRATÉGICA
          </motion.a>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          {/* Logo Text */}
          <p className="font-bold tracking-wider text-black mb-4 md:mb-0">REC URBANO</p>

          {/* Instagram Links */}
          <div className="flex gap-6 mb-4 md:mb-0 items-center">
            <a
              href="https://instagram.com/recurbano"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <Instagram size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">@recurbano</span>
            </a>
            <a
              href="https://instagram.com/jorgecastroce"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <Instagram size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">@jorgecastroce</span>
            </a>
          </div>

          {/* Copyright */}
          <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;