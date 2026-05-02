'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Ribbon Fish',
    category: 'Top Export',
    image: '/images/Ribbon-Fish.jpg',
    description: 'Widely exported to Thailand',
    destination: 'Thailand',
  },
  {
    id: 2,
    name: 'Stingray (Ray Fish)',
    category: 'Premium Export',
    image: '/images/stingray.png',
    description: 'Often dried or used in fish meal',
    destination: 'Thailand & Malaysia',
  },
  {
    id: 3,
    name: 'Sharks',
    category: 'Small Species',
    image: '/images/shark.png',
    description: 'Exported for meat and fins',
    destination: 'International Markets',
  },
  {
    id: 4,
    name: 'Eels',
    category: 'Niche Export',
    image: '/images/els.png',
    description: 'Niche export item with high demand',
    destination: 'Asian Markets',
  },
  {
    id: 5,
    name: 'Indian Mackerel',
    category: 'High Volume',
    image: '/images/mackerel.png',
    description: 'Large quantities exported fresh and frozen',
    destination: 'Middle East & Asia',
  },
  {
    id: 6,
    name: 'Cuttlefish & Squid',
    category: 'Premium Seafood',
    image: '/images/squid.png',
    description: 'High-value export to international markets',
    destination: 'Europe & Asia',
  },
  // Additional products (hidden initially)
  {
    id: 7,
    name: 'White Pomfret',
    category: 'Premium White Fish',
    image: '/images/white-pomfret.png',
    description: 'Silver and Chinese pomfret varieties',
    destination: 'Middle East & Southeast Asia',
  },
    {
    id: 8,
    name: 'Black Pomfret',
    category: 'Premium Fish',
    image: '/images/black-promfet.png',
    description: 'Silver and Chinese pomfret varieties',
    destination: 'Middle East & Southeast Asia',
  },
  {
    id: 9,
    name: 'Grouper',
    category: 'High-Value Export',
    image: '/images/grouper.png',
    description: 'Fresh and frozen grouper fillets',
    destination: 'Hong Kong & China',
  },
  {
    id: 10,
    name: 'Croaker Fish',
    category: 'Bulk Export',
    image: '/images/Croaker.png',
    description: 'Yellow croaker in large quantities',
    destination: 'China & Southeast Asia',
  },
  {
    id: 11,
    name: 'Tuna',
    category: 'Premium Grade',
    image: '/images/tuna.png',
    description: 'Yellowfin and skipjack tuna',
    destination: 'Europe & Japan',
  },
  {
    id: 12,
    name: 'Lobster',
    category: 'Luxury Export',
    image: '/images/lobster.png',
    description: 'Live and frozen lobster',
    destination: 'USA & Europe',
  },
  {
    id: 13,
    name: 'Shrimp & Prawns',
    category: 'Top Seller',
    image: '/images/prawns.png',
    description: 'Various sizes, fresh and frozen',
    destination: 'Global Markets',
  },
  {
    id: 14,
    name: 'Red Snipper',
    category: 'Top Seller',
    image: '/images/snipper.png',
    description: 'Various sizes, fresh and frozen',
    destination: 'Global Markets',
  },
  {
    id: 15,
    name: 'Crabs',
    category: 'Top Seller',
    image: '/images/crabs.png',
    description: 'Various sizes',
    destination: 'Global Markets',
  },
];

export default function ProductShowcase() {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <section id="products" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-deep-navy to-deep-navy/90 text-ice-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gold">Premium Selection</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Pakistan's finest seafood exports, delivered with uncompromising quality standards to international markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-ice-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {product.description}
                    </p>
                    <p className="text-gold text-xs font-semibold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      📍 Exported to: {product.destination}
                    </p>
                    <button className="bg-gold text-deep-navy px-4 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-all duration-200 opacity-0 group-hover:opacity-100 delay-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <span className="text-gold text-sm font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="font-montserrat text-xl font-bold text-deep-navy mt-2">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-gold text-deep-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-deep-navy"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronDown size={20} className="rotate-180 transition-transform duration-300" />
              </>
            ) : (
              <>
                View Full Catalog
                <ChevronDown size={20} className="transition-transform duration-300" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
