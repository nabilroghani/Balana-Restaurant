import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HiSparkles,
  HiArrowRight,
  HiClock,
  HiLocationMarker,
  HiShieldCheck,
  HiCheckCircle,
} from 'react-icons/hi';
import { FaRestroom, FaParking, FaCouch, FaMosque, FaUtensils, FaFire } from 'react-icons/fa';
import { initVideoScrollExperience } from '../animations/scrollAnimations';
import { HERO_IMAGES, ALL_MENU_PRODUCTS } from '../assets';
import ProductCard from '../components/ProductCard';
import FacilityCard from '../components/FacilityCard';
import ProductModal from '../components/ProductModal';

export default function Home() {
  const heroContainerRef = useRef(null);
  const [featuredProducts, setFeaturedProducts] = useState(ALL_MENU_PRODUCTS.slice(0, 3));
  const [selectedProduct, setSelectedProduct] = useState(null);

  // useEffect(() => {
  //   // Initialize GSAP Pinned Video Scrub Sequence
  //   const timer = setTimeout(() => {
  //     initVideoScrollExperience(heroContainerRef);
  //   }, 150);

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      initVideoScrollExperience(heroContainerRef);

      // GSAP ScrollTrigger ko refresh karein taake neeche wale cards hide na hon
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* 1. CINEMATIC PINNED VIDEO SCROLL HERO EXPERIENCE */}
      <section
        ref={heroContainerRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-mahogany"
      >
        {/* SCENE 1 BACKGROUND */}
        <div className="absolute inset-0 z-0 hero-scene-1-bg">
          <img
            src={HERO_IMAGES[0].src}
            alt={HERO_IMAGES[0].alt}
            className="w-full h-full object-cover brightness-65 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-mahogany via-brand-mahogany/50 to-transparent" />
        </div>

        {/* SCENE 2 BACKGROUND (CROSS-FADES IN ON SCROLL) */}
        <div className="absolute inset-0 z-1 opacity-0 hero-scene-2-bg">
          <img
            src={HERO_IMAGES[1].src}
            alt={HERO_IMAGES[1].alt}
            className="w-full h-full object-cover brightness-65 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-mahogany via-brand-mahogany/50 to-transparent" />
        </div>

        {/* SCENE 3 BACKGROUND (CROSS-FADES IN ON SCROLL) */}
        <div className="absolute inset-0 z-2 opacity-0 hero-scene-3-bg">
          <img
            src={HERO_IMAGES[2].src}
            alt={HERO_IMAGES[2].alt}
            className="w-full h-full object-cover brightness-65 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-mahogany via-brand-mahogany/50 to-transparent" />
        </div>

        {/* LIGHT SWEEP OVERLAY */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent pointer-events-none z-10 hero-light-sweep" />

        {/* SCENE 1 TEXT REVEAL */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center space-y-6 hero-scene-1-text">
          <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Open 24/7 • Rabat, Timergara (Dir Lower)
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-wide drop-shadow-2xl">
            Your Trusted Stop Between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-300 to-white">
              Peshawar & Chitral / Kumrat
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-white/90 leading-relaxed font-normal">
            A sanctuary of authentic Pashtun hospitality. Savor fresh Shinwari Mutton Karahi, hot Chapli Kabab, and Pashtun Painda in private traditional carpeted cabins.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-terracotta font-bold text-base shadow-warm-glow flex items-center justify-center gap-3"
            >
              <span>Explore Full Menu</span>
              <HiArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white font-semibold text-base hover:bg-black/60 transition-all flex items-center justify-center gap-2"
            >
              <HiLocationMarker className="w-5 h-5 text-brand-gold" />
              <span>Get Directions</span>
            </Link>
          </div>

          {/* Scroll Down Indicator */}
          <div className="pt-8 text-xs text-brand-gold flex flex-col items-center gap-2 animate-bounce">
            <span>Scroll to Experience</span>
            <span className="w-5 h-8 rounded-full border-2 border-brand-gold/40 flex items-start justify-center p-1">
              <span className="w-1.5 h-2 bg-brand-gold rounded-full animate-pulse" />
            </span>
          </div>
        </div>

        {/* SCENE 2 TEXT REVEAL (MUTTON KARAHI SPECS) */}
        <div className="absolute z-20 max-w-4xl mx-auto px-4 text-center space-y-5 opacity-0 hero-scene-2-text">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold bg-black/50 px-4 py-1.5 rounded-full border border-white/20">
            Regional Culinary Specialty
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl">
            Flame-Roasted Shinwari Mutton Karahi
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto">
            Cooked fresh in front of your eyes using fresh local mutton, organic tomatoes, green chillies, and ginger juliennes. Zero artificial preservatives.
          </p>
          <div className="pt-2">
            <Link
              to="/menu"
              className="btn-terracotta px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2"
            >
              <span>View Dish Pricing</span>
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* SCENE 3 TEXT REVEAL (PRIVATE CABINS SPECS) */}
        <div className="absolute z-20 max-w-4xl mx-auto px-4 text-center space-y-5 opacity-0 hero-scene-3-text">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold bg-black/50 px-4 py-1.5 rounded-full border border-white/20">
            Private Family Comfort
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl">
            Traditional Qaleen & Takya Seating
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto">
            Unwind in completely private family cabins equipped with handwoven carpet floor seating or modern dining tables.
          </p>
          <div className="pt-2">
            <Link
              to="/about"
              className="btn-terracotta px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2"
            >
              <span>Explore Facilities</span>
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE DISHES HIGHLIGHT */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto dishes-section relative">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-terracotta font-bold bg-white px-4 py-1.5 rounded-full border border-brand-terracotta/20 shadow-sm">
            <FaUtensils className="w-4 h-4 text-brand-terracotta" />
            <span>Chef's Regional Specialties</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-mahogany">
            Taste Authentic Pashtun Delicacies
          </h2>
          <p className="text-sm sm:text-base text-brand-mahogany/80">
            Hand-cut meat, organic spices, and charcoal roasting prepared fresh 24 hours a day for hungry travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id || product._id} className="dish-card-anim">
              <ProductCard
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-brand-terracotta hover:text-brand-mahogany font-bold text-sm border-b-2 border-brand-terracotta pb-1 transition-colors"
          >
            <span>View All 18+ Menu Dishes</span>
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. ABOUT / STORY TEASER */}
      <section className="py-14 sm:py-20 bg-brand-cream-light border-y border-brand-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Image */}
          <div className="relative">
            <div className="relative h-[280px] sm:h-[350px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-card-warm border border-brand-border">
              <img
                src={HERO_IMAGES[1].src}
                alt="Balana Inn Shinwari Karahi Cooking"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 right-2 sm:right-6 glass-panel p-4 sm:p-5 rounded-2xl border border-brand-terracotta/20 shadow-xl max-w-[200px] sm:max-w-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-terracotta font-serif text-2xl font-bold">
                <span>Rabat Stop</span>
              </div>
              <p className="text-xs text-brand-mahogany/80">
                Positioned strategically on Grand N-45 Road for travelers taking a relaxing break before Lowari Tunnel & Dir Valley.
              </p>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-bold">
              Heritage of Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-mahogany leading-tight">
              A Warm Oasis for Travelers & Families Alike
            </h2>
            <p className="text-sm sm:text-base text-brand-mahogany/80 leading-relaxed">
              Located right in Rabat, Timergara (Dir Lower), <strong>Balana Inn Restaurant</strong> has earned its reputation as the most hospitable roadside haven on the Peshawar–Chitral highway.
            </p>
            <p className="text-sm sm:text-base text-brand-mahogany/80 leading-relaxed">
              Whether driving late at night towards Chitral/Kumrat or dining locally with family, our clean facilities, private cabins, and round-the-clock fresh hot meals ensure every journey is filled with pleasant memories.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm">
                <span className="block font-serif text-3xl font-bold text-brand-terracotta">100%</span>
                <span className="text-xs text-brand-mahogany/70 font-semibold">Fresh Meat & Desi Spices</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm">
                <span className="block font-serif text-3xl font-bold text-brand-terracotta">24/7</span>
                <span className="text-xs text-brand-mahogany/70 font-semibold">Non-Stop Service</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="btn-outline-warm px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2"
              >
                <span>Read Full Story</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FACILITIES HIGHLIGHT */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto facilities-section">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <span className="text-xs uppercase tracking-widest text-brand-terracotta font-bold bg-white px-4 py-1.5 rounded-full border border-brand-terracotta/20 shadow-sm">
            Comfort & Convenience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-mahogany">
            Designed for Your Peace of Mind
          </h2>
          <p className="text-sm sm:text-base text-brand-mahogany/80">
            We understand long highway journeys require more than just great food. Enjoy our clean, comprehensive facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <FacilityCard
            icon={FaCouch}
            title="Private Cabins"
            tag="Traditional & Table"
            description="Choose between traditional carpet floor seating (Qaleen & Takya) or modern dining tables for ultimate family privacy."
            image={HERO_IMAGES[2].src}
          />
          <FacilityCard
            icon={FaMosque}
            title="On-Site Mosque"
            tag="Ablution Ready"
            description="Separate, quiet prayer area with dedicated clean ablution (Wudu) taps so you never miss your prayers during travel."
            image="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80"
          />
          <FacilityCard
            icon={FaParking}
            title="Spacious Parking"
            tag="Secure & Free"
            description="Large illuminated parking lot capable of accommodating cars, SUVs, Coasters, and tourist buses safely."
            image="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80"
          />
          <FacilityCard
            icon={FaRestroom}
            title="Hygienic Washrooms"
            tag="Clean & Maintained"
            description="Clean, sanitized washroom facilities continuously cleaned by dedicated staff around the clock."
            image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
          />
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-brand-terracotta/30 shadow-warm-glow">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-mahogany">
              Ready for an Unforgettable Meal?
            </h2>
            <p className="text-sm sm:text-base text-brand-mahogany/80">
              Explore our full 24/7 menu, view dish prices, or call us directly to book a private cabin for your arriving family group.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-terracotta font-bold"
              >
                Browse Full Menu
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-outline-warm font-bold"
              >
                Contact & Location Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
