'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const productImages = [
  {
    id: 1,
    url: '/images/pangasius-fillet.png',
    alt: 'Pangasius Fillets - Fresh Cut',
  },
  {
    id: 2,
    url: '/images/pagasius1.png',
    alt: 'Pangasius Fillets - Frozen Pack',
  },
  {
    id: 3,
    url: '/images/frozen-peng.png',
    alt: 'Pangasius Fillets - Quality Check',
  },
];

const productFeatures = [
  'Boneless',
  'Skinless',
  'IQF (Individually Quick Frozen)',
  'Various sizes available',
  'Certified quality standards',
  'Vacuum packed for freshness',
];

export default function ImportedSeafood() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <section id="imported-seafood" className="py-20 sm:py-24 lg:py-32 bg-white">
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
            <Globe className="text-gold" size={32} />
            <span className="bg-gold text-deep-navy px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              Imported Seafood
            </span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
            Premium <span className="text-gold">Imported Products</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Khan Fish Supplier also deals in high-quality imported seafood, bringing the world's finest products to your table.
          </p>
        </motion.div>

        {/* Product Display */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gold/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery Side */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
                  <Image
                    src={productImages[currentImage].url}
                    alt={productImages[currentImage].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={80}
                    priority={currentImage === 0}
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-deep-navy px-4 py-2 rounded-full font-bold text-sm uppercase shadow-lg">
                      Imported from Vietnam
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-deep-navy text-gold px-4 py-2 rounded-full font-bold text-sm uppercase shadow-lg">
                      Frozen
                    </span>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-deep-navy p-2 rounded-full shadow-lg transition-all duration-200"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-deep-navy p-2 rounded-full shadow-lg transition-all duration-200"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                    {currentImage + 1} / {productImages.length}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-3 gap-2 p-4 bg-gray-100">
                  {productImages.map((img, index) => (
                    <button
                      key={img.id}
                      onClick={() => setCurrentImage(index)}
                      className={`relative h-24 rounded-lg overflow-hidden transition-all duration-200 bg-white ${
                        currentImage === index
                          ? 'ring-4 ring-gold scale-105'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-contain p-2"
                        sizes="150px"
                        quality={60}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                    Premium Import
                  </span>
                </div>
                
                <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
                  Pangasius Fillets
                </h3>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Premium quality frozen pangasius fillets imported directly from Vietnam. 
                  Perfect for restaurants, hotels, and food service businesses looking for 
                  consistent quality and competitive pricing.
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-montserrat font-bold text-deep-navy text-lg mb-4">
                    Product Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {productFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="text-gold flex-shrink-0" size={18} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Origin Badge */}
                <div className="flex items-center gap-3 p-4 bg-gold/10 rounded-lg border border-gold/30 mb-6">
                  <Globe className="text-gold" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Imported from</p>
                    <p className="font-bold text-deep-navy">Vietnam</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4">
                  <a
                    href="#contact"
                    className="inline-block bg-gold text-deep-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-deep-navy text-center"
                  >
                    Request Quote
                  </a>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+923102061037"
                      className="inline-block bg-transparent border-2 border-deep-navy text-deep-navy px-6 py-3 rounded-md font-semibold hover:bg-deep-navy hover:text-ice-white transition-all duration-200 text-center"
                    >
                      Call: +92-310-2061037
                    </a>
                    <a
                      href="tel:+923222666392"
                      className="inline-block bg-transparent border-2 border-deep-navy text-deep-navy px-6 py-3 rounded-md font-semibold hover:bg-deep-navy hover:text-ice-white transition-all duration-200 text-center"
                    >
                      Call: +92-322-2666392
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-deep-navy text-ice-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-montserrat text-2xl font-bold text-gold mb-4">
              Looking for Other Imported Seafood?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              We can source a wide variety of imported seafood products based on your requirements. Contact us to discuss your needs.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gold text-deep-navy px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
