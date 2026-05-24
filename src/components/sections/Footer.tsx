'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const quickLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Proses Kerja', href: '#proses' },
  { label: 'Testimoni', href: '#testimoni' },
];

const serviceLinks = [
  { label: 'Jasa Konstruksi', href: '#layanan' },
  { label: 'Renovasi Rumah', href: '#layanan' },
  { label: 'Design & Build', href: '#layanan' },
  { label: 'Interior Design', href: '#layanan' },
  { label: 'Property Development', href: '#layanan' },
  { label: 'Project Management', href: '#layanan' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <footer id="kontak" ref={ref} className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className={`lg:col-span-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <a href="#beranda" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/company-logo.png"
                alt="Grand Karya Logo"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white">GRAND</span>
                <span className="text-xl font-light tracking-tight text-gold"> KARYA</span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Perusahaan kontraktor dan property developer terpercaya yang
              berkomitmen membangun hunian dan properti berkualitas dengan
              standar profesional.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white mb-6">
              Layanan
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 leading-relaxed">
                  Jl. Raya Premium No. 88, Kelapa Gading, Jakarta Utara 14240
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-sm text-white/50 hover:text-gold transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@grandkarya.co.id" className="text-sm text-white/50 hover:text-gold transition-colors">
                  info@grandkarya.co.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 leading-relaxed">
                  Sen - Jum: 08:00 - 17:00<br />
                  Sab: 08:00 - 12:00
                </span>
              </li>
            </ul>

            {/* Mini Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.89!3d-6.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMDAuMCJTIDEwNsKwNTMnMjQuMCJF!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Karya Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} PT Grand Karya. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-white/40 hover:text-gold transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-xs text-white/40 hover:text-gold transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
