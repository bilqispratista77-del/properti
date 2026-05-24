'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const categories = ['Semua', 'Residensial', 'Komersial', 'Renovasi', 'Interior'];

const projects = [
  {
    id: 1,
    title: 'Villa Nusa Indah',
    location: 'Jakarta Selatan',
    category: 'Residensial',
    year: '2024',
    image: '/images/portfolio-1.png',
    description: 'Villa modern minimalis dengan kolam renang pribadi dan taman tropis.',
  },
  {
    id: 2,
    title: 'Grand Office Tower',
    location: 'Jakarta Pusat',
    category: 'Komersial',
    year: '2024',
    image: '/images/portfolio-2.png',
    description: 'Gedung perkantoran 12 lantai dengan fasad kaca modern.',
  },
  {
    id: 3,
    title: 'Rumah Renovasi Menteng',
    location: 'Jakarta Pusat',
    category: 'Renovasi',
    year: '2023',
    image: '/images/portfolio-3.png',
    description: 'Renovasi total rumah heritage menjadi hunian modern yang elegan.',
  },
  {
    id: 4,
    title: 'Green Living Apartment',
    location: 'Tangerang Selatan',
    category: 'Residensial',
    year: '2023',
    image: '/images/portfolio-4.png',
    description: 'Kompleks apartemen hijau dengan konsep sustainable living.',
  },
  {
    id: 5,
    title: 'The Horizon Residence',
    location: 'Bandung',
    category: 'Residensial',
    year: '2023',
    image: '/images/portfolio-5.png',
    description: 'Hunian premium dengan desain kontemporer dan pemandangan kota.',
  },
  {
    id: 6,
    title: 'Luxury Bathroom Suite',
    location: 'Jakarta Barat',
    category: 'Interior',
    year: '2024',
    image: '/images/portfolio-6.png',
    description: 'Desain interior kamar mandi mewah dengan material marmer premium.',
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const filteredProjects =
    activeFilter === 'Semua'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className={`text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Portfolio Kami
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Proyek yang Telah <span className="text-gold">Kami Selesaikan</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Setiap proyek yang kami kerjakan mencerminkan komitmen kami terhadap kualitas,
            presisi, dan kepuasan klien.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-charcoal text-white shadow-lg'
                  : 'bg-secondary text-muted-foreground hover:bg-charcoal/10 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover overlay with details */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="text-white">
            <p className="text-sm opacity-90 mb-2">{project.description}</p>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all"
            >
              Lihat Detail
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
