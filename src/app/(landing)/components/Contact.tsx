"use client"

import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-pink-400 to-rose-400 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-xl text-pink-50 font-light">
            Contact us to discuss distribution opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white text-neutral-900 p-12 rounded-2xl shadow-2xl">
            <h3 className="text-2xl mb-8 tracking-tight text-pink-900">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1 text-pink-400" />
                <div>
                  <div className="text-sm text-neutral-500 mb-1">Email</div>
                  <a href="mailto:info@onlythepets.com" className="text-lg text-pink-600 hover:text-pink-700 transition-colors">
                    info@onlythepets.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1 text-pink-400" />
                <div>
                  <div className="text-sm text-neutral-500 mb-1">Region Served</div>
                  <div className="text-lg text-neutral-700">
                    Europe
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1 text-pink-400" />
                <div>
                  <div className="text-sm text-neutral-500 mb-1">Phone</div>
                  <a href="tel:+445601033527" className="text-lg text-pink-600 hover:text-pink-700 transition-colors">
                    +44 560103 3527
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-pink-100">
              <button
                onClick={() => window.location.href = 'mailto:info@onlythepets.com'}
                className="w-full px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:from-pink-500 hover:to-rose-500 transition-all duration-200 rounded-lg shadow-lg"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}