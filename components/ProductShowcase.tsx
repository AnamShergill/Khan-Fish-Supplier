'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Atlantic Salmon',
    category: 'Premium Fresh',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop',
    description: 'Wild-caught Atlantic salmon, rich in Omega-3',
  },
  {
    id: 2,
    name: 'King Prawns',
    category: 'Shellfish',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=2070&auto=format&fit=crop',
    description: 'Jumbo prawns, sustainably farmed',
  },
  {
    id: 3,
    name: 'Yellowfin Tuna',
    category: 'Sushi Grade',
    image: 'https://images.unsplash.com/photo-1580959375944-0b7b2e7e4f3a?q=80&w=2070&auto=format&fit=crop',
    description: 'Sashimi-grade tuna, flash-frozen at sea',
  },
  {
    id: 4,
    name: 'Sea Bass',
    category: 'Mediterranean',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?q=80&w=2070&auto=format&fit=crop',
    description: 'European sea bass, line-caught',
  },
  {
    id: 5,
    name: 'Lobster',
    category: 'Premium Shellfish',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=2070&auto=format&fit=crop',
    description: 'Live Maine lobster, delivered fresh',
  },
  {
    id: 6,
    name: 'Scallops',
    category: 'Delicacy',
    image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=2070&auto=format&fit=crop',
    description: 'Diver scallops, hand-harvested',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
            Our <span className="text-gold">Premium Selection</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Discover our curated collection of the finest seafood from around the world, delivered with uncompromising quality standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-ice-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {product.description}
                    </p>
                    <button className="bg-sea-blue text-ice-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-all duration-200 opacity-0 group-hover:opacity-100 delay-150">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <span className="text-sea-blue text-sm font-semibold uppercase tracking-wide">
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
          <a
            href="#contact"
            className="inline-block bg-deep-navy text-ice-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Request Full Catalog
          </a>
        </motion.div>
      </div>
    </section>
  );
}
