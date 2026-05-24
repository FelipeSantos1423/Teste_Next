import Providers from "@/components/Providers"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Catalogo de Filmes",
  description: "Página inicial do catálogo de filmes",
};

export default function RootLayout({ children }) {
  return (
    <html

      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
