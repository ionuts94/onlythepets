import artLitterImage from '../assets/3b7aa94ec29b3e6de1dbccec89ef9d17c1c26319.png';

export function Brands() {
  console.log(artLitterImage)
  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center mb-20 tracking-tight">Our Brands</h2>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* FidoVet */}
          <div className="bg-white p-12">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1761660306229-8f99a11ef623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmVhdHMlMjBoZWFsdGh5fGVufDF8fHx8MTc2Nzc5MjI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="FidoVet Fresh Snacks"
                className="w-full h-64 object-cover mb-8"
              />
              <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">FidoVet</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              Functional fresh pet snacks developed with veterinary expertise for health-conscious pet owners.
            </p>
            <a
              href="https://www.fidovet.eu/en/fresh-snacks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors duration-200 border-b border-neutral-900 hover:border-neutral-600"
            >
              Learn more →
            </a>
          </div>

          {/* The Art Litter */}
          <div className="bg-white p-12">
            <div className="mb-8">
              <img
                src={artLitterImage.src}
                alt="The Art Litter"
                className="w-full h-96 object-cover mb-8"
              />
              <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">The Art Litter</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed font-light mb-6">
              A premium cat litter brand combining performance, sustainability, and refined design.
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
        </div>
      </div>
    </section>
  );
}