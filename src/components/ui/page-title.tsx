export interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <h1 className="title font-semibold text-2xl mb-8 tracking-tighter">
      {title}
    </h1>
  );
}
