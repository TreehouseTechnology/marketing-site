import React from "react";

export type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

interface JsonLdProps {
  data: JsonLdValue;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

