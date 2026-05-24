'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import {
  MessageSquare,
  Search,
  FileText,
  PenTool,
  Hammer,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Konsultasi',
    description: 'Diskusikan kebutuhan, visi, dan budget Anda dengan tim konsultan kami secara gratis.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Survey Lokasi',
    description: 'Tim kami akan melakukan survey menyeluruh untuk menganalisis kondisi lokasi proyek.',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Penawaran Harga',
    description: 'Anda akan menerima RAB (Rencana Anggaran Biaya) yang detail dan transparan.',
  },
  {
    icon: PenTool,
    step: '04',
    title: 'Desain & Perencanaan',
    description: 'Arsitek dan insinyur kami merancang desain yang fungsional, estetis, dan sesuai anggaran.',
  },
  {
    icon: Hammer,
    step: '05',
    title: 'Pengerjaan',
    description: 'Tim profesional mengerjakan proyek dengan standar kualitas tinggi dan pengawasan ketat.',
  },
  {
    icon: CheckCircle2,
    step: '06',
    title: 'QC & Serah Terima',
    description: 'Quality control menyeluruh sebelum serah terima proyek dilaksanakan dengan dokumen lengkap.',
  },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="proses" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Proses Kerja
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Cara Kami <span className="text-gold">Bekerja</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Proses kerja kami yang terstruktur dan transparan memastikan setiap proyek
            berjalan lancar dari awal hingga selesai.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <ProcessStep key={step.step} step={step} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
  isVisible,
}: {
  step: (typeof steps)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = step.icon;

  return (
    <div
      className={`relative text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step number circle */}
      <div className="relative inline-flex mb-6">
        <div className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center group-hover:bg-gold transition-all duration-500 relative z-10 mx-auto">
          <Icon className="w-7 h-7 text-gold" />
        </div>
        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center z-20">
          {step.step}
        </span>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">
        {step.description}
      </p>
    </div>
  );
}
