import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
    const brandNames = [
        "Ivaniely Alves",
        "L.A Construtora",
        "Clínica Thaís Marques",
        "Walessa Teófilo",
        "Luana Moreira",
        "Alfa Laboratório",
        "Anderson Rodrigues Advocacia",
        "Edianne Nayara - Arquiteta",
        "Empório San José",
        "UseFlorisa"
    ];

    return (
        <section className="py-16 bg-[#0A0A0A] border-t border-neutral-900">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="text-[10px] tracking-[0.5em] text-neutral-500 uppercase font-black">
                        Marcas que Confiam no Recurbano
                    </span>
                </motion.div>

                {/* Marquee Container */}
                <div className="relative overflow-hidden">
                    {/* Gradient fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

                    {/* Scrolling Brands */}
                    <motion.div
                        className="flex gap-12 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {[...brandNames, ...brandNames].map((brand, index) => (
                            <span
                                key={index}
                                className="text-white/60 text-sm md:text-base font-clash font-medium uppercase tracking-wider hover:text-white transition-colors cursor-default"
                            >
                                {brand}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
