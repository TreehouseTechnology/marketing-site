export interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <h1 className="title max-w-3xl text-balance text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl dark:text-neutral-50">
      {title}
    </h1>
  );
}
