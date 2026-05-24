'use client';

import { useScrollAnimation, useCountUp } from '@/hooks/use-scroll-animation';
import { Building2, Users, MapPin, Award } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Tahun Pengalaman',
    description: 'Melayani sejak 2009',
  },
  {
    icon: Building2,
    value: 350,
    suffix: '+',
    label: 'Proyek Selesai',
    description: 'Residensial & komersial',
  },
  {
    icon: Users,
    value: 280,
    suffix: '+',
    label: 'Klien Puas',
    description: 'Individual & korporasi',
  },
  {
    icon: MapPin,
    value: 12,
    suffix: '+',
    label: 'Area Layanan',
    description: 'Kota-kota besar Indonesia',
  },
];

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-20 bg-charcoal overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  isVisible,
  index,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, isVisible, 2000);
  const Icon = stat.icon;

  return (
    <div
      className={`text-center p-6 rounded-xl transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4">
        <Icon className="w-7 h-7 text-gold" />
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
        {count}
        <span className="text-gold">{stat.suffix}</span>
      </div>
      <div className="text-sm font-semibold text-white tracking-wide uppercase mb-1">
        {stat.label}
      </div>
      <div className="text-xs text-white/50">{stat.description}</div>
    </div>
  );
}
