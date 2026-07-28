import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '923002592213';
  const prefilledText = encodeURIComponent(
    "Hello Balana Inn Restaurant! I am traveling on the Chitral/Kumrat route and would like to inquire about cabin booking / menu availability."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledText}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-3 active:scale-95 transition-transform"
      aria-label="Contact Balana Inn on WhatsApp"
    >
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-white border border-brand-border text-xs font-bold text-brand-mahogany shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat 24/7 on WhatsApp
      </span>
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-warm-glow group-hover:scale-110 transition-transform duration-300 border-2 border-white">
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping" />
        <FaWhatsapp className="w-8 h-8 relative z-10" />
      </div>
    </a>
  );
}
