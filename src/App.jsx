import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Briefcase, User, Mail } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

const easing = [0.22, 1, 0.36, 1];

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Showcase />
      {/* Detailed, more interesting home section */}
      <section className="bg-[#F4F4F2] text-[#1E324A] py-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easing }}
            className="rounded-3xl border border-[#1E324A]/10 bg-white p-8 shadow-xl relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 bg-[#118384]/10 rounded-full blur-2xl" />
            <h3 className="text-2xl font-semibold flex items-center gap-2"><Sparkles className="text-[#118384]"/> Our ethos</h3>
            <p className="mt-3 text-[#1E324A]/70">World-class craft, pragmatic strategy, and emotive storytelling. We design for humans and ship with precision.</p>
            <ul className="mt-5 space-y-2 text-sm text-[#1E324A]/80 list-disc pl-5">
              <li>Design systems that scale across every touchpoint</li>
              <li>Performance-first engineering and accessibility</li>
              <li>Measured outcomes: traffic, conversion, brand equity</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easing, delay: 0.05 }}
            className="rounded-3xl border border-[#1E324A]/10 bg-white p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2"><Rocket className="text-[#118384]"/> Capabilities</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {['Brand Identity','Web Design','Shopify Dev','Product Design','Motion','SEO'].map((item) => (
                <div key={item} className="rounded-xl border border-[#1E324A]/10 px-3 py-2 bg-white/60">{item}</div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easing, delay: 0.1 }}
            className="rounded-3xl border border-[#1E324A]/10 bg-gradient-to-br from-white to-[#118384]/10 p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold">Outcomes</h3>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                {kpi: '120%', label: 'Revenue uplift'},
                {kpi: '98', label: 'Lighthouse perf'},
                {kpi: '3.4x', label: 'Conversion rate'},
              ].map(({kpi, label}) => (
                <div key={label} className="rounded-xl bg-white/70 border border-[#1E324A]/10 p-4 text-center">
                  <div className="text-xl font-semibold">{kpi}</div>
                  <div className="text-xs text-[#1E324A]/70">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function ServicesPage() {
  return (
    <main className="bg-[#F4F4F2] text-[#1E324A]">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:easing}} className="text-4xl font-semibold">Services</motion.h1>
          <p className="mt-3 text-[#1E324A]/70 max-w-2xl">A full-stack creative and engineering partner, from identity to launch and growth.</p>
        </div>
      </section>
      <Services />
      <CTA />
    </main>
  );
}

function WorkPage() {
  return (
    <main className="bg-[#F4F4F2] text-[#1E324A]">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:easing}} className="text-4xl font-semibold">Work</motion.h1>
          <p className="mt-3 text-[#1E324A]/70 max-w-2xl">Selected case studies across ecommerce, SaaS, and brand transformation.</p>
        </div>
      </section>
      <Showcase />
      <CTA />
    </main>
  );
}

function AboutPage() {
  return (
    <main className="bg-[#F4F4F2] text-[#1E324A]">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:easing}}>
            <h1 className="text-4xl font-semibold">About Ozlume</h1>
            <p className="mt-4 text-[#1E324A]/80">We’re a boutique studio blending strategy, design, and engineering. Our team has shipped products and brands used by millions. We believe in clarity, quality, and long-term partnerships.</p>
            <ul className="mt-6 space-y-3 text-[#1E324A]/80">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#118384]"/> Founded in Sydney, operating globally</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#118384]"/> Senior-only team, no handoffs</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#118384]"/> Transparent, outcome-driven process</li>
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} transition={{duration:0.55,ease:easing}} className="relative rounded-3xl overflow-hidden border border-[#1E324A]/10 shadow-xl">
            <img src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW98ZW58MHwwfHx8MTc2MjQwNjEyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Studio" className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#118384]/10 via-transparent to-white/0" />
          </motion.div>
        </div>
      </section>
      <CTA />
    </main>
  );
}

function ContactPage() {
  return (
    <main className="bg-[#F4F4F2] text-[#1E324A]">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:easing}} className="text-4xl font-semibold">Contact</motion.h1>
          <p className="mt-3 text-[#1E324A]/70 max-w-2xl">Tell us about your goals and we’ll craft a tailored plan to get you there.</p>
        </div>
      </section>
      <CTA />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1E324A]/10 bg-[#F4F4F2]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-semibold text-[#1E324A] flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#118384] text-white">OZ</span>
          Ozlume
        </NavLink>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/services" className={({isActive})=>`hover:text-[#118384] transition-colors ${isActive? 'text-[#118384] font-medium':''}`}>
            <span className="inline-flex items-center gap-1"><Rocket size={16}/> Services</span>
          </NavLink>
          <NavLink to="/work" className={({isActive})=>`hover:text-[#118384] transition-colors ${isActive? 'text-[#118384] font-medium':''}`}>
            <span className="inline-flex items-center gap-1"><Briefcase size={16}/> Work</span>
          </NavLink>
          <NavLink to="/about" className={({isActive})=>`hover:text-[#118384] transition-colors ${isActive? 'text-[#118384] font-medium':''}`}>
            <span className="inline-flex items-center gap-1"><User size={16}/> About</span>
          </NavLink>
          <NavLink to="/contact" className={({isActive})=>`hover:text-[#118384] transition-colors ${isActive? 'text-[#118384] font-medium':''}`}>
            <span className="inline-flex items-center gap-1"><Mail size={16}/> Contact</span>
          </NavLink>
        </nav>
        <NavLink to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#118384] text-white px-4 py-2 text-xs font-medium shadow-sm transition-transform duration-300 hover:-translate-y-[4px] hover:shadow-lg">
          Start a project
        </NavLink>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#F4F4F2] text-[#1E324A]/70 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Ozlume. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="/services" className="hover:text-[#118384] transition-colors">Services</a>
          <a href="/work" className="hover:text-[#118384] transition-colors">Work</a>
          <a href="/about" className="hover:text-[#118384] transition-colors">About</a>
          <a href="/contact" className="hover:text-[#118384] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F4F4F2] text-[#1E324A] antialiased">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
