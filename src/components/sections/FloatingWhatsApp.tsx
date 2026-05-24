'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20Grand%20Karya,%20saya%20tertarik%20untuk%20konsultasi%20gratis."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-label="Chat via WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />

      {/* Button */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-white rounded-xl shadow-lg px-4 py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none group-hover:pointer-events-auto">
        <p className="text-sm font-semibold text-foreground">Chat dengan kami</p>
        <p className="text-xs text-muted-foreground">Respon cepat via WhatsApp</p>
        {/* Arrow */}
        <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
      </div>
    </a>
  );
}
