/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (elementId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'glass-header py-3.5 shadow-md shadow-luxury-lavender/5'
            : 'bg-transparent py-5.5 border-b border-luxury-lavender/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Brand Brand Mark */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex flex-col"
          >
            <div className="flex items-baseline space-x-1">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-luxury-ice group-hover:text-luxury-lavender transition-colors duration-300">
                SHIVHARE
              </span>
            </div>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-luxury-lavender font-sans font-semibold">
              Architects & Interiors • Nagpur
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 font-sans font-semibold text-xs uppercase tracking-widest text-luxury-ice/75">
            <button
              onClick={() => navigateTo('about')}
              className="hover:text-luxury-lavender hover:tracking-[0.15em] transition-all duration-300 cursor-pointer"
            >
              Philosophy
            </button>
            <button
              onClick={() => navigateTo('portfolio')}
              className="hover:text-luxury-lavender hover:tracking-[0.15em] transition-all duration-300 cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="hover:text-luxury-lavender hover:tracking-[0.15em] transition-all duration-300 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Call to Actions */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => navigateTo('booking')}
              className="text-xs font-bold uppercase tracking-[0.2em] text-luxury-lavender hover:text-luxury-ice transition-colors duration-300 cursor-pointer relative group pb-1"
            >
              <span>Private Booking</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-lavender group-hover:w-full transition-all duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-luxury-lavender hover:text-luxury-ice focus:outline-none transition-colors duration-300 flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest cursor-pointer"
              aria-label="Toggle menu"
            >
              <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Glassmorphism Overlay) */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-10'
        }`}
      >
        <div className="absolute inset-0 bg-luxury-navy/95 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col justify-between px-8 py-24 select-none">
          <div className="flex flex-col space-y-6 text-left mt-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-lavender/80">
              Navigation Menu
            </p>
            <button
              onClick={() => navigateTo('about')}
              className="text-2xl font-serif font-semibold text-luxury-ice hover:text-luxury-lavender hover:pl-2 transition-all duration-300 text-left"
            >
              The Philosophy
            </button>
            <button
              onClick={() => navigateTo('portfolio')}
              className="text-2xl font-serif font-semibold text-luxury-ice hover:text-luxury-lavender hover:pl-2 transition-all duration-300 text-left"
            >
              Curated Portfolio
            </button>
            <button
              onClick={() => navigateTo('booking')}
              className="text-2xl font-serif font-semibold text-luxury-ice hover:text-luxury-lavender hover:pl-2 transition-all duration-300 text-left"
            >
              Book Private Consultation
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="text-2xl font-serif font-semibold text-luxury-ice hover:text-luxury-lavender hover:pl-2 transition-all duration-300 text-left"
            >
              Sadar Location
            </button>
          </div>

          <div className="flex flex-col space-y-4 border-t border-luxury-lavender/15 pt-8">
            <span className="text-[10px] uppercase tracking-widest text-luxury-ice/50 font-bold">
              Shivhare Architects & Interiors
            </span>
            <p className="text-[11px] text-luxury-ice/75 font-light leading-relaxed">
              323k, Gandhi Chowk Rd, Sadar, Nagpur<br />
              Maharashtra 440001 (Opp. Dr. Moses Dental Clinic)
            </p>
            <span className="text-[9px] uppercase tracking-widest text-luxury-lavender font-bold">
              Direct Office: +1 98234 56789
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
