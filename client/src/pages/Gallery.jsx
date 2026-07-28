import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiEye } from 'react-icons/hi';
import LightboxModal from '../components/LightboxModal';
import { GALLERY_LOCAL_PHOTOS, FALLBACK_DISH_IMAGE } from '../assets';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Food Specialties', 'Private Cabins', 'Mosque & Facilities'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_LOCAL_PHOTOS
      : GALLERY_LOCAL_PHOTOS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-terracotta bg-white px-4 py-1.5 rounded-full border border-brand-terracotta/20 shadow-sm">
          <HiSparkles className="w-4 h-4 text-brand-amber" />
          <span>Visual Showcase</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-mahogany">
          Photo Gallery
        </h1>
        <p className="text-sm sm:text-base text-brand-mahogany/80">
          Take a look at our mouth-watering dishes, private dining cabins, and traveler facilities in Rabat, Timergara.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-brand-terracotta to-brand-red text-white shadow-warm-glow'
                  : 'bg-white border border-brand-border text-brand-mahogany/80 hover:text-brand-terracotta hover:bg-brand-cream/60'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry / Grid Display */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onSelect={(img) => setSelectedImage(img)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

function GalleryCard({ item, onSelect }) {
  const [imgSrc, setImgSrc] = useState(item.src || FALLBACK_DISH_IMAGE);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(item)}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-brand-border hover:border-brand-terracotta shadow-card-warm relative bg-white"
    >
      <div className="h-64 w-full bg-brand-cream-light overflow-hidden relative">
        <img
          src={imgSrc}
          alt={item.title}
          onError={() => setImgSrc(FALLBACK_DISH_IMAGE)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-mahogany/90 via-brand-mahogany/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Hover overlay button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
          <div className="w-12 h-12 rounded-full bg-brand-terracotta text-white flex items-center justify-center shadow-warm-glow transform group-hover:scale-110 transition-transform">
            <HiEye className="w-6 h-6" />
          </div>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/95 text-brand-terracotta border border-brand-terracotta/20 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shadow-sm">
          {item.category}
        </span>

        {/* Title */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
