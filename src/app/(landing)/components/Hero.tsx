"use client"

import Link from "next/link";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1743648773958-0715973a12d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcGV0JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzY3NzkyMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Premium Pet Products"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 lg:py-48">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            Premium Pet Brands for Modern Retailers
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 font-light">
            We represent innovative European pet brands and connect them with trusted distributors and retailers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="cursor-pointer px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="#contact"
              className="cursor-pointer px-8 py-4 border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors duration-200"
            >
              Become a Distribution Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
