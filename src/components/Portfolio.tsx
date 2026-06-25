/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { portfolioItems } from '../data';
import { PortfolioCategory, PortfolioItem } from '../types';
import { Eye, MapPin, ZoomIn, X, Ruler, HardHat, CalendarRange, Sparkle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section id="portfolio" className="relative py-24 bg-luxury-navy border-t border-luxury-lavender/10 overflow-hidden select-none">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-luxury-lavender/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Navigation & Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-luxury-lavender/15">
          <div>
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-luxury-lavender uppercase block mb-3">
              CURATED DESIGN PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-ice">
              Symphonies of <br />
              <span className="italic font-light text-luxury-lavender">Space & Stone</span>
            </h2>
          </div>

          {/* Interactive Category Filter Selectors */}
          <div className="flex flex-wrap gap-2.5 bg-luxury-deep p-1.5 border border-luxury-lavender/15 max-w-max self-start md:self-auto">
            {(['all', 'residential', 'workspace', 'turnkey'] as const).map((cat) => {
              const label =
                cat === 'all'
                  ? 'All Projects'
                  : cat === 'residential'
                  ? 'Residential'
                  : cat === 'workspace'
                  ? 'Workspaces'
                  : 'Turnkey';
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-luxury-lavender text-[#F9F6F0] scale-100 shadow-md'
                      : 'text-luxury-ice/70 hover:text-luxury-lavender hover:bg-luxury-lavender/10'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Portfolio Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              aria-label={`View ${item.title}`}
              className="group cursor-pointer bg-luxury-deep border border-luxury-lavender/15 hover:border-luxury-lavender/40 transition-all duration-500 overflow-hidden relative flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative w-full h-[280px] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Icely visual tint hover layer */}
                <div className="absolute inset-0 bg-luxury-navy/20 opacity-100 transition-opacity duration-300 group-hover:opacity-10" />

                {/* Hover Quick-spec prompt overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-deep via-luxury-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                  <span className="text-xs uppercase tracking-widest font-semibold text-luxury-lavender">
                    Explore Spatial Spec
                  </span>
                  <div className="bg-luxury-lavender text-[#F9F6F0] p-2 rounded-none">
                    <ZoomIn size={16} />
                  </div>
                </div>

                {/* Permanent Category Badge */}
                <div className="absolute top-4 left-4 bg-[#EFECE6]/90 backdrop-blur-md px-3.5 py-1 text-[9px] uppercase tracking-widest text-luxury-lavender border border-luxury-lavender/10">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Text Meta Content */}
              <div className="p-6 flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-luxury-ice/60 font-semibold">
                    <MapPin size={11} className="text-luxury-lavender" />
                    <span className="text-[10px] uppercase font-sans tracking-widest">
                      {item.location}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-luxury-ice/50 font-medium">
                    Est. {item.year}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-luxury-ice group-hover:text-luxury-lavender transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-luxury-ice/70 leading-relaxed line-clamp-2 font-light">
                  {item.description}
                </p>
                
                {/* Bottom line trigger */}
                <div className="pt-3 border-t border-luxury-lavender/15 flex items-center space-x-1.5 text-[10px] uppercase tracking-widest font-bold text-luxury-lavender group-hover:text-luxury-lavender transition-colors duration-300">
                  <span>View Blueprints & Specifications</span>
                  <Eye size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Blueprint-Spec Drawer Modal Overlay (AnimatePresence React) */}
        <AnimatePresence>
          {activeItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="portfolio-drawer-overlay">
              {/* Backdrop blur layer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveItem(null)}
                className="absolute inset-0 bg-luxury-navy/85 backdrop-blur-xl"
              />

              {/* Main detailed Drawer card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative w-full max-w-4xl bg-luxury-deep border border-luxury-lavender/20 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-none overflow-y-auto select-none"
              >
                {/* Close Button absolute */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-10 bg-luxury-navy/90 backdrop-blur text-luxury-ice hover:text-luxury-lavender transition-colors p-2 cursor-pointer border border-luxury-lavender/15"
                  aria-label="Close specifications"
                  id="portfolio-drawer-close"
                >
                  <X size={18} />
                </button>

                {/* Left Side: high res feature image */}
                <div className="md:col-span-6 relative h-[250px] md:h-full min-h-[250px]">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-luxury-deep pointer-events-none" />
                </div>

                {/* Right Side: details and specs */}
                <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-[10px] md:text-xs tracking-[0.25em] text-luxury-lavender uppercase font-bold">
                      {activeItem.categoryLabel} Specifications
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-luxury-ice">
                      {activeItem.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-xs font-sans text-luxury-ice/75 pt-2 border-b border-luxury-lavender/15 pb-4">
                      <div className="flex items-center space-x-1.5 font-semibold">
                        <MapPin size={13} className="text-luxury-lavender" />
                        <span>{activeItem.location}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 font-semibold">
                        <CalendarRange size={13} className="text-luxury-lavender" />
                        <span>Completed {activeItem.year}</span>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-luxury-ice/85 leading-relaxed font-light">
                      {activeItem.description}
                    </p>

                    {/* Custom material lists */}
                    <div className="space-y-3 pt-2">
                      <p className="text-[10px] uppercase tracking-widest text-luxury-lavender font-semibold flex items-center space-x-1.5">
                        <Sparkle size={10} className="text-luxury-lavender" />
                        <span>Physical Blueprint Highlights</span>
                      </p>
                      <ul className="grid grid-cols-1 gap-2">
                        {activeItem.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 text-xs text-luxury-ice/90 font-light"
                          >
                            <span className="text-luxury-lavender shrink-0 mt-1">&#9642;</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking Link / Footer Action */}
                  <div className="pt-6 border-t border-luxury-lavender/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase tracking-widest text-luxury-ice/50">
                        Design Direction
                      </span>
                      <span className="text-xs font-medium text-luxury-ice">
                        Shivhare Studio, Sadar
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setActiveItem(null);
                        const el = document.getElementById('booking');
                        if (el) {
                          const headerOffset = 80;
                          const elementPosition = el.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        }
                      }}
                      className="bg-luxury-lavender hover:bg-[#756558] text-[#F9F6F0] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-none transition-all duration-300 self-start sm:self-auto cursor-pointer"
                    >
                      Inquire About Similar Architecture
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
