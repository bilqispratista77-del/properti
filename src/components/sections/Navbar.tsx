'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <Image
              src="/images/company-logo.png"
              alt="Grand Karya Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                GRAND
              </span>
              <span
                className={`text-xl font-light tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-gold' : 'text-gold'
                }`}
              >
                {' '}
                KARYA
              </span>
              <p
                className={`text-[10px] uppercase tracking-[0.2em] -mt-1 transition-colors duration-300 ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/70'
                }`}
              >
                Contractor & Developer
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold relative group ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#kontak"
              className="bg-gold text-white px-6 py-2.5 text-sm font-semibold tracking-wide rounded hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Konsultasi Gratis
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-6 border border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-foreground text-sm font-medium tracking-wide hover:text-gold transition-colors border-b border-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 bg-gold text-white px-6 py-3 text-sm font-semibold tracking-wide rounded text-center hover:bg-gold-dark transition-colors"
            >
              Konsultasi Gratis
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
