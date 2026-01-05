import React from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Method from './components/Method';
import Specialists from './components/Specialists';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Packages from './components/Packages';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full bg-[#0A0A0A] text-[#FAFAFA] antialiased selection:bg-white selection:text-black">
      <Hero />
      <Manifesto />
      <Method />
      <Specialists />
      <Portfolio />
      <Differentials />
      <Testimonials />
      <Packages />
      <SocialProof />
      <Footer />
    </main>
  );
};

export default App;