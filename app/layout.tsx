
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartScience",
  description: "Evento científico sobre o branqueamento de corais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProvider>
          <header>
            <Image src="/logo_smartscience.svg" alt="Logotipo do SmartScience" width={40} height={40} />
            <h1>SmartScience</h1>
            <nav>
              
              <ul>
                <li>
                  <Link className="login-link" href="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2025 SmartScience. Todos os direitos reservados.</p>
            <p>Desenvolvido por <a href="https://github.com/brendhabarbosa">Brendha Barbosa</a></p>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}