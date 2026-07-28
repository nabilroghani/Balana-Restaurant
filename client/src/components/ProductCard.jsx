import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiClock, HiUserGroup, HiFire, HiSparkles } from 'react-icons/hi';
import { FALLBACK_DISH_IMAGE } from '../assets';

export default function ProductCard({ product, onSelect }) {
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

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between hover:border-brand-terracotta hover:shadow-warm-glow transition-all duration-300 relative border border-brand-border bg-white"
    >
      <div>
        {/* Card Image Container with Fixed Aspect Ratio */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream-light">
          <img
            src={imgSrc}
            alt={name}
            onError={() => setImgSrc(FALLBACK_DISH_IMAGE)}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          
          {/* Subtle Warm Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-mahogany/90 via-brand-mahogany/30 to-transparent" />

          {/* Category Pill */}
          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-brand-terracotta border border-brand-terracotta/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {category}
          </span>

          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end z-10">
            {isSpecial && (
              <span className="flex items-center gap-1 bg-brand-terracotta text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                <HiSparkles className="w-3 h-3 text-brand-gold" /> Special
              </span>
            )}
            {isSpicy && (
              <span className="flex items-center gap-1 bg-amber-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                <HiFire className="w-3 h-3" /> Spicy
              </span>
            )}
          </div>

          {/* Dish Title Overlay */}
          <div className="absolute bottom-3 left-4 right-4 z-10">
            <h3 className="font-serif text-2xl font-bold text-white group-hover:text-brand-gold transition-colors drop-shadow-md leading-tight">
              {name}
            </h3>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 space-y-3">
          <p className="text-xs text-brand-mahogany/80 line-clamp-2 leading-relaxed font-normal">
            {description}
          </p>

          <div className="flex items-center gap-4 text-[11px] text-brand-mahogany/70 pt-2 border-t border-brand-border font-medium">
            <div className="flex items-center gap-1.5">
              <HiClock className="w-4 h-4 text-brand-terracotta" />
              <span>{prepTime || '20 mins'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HiUserGroup className="w-4 h-4 text-brand-terracotta" />
              <span>{servingSize || '2 Persons'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Price & Action */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-brand-border bg-brand-cream/30">
        <div>
          <span className="block text-[10px] text-brand-mahogany/60 uppercase tracking-wider font-bold">Price</span>
          <span className="font-serif text-xl font-bold text-brand-terracotta">
            PKR {price.toLocaleString()}
          </span>
        </div>

        <button
          onClick={() => onSelect && onSelect(product)}
          className="btn-terracotta text-xs font-semibold px-4 py-2 rounded-xl"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
