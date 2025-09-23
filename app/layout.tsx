import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const sourceSerif = Source_Serif_4({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Liting Zhou | Resume & Portfolio",
  description:
    "Personal website of Liting Zhou – Software Engineer. Resume, projects, and contact information.",
  metadataBase: new URL("https://liting-zhou.github.io"),
  openGraph: {
    title: "Liting Zhou | Resume & Portfolio",
    description:
      "Software Engineer | Resume, projects, and contact information.",
    url: "https://liting-zhou.github.io",
    siteName: "Liting Zhou",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
          <div className="max-w-4xl mx-auto w-full px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Liting Zhou
            </Link>
            <nav className="flex gap-4 text-sm">
              <a href="#experience" className="hover:underline">
                Experience
              </a>
              <a href="#education" className="hover:underline">
                Education
              </a>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
              <span className="opacity-30">|</span>
              <a
                href="https://github.com/Liting-Zhou"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/liting-zhou-8678b687/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto w-full px-6 py-8">{children}</main>
        <footer className="mt-10 border-t border-black/5 bg-white/60">
          <div className="max-w-4xl mx-auto w-full px-6 py-8 text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Liting Zhou
          </div>
        </footer>
      </body>
    </html>
  );
}
