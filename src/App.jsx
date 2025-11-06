import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <main className="min-h-screen bg-[#F4F4F2] text-[#1E324A] antialiased">
      {/* Hero with Spline scene and animated intro */}
      <Hero />

      {/* Services overview */}
      <Services />

      {/* Selected work / case studies */}
      <Showcase />

      {/* Call to action */}
      <CTA />

      <footer className="bg-[#F4F4F2] text-[#1E324A]/70 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Ozlume. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="hover:text-[#118384] transition-colors">Services</a>
            <a href="#work" className="hover:text-[#118384] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[#118384] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
