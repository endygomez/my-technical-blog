import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Endy Gómez - DevOps Expert",
  description:
    "Endy Gómez es un Desarrollador de Software experto en DevOps. Él es un apasionado de la tecnología y le gusta compartir conocimiento con otras personas.",
  keywords: [
    "DevOps",
    "Automatización de procesos",
    "Entrega continua (CI/CD)",
    "Eficiencia operativa",
    "Transformación digital",
    "Especialista en DevOps",
    "Soluciones para PYMES y Grandes Empresas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <GoogleAnalytics />
      <body className={inter.className}>
        <Header />

        <main className="grid grid-cols-12 w-full text-left h-full min-h-screen">
          {children}
        </main>

        <div className="grid grid-cols-12 w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}

// lg:2/6 xl:w-2/4 lg:mt-20 lg:ml-16 ml-16 mr-16
