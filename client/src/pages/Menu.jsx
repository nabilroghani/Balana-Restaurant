import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiSortAscending, HiSparkles, HiRefresh } from 'react-icons/hi';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { ALL_MENU_PRODUCTS } from '../assets';

export default function Menu() {
  const [products, setProducts] = useState(ALL_MENU_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState(ALL_MENU_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    'All',
    'BBQ & Karahi',
    'Rice & Biryani',
    'Fast Food',
    'Desi Breakfast',
    'Drinks & Desserts',
  ];

  useEffect(() => {
    // Use local 18-dish dataset directly (no backend dependency)
    setProducts(
      activeCategory === 'All'
        ? ALL_MENU_PRODUCTS
        : ALL_MENU_PRODUCTS.filter((p) => p.category === activeCategory)
    );
  }, [activeCategory]);

  useEffect(() => {
    let result = [...products];

    // Client side search filter
    if (searchQuery.trim()) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Client side sorting
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'featured') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(result);
  }, [products, searchQuery, sortOption]);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen overflow-hidden">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-terracotta bg-white px-4 py-1.5 rounded-full border border-brand-terracotta/30 shadow-sm">
          <HiSparkles className="w-4 h-4 text-brand-amber" />
          <span>Freshly Prepared 24/7</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-mahogany tracking-wide">
          Our Culinary Menu
        </h1>
        <p className="text-sm sm:text-base text-brand-mahogany/80 leading-relaxed">
          From slow-cooked Shinwari mutton to hot desi breakfast and refreshing cardamom Qehwa. Every dish is crafted fresh on order for travelers and local food lovers.
        </p>
      </div>

      {/* Search & Sort Controls Bar */}
      <div className="glass-panel p-4 rounded-3xl mb-8 space-y-4 shadow-card-warm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-terracotta/70" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Karahi, Lassi, Painda)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-brand-border text-brand-mahogany placeholder-brand-mahogany/40 text-xs sm:text-sm focus:outline-none focus:border-brand-terracotta transition-colors shadow-inner"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <HiSortAscending className="w-5 h-5 text-brand-terracotta" />
            <span className="text-xs text-brand-mahogany font-semibold whitespace-nowrap">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-white border border-brand-border text-brand-mahogany text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-brand-terracotta"
            >
              <option value="default">Default Order</option>
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Animated Filter Category Tabs */}
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />
      </div>

      {/* Menu Cards Display Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-96 rounded-2xl animate-shimmer" />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-20 glass-panel rounded-3xl space-y-4 max-w-md mx-auto">
          <p className="font-serif text-2xl text-brand-terracotta font-bold">No dishes found</p>
          <p className="text-xs text-brand-mahogany/80">
            No items matched your search query or category filter.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="btn-terracotta px-5 py-2 rounded-full text-xs font-semibold"
          >
            <HiRefresh className="w-4 h-4 inline mr-1" />
            <span>Reset All Filters</span>
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id || product._id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Dish Modal popup */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
