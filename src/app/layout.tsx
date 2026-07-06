import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import SpotifyWidget from "@/components/SpotifyWidget";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Priyanka Mehta Portfolio",
  description: "Interactive portfolio with an AI-powered Memoji that answers questions about me, my skills, and my experience",
  keywords: [
    "Priyanka Mehta",
    "Portfolio",
    "AI Engineer",
    "GenAI",
    "Agentic AI",
    "Interactive",
    "Memoji",
    "RAG",
    "LangGraph",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Priyanka Mehta",
      url: "https://github.com/priyanka603",
    },
  ],
  creator: "Priyanka Mehta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/priyanka603",
    title: "Priyanka Mehta Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
    siteName: "Priyanka Mehta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Mehta Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
  },
  icons: {
    icon: [
      {
        url: "/logo-pm.svg",
        sizes: "any",
      }
    ],
    shortcut: "/logo-pm.svg?v=2",
    apple: "/logo-pm.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo-pm.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans antialiased transition-colors duration-500 ease-in-out",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <SpotifyWidget />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
