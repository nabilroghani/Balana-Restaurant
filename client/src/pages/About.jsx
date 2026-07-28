import React from 'react';
import { Link } from 'react-router-dom';
import { HiHeart, HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { FaRestroom, FaParking, FaCouch, FaMosque } from 'react-icons/fa';
import FacilityCard from '../components/FacilityCard';
import { HERO_IMAGES } from '../assets';

export default function About() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-20 overflow-hidden">
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-terracotta bg-white px-4 py-1.5 rounded-full border border-brand-terracotta/20 shadow-sm">
          <HiHeart className="w-4 h-4 text-brand-terracotta" />
          <span>Pashtun Melmastia (Hospitality)</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-mahogany">
          Our Story & Traditions
        </h1>
        <p className="text-sm sm:text-base text-brand-mahogany/80 leading-relaxed">
          Founded as a beacon of warmth for journeying families, Balana Inn Restaurant in Rabat, Timergara (Dir Lower) is dedicated to serving wholesome traditional food and restful sanctuary 24 hours a day.
        </p>
      </div>

      {/* 2. Detailed Story Narrative & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-terracotta">
            The Gateway Stop to Chitral & Kumrat Valley
          </h2>
          <p className="text-sm text-brand-mahogany/80 leading-relaxed">
            Nestled on the vital N-45 highway in Rabat, Timergara, Balana Inn was established with a singular mission: to provide tired travelers heading north towards Lowari Tunnel, Chitral, or Kumrat Valley with an exceptionally comfortable, hygienic, and memorable dining experience.
          </p>
          <p className="text-sm text-brand-mahogany/80 leading-relaxed">
            In Pashtun culture, <em>Melmastia</em> (hospitality) is a sacred duty. We take immense pride in ensuring that every guest—whether a local family celebrating a special occasion or a tourist group arriving at midnight—is received with hot tea, fresh fire-roasted karahi, and utmost respect.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-xs text-brand-mahogany font-semibold">
              <HiCheckCircle className="w-5 h-5 text-brand-terracotta flex-shrink-0" />
              <span>Organic, non-frozen meats butchered daily under strict halal supervision</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-brand-mahogany font-semibold">
              <HiCheckCircle className="w-5 h-5 text-brand-terracotta flex-shrink-0" />
              <span>Pristine private dining cabins providing 100% privacy for families</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-brand-mahogany font-semibold">
              <HiCheckCircle className="w-5 h-5 text-brand-terracotta flex-shrink-0" />
              <span>Continuous 24-hour kitchen operation with zero compromise on quality</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="h-[280px] sm:h-[350px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-card-warm border border-brand-border">
            <img
              src={HERO_IMAGES[1].src}
              alt="Balana Inn Restaurant Interior Dining"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 3. Deep Dive into Dining Cabins & Seating Choices */}
      <section className="glass-panel p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl space-y-6 sm:space-y-8 border border-brand-border shadow-card-warm">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-terracotta font-bold">
            Tailored Seating Experiences
          </span>
          <h2 className="font-serif text-3xl font-bold text-brand-mahogany">
            Choose Your Preferred Dining Setup
          </h2>
          <p className="text-xs sm:text-sm text-brand-mahogany/80">
            We offer two distinct styles of private family dining cabins to suit your group's personal preference and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Floor Cabins */}
          <div className="glass-card p-6 rounded-2xl space-y-4 border border-brand-border hover:border-brand-terracotta transition-colors">
            <div className="h-48 rounded-xl overflow-hidden bg-brand-cream-light">
              <img
                src={HERO_IMAGES[2].src}
                alt="Traditional Floor Seating Carpet Takya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-terracotta">
                Traditional Floor Seating (Qaleen & Takya)
              </h3>
              <span className="text-[10px] font-bold text-brand-terracotta bg-brand-cream px-2.5 py-1 rounded-full uppercase border border-brand-terracotta/20 self-start sm:self-auto flex-shrink-0">
                Pashtun Style
              </span>
            </div>
            <p className="text-xs text-brand-mahogany/80 leading-relaxed">
              Sit back and stretch your legs on thick woven carpets (qaleen) with comfortable bolster cushions (takya). Ideal for family groups and long-distance travelers looking to unwind completely while sharing large platters of Painda and Karahi.
            </p>
          </div>

          {/* Modern Table Cabins */}
          <div className="glass-card p-6 rounded-2xl space-y-4 border border-brand-border hover:border-brand-terracotta transition-colors">
            <div className="h-48 rounded-xl overflow-hidden bg-brand-cream-light">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Modern Table and Chair Dining Cabins"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-terracotta">
                Modern Dining Cabins (Table & Chairs)
              </h3>
              <span className="text-[10px] font-bold text-brand-terracotta bg-brand-cream px-2.5 py-1 rounded-full uppercase border border-brand-terracotta/20 self-start sm:self-auto flex-shrink-0">
                Modern Style
              </span>
            </div>
            <p className="text-xs text-brand-mahogany/80 leading-relaxed">
              Equipped with comfortable cushioned chairs and sturdy wood dining tables inside private enclosed partition walls. Perfect for corporate travelers, quick meal breaks, or elderly guests who prefer elevated seating.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Facilities Grid */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-terracotta font-bold">
            Traveler Amenities
          </span>
          <h2 className="font-serif text-3xl font-bold text-brand-mahogany">
            Complete On-Site Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <FacilityCard
            icon={FaCouch}
            title="Private Cabins"
            tag="24/7 Available"
            description="Fully private dining rooms with curtained doors and air cooling for family privacy."
            image={HERO_IMAGES[2].src}
          />
          <FacilityCard
            icon={FaMosque}
            title="Clean Mosque"
            tag="Ablution Taps"
            description="Separate, quiet prayer hall with clean carpet and warm wudu water taps."
            image="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80"
          />
          <FacilityCard
            icon={FaParking}
            title="Ample Parking"
            tag="Lit & Guarded"
            description="Spacious roadside parking area with easy turning space for large family vehicles and buses."
            image="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80"
          />
          <FacilityCard
            icon={FaRestroom}
            title="Clean Washrooms"
            tag="Hygienic"
            description="Maintained continuously throughout the day and night for hygiene and comfort."
            image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
          />
        </div>
      </section>

      {/* 5. Menu Callout CTA */}
      <div className="text-center pt-8">
        <Link
          to="/menu"
          className="btn-terracotta px-8 py-4 rounded-full font-bold text-sm inline-flex items-center gap-3 shadow-warm-glow"
        >
          <span>Explore Our 24/7 Food Menu</span>
          <HiArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
