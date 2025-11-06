import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const easing = [0.22, 1, 0.36, 1];

export default function Hero() {
  // Parallax tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useTransform(y, [-40, 40], [8, -8]);
  const rotY = useTransform(x, [-40, 40], [-8, 8]);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-40, Math.min(40, mx / 6)));
    y.set(Math.max(-40, Math.min(40, my / 6)));
  };

  const [index, setIndex] = useState(0);
  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1694369786902-2490c7c06836?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNlJTIwU3R1ZHklMjAwMSUyMCVFMiU4MCU5MyUyMFdlYiUyMEV4cGVyaWVuY2V8ZW58MHwwfHx8MTc2MjQwNTY1N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      alt: 'Case Study 01 – Web Experience',
    },
    {
      src: 'https://images.unsplash.com/photo-1694369786902-2490c7c06836?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNlJTIwU3R1ZHklMjAwMSUyMCVFMiU4MCU5MyUyMFdlYiUyMEV4cGVyaWVuY2V8ZW58MHwwfHx8MTc2MjQwNTY1N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      alt: 'Case Study 02 – Ecommerce UI',
    },
    {
      src: 'https://images.unsplash.com/photo-1664188613064-7eea761238f0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNlJTIwU3R1ZHklMjAwMiUyMCVFMiU4MCU5MyUyMEVjb21tZXJjZSUyMFVJfGVufDB8MHx8fDE3NjI0MDU2NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      alt: 'Case Study 03 – Brand System',
    },
  ];

  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  // Touch swipe for mobile
  const touch = useRef({ x: 0, y: 0 });
  const onTouchStart = (e) => (touch.current.x = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x;
    if (dx > 40) prev();
    if (dx < -40) next();
  };

  return (
    <section className="relative w-full min-h-[92vh] bg-[#F4F4F2] text-[#1E324A] overflow-hidden">
      {/* Spline full-width cover background */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft overlay to keep text readable without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-white/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-16 lg:pt-24">
        <motion.div
          className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-[11px] tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easing }}
        >
          Designed and built by Ozlume
        </motion.div>

        <motion.h1
          className="mt-6 text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easing, delay: 0.05 }}
        >
          Lighting up brands <span className="text-[#118384]">the OZ way</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-lg md:text-xl text-[#1E324A]/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easing, delay: 0.1 }}
        >
          An Australian creative studio crafting world-class brands and websites with precision, heart, and technology.
        </motion.p>

        {/* Floating mockup with internal carousel */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ rotateX: rotX, rotateY: rotY, translateX: x, translateY: y }}
          className="mt-10 md:mt-14 relative rounded-[24px] bg-white/80 backdrop-blur-md border border-[#1E324A]/10 shadow-[0_30px_80px_rgba(30,50,74,0.25)] overflow-hidden"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 h-10 px-4 border-b border-[#1E324A]/10 bg-white/70 backdrop-blur-md">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
            <div className="ml-3 text-xs text-[#1E324A]/60">ozlume.au — Showcase</div>
          </div>

          {/* Slides */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <div
              className="absolute inset-0 flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div key={i} className="min-w-full h-full">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    srcSet={`${s.src}&dpr=1 800w, ${s.src}&dpr=2 1600w`}
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="rounded-full bg-white/80 text-[#1E324A] backdrop-blur px-3 py-2 shadow hover:-translate-y-1 transition-all duration-300"
              >
                ‹
              </button>
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-6 bg-[#118384]' : 'w-2.5 bg-white/70'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next slide"
                className="rounded-full bg-white/80 text-[#1E324A] backdrop-blur px-3 py-2 shadow hover:-translate-y-1 transition-all duration-300"
              >
                ›
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
