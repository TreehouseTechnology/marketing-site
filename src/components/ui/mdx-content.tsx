import React from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

type MdxComponents = NonNullable<Parameters<typeof MDXRemote>[0]["components"]>;

interface MdxContentProps {
  source: string;
  className?: string;
  components?: MdxComponents;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

function getTextContent(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return getTextContent(element.props.children);
  }

  return "";
}

function getExplicitId(node: React.ReactNode): string | undefined {
  if (Array.isArray(node)) {
    for (const child of node) {
      const id = getExplicitId(child);
      if (id) {
        return id;
      }
    }
    return;
  }

  if (!React.isValidElement(node)) {
    return;
  }

  const props = (node as React.ReactElement<{
    id?: string;
    children?: React.ReactNode;
  }>).props;
  if (typeof props.id === "string" && props.id.trim()) {
    return props.id.trim();
  }

  return getExplicitId(props.children);
}

function stripIds(node: React.ReactNode): React.ReactNode {
  if (Array.isArray(node)) {
    return node.map(stripIds);
  }

  if (!React.isValidElement(node)) {
    return node;
  }

  const props = (node as React.ReactElement<{
    id?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
  }>).props;

  return React.cloneElement(node as React.ReactElement<any>, {
    ...props,
    id: undefined,
    children: stripIds(props.children),
  });
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const explicitId = getExplicitId(children);
    const id = explicitId ?? slugify(getTextContent(children));
    const cleanedChildren = explicitId ? stripIds(children) : children;

    return React.createElement(
      `h${level}`,
      { id },
      [
        React.createElement("a", {
          href: `#${id}`,
          key: `anchor-${id}`,
          className: "anchor",
        }),
      ],
      cleanedChildren,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function CustomLink(props: {
  href?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}) {
  const href = props.href ?? "";

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function Code({
  children,
  ...props
}: {
  children?: React.ReactNode;
  [key: string]: unknown;
}) {
  const codeHTML = highlight(String(children ?? ""));
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const defaultComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  code: Code,
};

export async function MdxContent({
  source,
  className,
  components,
}: MdxContentProps) {
  const rendered = await MDXRemote({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    components: {
      ...defaultComponents,
      ...components,
    },
  });

  if (!className) {
    return rendered;
  }

  return <div className={className}>{rendered}</div>;
}
