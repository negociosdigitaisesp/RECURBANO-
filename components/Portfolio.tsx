import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

interface Project {
  id: number;
  brand: string;
  category: string;
  cloudinaryId: string;
  thumbnail: string;
}

// 8 projetos com vídeos do Cloudinary
const projects: Project[] = [
  {
    id: 1,
    brand: "STARMAIS",
    category: "Moda Fitness",
    cloudinaryId: "Treine_com_o_estilo_e_conforto_com_moda_fitnesssb_cuide_da_sua_sa%C3%BAde_e_bem_estar_com_starmaiso_abgqvt",
    thumbnail: "https://res.cloudinary.com/dhw8amfsw/video/upload/so_0/Treine_com_o_estilo_e_conforto_com_moda_fitnesssb_cuide_da_sua_sa%C3%BAde_e_bem_estar_com_starmaiso_abgqvt.jpg"
  },
  {
    id: 2,
    brand: "PSICOLOGIA CLÍNICA",
    category: "Psicologia",
    cloudinaryId: "Nem_sempre_a_gente_acerta_de_primeira_no_caminho_eu_mesma_precisei_me_perder_pra_me_encontrar._a8oszx",
    thumbnail: "https://res.cloudinary.com/dhw8amfsw/video/upload/so_0/Nem_sempre_a_gente_acerta_de_primeira_no_caminho_eu_mesma_precisei_me_perder_pra_me_encontrar._a8oszx.jpg"
  },
  {
    id: 3,
    brand: "CLÍNICA ODONTOLÓGICA",
    category: "Odontologia",
    cloudinaryId: "Mais_um_v%C3%ADdeo_captado_e_editado_por_n%C3%B3s_gkeu5f",
    thumbnail: "https://res.cloudinary.com/dhw8amfsw/video/upload/so_0/Mais_um_v%C3%ADdeo_captado_e_editado_por_n%C3%B3s_gkeu5f.jpg"
  },
  {
    id: 4,
    brand: "CAIO IVENS",
    category: "Corretor de Imóveis",
    cloudinaryId: "EXCLUSIVIDADE_NA_SERRA_DA_IBIAPABAApresento_a_voc%C3%AA_essa_casa_DUPLEX_incr%C3%ADvel_no_Condom%C3%ADnio_La_t1qwna",
    thumbnail: "https://res.cloudinary.com/dhw8amfsw/video/upload/so_0/EXCLUSIVIDADE_NA_SERRA_DA_IBIAPABAApresento_a_voc%C3%AA_essa_casa_DUPLEX_incr%C3%ADvel_no_Condom%C3%ADnio_La_t1qwna.jpg"
  },
  {
    id: 5,
    brand: "ALFA LABORATÓRIO",
    category: "Laboratório",
    cloudinaryId: "Novembro_Azul_%C3%A9_m%C3%AAs_de_cuidado_e_preven%C3%A7%C3%A3o_O_Laborat%C3%B3rio_Alfa_preparou_dois_combos_promociona_dcudcn",
    thumbnail: "https://res.cloudinary.com/dhw8amfsw/video/upload/so_0/Novembro_Azul_%C3%A9_m%C3%AAs_de_cuidado_e_preven%C3%A7%C3%A3o_O_Laborat%C3%B3rio_Alfa_preparou_dois_combos_promociona_dcudcn.jpg"
  },
  {
    id: 6,
    brand: "JESSICA NERY",
    category: "Nutricionista",
    cloudinaryId: "Mais_um_v%C3%ADdeo_captado_por_nossas_lentes_com_em_foque_em_apresenta%C3%A7%C3%A3o_de_uma_nutricionista_otpeec",
    thumbnail: "https://res.cloudinary.com/dhw8amfsw/video/upload/so_0/Mais_um_v%C3%ADdeo_captado_por_nossas_lentes_com_em_foque_em_apresenta%C3%A7%C3%A3o_de_uma_nutricionista_otpeec.jpg"
  },
  {
    id: 7,
    brand: "ACESSÓRIOS PREMIUM",
    category: "Acessórios Femininos",
    cloudinaryId: "Diante_da_modernidade_dos_tempos_onde_os_relacionamentos_est%C3%A3o_cada_vez_mais_rasos_e_passageiros_etzhzg",
    thumbnail: "https://res.cloudinary.com/dhw8amfsw/video/upload/so_0/Diante_da_modernidade_dos_tempos_onde_os_relacionamentos_est%C3%A3o_cada_vez_mais_rasos_e_passageiros_etzhzg.jpg"
  },
  {
    id: 8,
    brand: "FLORISA",
    category: "Moda Feminina",
    cloudinaryId: "A_%C3%A9poca_mais_encantada_do_ano_vai_come%C3%A7ar_--_HAPPY_HOLIDAYS._Lan%C3%A7amento_de_Cole%C3%A7%C3%A3o_20_bgswze",
    thumbnail: "https://res.cloudinary.com/dhw8amfsw/video/upload/so_0/A_%C3%A9poca_mais_encantada_do_ano_vai_come%C3%A7ar_--_HAPPY_HOLIDAYS._Lan%C3%A7amento_de_Cole%C3%A7%C3%A3o_20_bgswze.jpg"
  },
];

const Portfolio: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);

  const openVideo = (project: Project) => {
    setActiveVideo(project);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A] border-t border-neutral-900">
      {/* Header com Copywriting Profissional */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] tracking-[0.5em] text-neutral-500 uppercase font-black mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-6xl font-clash font-bold mb-6">
            MARCAS QUE <br />
            <span className="text-neutral-600">PARARAM DE POSTAR</span> <br />
            E COMEÇARAM A <span className="text-white">VENDER</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Cada projeto é uma prova de que vídeo estratégico transforma atenção em conversão.
            Clique para assistir e ver nosso trabalho em ação.
          </p>
        </motion.div>
      </div>

      {/* Grid de Projetos - 2x4 no Desktop, 1 coluna no Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            onClick={() => openVideo(project)}
            className="group relative aspect-[9/16] overflow-hidden bg-neutral-900 cursor-pointer"
          >
            {/* Thumbnail com Lazy Loading */}
            <img
              src={project.thumbnail}
              alt={project.brand}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            />

            {/* Overlay com Play Button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center transform scale-90 group-hover:scale-100 group-hover:bg-white/20 transition-all duration-300">
                <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
              </div>
            </div>

            {/* Content Text */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1 font-bold">{project.category}</p>
              <h3 className="text-lg font-clash font-bold text-white">{project.brand}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <a href="#packages" className="px-8 py-4 border border-white/20 text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          QUERO RESULTADOS ASSIM
        </a>
      </div>

      {/* Video Modal - Lazy loads iframe only when opened */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg aspect-[9/16] bg-neutral-900 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cloudinary Video Player - Only loads when modal opens */}
              <iframe
                src={`https://player.cloudinary.com/embed/?cloud_name=dhw8amfsw&public_id=${activeVideo.cloudinaryId}&profile=cld-default`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                title={activeVideo.brand}
              />
            </motion.div>

            {/* Video Info */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">{activeVideo.category}</p>
              <h3 className="text-white text-xl font-clash font-bold">{activeVideo.brand}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;