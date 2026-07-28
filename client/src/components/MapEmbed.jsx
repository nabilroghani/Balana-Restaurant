import React from 'react';

export default function MapEmbed() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13158.375253818818!2d71.9324000!3d34.8618000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDUxJzQyLjUiTiA3McKwNTYnMzIuNiJF!5e0!3m2!1sen!2spk!4v1711200000000!5m2!1sen!2spk";

  return (
    <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border shadow-card-warm group">
      <iframe
        title="Balana Inn Restaurant Location Map"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-brand-border max-w-xs shadow-lg pointer-events-none">
        <h4 className="font-serif text-lg font-bold text-brand-terracotta">Balana Inn Restaurant</h4>
        <p className="text-xs text-brand-mahogany/80 mt-1">
          📍 Grand Highway N-45, Rabat, Timergara (Dir Lower), KP, Pakistan
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
          <span>Open 24 Hours • Direct Highway Access</span>
        </div>
      </div>
    </div>
  );
}
