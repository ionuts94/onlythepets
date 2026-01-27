import { Award, Globe, Headphones, TrendingUp } from 'lucide-react';

export function WhyPartner() {
  const benefits = [
    {
      icon: Award,
      title: 'Premium and Differentiated Products',
      description: 'Differentiate your assortment with exclusive European brands that support premium pricing and higher margins.'
    },
    {
      icon: Globe,
      title: 'Strong European Brand Identity',
      description: 'Represent brands with proven heritage and authenticity'
    },
    {
      icon: Headphones,
      title: 'Reliable Supply and Professional Support',
      description: 'Consistent product availability and dedicated partnership support'
    },
    {
      icon: TrendingUp,
      title: 'Ideal for Premium Categories',
      description: 'Perfect for retailers seeking to elevate their pet product offerings'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center mb-20 tracking-tight text-pink-900">Why Partner With Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 text-white flex items-center justify-center rounded-lg shadow-md">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-3 tracking-tight text-pink-900">{benefit.title}</h3>
                  <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}