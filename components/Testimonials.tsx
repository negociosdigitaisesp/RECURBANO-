import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [1, 2, 3];

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-clash font-bold">DEPOIMENTOS</h2>
          <p className="text-neutral-500 mt-2 text-sm uppercase tracking-widest">"Antes eu postava. Agora eu vendo."</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative aspect-[9/16] bg-neutral-800 overflow-hidden group rounded-sm"
            >
              {/* Simulate Video Content */}
              <img
                src={`https://images.unsplash.com/photo-${index === 0 ? '1611162617474-5b21e879e113' : index === 1 ? '1611162616475-46b635cb6868' : '1611162618071-b39a2ec055fb'}?q=80&w=600&auto=format&fit=crop`}
                alt="Client Testimonial"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold uppercase">Cliente {index + 1}</p>
                <p className="text-[10px] text-neutral-400">CEO, TechStartup</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#packages" className="px-8 py-4 border border-white/20 text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            AGENDAR CONSULTORIA ESTRATÉGICA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;