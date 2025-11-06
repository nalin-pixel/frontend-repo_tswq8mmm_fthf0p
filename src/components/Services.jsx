import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, PenTool, Monitor, Layers, Search, Server } from 'lucide-react';

const items = [
  { icon: PenTool, title: 'Graphic Design', desc: 'Elegant visuals, campaigns, and brand assets with premium craft.' },
  { icon: Monitor, title: 'Web Design', desc: 'Modern, fast, and accessible websites with a designer-first approach.' },
  { icon: Layers, title: 'Logo & Brand Design', desc: 'Distinctive identities and systems that scale across touchpoints.' },
  { icon: Rocket, title: 'Shopify Development', desc: 'High-converting storefronts with a focus on performance and UX.' },
  { icon: Search, title: 'Technical SEO', desc: 'Solid technical foundations to help your site get discovered.' },
  { icon: Server, title: 'Craft CMS', desc: 'Flexible content management with a bespoke editorial experience.' },
];

const easing = [0.22, 1, 0.36, 1];

export default function Services() {
  return (
    <section id="services" className="bg-[#F4F4F2] text-[#1E324A] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easing }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Our Services</h2>
          <p className="mt-3 text-[#1E324A]/70 max-w-2xl">Design-led capabilities inspired by world-class studios, tailored to your brand.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              className="group rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300 p-6 border border-[#1E324A]/10 hover:-translate-y-[6px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: easing, delay: i * 0.04 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#118384]/10 text-[#118384]"><s.icon size={22} /></div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-[#1E324A]/70">{s.desc}</p>
              <a href="#contact" className="mt-5 inline-flex items-center text-[#118384] font-medium group-hover:underline">Start a conversation</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
