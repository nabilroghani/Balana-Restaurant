import React, { useState, useEffect } from 'react';
import { FALLBACK_DISH_IMAGE } from '../assets';

export default function FacilityCard({ icon: Icon, title, tag, description, image }) {
  // Sync initial state directly with fallback check
  const [imgSrc, setImgSrc] = useState(image || FALLBACK_DISH_IMAGE);

  // Synchronize state whenever image prop changes dynamically
  useEffect(() => {
    if (image) {
      setImgSrc(image);
    }
  }, [image]);

  return (
    <div className="facility-card-anim glass-card rounded-3xl p-6 relative overflow-hidden group hover:border-brand-terracotta transition-all duration-500 flex flex-col justify-between border border-brand-border bg-white shadow-card-warm">
      {/* Background Accent Gradient */}
      <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-brand-terracotta/5 group-hover:bg-brand-terracotta/15 transition-all duration-500 blur-2xl" />

      {/* Render Image Section if image prop exists or imgSrc is available */}
      {imgSrc && (
        <div className="h-44 w-full rounded-2xl overflow-hidden mb-4 bg-brand-cream-light border border-brand-border">
          <img
            src={imgSrc}
            alt={title || 'Facility Image'}
            onError={() => {
              // Prevent infinite loop if fallback image also fails
              if (imgSrc !== FALLBACK_DISH_IMAGE) {
                setImgSrc(FALLBACK_DISH_IMAGE);
              }
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      )}

      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-terracotta to-brand-red flex items-center justify-center text-white shadow-warm-glow group-hover:scale-110 transition-transform">
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </div>
          {tag && (
            <span className="text-[10px] font-bold text-brand-terracotta bg-brand-cream px-2.5 py-1 rounded-full border border-brand-terracotta/20 tracking-wider uppercase">
              {tag}
            </span>
          )}
        </div>

        <h3 className="font-serif text-2xl font-bold text-brand-mahogany group-hover:text-brand-terracotta transition-colors">
          {title}
        </h3>

        <p className="text-xs text-brand-mahogany/80 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-brand-border flex items-center gap-2 text-[11px] text-brand-terracotta font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta" />
        <span>Available 24/7 at Rabat Stop</span>
      </div>
    </div>
  );
}