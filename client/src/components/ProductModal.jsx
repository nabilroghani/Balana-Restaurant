import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiClock, HiUserGroup, HiFire, HiSparkles, HiCheckCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { FALLBACK_DISH_IMAGE } from '../assets';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const {
    name,
    description,
    price,
    category,
    imageUrl,
    featured,
    prepTime,
    servingSize,
    isSpicy,
    isSpecial,
  } = product;

  const [imgSrc, setImgSrc] = useState(imageUrl || FALLBACK_DISH_IMAGE);

  useEffect(() => {
    setImgSrc(imageUrl || FALLBACK_DISH_IMAGE);
  }, [imageUrl]);

  const prefilledMsg = encodeURIComponent(
    `Hi Balana Inn! I'd like to inquire about "${name}" (PKR ${price}). Is this currently available for order at the Rabat stop?`
  );
  const whatsappUrl = `https://wa.me/923002592213?text=${prefilledMsg}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-border my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-brand-mahogany hover:text-brand-terracotta border border-brand-border flex items-center justify-center transition-all hover:scale-110 shadow-md"
            aria-label="Close modal"
          >
            <HiX className="w-6 h-6" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-72 w-full bg-brand-cream-light overflow-hidden">
            <img
              src={imgSrc}
              alt={name}
              onError={() => setImgSrc(FALLBACK_DISH_IMAGE)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-mahogany via-brand-mahogany/40 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between z-10">
              <div>
                <span className="inline-block text-xs font-bold text-brand-terracotta bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-brand-terracotta/20 uppercase tracking-wider mb-2">
                  {category}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
                  {name}
                </h2>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-brand-border">
              <div>
                <span className="text-xs text-brand-mahogany/60 uppercase tracking-wider block font-bold">Price per Serving</span>
                <span className="font-serif text-3xl font-bold text-brand-terracotta">
                  PKR {price.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {isSpecial && (
                  <span className="flex items-center gap-1 bg-brand-terracotta text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    <HiSparkles className="w-4 h-4 text-brand-gold" /> Special
                  </span>
                )}
                {isSpicy && (
                  <span className="flex items-center gap-1 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    <HiFire className="w-4 h-4" /> Spicy
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-brand-terracotta font-bold">Preparation & Flavor Notes</h4>
              <p className="text-sm text-brand-mahogany/90 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-brand-cream/50 border border-brand-border text-xs text-brand-mahogany">
              <div className="flex items-center gap-2">
                <HiClock className="w-5 h-5 text-brand-terracotta" />
                <div>
                  <span className="block font-bold">Estimated Prep Time</span>
                  <span>{prepTime || '20-25 mins'}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <HiUserGroup className="w-5 h-5 text-brand-terracotta" />
                <div>
                  <span className="block font-bold">Recommended Portion</span>
                  <span>{servingSize || '2-3 Persons'}</span>
                </div>
              </div>
            </div>

            {/* Quality Guarantees */}
            <div className="space-y-1.5 text-xs text-brand-mahogany/80">
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Cooked fresh upon order in copper karahi & charcoal grill</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Served with piping hot fresh Naan or Roti</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Inquire / Pre-order on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto btn-outline-warm px-6 py-3 rounded-2xl text-sm font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
