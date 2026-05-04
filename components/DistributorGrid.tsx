'use client';

import { motion } from 'framer-motion';
import { Fish, Globe, Truck } from 'lucide-react';

const features = [
  {
    icon: Fish,
    title: 'Fresh Catch',
    description: 'Daily deliveries of premium seafood sourced from trusted fisheries. Our cold-chain logistics ensure maximum freshness from dock to your door.',
  },
  {
    icon: Globe,
    title: 'Global Export',
    description: 'Seamless international shipping with full customs support. We connect you to markets worldwide with certified quality standards.',
  },
  {
    icon: Truck,
    title: 'Quality Logistics',
    description: 'Temperature-controlled transportation and real-time tracking. Your seafood arrives in perfect condition, every single time.',
  },
];

export default function DistributorGrid() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-ice-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
            Why <span className="text-gold">Choose Us</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            More than 15 years of excellence in seafood distribution, combining traditional expertise with modern logistics technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-sea-blue/10 p-4 rounded-full">
                  <feature.icon className="text-sea-blue" size={48} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-deep-navy mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
