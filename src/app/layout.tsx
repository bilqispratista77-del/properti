import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Grand Karya - Kontraktor & Property Developer Premium",
  description:
    "Grand Karya adalah perusahaan kontraktor dan property developer terpercaya yang membangun hunian & properti berkualitas dengan standar profesional. Jasa konstruksi, renovasi, design & build, dan pengembangan properti.",
  keywords: [
    "kontraktor",
    "property developer",
    "jasa konstruksi",
    "renovasi rumah",
    "design build",
    "interior design",
    "pengembang properti",
    "Grand Karya",
  ],
  authors: [{ name: "Grand Karya" }],
  icons: {
    icon: "/images/company-logo.png",
  },
  openGraph: {
    title: "Grand Karya - Kontraktor & Property Developer Premium",
    description:
      "Membangun Hunian & Properti Berkualitas dengan Standar Profesional",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
