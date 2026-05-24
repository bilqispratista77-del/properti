'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Apakah Grand Karya menyediakan layanan survey gratis?',
    answer:
      'Ya, kami menyediakan layanan survey lokasi secara gratis tanpa biaya apapun. Tim kami akan datang ke lokasi Anda untuk melakukan pengukuran, analisis kondisi lahan, dan diskusi kebutuhan proyek. Hubungi kami melalui WhatsApp atau formulir kontak untuk menjadwalkan survey.',
  },
  {
    question: 'Berapa minimal nilai proyek yang bisa ditangani?',
    answer:
      'Kami menangani berbagai skala proyek mulai dari renovasi kecil senilai Rp 50 juta hingga proyek konstruksi besar bernilai miliaran rupiah. Setiap proyek akan kami perlakukan dengan standar kualitas yang sama tinggi, terlepas dari besarannya.',
  },
  {
    question: 'Apakah Grand Karya melayani proyek di luar kota?',
    answer:
      'Ya, kami melayani proyek di berbagai kota besar di Indonesia. Area layanan utama kami meliputi Jakarta, Bandung, Surabaya, Semarang, Yogyakarta, Medan, dan kota-kota besar lainnya. Untuk wilayah yang lebih jauh, kami akan menyesuaikan biaya logistik dalam penawaran harga.',
  },
  {
    question: 'Bagaimana sistem pembayaran di Grand Karya?',
    answer:
      'Sistem pembayaran kami fleksibel dan transparan. Umumnya kami menggunakan sistem termin berdasarkan progres pekerjaan: DP 30% di awal, termin 1 sebesar 20% setelah pondasi selesai, termin 2 sebesar 25% setelah struktur selesai, termin 3 sebesar 20% setelah finishing, dan pelunasan 5% setelah serah terima. Skema pembayaran dapat disesuaikan sesuai kesepakatan.',
  },
  {
    question: 'Apakah ada garansi atas pekerjaan yang dilakukan?',
    answer:
      'Tentu! Kami memberikan garansi struktural selama 5 tahun dan garansi finishing selama 1 tahun setelah serah terima proyek. Garansi mencakup perbaikan atas cacat pekerjaan yang bukan disebabkan oleh penggunaan tidak wajar atau bencana alam. Dokumentasi garansi akan diberikan secara resmi dalam berita acara serah terima.',
  },
  {
    question: 'Berapa lama waktu pengerjaan proyek rumah tinggal?',
    answer:
      'Durasi pengerjaan tergantung pada luas bangunan dan tingkat kompleksitas proyek. Sebagai gambaran, rumah tinggal 1 lantai dengan luas 100-150 m² umumnya membutuhkan waktu 4-6 bulan, sedangkan rumah 2 lantai membutuhkan waktu 6-10 bulan. Kami akan memberikan timeline detail dalam kontrak kerja.',
  },
  {
    question: 'Apakah Grand Karya menyediakan jasa desain arsitektur?',
    answer:
      'Ya, kami menyediakan layanan design & build yang terintegrasi. Tim arsitek berpengalaman kami akan membuatkan desain sesuai kebutuhan, selera, dan anggaran Anda. Jika Anda sudah memiliki desain dari arsitek lain, kami juga siap mengerjakan berdasarkan desain tersebut.',
  },
  {
    question: 'Bagaimana cara mendapatkan penawaran harga (RAB)?',
    answer:
      'Proses mendapatkan penawaran harga sangat mudah: (1) Hubungi kami via WhatsApp atau telepon, (2) Jadwalkan survey lokasi gratis, (3) Diskusikan kebutuhan dan keinginan Anda, (4) Tim kami akan menyusun Rencana Anggaran Biaya (RAB) detail, biasanya dalam waktu 3-7 hari kerja. RAB yang kami berikan gratis dan tanpa kewajiban.',
  },
  {
    question: 'Apakah izin IMB/PBG bisa dibantu?',
    answer:
      'Ya, kami membantu pengurusan seluruh perizinan yang diperlukan termasuk IMB/PBG (Izin Mendirikan Bangunan / Persetujuan Bangunan Gedung), sertifikat layak fungsi, dan dokumen perizinan lainnya. Tim administrasi kami yang berpengalaman akan mengurus proses perizinan dari awal hingga selesai.',
  },
  {
    question: 'Material yang digunakan apa saja? Bisa pakai material sendiri?',
    answer:
      'Kami menggunakan material berkualitas dari supplier terpercaya dengan standar SNI. Untuk kategori material, kami menyediakan pilihan dari standar, medium, hingga premium sesuai anggaran Anda. Jika Anda ingin menggunakan material dari supplier sendiri, kami bisa mengakomodasi dengan catatan material memenuhi spesifikasi teknis yang kami tentukan.',
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="faq" ref={ref} className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            FAQ
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Pertanyaan yang <span className="text-gold">Sering Ditanyakan</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Temukan jawaban atas pertanyaan umum seputar layanan, proses kerja,
            dan hal-hal penting lainnya tentang Grand Karya.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-4 sm:p-6 lg:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/40 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-gold hover:no-underline py-5 gap-4 group">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pl-8 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Bottom */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="text-muted-foreground mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 text-sm font-semibold tracking-wide rounded hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Hubungi Kami Langsung
          </a>
        </div>
      </div>
    </section>
  );
}
