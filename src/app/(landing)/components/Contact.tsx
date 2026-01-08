import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-xl text-neutral-300 font-light">
            Contact us to discuss distribution opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-neutral-800 p-12">
            <h3 className="text-2xl mb-8 tracking-tight">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1 text-neutral-400" />
                <div>
                  <div className="text-sm text-neutral-400 mb-1">Email</div>
                  <a href="mailto:info@petproductsagent.com" className="text-lg hover:text-neutral-300 transition-colors">
                    info@petproductsagent.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1 text-neutral-400" />
                <div>
                  <div className="text-sm text-neutral-400 mb-1">Phone</div>
                  <a href="tel:+123456789" className="text-lg hover:text-neutral-300 transition-colors">
                    +1 (234) 567-89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={24} strokeWidth={1.5} className="flex-shrink-0 mt-1 text-neutral-400" />
                <div>
                  <div className="text-sm text-neutral-400 mb-1">Region Served</div>
                  <div className="text-lg">
                    Europe
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-neutral-700 cursor-pointer">
              <a
                href="mailto:info@petproductsagent.com"
                className="w-full px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors duration-200"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
