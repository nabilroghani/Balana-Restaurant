import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiClock } from 'react-icons/hi';
import { FaUtensils, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location & Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-2.5 shadow-md border-b border-brand-border'
          : 'bg-brand-cream/95 backdrop-blur-md py-3.5 border-b border-brand-terracotta/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Location tag */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-brand-terracotta to-brand-red flex items-center justify-center text-white shadow-warm-glow group-hover:scale-105 transition-transform flex-shrink-0">
              <FaUtensils className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-3xl font-bold tracking-wide text-brand-mahogany group-hover:text-brand-terracotta transition-colors leading-none">
                Balana Inn
              </span>
              <span className="block text-[9px] sm:text-xs font-bold text-brand-terracotta tracking-wider uppercase mt-0.5">
                Rabat, Timergara • Open 24/7
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider transition-all relative ${
                    isActive
                      ? 'text-brand-terracotta bg-brand-terracotta/10 border border-brand-terracotta/20 font-bold'
                      : 'text-brand-mahogany/90 hover:text-brand-terracotta hover:bg-brand-terracotta/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-terracotta rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Callouts */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border bg-white border-brand-terracotta/30 text-brand-terracotta shadow-sm">
              <HiClock className="w-4 h-4 text-brand-terracotta animate-pulse" />
              <span>24 Hours Open</span>
            </div>
            <a
              href="tel:+923002592213"
              className="btn-terracotta text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-warm-glow"
            >
              <HiPhone className="w-4 h-4" />
              <span>Call Direct</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-brand-mahogany bg-white border border-brand-border shadow-sm active:scale-95 transition-transform focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <HiX className="w-6 h-6 text-brand-terracotta" /> : <HiMenu className="w-6 h-6 text-brand-mahogany" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-brand-border mt-2.5 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-brand-terracotta text-white font-bold shadow-warm-glow'
                    : 'text-brand-mahogany hover:bg-brand-cream bg-white border border-brand-border/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-brand-border flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-brand-terracotta px-2">
              <HiClock className="w-4 h-4" />
              <span>Open 24/7 for Chitral & Kumrat Travelers</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:+923002592213"
                className="btn-terracotta font-bold py-3 rounded-xl flex items-center justify-center gap-1.5 text-xs shadow-warm-glow"
              >
                <HiPhone className="w-4 h-4" />
                <span>Call Direct</span>
              </a>

              <a
                href="https://wa.me/923002592213"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-1.5 text-xs shadow-md"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
