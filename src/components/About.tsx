/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { Paintbrush, Compass, Award, CalendarClock } from 'lucide-react';
import { motion } from 'motion/react';

interface PillarProps {
  icon: ReactNode;
  title: string;
  description: string;
  label: string;
}

function PillarCard({ icon, title, description, label }: PillarProps) {
  return (
    <div className="group relative p-6 md:p-8 bg-luxury-deep/60 border border-luxury-lavender/15 hover:border-luxury-lavender/45 transition-all duration-500 rounded-none overflow-hidden flex flex-col justify-between">
      {/* Subtle hover background highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-lavender/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div>
        <span className="text-[10px] tracking-widest text-luxury-lavender font-sans font-semibold">
          {label}
        </span>
        <div className="text-luxury-lavender group-hover:text-luxury-ice transition-colors duration-300 my-4 bg-luxury-navy/30 p-3 rounded-none w-fit border border-luxury-lavender/15">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-medium text-luxury-ice group-hover:text-luxury-lavender transition-colors duration-300 mb-2">
          {title}
        </h3>
        <p className="font-sans text-xs md:text-sm text-luxury-ice/75 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-luxury-navy overflow-hidden select-none">
      {/* Background radial soft light blur */}
      <div className="absolute -bottom-16 left-1/4 w-[350px] h-[350px] bg-luxury-lavender/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Intro Section with Premium Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline pb-16 border-b border-luxury-lavender/15">
          <div className="lg:col-span-5">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-luxury-lavender uppercase block mb-3">
              THE PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-luxury-ice">
              Shaping the <br />
              New Wave of <br />
              <span className="italic font-light text-luxury-lavender">Luxury Estates</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
            <p className="font-sans text-sm md:text-base text-luxury-ice/90 leading-relaxed font-light">
              We do not simply arrange furniture or construct columns. For over a decade, we have been crafting physical narratives. Every residential chalet, premium office tower, and boutique lounge is approached as a pristine artwork—synthesizing pure architectural forms with interior elements customized right down to the microscopic weave.
            </p>
            <p className="font-sans text-xs md:text-sm text-luxury-ice/60 leading-relaxed font-light">
              Operating out of our central studio in Sadar, Nagpur, Shivhare Architects & Interiors has established an unyielding reputation as the best architect in Nagpur city. Our high-net-worth clients trust our deep understanding of space, privacy, high-end materials, and local construction codes to implement their dream projects flawlessly from conception to completion.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Architectural Sovereignty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
          <PillarCard
            label="Pillar I • Pure Form"
            icon={<Compass size={24} />}
            title="Aesthetic Purity"
            description="Our architecture strips away the redundant. We embrace clean geometry, grand soaring volume, and natural light channels that trace Nagpur’s changing seasons."
          />
          <PillarCard
            label="Pillar II • Curation"
            icon={<Paintbrush size={24} />}
            title="Bespoke Interiors"
            description="Lined with bespoke velvets, hand-polished Italian marble, and bespoke veneer casework designed entirely in-house. A sensory experience of timeless sophistication."
          />
          <PillarCard
            label="Pillar III • Sovereignty"
            icon={<Award size={24} />}
            title="Turnkey Execution"
            description="We manage the entire project pipeline. From planning consent in Nagpur’s municipal zones to structural calculation, interior sourcing, and micro-styling."
          />
          <PillarCard
            label="Pillar IV • Punctuality"
            icon={<CalendarClock size={24} />}
            title="Chronos Precision"
            description="We honor our clients’ time. Every project milestone is tracked in real-time, matching budget forecasts with pristine structural milestone deliveries."
          />
        </div>

        {/* Local Prestige Narrative Snippet */}
        <div className="mt-16 p-8 bg-gradient-to-r from-luxury-deep to-transparent border-l-4 border-luxury-lavender flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-serif text-lg font-medium text-luxury-ice mb-2">
              Serving Sadar, Civil Lines, Ramdaspeth, and Prime Nagpur Corridors
            </h4>
            <p className="font-sans text-xs text-luxury-ice/75 font-light leading-relaxed">
              Nagpur’s elite residential codes require a highly mature design mind. Our local presence and deep network of craftsmen enable us to deploy premium marble quarries, acoustic technologies, and automated lighting solutions with zero logistics friction.
            </p>
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById('booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs uppercase font-bold tracking-widest text-luxury-lavender hover:text-[#756558] transition-colors duration-300 self-start md:self-center whitespace-nowrap cursor-pointer hover:underline underline-offset-4"
          >
            Read client stories &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
