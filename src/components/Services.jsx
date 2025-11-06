import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, PenTool, Monitor, Layers, Search, Server } from 'lucide-react';

const services = [
  { icon: PenTool, title: 'Graphic Design', desc: 'Elegant visuals, campaigns, and brand assets with premium craft.' },
  { icon: Monitor, title: 'Web Design', desc: 'Modern, fast, and accessible websites with a designer-first approach.' },
  { icon: Layers, title: 'Logo & Brand', desc: 'Distinctive identities and systems that scale across touchpoints.' },
  { icon: Rocket, title: 'Shopify Development', desc: 'High-converting storefronts with a focus on performance and UX.' },
  { icon: Search, title: 'Technical SEO', desc: 'Solid technical foundations to help your site get discovered.' },
  { icon: Server, title: 'Craft CMS', desc: 'Flexible content management with a bespoke editorial experience.' },
];

const easing = [0.22, 1, 0.36, 1];

export default function Services() {
  return (
    <section id="services" className="bg-[#F4F4F2] text-[#1E324A] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
        >
          Capabilities
        </motion.h2>
        <motion.p
          className="mt-3 text-[#1E324A]/70 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing, delay: 0.05 }}
        >
          Strategy, design, and engineering fused together for measurable impact.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 border border-[#1E324A]/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#118384]/10 text-[#118384]">
                  <s.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-[#1E324A]/70">{s.desc}</p>
              <a href="#contact" className="mt-5 inline-flex items-center text-[#118384] font-medium group-hover:underline">
                Start a conversation
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
