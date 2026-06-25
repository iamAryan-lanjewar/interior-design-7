/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Compass, Navigation, ArrowUp, AlertTriangle } from 'lucide-react';
import { nagpurLandmarks } from '../data';

export default function ContactSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    const fullAddress = 'Shivhare Architects & Interiors, 323k, Gandhi Chowk Rd, opp. Dr. Moses dental clinic, Sadar, Nagpur, Maharashtra 440001';
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative pt-24 bg-luxury-navy border-t border-luxury-lavender/10 overflow-hidden select-none">
      {/* Background soft lavender lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-luxury-lavender/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 border-b border-luxury-lavender/15 items-baseline">
          <div className="lg:col-span-5">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-luxury-lavender uppercase block mb-3">
              STUDIO COORDINATES & HQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-ice">
              The Sadar Atrium <br />
              <span className="italic font-light text-luxury-lavender">Visit our Studio</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-xs md:text-sm text-luxury-ice/75 leading-relaxed font-light">
              We look forward to welcoming you into our bespoke Nagpur showroom. Browse physical marble slices, teak panel sets, acoustic glass systems, and custom catalogs over fresh cappuccino. Consultation by appointment only to respect spatial privacy.
            </p>
          </div>
        </div>

        {/* Triple Grid Coordinates (Info, Landmarks, Map plot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-16 pb-24">
          
          {/* Card 1: Core Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 md:p-8 space-y-6 flex flex-col justify-between h-full hover:border-luxury-lavender/30 transition-all duration-300">
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-luxury-navy/40 text-luxury-lavender border border-luxury-lavender/15 mt-1">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-luxury-ice mb-1">Physical Address</h4>
                    <p className="font-sans text-xs text-luxury-ice/85 leading-relaxed font-light">
                      Shivhare Architects & Interiors<br />
                      323k, Gandhi Chowk Rd, <br />
                      opp. Dr. Moses dental clinic,<br />
                      Sadar, Nagpur, Maharashtra 440001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-2">
                  <div className="p-2.5 bg-luxury-navy/40 text-luxury-lavender border border-luxury-lavender/15 mt-1">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-luxury-ice mb-1">Inquiry Lines</h4>
                    <p className="font-sans text-xs text-luxury-ice/85 font-light">
                      Studio HQ: +91 98234 56789 <br />
                      Client Support: +91 99238 38240
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-2">
                  <div className="p-2.5 bg-luxury-navy/40 text-luxury-lavender border border-luxury-lavender/15 mt-1">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-luxury-ice mb-1">Digital Correspondence</h4>
                    <span className="font-sans text-xs text-luxury-ice/85 font-light block hover:text-luxury-lavender transition-colors">
                      curator@shivharearchitects.in
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-2">
                  <div className="p-2.5 bg-luxury-navy/40 text-luxury-lavender border border-luxury-lavender/15 mt-1">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-luxury-ice mb-1">Operations Timing</h4>
                    <p className="font-sans text-xs text-luxury-ice/75 font-light">
                      Mon &ndash; Sat: 10:00 AM &ndash; 8:00 PM <br />
                      Sunday: By pre-scheduled request
                    </p>
                  </div>
                </div>
              </div>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="w-full py-3 bg-luxury-navy/40 hover:bg-luxury-navy/60 text-luxury-ice border border-luxury-lavender/25 font-bold uppercase text-[10px] tracking-widest cursor-pointer transition-colors duration-300"
                id="copy-address-btn"
              >
                {copiedAddress ? 'Address Copied Successfully ✓' : 'Copy Full Address to Clipboard'}
              </button>

            </div>
          </div>

          {/* Card 2: Landmark Spatial guide */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 md:p-8 space-y-6 flex flex-col justify-between h-full hover:border-luxury-lavender/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-luxury-lavender">
                  <Compass size={16} />
                  <h4 className="font-serif text-md font-medium text-luxury-ice">Landmark Navigability</h4>
                </div>
                <p className="text-xs text-luxury-ice/70 font-light leading-relaxed">
                  Located right in Nagpur`s historical and commercial core. Use these precise coordinate landmarks when locating our office:
                </p>

                <div className="space-y-4 pt-2">
                  {nagpurLandmarks.map((landmark, idx) => (
                    <div key={idx} className="border-b border-luxury-lavender/15 pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-xs font-semibold text-luxury-ice font-serif">{landmark.name}</span>
                        <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-luxury-lavender">{landmark.distance}</span>
                      </div>
                      <p className="text-[11px] text-luxury-ice/60 font-light leading-relaxed">{landmark.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-luxury-navy/40 border border-luxury-lavender/15 p-3.5 space-y-1.5 rounded-none flex items-start space-x-2">
                <AlertTriangle size={15} className="text-luxury-lavender shrink-0 mt-0.5" />
                <span className="text-[10px] text-luxury-ice/75 font-semibold leading-relaxed">
                  <strong>Parking:</strong> Reserved private customer basement parking is fully available right under our Sadar building.
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Coordinates Mock-Map with Routing link */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 md:p-8 flex flex-col justify-between h-full hover:border-luxury-lavender/30 transition-all duration-300" id="studio-map-block">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-luxury-ice">
                  <Navigation size={15} className="text-luxury-lavender" />
                  <h4 className="font-serif text-md font-medium text-luxury-ice">Geographic Ledger</h4>
                </div>
                <div className="text-[10px] font-mono text-luxury-ice/50 uppercase font-semibold">
                  Sadar plot • 21.1593&deg; N , 79.0806&deg; E
                </div>

                {/* Styled Interactive Google Map Embed */}
                <div className="relative w-full h-[180px] bg-[#F9F6F0] border border-luxury-lavender/15 overflow-hidden">
                  <iframe
                    title="Shivhare Architects & Interiors Location Map"
                    src="https://maps.google.com/maps?q=Shivhare%20Architects%20%26%20Interiors%20Gandhi%20Chowk%20Sadar%20Nagpur%20Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <p className="text-[11px] text-luxury-ice/70 font-light leading-relaxed">
                  Route easily with Google Maps on your phone. Secure GPS positioning triggers instantly below.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shivhare+Architects+Gandhi+Chowk+Sadar+Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-luxury-lavender hover:bg-[#756558] text-[#F9F6F0] font-bold uppercase text-[10px] tracking-widest flex items-center justify-center space-x-2 transition-all duration-300"
                  id="open-maps-btn"
                >
                  <Navigation size={12} />
                  <span>Launch Google Maps Routing</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Actual elite footer element */}
        <footer className="border-t border-luxury-lavender/15 py-12 flex flex-col md:flex-row items-center justify-between gap-6 select-none text-left">
          
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-baseline space-x-1">
              <span className="font-serif text-lg font-bold tracking-widest text-luxury-ice">
                SHIVHARE
              </span>
              <span className="text-xs uppercase tracking-widest text-luxury-lavender">Architects</span>
            </div>
            <p className="text-[10px] text-luxury-ice/50 tracking-wide font-light">
              &copy; {new Date().getFullYear()} Shivhare Architects & Interiors. All Architectural Rigor Reserved.
            </p>
          </div>

          <div className="flex items-center space-x-8 text-[10px] uppercase tracking-widest font-medium text-luxury-ice/60">
            <span className="hover:text-luxury-lavender transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Summit
            </span>
            <span className="text-luxury-lavender/25 font-light">|</span>
            <span className="text-luxury-lavender font-bold">
              Best Architect in Nagpur
            </span>
          </div>

          {/* Magnetic scroll upward button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-luxury-navy/40 hover:bg-luxury-navy/60 text-luxury-ice border border-luxury-lavender/25 transition-colors cursor-pointer"
            aria-label="Scroll to top"
            id="scroll-to-top-btn"
          >
            <ArrowUp size={16} />
          </button>
        </footer>

      </div>
    </section>
  );
}
