import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const easing = [0.22, 1, 0.36, 1];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to backend or service. For now, show success state.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#F4F4F2] text-[#1E324A] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-[#1E324A]/10 p-6 md:p-10 shadow-xl">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#118384]/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full bg-[#1E324A]/5 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easing }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-semibold">Let’s create something remarkable</h3>
            <p className="mt-3 text-[#1E324A]/70 max-w-2xl">
              Share a few details about your project. We’ll reply within 1 business day with next steps.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easing }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle2 className="text-[#118384]" size={56} />
              <h4 className="mt-4 text-2xl font-semibold">Thanks! Your message is on the way.</h4>
              <p className="mt-2 text-[#1E324A]/70 max-w-md">
                We’ve received your details and will get back to you shortly. If it’s urgent, email hello@ozlume.au.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: easing, delay: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Full name</label>
                <input required name="name" type="text" placeholder="Jane Doe" className="h-11 rounded-xl border border-[#1E324A]/15 bg-white/70 px-4 outline-none focus:ring-2 focus:ring-[#118384]/30" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email</label>
                <input required name="email" type="email" placeholder="jane@company.com" className="h-11 rounded-xl border border-[#1E324A]/15 bg-white/70 px-4 outline-none focus:ring-2 focus:ring-[#118384]/30" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Company</label>
                <input name="company" type="text" placeholder="Acme Inc." className="h-11 rounded-xl border border-[#1E324A]/15 bg-white/70 px-4 outline-none focus:ring-2 focus:ring-[#118384]/30" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Website (optional)</label>
                <input name="website" type="url" placeholder="https://acme.com" className="h-11 rounded-xl border border-[#1E324A]/15 bg-white/70 px-4 outline-none focus:ring-2 focus:ring-[#118384]/30" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Budget</label>
                <select name="budget" className="h-11 rounded-xl border border-[#1E324A]/15 bg-white/70 px-4 outline-none focus:ring-2 focus:ring-[#118384]/30">
                  <option value="10-20">$10k – $20k</option>
                  <option value="20-40">$20k – $40k</option>
                  <option value="40-80">$40k – $80k</option>
                  <option value="80+">$80k+</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Timeline</label>
                <select name="timeline" className="h-11 rounded-xl border border-[#1E324A]/15 bg-white/70 px-4 outline-none focus:ring-2 focus:ring-[#118384]/30">
                  <option>2–4 weeks</option>
                  <option>1–2 months</option>
                  <option>3–4 months</option>
                  <option>Flexible</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Services needed</label>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Brand Identity','Web Design','Shopify Dev','Technical SEO','Product Design','Content'].map((s) => (
                    <label key={s} className="inline-flex items-center gap-2 rounded-xl border border-[#1E324A]/15 bg-white/70 px-3 py-2 text-sm">
                      <input type="checkbox" name="services" value={s} className="accent-[#118384]" />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium">Project details</label>
                <textarea required name="message" rows={5} placeholder="Tell us about your goals, audience, and success criteria…" className="rounded-xl border border-[#1E324A]/15 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#118384]/30" />
              </div>

              <div className="md:col-span-2 flex items-center justify-between gap-4">
                <label className="inline-flex items-center gap-2 text-sm text-[#1E324A]/70">
                  <input type="checkbox" required className="accent-[#118384]" />
                  I agree to the privacy policy.
                </label>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#118384] text-white px-6 py-3 text-sm font-medium shadow-sm transition-transform duration-300 hover:-translate-y-[6px] hover:shadow-lg">
                  <Send size={16} /> Send message
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
