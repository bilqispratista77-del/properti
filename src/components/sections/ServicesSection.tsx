'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import {
  HardHat,
  Home,
  Ruler,
  Palette,
  Building,
  ClipboardList,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: HardHat,
    title: 'Jasa Konstruksi',
    description:
      'Pembangunan rumah, ruko, gedung, dan berbagai jenis bangunan dengan standar kualitas tinggi dan material premium.',
    features: ['Rumah Tinggal', 'Ruko & Kantor', 'Gudang & Pabrik'],
  },
  {
    icon: Home,
    title: 'Renovasi Rumah',
    description:
      'Renovasi total maupun parsial untuk meningkatkan nilai dan kenyamanan hunian Anda dengan sentuhan modern.',
    features: ['Renovasi Total', 'Perluasan', 'Perbaikan'],
  },
  {
    icon: Ruler,
    title: 'Design & Build',
    description:
      'Layanan terintegrasi dari perencanaan desain hingga pembangunan, memastikan hasil sesuai impian Anda.',
    features: ['Desain Arsitektur', 'Pembangunan', 'Turnkey Project'],
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description:
      'Desain interior premium yang menggabungkan estetika modern dengan fungsi optimal untuk setiap ruangan.',
    features: ['Ruang Tamu', 'Dapur & Kamar', 'Komersial'],
  },
  {
    icon: Building,
    title: 'Property Development',
    description:
      'Pengembangan properti residensial dan komersial dengan analisis pasar mendalam dan desain yang menguntungkan.',
    features: ['Perumahan', 'Apartemen', 'Komersial'],
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description:
      'Manajemen proyek profesional dari awal hingga akhir, memastikan setiap tahap berjalan sesuai rencana.',
    features: ['Perencanaan', 'Pengawasan', 'Pelaporan'],
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="layanan" ref={ref} className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Layanan Kami
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Solusi Konstruksi <span className="text-gold">Lengkap</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Kami menyediakan layanan konstruksi dan pengembangan properti yang komprehensif,
            dari perencanaan hingga penyelesaian proyek.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isVisible,
  index,
}: {
  service: (typeof services)[0];
  isVisible: boolean;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <div
      className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-gold/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
        <Icon className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-500" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.features.map((feature) => (
          <span
            key={feature}
            className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#kontak"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors group/link"
      >
        Selengkapnya
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </a>
    </div>
  );
}
