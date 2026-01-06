import React from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Method from './components/Method';
import Specialists from './components/Specialists';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';

import Packages from './components/Packages';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <main className="w-full bg-[#0A0A0A] text-[#FAFAFA] antialiased selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <Manifesto />
      <Method />
      <Specialists />
      <SocialProof />
      <Portfolio />
      <Differentials />

      <Packages />
      <Footer />
    </main>
  );
};

export default App;