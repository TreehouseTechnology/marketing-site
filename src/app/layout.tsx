import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Treehouse Technology",
    template: "%s | Treehouse Technology",
  },
  description:
    "Treehouse Technology builds mobile, web, and full-stack software for startups and small teams.",
  openGraph: {
    title: "Treehouse Technology",
    description:
      "Treehouse Technology builds mobile, web, and full-stack software for startups and small teams.",
    url: baseUrl,
    siteName: "Treehouse Technology",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx("text-neutral-950 dark:text-neutral-50", GeistSans.variable, GeistMono.variable)}
    >
      <body className="antialiased">
        <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
