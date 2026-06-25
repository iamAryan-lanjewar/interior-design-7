/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BookingEngine from './components/BookingEngine';
import ContactSection from './components/ContactSection';
import { clientTestimonials } from './data';
import { Quote, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-luxury-navy text-luxury-ice selection:bg-luxury-lavender selection:text-black antialiased font-sans flex flex-col">
      {/* Sticky Top-level Premium Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section Banner */}
        <Hero />

        {/* Section: The Philosophy */}
        <About />

        {/* Section: Filterable Space-Spec Portfolio Gallery */}
        <Portfolio />

        {/* Social Proof: Premium Client Memoirs Testimonials Section */}
        <section id="testimonials" className="relative py-24 bg-luxury-navy border-t border-luxury-lavender/10 overflow-hidden select-none">
          {/* Subtle lighting backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-luxury-lavender/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
            {/* Header copy */}
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-luxury-lavender uppercase block mb-3">
                CLIENT Memoirs & VOWS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-ice mb-4">
                What <span className="italic font-light text-luxury-lavender">Nagpur's Influential</span> Say
              </h2>
              <p className="font-sans text-xs text-luxury-ice/75 leading-relaxed font-light">
                We design with absolute architectural honesty. These are true accounts from high-net-worth patrons who transformed their environments with us.
              </p>
            </div>

            {/* Memoir Testimonials Side-by-Side Flex Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {clientTestimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className="glass-panel p-6 md:p-8 relative flex flex-col justify-between hover:border-luxury-lavender/35 transition-all duration-300"
                >
                  {/* Floating abstract quote icon */}
                  <div className="absolute -top-3.5 left-6 bg-luxury-navy text-luxury-lavender border border-luxury-lavender/15 p-2 rounded-none">
                    <Quote size={15} />
                  </div>

                  <div className="space-y-4 pt-2">
                    <span className="text-[10px] uppercase font-mono font-bold text-luxury-lavender tracking-widest flex items-center space-x-1">
                      <Sparkles size={10} className="text-luxury-lavender" />
                      <span>{testimonial.vibe}</span>
                    </span>
                    <blockquote className="font-serif text-sm md:text-base text-luxury-ice/90 leading-relaxed italic font-light">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="pt-6 mt-6 border-t border-luxury-lavender/15 flex flex-col">
                    <span className="text-xs font-semibold text-luxury-ice font-serif">{testimonial.clientName}</span>
                    <span className="text-[10px] uppercase tracking-wider text-luxury-ice/60 font-medium mt-0.5">
                      {testimonial.designation} &bull; {testimonial.projectName}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core dynamic validation Booking Engine */}
        <BookingEngine />

        {/* Exact Sadar position details & coordinates Footer */}
        <ContactSection />
      </main>
    </div>
  );
}
