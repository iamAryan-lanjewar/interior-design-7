/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 md:pt-48 pb-20 bg-luxury-navy">
      {/* Background ambient radial glow of soft lavender and ice blue */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-luxury-lavender/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-luxury-accent/10 rounded-full blur-[100px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Side: Copy and Premium Value Proposition */}
        <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-left select-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-10 md:space-y-14"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-luxury-ice tracking-tight">
              Crafting <span className="italic font-light text-luxury-lavender">Iconic</span> <br />
              Spaces for <span className="text-luxury-lavender font-normal">Elite Nagpur</span> Estates.
            </h1>
            <p className="font-sans text-sm md:text-base text-luxury-ice/75 font-light max-w-xl leading-relaxed">
              We design and execute masterfully tailored residences, ultra-modern commercial workstations, and turnkey estates. Guided by an uncompromising standard of spatial harmony, modern aesthetics, and architectural honesty in Sadar, Nagpur.
            </p>
          </motion.div>
 
          {/* Magnetic CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
          >
            <button
              onClick={() => scrollToSection('booking')}
              className="flex items-center justify-center space-x-3 text-xs md:text-sm font-bold uppercase tracking-wider text-[#F9F6F0] bg-luxury-lavender hover:bg-[#756558] py-4 px-8 rounded-none transition-all duration-300 shadow-md shadow-luxury-lavender/10 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            >
              <span>Schedule Private Consultation</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="flex items-center justify-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-wider text-luxury-ice bg-transparent hover:bg-luxury-lavender/5 border border-luxury-lavender/30 hover:border-luxury-lavender/60 py-4 px-8 rounded-none transition-all duration-300 cursor-pointer"
            >
              <span>Explore Portfolio</span>
            </button>
          </motion.div>
 
          {/* Elite Badges / Mini Metrics Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-luxury-lavender/25"
          >
            <div className="flex flex-col space-y-1">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-luxury-ice">12+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-luxury-ice/60 font-medium">Years Legacy</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-luxury-ice" id="stat-nagpur-delivered">240+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-luxury-ice/60 font-medium">Estates Nagpur</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-luxury-ice">100%</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-luxury-ice/60 font-medium">Turnkey Trust</span>
            </div>
          </motion.div>
        </div>
 
        {/* Right Side: Immersive Architectural Video/Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative w-full h-[380px] sm:h-[450px] lg:h-[550px] group rounded-none overflow-hidden border border-luxury-lavender/20"
        >
          {/* Main Hero Showcase Image */}
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=95"
            alt="Shivhare Architects luxury villa Nagpur estate"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
          />
          
          {/* Premium Gradient Overlay with icely color filters */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy via-transparent to-luxury-navy/40 pointer-events-none" />
 
          {/* Floating Subtle Client-Facing Badge in bottom corner */}
          <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel-light flex items-center justify-between border-l-2 !border-l-luxury-lavender">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-lavender font-bold">Featured Award</span>
              <span className="font-serif text-sm font-semibold text-luxury-ice">Best Architect & Interior Designer</span>
              <span className="text-[11px] text-zinc-600">Nagpur Urban Excellence Series 2024-2025</span>
            </div>
            <div className="bg-luxury-lavender/10 p-2 rounded-none text-luxury-lavender hidden sm:block">
              <Building2 size={18} />
            </div>
          </div>
 
          {/* Top Corner Overlay showing high authority indicators */}
          <div className="absolute top-6 right-6 flex items-center space-x-1.5 bg-[#EFECE6]/90 backdrop-blur-md border border-luxury-lavender/15 px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-widest text-luxury-ice">
            <ShieldCheck size={11} className="text-emerald-700" />
            <span>Guaranteed Premium Execution</span>
          </div>
        </motion.div>
 
      </div>
    </section>
  );
}
