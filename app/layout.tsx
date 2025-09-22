import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liting Zhou | Resume & Portfolio",
  description: "Personal website of Liting Zhou – Software Engineer. Resume, projects, and contact information.",
  metadataBase: new URL("https://liting-zhou.github.io"),
  openGraph: {
    title: "Liting Zhou | Resume & Portfolio",
    description:
      "Software Engineer with experience in React, Next.js, TypeScript, Python, AWS. View resume and selected projects.",
    url: "https://liting-zhou.github.io",
    siteName: "Liting Zhou",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="max-w-4xl mx-auto w-full px-6 py-8 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">Liting Zhou</Link>
          <nav className="flex gap-4 text-sm">
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <span className="opacity-30">|</span>
            <a
              href="https://github.com/Liting-Zhou"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/liting-zhou-8678b687/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto w-full px-6">{children}</main>
        <footer className="max-w-4xl mx-auto w-full px-6 py-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Liting Zhou
        </footer>
      </body>
    </html>
  );
}
