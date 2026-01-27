import image_2313e945860d7bbeb2ebc8c2e2639b00c672b77c from '../assets/2313e945860d7bbeb2ebc8c2e2639b00c672b77c.png';
import image_3b7aa94ec29b3e6de1dbccec89ef9d17c1c26319 from '../assets/3b7aa94ec29b3e6de1dbccec89ef9d17c1c26319.png';
import image_776bd8b7e283b918245cde8c0ecda2ab7b9f9a8a from '../assets/776bd8b7e283b918245cde8c0ecda2ab7b9f9a8a.png';
import image_dd8977dc3e505c79f507c0e41d7b5c7801e43056 from '../assets/dd8977dc3e505c79f507c0e41d7b5c7801e43056.png';
import image_b3ad0f112e909c37595d9a8a86f814e168a41d5c from '../assets/b3ad0f112e909c37595d9a8a86f814e168a41d5c.png';
import image_b46e017ff16d98b9a5fcd8f0c0c964603d3091cc from '../assets/b46e017ff16d98b9a5fcd8f0c0c964603d3091cc.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Brands() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center mb-20 tracking-tight text-pink-900">Our Brands</h2>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Cattyfeast */}
          <div className="bg-white p-12 rounded-3xl shadow-sm">
            <div className="mb-8">
              <img
                src={image_2313e945860d7bbeb2ebc8c2e2639b00c672b77c.src}
                alt="FidoVet Fresh Snacks"
                className="w-full h-96 object-cover mb-8"
              />
              <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">Cattyfeast</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              Premium wet cat food line made in Italy with high meat content and balanced nutrition, free from by products and rich in real meat or fish for strong flavor and palatability.
            </p>
            <a
              href="https://www.fidovet.eu/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors duration-200 border-b border-neutral-900 hover:border-neutral-600"
            >
              Learn more →
            </a>
          </div>

          {/* The Art Litter */}
          <div className="bg-white p-12 rounded-3xl shadow-sm">
            <div className="mb-8">
              <img
                src={image_3b7aa94ec29b3e6de1dbccec89ef9d17c1c26319.src}
                alt="The Art Litter"
                className="w-full h-96 object-cover mb-8"
              />
              <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">Art Litter</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              High-end cat litter for specialist retailers brand focused on comfort and cleanliness.
            </p>
            <a
              href="https://theartlitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors duration-200 border-b border-neutral-900 hover:border-neutral-600"
            >
              Learn more →
            </a>
          </div>

          {/* wowow */}
          <div className="bg-white p-12 rounded-3xl shadow-sm">
            <div className="mb-8">
              <ImageWithFallback
                src={image_dd8977dc3e505c79f507c0e41d7b5c7801e43056.src}
                alt="wowow"
                className="w-full h-96 object-contain mb-8"
              />
              <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">Wowow</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              Premium wet dog food line from Fidovet made in Italy with very high real meat content and no by-products, designed to deliver rich flavor and balanced nutrition in every meal.
            </p>
            <a
              href="https://www.fidovet.eu/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors duration-200 border-b border-neutral-900 hover:border-neutral-600"
            >
              Learn more →
            </a>
          </div>

          {/* Smart Litter */}
          <div className="bg-white p-12 rounded-3xl shadow-sm">
            <div className="mb-8">
              <ImageWithFallback
                src={image_776bd8b7e283b918245cde8c0ecda2ab7b9f9a8a.src}
                alt="Smart Litter"
                className="w-full h-96 object-cover mb-8"
              />
              <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">Smart Litter</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              High-end cat litter for stores brand designed for easy, hygienic pet care.
            </p>
            <a
              href="https://thesmartlitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors duration-200 border-b border-neutral-900 hover:border-neutral-600"
            >
              Learn more →
            </a>
          </div>

          {/* Yogurt */}
          <div className="bg-white p-12 rounded-3xl shadow-sm">
            <div className="mb-8">
              <ImageWithFallback
                src={image_b46e017ff16d98b9a5fcd8f0c0c964603d3091cc.src}
                alt="Yogurt"
                className="w-full h-96 object-contain mb-8"
              />
              <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">Fidovet Yogurt</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              Innovative creamy, quick-to-serve snacks made with real ingredients and simple preparation, giving dogs a tasty and digestible treat that adds variety and enjoyment to their diet.
            </p>
            <a
              href="https://www.fidovet.eu/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors duration-200 border-b border-neutral-900 hover:border-neutral-600"
            >
              Learn more →
            </a>
          </div>

          {/* gelato */}
          <div className="bg-white p-12 rounded-3xl shadow-sm">
            <div className="mb-8">
              <ImageWithFallback
                src={image_b3ad0f112e909c37595d9a8a86f814e168a41d5c.src}
                alt="gelato"
                className="w-full h-96 object-contain mb-8"
              />
              <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">Fidovet Gelato</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              Italian-inspired frozen snacks for dogs made from easy-to-prepare mixes in delicious natural flavours. They offer a refreshing, nutritious and highly digestible treat.
            </p>
            <a
              href="https://www.fidovet.eu/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors duration-200 border-b border-neutral-900 hover:border-neutral-600"
            >
              Learn more →
            </a>
          </div>

          {/* gelato */}
          <div className="bg-white p-12 rounded-3xl shadow-sm">
            <div className="mb-8">
              <ImageWithFallback
                src="https://www.fidovet.eu/pub/media/catalog/product/cache/ea1bceea58f6746f77bf897097b9fa81/b/a/bauff-web.png"
                alt="gelato"
                className="w-full h-96 object-cover mb-8"
              />
              <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">Bauff</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              Innovative beer for dogs refreshing and designed to hydrate and revitalise your furry friend,especially after an energy-filled session of outdoor activity.
            </p>
            <a
              href="https://www.fidovet.eu/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors duration-200 border-b border-neutral-900 hover:border-neutral-600"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}