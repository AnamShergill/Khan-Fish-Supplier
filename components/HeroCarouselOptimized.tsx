'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
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

// Optimized typing animation using CSS
const TypingText = ({ text, delay = 0, isAccent = false }: { text: string; delay?: number; isAccent?: boolean }) => {
  return (
    <span 
      className={`inline-block animate-typing ${isAccent ? 'text-gold' : 'text-ice-white'}`}
      style={{ 
        animationDelay: `${delay}ms`,
        textShadow: isAccent ? '0 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(212,175,55,0.3)' : 'none'
      }}
    >
      {text}
    </span>
  );
};

export default function HeroCarouselOptimized() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(new Set([0]));

  // Preload next slide
  const preloadNextSlide = useCallback((slideIndex: number) => {
    const nextIndex = (slideIndex + 1) % slides.length;
    if (!loadedSlides.has(nextIndex)) {
      setLoadedSlides(prev => new Set([...prev, nextIndex]));
    }
  }, [loadedSlides]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => {
          const next = (prev + 1) % slides.length;
          preloadNextSlide(next);
          return next;
        });
        setIsTransitioning(false);
      }, 300);
    }, 6000);

    return () => clearInterval(timer);
  }, [preloadNextSlide]);

  // Preload next slide on mount
  useEffect(() => {
    preloadNextSlide(0);
  }, [preloadNextSlide]);

  const handleSlideChange = useCallback((index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      preloadNextSlide(index);
      setIsTransitioning(false);
    }, 300);
  }, [currentSlide, preloadNextSlide]);

  const currentSlideData = useMemo(() => slides[currentSlide], [currentSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images - Only render loaded slides */}
      {slides.map((slide, index) => (
        loadedSlides.has(index) && (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gray-900">
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority={index === 0}
                quality={index === 0 ? 75 : 65}
                sizes="100vw"
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />
          </div>
        )
      ))}

      {/* Content - Optimized with CSS animations */}
      <div className="relative h-full flex items-center justify-center z-20">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 tracking-wider">
            <TypingText text={currentSlideData.headline} delay={300} />
            {' '}
            <span className="relative inline-block">
              <TypingText 
                text={currentSlideData.headlineAccent} 
                delay={300 + currentSlideData.headline.length * 50 + 100}
                isAccent={true}
              />
              <span 
                className="absolute bottom-0 left-0 right-0 h-1 bg-deep-navy animate-underline"
                style={{ 
                  animationDelay: `${300 + (currentSlideData.headline.length + currentSlideData.headlineAccent.length) * 50 + 200}ms` 
                }}
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-ice-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-widest">
            <TypingText 
              text={currentSlideData.subheadline} 
              delay={300 + (currentSlideData.headline.length + currentSlideData.headlineAccent.length) * 50 + 300}
            />
          </p>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-gold'
                : 'w-8 bg-ice-white/50 hover:bg-gold/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes typing {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes underline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-typing {
          animation: typing 0.3s ease-out forwards;
          opacity: 0;
        }
        
        .animate-underline {
          transform-origin: left;
          animation: underline 0.5s ease-out forwards;
          transform: scaleX(0);
        }
      `}</style>
    </section>
  );
}
