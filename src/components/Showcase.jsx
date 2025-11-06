import React from 'react';
import { motion } from 'framer-motion';

const works = [
  {
    title: 'Aurora Skincare',
    tag: 'Ecommerce · Brand · Web',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Harbor & Co.',
    tag: 'Identity · Website',
    img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'NeoCraft',
    tag: 'Product · Web',
    img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop',
  },
];

const easing = [0.22, 1, 0.36, 1];

export default function Showcase() {
  return (
    <section id="work" className="bg-[#F4F4F2] text-[#1E324A] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easing }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Selected Work</h2>
          <p className="mt-3 text-[#1E324A]/70">A glimpse into recent partnerships and outcomes.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.a
              key={w.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#1E324A]/10 shadow-sm hover:shadow-2xl hover:-translate-y-[6px] transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: easing, delay: i * 0.04 }}
            >
              <img
                src={w.img}
                alt={w.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="text-lg font-semibold">{w.title}</div>
                <div className="text-sm text-white/80">{w.tag}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
