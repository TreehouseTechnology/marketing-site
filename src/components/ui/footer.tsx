function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-12 mb-16 border-t border-neutral-200 pt-8 dark:border-neutral-800">
      <ul className="flex flex-col gap-3 text-sm text-neutral-600 md:flex-row md:items-center md:gap-3 dark:text-neutral-300">
        <li>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 transition-colors hover:border-neutral-300 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-600 dark:hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/treehousetechnology/"
          >
            <ArrowIcon />
            <span>github</span>
          </a>
        </li>
        <li>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 transition-colors hover:border-neutral-300 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-600 dark:hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/treehousetechnology/marketing-site"
          >
            <ArrowIcon />
            <span>view source</span>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
