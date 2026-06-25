/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, LandmarkInfo, Testimonial } from './types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'obsidian-pavilion',
    title: 'The Obsidian Pavilion',
    category: 'residential',
    categoryLabel: 'Luxury Residential',
    location: 'Civil Lines, Nagpur',
    description: 'A breathtaking, triple-height concrete and glass estate with custom floating cantilever overhangs, zero-edge infinity pool lounge, and automated smart systems.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    year: '2025',
    details: [
      '7,800 Sq. Ft. Private Estate',
      'Cantilevered Floating Saloon',
      'Imported Statuario Marble Cladding',
      'Zero-Edge Pool & Custom Sunken Lounge',
      'Architectural Under-Lit Walkways'
    ]
  },
  {
    id: 'velvet-oasis',
    title: 'The Velvet Oasis lounge',
    category: 'residential',
    categoryLabel: 'Luxury Residential',
    location: 'Ramdaspeth, Nagpur',
    description: 'A masterpiece master duplex merging soft fluted teakwood paneling with custom champagne-bronze framing, floor-to-ceiling panoramic sliding glass panels, and ambient automation.',
    imageUrl: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85',
    year: '2026',
    details: [
      '4,500 Sq. Ft. Luxury Duplex',
      'Integrated Bespoke Floating Staircase',
      'Acoustic Ceiling Treatments in Home Theatre',
      'High-Contrast Onyx Double Kitchen Island',
      'Automated Biodynamic Lighting Scenes'
    ]
  },
  {
    id: 'aura-headquarters',
    title: 'Aura Headquarters',
    category: 'workspace',
    categoryLabel: 'Premium Workspaces',
    location: 'Sadar (Commercial Strip), Nagpur',
    description: 'A progressive multi-floor corporate office. Accented with frosted acoustic glass boundaries, organic biophilic hubs, and custom-tuned linear lighting that boosts workplace creativity.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    year: '2024',
    details: [
      '12,400 Sq. Ft. Across 3 Floors',
      'Sleek Frameless Glass meeting Pods',
      'Lavender-Accented Premium Lounge & Cafeteria',
      'Smart HVAC Air Purification System',
      'Branded Premium Reception Portal'
    ]
  },
  {
    id: 'helix-studio',
    title: 'Helix Private Workspace',
    category: 'workspace',
    categoryLabel: 'Premium Workspaces',
    location: 'Civil Lines Road, Nagpur',
    description: 'An elite dual-floor work-hub highlighting polished concrete pillars, custom dark leather wall elements, and double-insulated soundproof meeting chambers.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
    year: '2025',
    details: [
      '6,200 Sq. Ft. Creative Suite',
      'Double-Height Glass Facing Panoramic Gardens',
      'Exposed Terrazzo Floor Compositions',
      'Custom DALI Intelligent Dimming',
      'Dedicated High-Net-Worth Boardroom Suite'
    ]
  },
  {
    id: 'celestial-penthouse',
    title: 'The Celestial Penthouse',
    category: 'turnkey',
    categoryLabel: 'Turnkey Architecture',
    location: 'Wardha Road Corridor, Nagpur',
    description: 'A fully curated, dual-level cloud residence atop Nagpur`s tallest residential tower. Delivered 100% turnkey, from initial concrete shell to custom curated styling assets.',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85',
    year: '2026',
    details: [
      '6,800 Sq. Ft. Penthouse Suite',
      'Wrap-Around Skyline View Pooldeck',
      'Hand-Selected Travertine Stone Finishes',
      'Bespoke Velvet Upholstery & Furniture Sets',
      'Fully Outfitted High-tech Kitchen & Pantry'
    ]
  },
  {
    id: 'ivory-monolith',
    title: 'The Ivory Monolith Bungalow',
    category: 'turnkey',
    categoryLabel: 'Turnkey Architecture',
    location: 'Seminary Hills, Nagpur',
    description: 'An architectural sculpture defined by bold geometric blocks. Complete design-and-build delivery including master planning, structural framing, HVAC, and premium bespoke landscaping.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    year: '2025',
    details: [
      '9,500 Sq. Ft. Custom Estate',
      'Self-Cleaning Mineral Plaster Siding',
      'Internal Triple-Height Open Air Courtyard',
      'Integrated Rainwater Reclamation Tank',
      'Curated Rare Flora Gardens and Security Port'
    ]
  }
];

export const nagpurLandmarks: LandmarkInfo[] = [
  {
    name: 'Dr. Moses Dental Clinic',
    distance: 'Directly Opposite',
    description: 'Located right across the street, serving as the most precise physical navigation reference.'
  },
  {
    name: 'Gandhi Chowk, Sadar',
    distance: '50 Meters',
    description: 'A central commercial hub of luxury shopping and heritage structures in Sadar.'
  },
  {
    name: 'Nagpur Railway Station',
    distance: '10 mins drive (2.4 km)',
    description: 'Providing seamless transit access for premium outstation clients touring the city.'
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Rajesh Singhania',
    designation: 'Managing Director, Singhania Steel Group',
    projectName: 'The Obsidian Pavilion',
    vibe: 'Flawless Execution',
    quote: 'Shivhare Architects delivered beyond our imagination. Their absolute focus on pristine details and architectural honesty transformed our home into a literal private resort. As high-value developers, we recognize unmatched dedication.'
  },
  {
    id: 'test-2',
    clientName: 'Dr. Ananya Deshmukh',
    designation: 'Senior Cardiologist & Clinic Director',
    projectName: 'Minimalist Duplex & Chamber',
    vibe: 'Sophisticated Minimalism',
    quote: 'Their deep knowledge of spatial harmony and clean lighting has created a profound sense of serenity in our penthouse. Every interaction was smooth, transparent, and strictly adhered to our uncompromising taste.'
  }
];
