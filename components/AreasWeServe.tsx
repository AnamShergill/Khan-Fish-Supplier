'use client';

import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';

const karachiAreas = [
  "Clifton", "DHA (Defence)", "Gulshan-e-Iqbal", "Saddar",
  "North Nazimabad", "Malir", "Korangi", "Landhi",
  "Gulistan-e-Jauhar", "Nazimabad", "Liaquatabad", "Federal B Area",
  "Tariq Road", "Bahadurabad", "PECHS", "Shahrah-e-Faisal",
  "Kemari", "Lyari", "Orangi Town", "Baldia Town",
  "North Karachi", "New Karachi", "Surjani Town", "Scheme 33",
  "Gulberg", "Johar", "Malir Cantt", "Korangi Industrial Area"
];

const otherCities = [
  "Hyderabad", "Sukkur", "Larkana", "Mirpurkhas",
  "Nawabshah", "Thatta", "Badin", "Tando Adam"
];

export default function AreasWeServe() {
  return (
    <section id="areas-we-serve" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-deep-navy/95 to-deep-navy/85">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="text-gold" size={32} />
            <span className="bg-gold text-deep-navy px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              Service Areas
            </span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-ice-white mb-6">
            Fish Supplier Serving <span className="text-gold">All of Karachi</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Fast, reliable seafood delivery across Karachi and Sindh. Next-day delivery for all orders placed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Karachi Areas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-ice-white rounded-lg shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-gold" size={28} />
              <h3 className="font-montserrat text-2xl font-bold text-deep-navy">
                Karachi Areas We Serve
              </h3>
            </div>
            <p className="text-gray-700 mb-6">
              We deliver fresh and frozen seafood to all major areas of Karachi with next-day delivery:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {karachiAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/30">
              <p className="text-sm text-gray-700">
                <strong className="text-deep-navy">Next-Day Delivery:</strong> Available for all orders placed in Karachi city limits
              </p>
            </div>
          </motion.div>

          {/* Other Cities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Sindh Cities */}
            <div className="bg-ice-white rounded-lg shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-gold" size={28} />
                <h3 className="font-montserrat text-2xl font-bold text-deep-navy">
                  Other Cities in Sindh
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                We also supply seafood to major cities across Sindh province:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {otherCities.map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">{city}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gold/20 rounded-lg border border-gold/30">
                <p className="text-sm text-gray-700">
                  <strong className="text-deep-navy">Bulk Orders:</strong> Special rates available for orders outside Karachi
                </p>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-ice-white rounded-lg shadow-lg p-8 border-2 border-gold/30">
              <h3 className="font-montserrat text-xl font-bold text-deep-navy mb-4">
                Delivery Information
              </h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><strong className="text-deep-navy">Next-Day Delivery:</strong> Karachi (all orders)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><strong className="text-deep-navy">Next-Day Delivery:</strong> Other Sindh cities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><strong className="text-deep-navy">Temperature-Controlled:</strong> All deliveries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><strong className="text-deep-navy">Minimum Order:</strong> No minimum for Karachi</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block w-full bg-gold text-deep-navy px-6 py-3 rounded-md font-semibold text-center hover:bg-opacity-90 hover:scale-105 transition-all duration-300 transform"
                >
                  Check Delivery to Your Area
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-ice-white text-deep-navy rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-montserrat text-2xl sm:text-3xl font-bold text-gold mb-4">
              Don't See Your Area Listed?
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              We're expanding our delivery network. Contact us to check if we can deliver to your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+923102061037"
                className="inline-block bg-gold text-deep-navy px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 transform"
              >
                Call: +92-310-2061037
              </a>
              <a
                href="tel:+923222666392"
                className="inline-block bg-transparent border-2 border-deep-navy text-deep-navy px-8 py-3 rounded-md font-semibold hover:bg-deep-navy hover:text-ice-white hover:scale-105 transition-all duration-300 transform"
              >
                Call: +92-322-2666392
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
