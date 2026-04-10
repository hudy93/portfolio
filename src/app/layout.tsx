import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/themeProvider";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const siteUrl = "https://marcelhudy.com"; // TODO: update with real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marcel Hudy | Full Stack Engineer",
    template: "%s | Marcel Hudy",
  },
  description:
    "Full Stack Engineer specializing in web development, testing, and app development. Based in Munich, Germany.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Marcel Hudy",
    title: "Marcel Hudy | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in web development, testing, and app development. Based in Munich, Germany.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcel Hudy | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in web development, testing, and app development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
