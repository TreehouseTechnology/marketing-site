export interface ProductProps {
  title: string;
  link?: {
    title?: string;
    url: string;
  };
  details: string;
}

export function Product({ title, link, details }: ProductProps) {
  return (
    <div>
      <h3 className="font-semibold mb-5">
        {title}
        <>
          {" "}
          (
          {!!link ? (
            <a href={link.url}>{link.title || "view"}</a>
          ) : (
            "Coming Soon"
          )}
          )
        </>
      </h3>
      <p>{details}</p>
    </div>
  );
}
