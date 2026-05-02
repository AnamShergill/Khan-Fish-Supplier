'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success';

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('submitting');

    // Simulate API call with 2-second timeout
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setStatus('success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-white">
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
            Contact & <span className="text-gold">Location</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Get in touch with us today. We're here to answer your questions and discuss your seafood needs.
          </p>
        </motion.div>

        {/* 60/40 Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* 60% - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#F8F9FA] rounded-lg shadow-xl p-8 sm:p-12 h-full flex flex-col">
              <h3 className="font-montserrat text-2xl font-bold text-deep-navy mb-6">
                Send Us a Message
              </h3>

              {status === 'success' ? (
                <div className="text-center py-12 flex-1 flex flex-col items-center justify-center">
                  <CheckCircle className="text-gold mx-auto mb-4" size={64} />
                  <h3 className="font-montserrat text-2xl font-bold text-deep-navy mb-2">
                    Thank you!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Our export team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  {/* 2-Column Grid for First Name and Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-deep-navy font-semibold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-deep-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200"
                        placeholder="John"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-deep-navy font-semibold mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-deep-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Full-Width Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-deep-navy font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-deep-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Full-Width Message Field */}
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="message" className="block text-deep-navy font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full flex-1 min-h-[150px] px-4 py-3 border-2 border-deep-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200 resize-none"
                      placeholder="Tell us about your seafood needs..."
                    />
                  </div>

                  {/* Submit Button with Accent Color */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-gold text-deep-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-deep-navy" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* 40% - Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-deep-navy text-ice-white rounded-lg shadow-xl p-8">
              <h3 className="font-montserrat text-2xl font-bold text-gold mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1">Phone</h4>
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-gold transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1">Email</h4>
                    <a href="mailto:info@khanfishsupplier.com" className="text-gray-300 hover:text-gold transition-colors break-all">
                      info@khanfishsupplier.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-1">Headquarters</h4>
                    <p className="text-gray-300 leading-relaxed">
                      123 Harbor Drive<br />
                      Coastal City, CC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-gray-200 rounded-lg shadow-xl overflow-hidden h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841374555634!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Khan Fish Supplier Location"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
