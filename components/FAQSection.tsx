'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Are you the best fish supplier in Karachi?",
    answer: "Khan Fish Supplier is one of the leading fish suppliers in Karachi with over 15 years of experience. We serve 200+ restaurants, hotels, and retail markets across Karachi with premium quality fresh and frozen seafood. Our state-of-the-art cold storage facility at West Wharf ensures the highest quality standards."
  },
  {
    question: "What areas in Karachi do you deliver seafood to?",
    answer: "We deliver fresh and frozen seafood across all areas of Karachi including Clifton, DHA, Gulshan-e-Iqbal, Saddar, North Nazimabad, Malir, Korangi, Landhi, and surrounding areas. We offer next-day delivery for all orders placed within Karachi city limits."
  },
  {
    question: "Do you supply seafood to restaurants and hotels?",
    answer: "Yes! We are a trusted wholesale seafood supplier for restaurants, hotels, catering services, and food businesses across Karachi and Pakistan. We offer competitive wholesale prices, consistent quality, daily delivery, and customized orders for commercial clients."
  },
  {
    question: "What types of fish and seafood do you supply?",
    answer: "We supply a wide range of seafood including: Fresh Fish (Pomfret, Red Snapper, Grouper, Croaker), Frozen Fish (Ribbon Fish, Mackerel, Tuna), Shellfish (Shrimp, Prawns, Lobster, Crabs), Imported Seafood (Pangasius Fillets from Vietnam), and Specialty Items (Squid, Cuttlefish, Eels). All products are quality-checked and stored in temperature-controlled facilities."
  },
  {
    question: "How can I get wholesale fish prices in Karachi?",
    answer: "For wholesale seafood prices, call us at +92-310-2061037 or +92-322-2666392. You can also email info@khanfishsupplier.com or fill out our contact form. We provide competitive wholesale rates for bulk orders and regular customers. Prices vary based on product type, quantity, and market conditions."
  },
  {
    question: "Do you have fresh fish or only frozen seafood?",
    answer: "We supply both fresh and frozen seafood. Fresh fish arrives daily from local fishing harbors and is stored in our cold storage facility. Frozen seafood is IQF (Individually Quick Frozen) and maintained at optimal temperatures. We can provide fresh or frozen based on your preference and requirements."
  },
  {
    question: "Where is your fish supply location in Karachi?",
    answer: "Khan Fish Supplier is located at Suite No.A/21, First Floor, Commercial Center, West Wharf, Dock Yard Road, Karachi. We are situated in the heart of Karachi's seafood district, ensuring direct access to the freshest catches and efficient distribution across the city."
  },
  {
    question: "Do you export seafood internationally?",
    answer: "Yes, we export premium quality seafood to international markets including Thailand, Malaysia, Middle East, and other countries. We handle all export documentation, quality certifications, and cold chain logistics for international shipments."
  },
  {
    question: "What are your business hours?",
    answer: "We are open Monday to Saturday from 8:00 AM to 6:00 PM. For urgent orders or inquiries outside business hours, you can call our 24/7 hotline at +92-310-2061037. We also accept orders via WhatsApp for your convenience."
  },
  {
    question: "Do you provide seafood quality certificates?",
    answer: "Yes, all our seafood products come with quality certificates and are sourced from certified suppliers. We maintain strict quality control standards and can provide documentation for health inspections, export requirements, or commercial purposes upon request."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="faq" className="py-20 sm:py-24 lg:py-32 bg-white/95">
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
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
              Common questions about our seafood supply services in Karachi, Pakistan
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-2 border-deep-navy rounded-lg overflow-hidden hover:border-gold transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-deep-navy hover:bg-deep-navy/90 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-montserrat font-bold text-lg text-ice-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 bg-white text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-lg mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block bg-gold text-deep-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
              >
                Contact Us
              </a>
              <a
                href="tel:+923102061037"
                className="inline-block bg-transparent border-2 border-deep-navy text-deep-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-deep-navy hover:text-ice-white hover:scale-105 transition-all duration-300 transform"
              >
                Call: +92-310-2061037
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
