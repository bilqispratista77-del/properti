'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { MessageCircle, Phone } from 'lucide-react';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.png"
          alt="Construction Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className={`text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Mulai Proyek Anda
        </p>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Siap Mewujudkan <span className="text-gold">Bangunan Impian</span> Anda?
        </h2>
        <p
          className={`text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Konsultasikan kebutuhan konstruksi dan pengembangan properti Anda secara
          gratis bersama tim ahli kami. Kami siap membantu dari tahap perencanaan
          hingga serah terima.
        </p>
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <a
            href="https://wa.me/6281234567890?text=Halo%20Grand%20Karya,%20saya%20tertarik%20untuk%20konsultasi%20gratis."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-500 text-white px-8 py-4 text-base font-semibold tracking-wide rounded hover:bg-green-600 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp
          </a>
          <a
            href="tel:+6281234567890"
            className="group border-2 border-gold text-gold px-8 py-4 text-base font-semibold tracking-wide rounded hover:bg-gold hover:text-white transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
