'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { CheckCircle } from 'lucide-react';

const values = [
  { text: 'Kualitas material terbaik dari supplier terpercaya' },
  { text: 'Tim profesional bersertifikasi dan berpengalaman' },
  { text: 'Transparansi harga tanpa biaya tersembunyi' },
  { text: 'Garansi pekerjaan untuk kepuasan klien' },
  { text: 'Tepat waktu sesuai jadwal yang disepakati' },
  { text: 'Legalitas perusahaan lengkap dan terdaftar resmi' },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="tentang" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Tentang Kami
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Mitra Terpercaya dalam <span className="text-gold">Pembangunan</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            PT Grand Karya adalah perusahaan kontraktor dan property developer yang berdiri sejak 2009,
            berkomitmen menghadirkan solusi konstruksi dan pengembangan properti berkualitas tinggi.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-team.png"
                alt="Tim Grand Karya"
                width={700}
                height={500}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-xl shadow-xl hidden sm:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm font-medium opacity-90">Tahun Pengalaman</p>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Membangun dengan Integritas & Profesionalisme
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dengan pengalaman lebih dari satu dekade, Grand Karya telah menjadi mitra terpercaya
              bagi ratusan pemilik rumah, investor properti, dan perusahaan dalam mewujudkan bangunan
              impian mereka. Kami menggabungkan keahlian teknis dengan standar kualitas tertinggi.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Visi kami menjadi perusahaan kontraktor dan developer terdepan di Indonesia yang
              dikenal akan kualitas, ketepatan waktu, dan kepuasan klien. Misi kami menghadirkan
              solusi konstruksi inovatif dengan harga yang transparan dan terjangkau.
            </p>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
