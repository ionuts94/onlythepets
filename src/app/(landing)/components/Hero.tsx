// import heroImage from './asset/0824614df950b61a937d9d1f1c39f4403115f6ea.png';
"use client"
import heroImage from "../assets/0824614df950b61a937d9d1f1c39f4403115f6ea.png"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt="Premium Pet Products"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/60 via-pink-200/50 to-rose-200/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 lg:py-48">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            Premium Pet Brands for Modern Retailers
          </h1>
          <p className="text-xl md:text-2xl text-pink-50 mb-12 font-light">
            We represent innovative European pet brands and connect them with trusted distributors and retailers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-pink-600 hover:bg-pink-50 transition-colors duration-200 rounded-lg shadow-lg"
            >
              Contact Us
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-pink-600 transition-colors duration-200 rounded-lg"
            >
              Become a Distribution Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}