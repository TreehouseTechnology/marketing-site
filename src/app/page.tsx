import Link from "next/link";
import { JsonLd } from "@/components/ui/json-ld";
import {
  createPageMetadata,
  organizationJsonLd,
  websiteJsonLd,
  siteDescription,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "React, React Native & Full-Stack Development",
  description: siteDescription,
  canonicalPath: "/",
});

export default function Page() {
  return (
    <section className="space-y-12">
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />

      <header className="space-y-6 rounded-[2rem] border border-neutral-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/60 sm:p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
          Software development consultancy
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-neutral-950 text-balance sm:text-5xl dark:text-neutral-50">
          We build mobile, web, and full-stack software for teams that need to
          move quickly.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-neutral-700 dark:text-neutral-300">
          Treehouse Technology helps startups and small teams ship useful
          software without losing technical clarity. We bring startup speed,
          product thinking, and hands-on engineering across mobile apps, web
          apps, APIs, and infrastructure.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
            href="/services"
          >
            Explore services
          </Link>
          <a
            className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:border-neutral-950 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:border-neutral-200 dark:hover:bg-neutral-900"
            href="https://calendly.com/justin-treehousetechnology/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
            What we do
          </p>
          <h2 className="mt-3 text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            Service scope
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            <li>Product discovery, MVP planning, and build scoping</li>
            <li>Mobile app development with React Native and Expo</li>
            <li>
              Web app development with Next.js, React, Node.js, Python, and
              Rust.
            </li>
            <li>Technical audits, architecture, and team augmentation</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
            Why it works
          </p>
          <h2 className="mt-3 text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            Delivery model
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            <li>Founder-led delivery with 13 years of startup experience</li>
            <li>
              Small-team communication and direct implementation ownership
            </li>
            <li>
              Practical architecture that balances speed and maintainability
            </li>
            <li>Clear delivery paths from prototype to production</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4 rounded-[2rem] border border-neutral-200/80 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60 sm:p-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
            Recent work
          </p>
          <h2 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            Selected links
          </h2>
        </div>
        <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
          Browse our products, engineering write-ups, and implementation notes
          to see how we think about delivery, reliability, and user experience.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 font-medium text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 font-medium text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 font-medium text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
            href="/about"
          >
            About
          </Link>
        </div>
      </div>
    </section>
  );
}
