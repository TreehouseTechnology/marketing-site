export interface ServiceOfferingProps {
  title: string;
  items: string[];
}

export function ServiceOffering({ title, items }: ServiceOfferingProps) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/60">
      <h2 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        {title}
      </h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="flex gap-3">
            <span className="mt-2 size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ServiceOffering;
