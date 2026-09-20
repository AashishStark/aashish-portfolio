import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: PORTFOLIO_DATA.meta.siteTitle,
  description: PORTFOLIO_DATA.meta.siteDescription,
  keywords: [
    "Aashish",
    "Software Engineer",
    "AI/ML Engineer",
    "Machine Learning",
    "PyTorch",
    "RAG",
    "Generative AI",
    "Transformers",
    "Spring Boot",
    "Kubernetes",
    "Distributed Systems",
  ],
  authors: [{ name: "Aashish" }],
  openGraph: {
    title: PORTFOLIO_DATA.meta.siteTitle,
    description: PORTFOLIO_DATA.meta.siteDescription,
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
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('portfolio-theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#fafbfc] dark:bg-[#0b0f17] text-slate-900 dark:text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
