import React from 'react';
import { motion } from 'framer-motion';

const easing = [0.22, 1, 0.36, 1];

export default function CTA() {
  return (
    <section id="contact" className="bg-[#F4F4F2] text-[#1E324A] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-[#1E324A]/10 p-10 md:p-14 shadow-xl">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#118384]/10 blur-2xl" />
          </div>
          <motion.h3
            className="text-3xl md:text-4xl font-semibold"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing }}
          >
            Let’s create something remarkable
          </motion.h3>
          <motion.p
            className="mt-3 text-[#1E324A]/70 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing, delay: 0.05 }}
          >
            Tell us about your goals and we’ll craft a tailored plan to get you there.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easing, delay: 0.1 }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#118384] text-white px-6 py-3 text-sm font-medium shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start a project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
