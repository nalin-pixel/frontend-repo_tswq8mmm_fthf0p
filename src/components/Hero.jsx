import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const easing = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#F4F4F2] text-[#1E324A] overflow-hidden">
      {/* Accent gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#118384]/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#118384]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 lg:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-xs tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
          >
            Designed and built by Ozlume
          </motion.div>

          <motion.h1
            className="mt-6 text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing, delay: 0.1 }}
          >
            Lighting up brands
            <br />
            <span className="text-[#118384]">the OZ way</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg md:text-xl text-[#1E324A]/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing, delay: 0.2 }}
          >
            A high-end creative studio from Australia crafting standout brands, cutting-edge websites, and immersive digital experiences.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing, delay: 0.3 }}
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-[#118384] text-white px-6 py-3 text-sm font-medium shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#1E324A]/20 text-[#1E324A] px-6 py-3 text-sm font-medium bg-white/60 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start a Project
            </a>
          </motion.div>
        </div>

        {/* Spline Scene */}
        <div className="order-1 lg:order-2 relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full rounded-3xl overflow-hidden shadow-xl bg-white/60 backdrop-blur-sm">
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
