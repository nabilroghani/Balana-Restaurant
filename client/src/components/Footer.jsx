import React from 'react';
import { Link } from 'react-router-dom';
import { HiLocationMarker, HiPhone, HiClock, HiMail, HiHeart } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaWhatsapp, FaUtensils } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand-cream-light border-t-2 border-brand-terracotta/20 pt-14 pb-8 text-brand-mahogany overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
          {/* Brand Intro Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-terracotta text-white flex items-center justify-center font-bold shadow-warm-glow">
                <FaUtensils className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-brand-mahogany">
                Balana Inn
              </span>
            </Link>
            <p className="text-xs text-brand-mahogany/80 leading-relaxed">
              Your trusted 24/7 roadside sanctuary in Rabat, Timergara (Dir Lower). Serving authentic Shinwari Mutton Karahi, Pashtun Painda, and warm hospitality for all travelers heading north to Chitral & Kumrat Valley.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/923002592213"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors shadow-sm active:scale-95"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/balanainn/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-sm active:scale-95"
                aria-label="Facebook Page"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-colors shadow-sm active:scale-95"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-terracotta">Quick Links</h3>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link to="/" className="py-1 block hover:text-brand-terracotta transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/menu" className="py-1 block hover:text-brand-terracotta transition-colors">Full Food Menu</Link>
              </li>
              <li>
                <Link to="/about" className="py-1 block hover:text-brand-terracotta transition-colors">Our Story & Hospitality</Link>
              </li>
              <li>
                <Link to="/gallery" className="py-1 block hover:text-brand-terracotta transition-colors">Cabins & Food Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="py-1 block hover:text-brand-terracotta transition-colors">Location & Direct Contact</Link>
              </li>
            </ul>
          </div>

          {/* Key Facilities & Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-terracotta">Traveler Facilities</h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta flex-shrink-0" />
                <span>Private Dining Cabins (Qaleen & Chairs)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta flex-shrink-0" />
                <span>Clean Mosque & Ablution Facilities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta flex-shrink-0" />
                <span>Ample Secure Vehicle Parking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta flex-shrink-0" />
                <span>Hygienic Modern Washrooms</span>
              </li>
              <li className="flex items-center gap-2 font-bold text-brand-terracotta pt-1">
                <HiClock className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                <span>Always Open 24/7 (365 Days)</span>
              </li>
            </ul>
          </div>

          {/* Contact & Route Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-terracotta">Contact & Route</h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <HiLocationMarker className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                <span>Grand Highway (N-45), Rabat, Timergara, Dir Lower, KP, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5 font-bold">
                <HiPhone className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                <a href="tel:+923002592213" className="hover:text-brand-terracotta">+92 300 2592213</a>
              </div>
              <div className="flex items-center gap-2.5">
                <HiMail className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                <span>info@balanainn.com</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-brand-border text-[11px] text-brand-terracotta font-semibold shadow-sm">
                📍 Strategic Stopover: ~45 mins from Chakdara, Gateway to Lowari Tunnel & Chitral.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between text-xs text-brand-mahogany/70 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Balana Inn Restaurant, Rabat Timergara. All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-1 font-semibold">
            <span>Crafted with</span>
            <HiHeart className="w-4 h-4 text-brand-terracotta inline" />
            <span>for Pashtun Culinary Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
