import React, { useState } from 'react';
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiClock,
  HiCheckCircle,
  HiPaperAirplane,
  HiExclamationCircle,
} from 'react-icons/hi';
import { FaWhatsapp, FaMapMarkedAlt } from 'react-icons/fa';
import MapEmbed from '../components/MapEmbed';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelerType: 'Traveler (Chitral/Kumrat)',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message from form data
    const msg = `Assalam o Alaikum Balana Inn!%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Visitor Type:* ${formData.travelerType}%0A%0A*Message:*%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/923002592213?text=${msg}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    setStatus({
      loading: false,
      success: true,
      message: 'Redirecting to WhatsApp! You can also call us directly at +92 300 2592213.',
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      travelerType: 'Traveler (Chitral/Kumrat)',
      message: '',
    });
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-16 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-terracotta bg-white px-4 py-1.5 rounded-full border border-brand-terracotta/20 shadow-sm">
          <HiLocationMarker className="w-4 h-4 text-brand-terracotta" />
          <span>Timergara, Dir Lower</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-mahogany">
          Location & Traveler Support
        </h1>
        <p className="text-sm sm:text-base text-brand-mahogany/80 leading-relaxed">
          Planning your trip to Chitral, Kumrat, or Lowari Pass? Stop by Balana Inn Restaurant in Rabat, Timergara. We are open 24/7.
        </p>
      </div>

      {/* TRAVELER ROUTE HIGHLIGHT BOX */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-border shadow-card-warm space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-terracotta text-white flex items-center justify-center font-bold shadow-warm-glow">
              <FaMapMarkedAlt className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-mahogany">
                Highway Transit Guide (N-45)
              </h3>
              <p className="text-xs text-brand-mahogany/80">
                Direct road access with zero detours for travelers driving North or South.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-300 px-4 py-2 rounded-full text-xs font-bold">
            <HiClock className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>Open 24 Hours • Kitchen Active Always</span>
          </div>
        </div>

        {/* Distance Markers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm space-y-1">
            <span className="block text-brand-terracotta font-bold uppercase tracking-wider">From Peshawar</span>
            <span className="font-serif text-xl font-bold text-brand-mahogany">~ 140 KM</span>
            <span className="block text-[11px] text-brand-mahogany/70">~ 2.5 - 3 Hours Drive</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm space-y-1">
            <span className="block text-brand-terracotta font-bold uppercase tracking-wider">From Islamabad / RWP</span>
            <span className="font-serif text-xl font-bold text-brand-mahogany">~ 210 KM</span>
            <span className="block text-[11px] text-brand-mahogany/70">~ 4 Hours via Swat Motorway</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm space-y-1">
            <span className="block text-brand-terracotta font-bold uppercase tracking-wider">To Lowari Tunnel</span>
            <span className="font-serif text-xl font-bold text-brand-mahogany">~ 85 KM</span>
            <span className="block text-[11px] text-brand-mahogany/70">~ 1.5 Hours Drive</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm space-y-1">
            <span className="block text-brand-terracotta font-bold uppercase tracking-wider">To Kumrat Valley (Thall)</span>
            <span className="font-serif text-xl font-bold text-brand-mahogany">~ 110 KM</span>
            <span className="block text-[11px] text-brand-mahogany/70">~ 3 Hours Scenic Drive</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Map & Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Interactive Map & Phone details */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-brand-mahogany">
            Find Us on Google Maps
          </h2>
          <MapEmbed />

          {/* Quick Direct Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              href="tel:+923002592213"
              className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-brand-border hover:border-brand-terracotta transition-all group shadow-sm bg-white"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-terracotta text-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform shadow-warm-glow">
                <HiPhone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] text-brand-terracotta uppercase font-bold">Direct Call</span>
                <span className="font-bold text-sm text-brand-mahogany">+92 300 2592213</span>
              </div>
            </a>

            <a
              href="https://wa.me/923002592213"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-brand-border hover:border-emerald-600 transition-all group shadow-sm bg-white"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] text-emerald-600 uppercase font-bold">WhatsApp 24/7</span>
                <span className="font-bold text-sm text-brand-mahogany">+92 300 2592213</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-border shadow-card-warm space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-mahogany">
                Send an Inquiry / Pre-order
              </h2>
              <p className="text-xs text-brand-mahogany/80 mt-1">
                Travelling in a large group or have specific dietary requirements? Message us directly.
              </p>
            </div>

            {/* Submission Status Toast */}
            {status.message && (
              <div
                className={`p-4 rounded-2xl text-xs flex items-center gap-3 ${
                  status.success
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                    : 'bg-rose-50 text-rose-800 border border-rose-300'
                }`}
              >
                {status.success ? (
                  <HiCheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                ) : (
                  <HiExclamationCircle className="w-5 h-5 flex-shrink-0 text-rose-600" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-brand-mahogany font-bold mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-brand-mahogany placeholder-brand-mahogany/40 focus:outline-none focus:border-brand-terracotta"
                />
              </div>

              <div>
                <label className="block text-brand-mahogany font-bold mb-1">Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 0345 1234567"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-brand-mahogany placeholder-brand-mahogany/40 focus:outline-none focus:border-brand-terracotta"
                />
              </div>

              <div>
                <label className="block text-brand-mahogany font-bold mb-1">Visitor Status</label>
                <select
                  name="travelerType"
                  value={formData.travelerType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-brand-mahogany focus:outline-none focus:border-brand-terracotta font-medium"
                >
                  <option value="Traveler (Chitral/Kumrat)">Traveler heading to Chitral / Kumrat</option>
                  <option value="Local Visitor">Local Resident / Family Group</option>
                  <option value="Corporate / Tour Bus">Tour Bus Operator / Guide</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-brand-mahogany font-bold mb-1">Message / Inquiry Details *</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us when you expect to arrive, group size, or dish inquiries..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-brand-mahogany placeholder-brand-mahogany/40 focus:outline-none focus:border-brand-terracotta"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full btn-terracotta font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                {status.loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <HiPaperAirplane className="w-4 h-4 transform rotate-45" />
                    <span>Send Message to Balana Inn</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
