'use client';

import { motion } from 'framer-motion';
import { Store, UtensilsCrossed, Building2, ChefHat } from 'lucide-react';

const localServices = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    description: 'Daily fresh seafood delivery to fine dining and casual restaurants',
  },
  {
    icon: Building2,
    title: 'Hotels',
    description: 'Bulk supply for hotel kitchens and banquet services',
  },
  {
    icon: ChefHat,
    title: 'Food Catering',
    description: 'Premium seafood for catering companies and event services',
  },
  {
    icon: Store,
    title: 'Retail Markets',
    description: 'Wholesale supply to local fish markets and grocery stores',
  },
];

export default function LocalDistribution() {
  return (
    <section id="local-distribution" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-deep-navy/95 to-deep-navy/85 text-ice-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-gold text-deep-navy px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              Local Distribution
            </span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Serving <span className="text-gold">Local Businesses</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            <strong className="text-gold">Khan Fish Supplier</strong> proudly distributes premium seafood locally to restaurants, hotels, food catering services, and retail markets. 
            <span className="block mt-2 text-ice-white font-semibold">
              Fresh daily deliveries • Competitive wholesale prices • Reliable service
            </span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {localServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-deep-navy backdrop-blur-sm rounded-lg p-6 hover:bg-deep-navy/90 transition-all duration-300 border border-gold/30 hover:border-gold shadow-xl"
            >
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <service.icon className="text-gold" size={32} />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-gold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-deep-navy border-2 border-gold rounded-lg p-8 max-w-4xl mx-auto shadow-xl">
            <h3 className="font-montserrat text-2xl sm:text-3xl font-bold text-gold mb-4">
              Need Fresh Seafood for Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Contact us today for wholesale pricing and daily delivery schedules
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-gold text-deep-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg w-full sm:w-auto text-center transform"
              >
                Get Wholesale Quote
              </a>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="tel:+923102061037"
                  className="bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md font-semibold hover:bg-gold hover:text-deep-navy hover:scale-105 transition-all duration-300 text-center transform"
                >
                  Call: +92-310-2061037
                </a>
                <a
                  href="tel:+923222666392"
                  className="bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md font-semibold hover:bg-gold hover:text-deep-navy hover:scale-105 transition-all duration-300 text-center transform"
                >
                  Call: +92-322-2666392
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
