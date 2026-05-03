'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({ forceBlueBackground = false }: { forceBlueBackground?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#local-distribution', label: 'Local Distribution' },
    { href: '/#products', label: 'Our Products' },
    { href: '/#imported-seafood', label: 'Imported Fish' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || forceBlueBackground ? 'bg-deep-navy shadow-lg' : 'bg-white/30 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <div className="relative">
              <Image
                src="/images/fish.png"
                alt="Khan Fish Supplier Logo"
                width={150}
                height={150}
                className="h-28 w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_6px_12px_rgba(212,175,55,0.4)] transition-all duration-300"
                priority
              />
            </div>
            <div className="font-montserrat font-bold text-2xl sm:text-3xl tracking-tight leading-tight">
              <span 
                className={`transition-colors duration-300 ${isScrolled || forceBlueBackground ? 'text-ice-white' : 'text-deep-navy'}`}
                style={{ textShadow: (isScrolled || forceBlueBackground) ? 'none' : '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                KHAN{' '}
              </span>
              <span 
                className="text-gold"
                style={{ textShadow: (isScrolled || forceBlueBackground) ? 'none' : '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                FI
              </span>
              <span 
                className={`transition-colors duration-300 ${isScrolled || forceBlueBackground ? 'text-ice-white' : 'text-deep-navy'}`}
                style={{ textShadow: (isScrolled || forceBlueBackground) ? 'none' : '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                SH SUPPLIER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-bold text-base transition-all duration-200 group hover:scale-110 ${
                  isScrolled || forceBlueBackground ? 'text-ice-white hover:text-gold' : 'text-deep-navy hover:text-gold'
                }`}
                style={{ textShadow: (isScrolled || forceBlueBackground) ? 'none' : '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                {link.label}
                <span className={`absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled || forceBlueBackground ? 'bg-gold' : 'bg-deep-navy'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-gold text-deep-navy px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-md transform"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-ice-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-20 right-0 h-screen w-64 bg-deep-navy transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-ice-white hover:text-gold transition-colors duration-200 font-medium text-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gold text-deep-navy px-6 py-3 rounded-md font-semibold text-center hover:bg-opacity-90 hover:scale-105 transition-all duration-300 transform"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
