import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile and Web App Development Consultancy",
  description:
    "Treehouse Technology helps startups and small teams design, build, and ship mobile, web, and full-stack software.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mobile and Web App Development Consultancy",
    description:
      "Treehouse Technology helps startups and small teams design, build, and ship mobile, web, and full-stack software.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Software development consultancy
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tighter sm:text-5xl">
          We build mobile, web, and full-stack software for teams that need to
          move quickly.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-neutral-700 dark:text-neutral-300">
          Treehouse Technology helps startups and small teams ship useful
          software without losing technical clarity. We bring startup speed,
          product thinking, and hands-on engineering across mobile apps, web
          apps, APIs, and infrastructure.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">
            What we do
          </h2>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Product discovery, MVP planning, and build scoping</li>
            <li>Mobile app development with React Native and Expo</li>
            <li>Web app development with Next.js, React, Node.js, and Python</li>
            <li>Technical audits, architecture, and team augmentation</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">
            Why it works
          </h2>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Founder-led delivery with 13 years of startup experience</li>
            <li>Small-team communication and direct implementation ownership</li>
            <li>Practical architecture that balances speed and maintainability</li>
            <li>Clear delivery paths from prototype to production</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          href="/services"
        >
          Explore services
        </Link>
        <a
          className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium transition-colors hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-200 dark:hover:text-neutral-200"
          href="https://calendly.com/justin-treehousetechnology/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </a>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">Recent work</h2>
        <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
          Browse our products, engineering write-ups, and implementation notes
          to see how we think about delivery, reliability, and user experience.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link className="underline decoration-neutral-400 underline-offset-4" href="/products">
            Products
          </Link>
          <Link className="underline decoration-neutral-400 underline-offset-4" href="/blog">
            Blog
          </Link>
          <Link className="underline decoration-neutral-400 underline-offset-4" href="/about">
            About
          </Link>
        </div>
      </div>
    </section>
  );
}
