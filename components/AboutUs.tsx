'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
            About <span className="text-gold">Us</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Your trusted partner in premium seafood distribution since 1995
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about.png"
              alt="Professional cold-storage facility"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              loading="lazy"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Headline */}
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy leading-tight">
              Leading the <span className="text-gold">Seafood Supply Chain</span>
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                For more than 15 years, we have been at the forefront of seafood distribution, 
                connecting premium suppliers with discerning buyers across local and international 
                markets. Our commitment to excellence has made us the trusted partner for restaurants, 
                retailers, and wholesalers who demand nothing but the finest quality seafood.
              </p>

              <p>
                <strong className="text-deep-navy">Quality Assurance</strong> is the cornerstone of 
                our operations. Every product that passes through our facility undergoes rigorous 
                inspection and testing to meet the highest industry standards. From sourcing to 
                delivery, we maintain complete traceability, ensuring that only the freshest, 
                sustainably-sourced seafood reaches your table.
              </p>

              <p>
                Our state-of-the-art <strong className="text-deep-navy">Cold-Chain Integrity</strong> system 
                guarantees optimal temperature control throughout the entire distribution process. 
                With advanced refrigeration technology, real-time monitoring, and certified logistics 
                partners, we preserve the natural flavor, texture, and nutritional value of every 
                product—from ocean to destination, without compromise.
              </p>
            </div>
         
          </motion.div>

        </div>
      </div>
    </section>
  );
}
