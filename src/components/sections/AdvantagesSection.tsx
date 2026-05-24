'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import {
  Shield,
  Users,
  Clock,
  Receipt,
  BadgeCheck,
  FileCheck,
} from 'lucide-react';

const advantages = [
  {
    icon: Shield,
    title: 'Material Berkualitas',
    description:
      'Kami hanya menggunakan material dari supplier terpercaya dengan sertifikasi standar nasional dan internasional.',
  },
  {
    icon: Users,
    title: 'Tim Profesional',
    description:
      'Tim arsitek, insinyur, dan tenaga kerja berpengalaman yang terlatih dan bersertifikasi.',
  },
  {
    icon: Clock,
    title: 'Tepat Waktu',
    description:
      'Komitmen penyelesaian proyek sesuai jadwal dengan sistem manajemen waktu yang terstruktur.',
  },
  {
    icon: Receipt,
    title: 'Harga Transparan',
    description:
      'Rincian biaya yang jelas dan detail tanpa biaya tersembunyi. Apa yang tertera, itulah yang Anda bayar.',
  },
  {
    icon: BadgeCheck,
    title: 'Garansi Pekerjaan',
    description:
      'Setiap proyek kami berikan garansi sebagai bentuk komitmen terhadap kualitas dan kepuasan klien.',
  },
  {
    icon: FileCheck,
    title: 'Legalitas Lengkap',
    description:
      'Perusahaan terdaftar resmi dengan SIUJK, NPWP, dan seluruh dokumen legalitas yang diperlukan.',
  },
];

export default function AdvantagesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Keunggulan Kami
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Mengapa Memilih <span className="text-gold">Grand Karya</span>
          </h2>
          <p
            className={`text-white/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Kami berkomitmen memberikan layanan terbaik dengan standar profesional
            yang menjadikan kami pilihan terpercaya.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                <advantage.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
