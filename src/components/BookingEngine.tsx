/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { CalendarRange, Clock, User, Phone, Briefcase, CheckCircle, ArrowRight, Share2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WEEKDAY_SLOTS = ['11:00 AM - Premium Morning', '02:00 PM - Mid-Day Curation', '04:00 PM - Architectural Dusk', '06:30 PM - Late Twilight'];
const WEEKEND_SLOTS = ['11:30 AM - Executive Brunch Slot', '02:30 PM - Elite Afternoon Slot', '05:00 PM - Exclusive Evening Consult'];

export default function BookingEngine() {
  // Form States
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Architecture Design');
  const [preferredDate, setPreferredDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [availableSlots, setAvailableSlots] = useState<string[]>(WEEKDAY_SLOTS);

  // Validation States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Date limit (prevent selecting past dates)
  const [todayString, setTodayString] = useState('');

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setTodayString(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Dynamically update time slots based on the date selection
  useEffect(() => {
    if (!preferredDate) {
      setAvailableSlots(WEEKDAY_SLOTS);
      return;
    }

    const dateObj = new Date(preferredDate);
    const day = dateObj.getDay(); // 0 is Sunday, 6 is Saturday

    if (day === 0 || day === 6) {
      setAvailableSlots(WEEKEND_SLOTS);
    } else {
      setAvailableSlots(WEEKDAY_SLOTS);
    }
    // Reset selected slot when date changes to prevent cross-day bugs
    setSelectedSlot('');
  }, [preferredDate]);

  // Inline Validation Helper
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      newErrors.fullName = 'Full Name is required (minimum 3 characters).';
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      newErrors.fullName = 'Name can only contain alphabetic letters and spaces.';
    }

    if (!phone) {
      newErrors.phone = '10-digit Phone Number is required.';
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian Mobile number (starts with 6-9).';
    }

    if (!service) {
      newErrors.service = 'Please select an architectural service category.';
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please select your preferred consultation date.';
    } else {
      const selected = new Date(preferredDate);
      const today = new Date();
      // Reset hours to compare dates only
      selected.setHours(0,0,0,0);
      today.setHours(0,0,0,0);
      if (selected < today) {
        newErrors.preferredDate = 'Dates in the past cannot be scheduled.';
      }
    }

    if (!selectedSlot) {
      newErrors.selectedSlot = 'Please click to reserve an available physical time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);

      // Construct professional WhatsApp Redirect message parameters
      const rawSlotTime = selectedSlot.split(' - ')[0]; // E.g., '11:00 AM'
      const whatsappPhone = '919823456789'; // Sadar, Nagpur studio contact line
      const formattedMessage = `Hello Shivhare Architects & Interiors, I would like to book a luxury design consultation. Name: ${fullName.trim()} | Service: ${service} | Date: ${preferredDate} | Time: ${rawSlotTime}. Please confirm my slot.`;
      
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(formattedMessage)}`;
      
      // Delay slightly or open in new tab immediately to allow React state render
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noreferrer,noopener');
      }, 800);
    }
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setPreferredDate('');
    setSelectedSlot('');
    setService('Architecture Design');
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="booking" className="relative py-24 bg-luxury-navy border-t border-luxury-lavender/10 overflow-hidden select-none">
      {/* Background radial effects */}
      <div className="absolute top-1/4 right-1/3 w-[380px] h-[380px] bg-luxury-lavender/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-luxury-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-luxury-lavender uppercase block mb-3">
            PRIVATE APPOINTMENT PORTAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-ice mb-4">
            Schedule a <span className="italic font-light text-luxury-lavender">Private Consultation</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-luxury-ice/75 font-light leading-relaxed">
            Ready to design your world-class space in Nagpur? Reserve a precise consultation segment. We will review structural blueprints, curate material compositions, and scope budgets in our Sadar studio.
          </p>
        </div>

        {/* Dynamic Canvas Container */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              // Form View
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="glass-panel p-6 md:p-10 relative"
              >
                {/* Form header detail */}
                <div className="mb-8 border-b border-luxury-lavender/15 pb-6">
                  <h3 className="font-serif text-lg text-luxury-ice font-semibold">Consultation Details</h3>
                  <p className="text-[11px] text-luxury-ice/60">Submit details to reveal live slots and dispatch booking details instantly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name and Phone Input */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-ice/75 font-semibold flex items-center space-x-1">
                        <User size={11} className="text-luxury-lavender" />
                        <span>Full Name / Company</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Singhania Steel Group / Rajesh"
                        className={`bg-luxury-navy/60 border text-xs md:text-sm text-luxury-ice px-4 py-3 focus:outline-none focus:ring-1 transition-all rounded-none ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-luxury-lavender/25 focus:border-luxury-lavender focus:ring-luxury-lavender'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[10px] text-red-500 flex items-center space-x-1 pt-0.5" id="err-fullname">
                          <AlertCircle size={10} />
                          <span>{errors.fullName}</span>
                        </span>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-ice/75 font-semibold flex items-center space-x-1">
                        <Phone size={11} className="text-luxury-lavender" />
                        <span>Indian Mobile Number</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9823456789"
                        className={`bg-luxury-navy/60 border text-xs md:text-sm text-luxury-ice px-4 py-3 focus:outline-none focus:ring-1 transition-all rounded-none ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-luxury-lavender/25 focus:border-luxury-lavender focus:ring-luxury-lavender'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-500 flex items-center space-x-1 pt-0.5" id="err-phone">
                          <AlertCircle size={10} />
                          <span>{errors.phone}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Service category selection */}
                  <div className="flex flex-col space-y-1.5 text-left">
                    <label className="text-[10px] uppercase tracking-widest text-luxury-ice/75 font-semibold flex items-center space-x-1">
                      <Briefcase size={11} className="text-luxury-lavender" />
                      <span>Elite Service Category</span>
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="bg-luxury-navy/60 border border-luxury-lavender/25 text-xs md:text-sm text-luxury-ice px-4 py-3 focus:outline-none focus:border-luxury-lavender focus:ring-1 focus:ring-luxury-lavender rounded-none"
                    >
                      <option value="Luxury Architecture Design">Architecture Design & Master Planning</option>
                      <option value="Residential Interior Curation">Bespoke Residential Interiors</option>
                      <option value="Premium workspace layout">Premium workspace & Office Layout</option>
                      <option value="Turnkey Bungalow Execution">Full Turnkey Project Management</option>
                    </select>
                  </div>

                  {/* Row 3: Calendar Date Picker */}
                  <div className="flex flex-col space-y-1.5 text-left">
                    <label className="text-[10px] uppercase tracking-widest text-luxury-ice/75 font-semibold flex items-center space-x-1">
                      <CalendarRange size={11} className="text-luxury-lavender" />
                      <span>Preferred Consultation Date</span>
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      min={todayString}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`bg-luxury-navy/60 border text-xs md:text-sm text-luxury-ice px-4 py-3 focus:outline-none focus:ring-1 transition-all rounded-none calendar-picker ${
                        errors.preferredDate
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-luxury-lavender/25 focus:border-luxury-lavender focus:ring-luxury-lavender'
                      }`}
                    />
                    {errors.preferredDate && (
                      <span className="text-[10px] text-red-500 flex items-center space-x-1 pt-0.5" id="err-date">
                        <AlertCircle size={10} />
                        <span>{errors.preferredDate}</span>
                      </span>
                    )}
                  </div>

                  {/* Row 4: Customized Time Slot Pills */}
                  <div className="flex flex-col space-y-3 text-left pt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-ice/75 font-semibold flex items-center space-x-1">
                        <Clock size={11} className="text-luxury-lavender" />
                        <span>Available Premium Slots</span>
                      </label>
                      {preferredDate && (
                        <span className="text-[9px] font-mono text-luxury-lavender font-semibold bg-luxury-navy/40 px-2 py-0.5 border border-luxury-lavender/10">
                          {new Date(preferredDate).getDay() === 0 || new Date(preferredDate).getDay() === 6 ? 'Weekend Routine' : 'Standard business Protocol'}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="time-slots-container">
                      {availableSlots.map((slot) => {
                        const isSelected = selectedSlot === slot;
                        return (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`p-3 text-[11px] md:text-xs font-semibold text-left select-none transition-all duration-300 rounded-none border cursor-pointer ${
                              isSelected
                                ? 'bg-luxury-lavender border-luxury-lavender text-[#F9F6F0] scale-[0.99] shadow-md shadow-luxury-lavender/10'
                                : 'bg-luxury-navy/50 border-luxury-lavender/15 hover:border-luxury-lavender/35 text-luxury-ice/85 hover:text-luxury-lavender hover:bg-luxury-lavender/5'
                            }`}
                          >
                            <span className="block font-medium">{slot.split(' - ')[0]}</span>
                            <span className={`block text-[9px] font-normal tracking-wide ${isSelected ? 'text-[#F9F6F0]/80' : 'text-luxury-ice/50'}`}>
                              {slot.split(' - ')[1]}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {errors.selectedSlot && (
                      <span className="text-[10px] text-red-400 flex items-center space-x-1 pt-0.5" id="err-slot">
                        <AlertCircle size={10} />
                        <span>{errors.selectedSlot}</span>
                      </span>
                    )}
                  </div>

                  {/* Submit Action Block */}
                  <div className="pt-4 border-t border-luxury-lavender/15">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-3 text-xs md:text-sm font-bold uppercase tracking-widest text-[#F9F6F0] bg-luxury-lavender hover:bg-[#756558] py-4 cursor-pointer hover:shadow-md transition-all duration-300 active:translate-y-0.5"
                      id="submit-booking-btn"
                    >
                      <span>Lock Slot & Open WhatsApp Confirmation</span>
                      <ArrowRight size={15} />
                    </button>
                    <p className="text-center text-[10px] text-luxury-ice/50 mt-3 font-semibold">
                      • Consultation bookings instantly route to Shivhare Studio Manager over WhatsApp Web.
                    </p>
                  </div>

                </form>
              </motion.div>
            ) : (
              // Receipt Confirmed View
              <motion.div
                key="booking-receipt"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel p-6 md:p-10 relative overflow-hidden text-center"
                id="booking-confirmed-receipt"
              >
                {/* Visual Accent glow line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-luxury-lavender to-luxury-accent" />
                
                <div className="flex justify-center mb-6">
                  <div className="bg-emerald-500/10 p-4 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle size={36} className="animate-bounce" />
                  </div>
                </div>

                <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-emerald-700 uppercase block mb-1">
                  APPOINTMENT CONFIRMED
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-ice mb-6">
                  VIP Consultation Reserved
                </h3>

                {/* Receipt Table Glass Block */}
                <div className="max-w-md mx-auto bg-[#F9F6F0]/80 border border-luxury-lavender/15 p-6 text-left space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-2.5 border-b border-luxury-lavender/15">
                    <span className="text-[10px] uppercase text-luxury-ice/60 font-semibold">Recipient Client</span>
                    <span className="text-xs font-semibold text-luxury-ice mr-1" id="receipt-fullname">{fullName}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2.5 border-b border-luxury-lavender/15">
                    <span className="text-[10px] uppercase text-luxury-ice/60 font-semibold">Contact Line</span>
                    <span className="text-xs font-semibold text-luxury-ice mr-1" id="receipt-phone">+91 {phone}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2.5 border-b border-luxury-lavender/15">
                    <span className="text-[10px] uppercase text-luxury-ice/60 font-semibold">Service Area</span>
                    <span className="text-xs font-semibold text-luxury-lavender mr-1" id="receipt-service">{service}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2.5 border-b border-luxury-lavender/15">
                    <span className="text-[10px] uppercase text-luxury-ice/60 font-semibold">Reserved Date</span>
                    <span className="text-xs font-semibold text-luxury-ice mr-1" id="receipt-date">{preferredDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-luxury-ice/60 font-semibold">Consultation Window</span>
                    <span className="text-xs font-semibold text-luxury-lavender mr-1" id="receipt-slot">{selectedSlot.split(' - ')[0]}</span>
                  </div>
                </div>

                <div className="space-y-4 max-w-md mx-auto">
                  <p className="text-xs text-luxury-ice/75 font-light leading-relaxed">
                    Our WhatsApp portal has been opened in a separate tab to immediately secure your validation on the studio ledger. If it didn`t open, please click below to resume setup manually.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 pt-2">
                    <button
                      onClick={() => {
                        const rawSlotTime = selectedSlot.split(' - ')[0];
                        const whatsappPhone = '919823456789';
                        const formattedMessage = `Hello Shivhare Architects & Interiors, I would like to book a luxury design consultation. Name: ${fullName.trim()} | Service: ${service} | Date: ${preferredDate} | Time: ${rawSlotTime}. Please confirm my slot.`;
                        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(formattedMessage)}`;
                        window.open(whatsappUrl, '_blank', 'noreferrer,noopener');
                      }}
                      className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#F9F6F0] bg-luxury-lavender hover:bg-[#756558] tracking-widest py-3.5 px-6 rounded-none transition-all duration-300"
                    >
                      <Share2 size={13} />
                      <span>Relaunch WhatsApp Securely</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider text-luxury-ice bg-transparent hover:bg-luxury-lavender/5 border border-luxury-lavender/25 py-3.5 px-6 rounded-none transition-all duration-300"
                    >
                      <span>Book Another Slot</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
