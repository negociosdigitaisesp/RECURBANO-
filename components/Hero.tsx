import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  '/port3.webm',
  '/port4.webm',
  '/port1.webm',
  '/port2.webm',
  '/port5.webm',
  '/port6.webm',
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-advance when video ends
  const handleVideoEnd = () => {
    if (isAutoPlaying) {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }
  };

  // Preload next video for smooth transition
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % videos.length;
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = videos[nextIndex];
    document.head.appendChild(link);

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [currentIndex]);

  // Restart video when changing index
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's ok
      });
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 border-b border-neutral-900 overflow-hidden">

      {/* Background Video Carousel & Motion Design Elements */}
      <div className="absolute inset-0 z-0">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Film Grain Texture for Professional Look */}
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Video Carousel with Smooth Crossfade */}
        <AnimatePresence mode="wait">
          <motion.video
            key={currentIndex}
            ref={videoRef}
            autoPlay
            loop={false}
            muted
            playsInline
            onEnded={handleVideoEnd}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-full h-full object-cover scale-105"
            src={videos[currentIndex]}
          />
        </AnimatePresence>

        {/* Navigation Controls - Desktop Only */}
        <button
          onClick={goToPrevious}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Video Indicators */}
        <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-1'
                }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="text-center max-w-4xl mx-auto z-20 relative"
      >

        <h1 className="text-5xl md:text-8xl font-clash font-bold leading-[1.1] mb-6 tracking-tight drop-shadow-2xl text-center mx-auto">
          VÍDEO NÃO É <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">CONTEÚDO</span> <br />
          <span className="whitespace-nowrap">É ESTRATÉGIA</span>
        </h1>

        <h2 className="text-lg md:text-xl text-neutral-200 font-light max-w-xl mx-auto mb-10 leading-relaxed drop-shadow-lg text-center">
          Presença digital que gera lembrança, autoridade e conversão. Direto do celular.
        </h2>

        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.05, backgroundColor: "#FAFAFA", color: "#0A0A0A" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-none uppercase tracking-widest text-xs font-bold transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-xl"
        >
          AGENDAR CONSULTORIA ESTRATÉGICA
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown className="w-6 h-6 text-white animate-bounce drop-shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;