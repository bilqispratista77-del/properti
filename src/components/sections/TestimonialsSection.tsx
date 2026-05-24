'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ir. Bambang Sutrisno',
    role: 'Pemilik Villa, Jakarta Selatan',
    avatar: '/images/testimonial-1.png',
    rating: 5,
    text: 'Grand Karya benar-benar memahami visi saya untuk villa impian saya. Tim yang sangat profesional, komunikatif, dan hasilnya melebihi ekspektasi. Renovasi selesai tepat waktu dengan kualitas yang luar biasa.',
  },
  {
    id: 2,
    name: 'Dr. Sari Dewi Kusuma',
    role: 'Investor Property, Bandung',
    avatar: '/images/testimonial-2.png',
    rating: 5,
    text: 'Sudah 3 proyek saya percayakan kepada Grand Karya dan semuanya hasilnya memuaskan. Harga transparan, material berkualitas, dan tim yang selalu responsif. Highly recommended untuk developer property.',
  },
  {
    id: 3,
    name: 'H. Ahmad Fauzi',
    role: 'Direktur PT Maju Bersama',
    avatar: '/images/testimonial-3.png',
    rating: 5,
    text: 'Untuk pembangunan kantor pusat perusahaan kami, Grand Karya memberikan hasil yang sangat memuaskan. Proses terstruktur, pengawasan ketat, dan kualitas bangunan yang premium. Sangat profesional.',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimoni" ref={ref} className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Testimoni
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Apa Kata <span className="text-gold">Klien Kami</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari
            para klien yang telah mempercayakan proyek mereka kepada Grand Karya.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-border/50">
            {/* Quote icon */}
            <Quote className="w-12 h-12 text-gold/20 mb-6" />

            {/* Testimonial content */}
            <div className="min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ${
                    index === current
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 absolute top-0 left-0 right-0 pointer-events-none'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border/50">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === current
                        ? 'w-8 h-3 bg-gold'
                        : 'w-3 h-3 bg-concrete-light hover:bg-concrete'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
