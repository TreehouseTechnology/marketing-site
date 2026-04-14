import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/services": {
    name: "services",
  },
  "/products": {
    name: "products",
  },
  "/contact": {
    name: "contact",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  return (
    <aside className="mb-12 tracking-tight">
      <div className="lg:sticky lg:top-6">
        <nav
          className="flex flex-wrap items-center gap-2 rounded-full border border-neutral-200/80 bg-white/75 p-2 shadow-sm backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/70"
          id="nav"
        >
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                prefetch={false}
                className="inline-flex items-center rounded-full border border-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:text-white"
              >
                {name}
              </Link>
            );
          })}
          <a
            href="https://calendly.com/justin-treehousetechnology/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-neutral-950 transition-colors hover:border-neutral-950 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:border-white dark:hover:bg-white"
          >
            Book a call
          </a>
        </nav>
      </div>
    </aside>
  );
}
