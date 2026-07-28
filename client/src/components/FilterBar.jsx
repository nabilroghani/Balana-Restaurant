import React from 'react';
import { motion } from 'framer-motion';

export default function FilterBar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
              isActive
                ? 'text-white font-bold shadow-warm-glow'
                : 'text-brand-mahogany/80 hover:text-brand-terracotta bg-white border border-brand-border hover:bg-brand-cream/60'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-gradient-to-r from-brand-terracotta to-brand-red rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
