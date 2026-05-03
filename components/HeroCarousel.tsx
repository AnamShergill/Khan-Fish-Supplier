'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    headline: 'THE WONDERS OF THE',
    headlineAccent: 'OCEAN',
    subheadline: 'ON YOUR PLATE',
  },
  {
    id: 2,
    image: '/images/hero2.jpg',
    headline: 'FRESH FROM THE',
    headlineAccent: 'SEA',
    subheadline: 'DELIVERED DAILY',
  },
  {
    id: 3,
    image: '/images/hero.jpg',
    headline: 'PREMIUM QUALITY',
    headlineAccent: 'SEAFOOD',
    subheadline: 'WHOLESALE PRICES',
  },
];

// Typing animation variants for each letter
const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: delay + index * 0.05, // 50ms delay between each letter
            duration: 0.1,
          }}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image - Optimized for fast loading */}
          <div className="absolute inset-0 bg-gray-900">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].headline}
              fill
              priority={currentSlide === 0}
              quality={60}
              sizes="100vw"
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
          </div>
          
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30 z-10" />

          {/* Centered Content */}
          <div className="relative h-full flex items-center justify-center z-20">
            <div className="text-center px-4 sm:px-6 lg:px-8">
              {/* Main Headline with Typing Animation */}
              <motion.h1
                key={`headline-${currentSlide}`}
                className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 tracking-wider"
              >
                <span className="text-ice-white">
                  <TypingText text={slides[currentSlide].headline} delay={0.3} />
                </span>
                {' '}
                <span className="relative inline-block">
                  <span className="text-gold">
                    <TypingText 
                      text={slides[currentSlide].headlineAccent} 
                      delay={0.3 + slides[currentSlide].headline.length * 0.05 + 0.1} 
                    />
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-1 bg-deep-navy"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      delay: 0.3 + (slides[currentSlide].headline.length + slides[currentSlide].headlineAccent.length) * 0.05 + 0.2,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
              </motion.h1>

              {/* Subheadline with Typing Animation */}
              <motion.p
                key={`subheadline-${currentSlide}`}
                className="text-ice-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-widest"
              >
                <TypingText 
                  text={slides[currentSlide].subheadline} 
                  delay={0.3 + (slides[currentSlide].headline.length + slides[currentSlide].headlineAccent.length) * 0.05 + 0.3} 
                />
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-gold'
                : 'w-8 bg-ice-white/50 hover:bg-gold/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
