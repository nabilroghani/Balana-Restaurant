import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FALLBACK_DISH_IMAGE } from '../assets';

export default function LightboxModal({ isOpen, image, onClose }) {
  if (!isOpen || !image) return null;

  const [imgSrc, setImgSrc] = useState(image.url || image.src || FALLBACK_DISH_IMAGE);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden p-2 flex flex-col items-center border border-brand-border shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-brand-mahogany hover:text-brand-terracotta border border-brand-border flex items-center justify-center transition-transform hover:scale-110 shadow-md"
            aria-label="Close image modal"
          >
            <HiX className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="w-full h-[65vh] overflow-hidden rounded-2xl bg-brand-cream-light flex items-center justify-center">
            <img
              src={imgSrc}
              alt={image.title || 'Balana Inn Gallery'}
              onError={() => setImgSrc(FALLBACK_DISH_IMAGE)}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Caption */}
          <div className="w-full p-4 text-center">
            <h3 className="font-serif text-2xl font-bold text-brand-mahogany">
              {image.title}
            </h3>
            {image.category && (
              <span className="inline-block mt-1 text-xs text-brand-terracotta bg-brand-cream px-3 py-1 rounded-full border border-brand-terracotta/20 uppercase tracking-wider font-bold">
                {image.category}
              </span>
            )}
            {image.description && (
              <p className="text-xs text-brand-mahogany/80 mt-2 max-w-xl mx-auto">
                {image.description}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
