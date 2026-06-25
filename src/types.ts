/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PortfolioCategory = 'all' | 'residential' | 'workspace' | 'turnkey';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  location: string;
  description: string;
  imageUrl: string;
  year: string;
  details: string[];
}

export interface ConsultationBooking {
  fullName: string;
  phone: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTimeSlot: string;
}

export interface LandmarkInfo {
  name: string;
  distance: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  projectName: string;
  vibe: string;
  quote: string;
}
