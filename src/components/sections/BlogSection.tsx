'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: '10 Tips Membangun Rumah Impian: Panduan Lengkap untuk Pemula',
    excerpt:
      'Membangun rumah adalah investasi besar seumur hidup. Simak 10 tips penting yang wajib Anda ketahui sebelum memulai proyek pembangunan rumah.',
    image: '/images/blog-1.png',
    category: 'Tips & Panduan',
    author: 'Tim Grand Karya',
    date: '15 Des 2024',
    readTime: '8 menit',
  },
  {
    id: 2,
    title: 'Tren Desain Rumah 2025: Minimalis, Sustainable, dan Smart Home',
    excerpt:
      'Tahun 2025 membawa tren arsitektur baru yang menggabungkan estetika minimalis, keberlanjutan lingkungan, dan teknologi rumah pintar.',
    image: '/images/blog-2.png',
    category: 'Desain & Arsitektur',
    author: 'Ir. Diana Putri',
    date: '10 Des 2024',
    readTime: '6 menit',
  },
  {
    id: 3,
    title: 'Panduan Memilih Material Bangunan Berkualitas: Dari Foundation hingga Finishing',
    excerpt:
      'Kualitas material menentukan umur dan kenyamanan bangunan Anda. Pelajari cara memilih material yang tepat untuk setiap tahap pembangunan.',
    image: '/images/blog-3.png',
    category: 'Material & Teknik',
    author: 'Tim Grand Karya',
    date: '5 Des 2024',
    readTime: '10 menit',
  },
];

const categories = ['Semua', 'Tips & Panduan', 'Desain & Arsitektur', 'Material & Teknik', 'Estimasi Biaya', 'Inspirasi Interior'];

export default function BlogSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="blog" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Blog & Artikel
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Insight & <span className="text-gold">Informasi</span> Terbaru
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Dapatkan tips, panduan, dan insight terbaru seputar dunia konstruksi,
            desain arsitektur, dan pengembangan properti dari tim ahli kami.
          </p>
        </div>

        {/* Category Pills */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {categories.map((category, index) => (
            <span
              key={category}
              className={`px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 hover:bg-charcoal hover:text-white ${
                index === 0
                  ? 'bg-charcoal text-white'
                  : 'bg-secondary text-muted-foreground'
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Featured Article (first) + Side Articles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Featured Article */}
          <div
            className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {articles[0].category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {articles[0].title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/60 text-xs">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {articles[0].author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {articles[0].date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {articles[0].readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-3 transition-all">
                    Baca
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="flex flex-col gap-6">
            {articles.slice(1).map((article, index) => (
              <div
                key={article.id}
                className={`group flex gap-5 bg-white rounded-xl p-4 border border-border/50 hover:shadow-lg hover:border-gold/20 transition-all duration-500 hover:-translate-y-0.5 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-28 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-gold text-xs font-semibold tracking-wide uppercase mb-2">
                    {article.category}
                  </span>
                  <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-2 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2 hidden sm:block">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-muted-foreground text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal px-8 py-3.5 text-sm font-semibold tracking-wide rounded hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            Lihat Semua Artikel
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
