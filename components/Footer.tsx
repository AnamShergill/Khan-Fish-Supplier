'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy text-ice-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <div className="relative">
                <Image
                  src="/images/fish.png"
                  alt="Khan Fish Supplier Logo"
                  width={160}
                  height={160}
                  className="h-28 w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_6px_12px_rgba(212,175,55,0.4)] transition-all duration-300"
                />
              </div>
              <h3 className="font-montserrat font-bold text-2xl">
                <span className="text-ice-white">KHAN </span>
                <span className="text-gold">FI</span>
                <span className="text-ice-white">SH SUPPLIER</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your trusted partner in premium seafood distribution since 2010. Delivering excellence from ocean to table.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#local-distribution" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Local Distribution
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Contact
                </Link>
              </li>
              
              
              
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4 text-gold">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Local Distribution</li>
              <li className="text-gray-300">International Export</li>
              <li className="text-gray-300">Wholesale Supply</li>
              <li className="text-gray-300">Cold Chain Logistics</li>
              <li className="text-gray-300">Custom Orders</li>
              <li className="text-gray-300">Quality Assurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Suite No.A/21, First Floor<br />
                  Commercial Center, West Wharf<br />
                  Dock Yard Road<br />
                  Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-gold flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+923102061037" className="text-gray-300 hover:text-gold transition-colors duration-200">
                    +92-310-2061037
                  </a>
                  <a href="tel:+923222666392" className="text-gray-300 hover:text-gold transition-colors duration-200">
                    +92-322-2666392
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a href="mailto:info@khanfishsupplier.com" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  info@khanfishsupplier.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} KhanFishSupplier. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-gold transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-gold transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
