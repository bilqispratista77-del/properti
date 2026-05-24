# 🏗️ Grand Karya - Website Company Profile
## Kontraktor & Property Developer Premium

---

## 📋 Cara Deploy ke cPanel (Node.js)

Hosting Anda sudah support Node.js, jadi **tidak perlu ubah apapun** — langsung deploy!

### Persyaratan
- Hosting cPanel dengan fitur **Setup Node.js App** (bisa dicek di menu cPanel)
- Node.js 18+ tersedia di hosting

---

### Langkah 1 — Upload Files ke cPanel

1. Login **cPanel** → buka **File Manager**
2. Buat folder baru, misalnya: `grandkarya-website`
3. Upload **SEMUA file** dari package ini ke folder tersebut
4. Pastikan struktur folder seperti ini:

```
grandkarya-website/
├── public/
│   ├── images/
│   ├── .htaccess
│   └── robots.txt
├── src/
│   ├── app/
│   └── components/
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── components.json
```

### Langkah 2 — Setup Node.js App di cPanel

1. Buka menu **Setup Node.js App** di cPanel
2. Klik **Create Application**
3. Isi konfigurasi berikut:
   - **Node.js version**: `18.x` atau `20.x` (pilih yang tersedia)
   - **Application mode**: `Production`
   - **Application root**: `grandkarya-website`
   - **Application URL**: pilih domain/subdomain Anda
   - **Application startup file**: `server.js` (atau biarkan default)
4. Scroll ke bawah, klik **Create**

### Langkah 3 — Install Dependencies & Build

1. Kembali ke halaman **Setup Node.js App**
2. Cari aplikasi yang baru dibuat
3. Klik **Run NPM Install** → tunggu selesai
4. Klik **Run NPM Build** → tunggu selesai
5. Klik **Restart** untuk menjalankan aplikasi

### Langkah 4 — Selesai! 🎉

Website langsung live di domain Anda.

---

## 🔄 Cara Update Website

Jika ada perubahan kode:
1. Upload file yang berubah via **File Manager**
2. Buka **Setup Node.js App**
3. Klik **Run NPM Build**
4. Klik **Restart**

---

## ✏️ Kustomisasi

### Ganti Data Perusahaan
Edit file section di `src/components/sections/`:

| Section | File | Yang Diedit |
|---------|------|-----------|
| Hero | `HeroSection.tsx` | Headline, subheadline |
| Statistik | `StatsSection.tsx` | Angka pengalaman, proyek, klien |
| Tentang | `AboutSection.tsx` | Profil perusahaan |
| Layanan | `ServicesSection.tsx` | Daftar layanan |
| Portfolio | `PortfolioSection.tsx` | Daftar proyek & gambar |
| Keunggulan | `AdvantagesSection.tsx` | Daftar keunggulan |
| Proses Kerja | `ProcessSection.tsx` | Langkah-langkah kerja |
| Testimoni | `TestimonialsSection.tsx` | Daftar testimoni klien |
| Blog | `BlogSection.tsx` | Daftar artikel |
| FAQ | `FAQSection.tsx` | Pertanyaan & jawaban |
| CTA | `CTASection.tsx` | Teks & nomor WhatsApp |
| Footer | `Footer.tsx` | Alamat, kontak, Google Maps |

### Ganti Gambar
Replace file di folder `public/images/`. Format: `.png`, `.jpg`, `.webp`

### Ganti Warna Tema
Edit variabel CSS di `src/app/globals.css`:
- `--gold: #c8a862` → warna aksen emas
- `--charcoal: #2d2d2d` → warna gelap
- `--concrete: #8b8b83` → warna abu beton

### Ganti Nomor WhatsApp
Cari `6281234567890` di semua file section dan ganti.

---

## 🎨 Teknologi

- **Next.js 16** (React 19)
- **TypeScript 5**
- **Tailwind CSS 4**
- **shadcn/ui** (New York style)
- **Framer Motion** (animasi)
- **Lucide React** (icons)
- **Poppins** (Google Font)
