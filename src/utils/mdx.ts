import fs from "fs";
import path from "path";
import matter from "gray-matter";
import * as z from "zod/v4";

/**
 * Gets a list of files in the provided directory.
 * @param dir The path to search
 * @returns An array of MDX files in `dir`.
 */
function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function normalizeFrontmatterValue(value: unknown): unknown {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (Array.isArray(value)) {
    return value.map(normalizeFrontmatterValue);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, entry]) => [
        key,
        normalizeFrontmatterValue(entry),
      ]),
    );
  }

  return value;
}

function readMDXFile<M extends z.ZodRawShape>(
  path: fs.PathOrFileDescriptor,
  schema: z.ZodObject<M>
) {
  let rawContent = fs.readFileSync(path, "utf-8");
  let { data, content } = matter(rawContent);
  let normalizedData = normalizeFrontmatterValue(data);

  return {
    metadata: schema.parse(normalizedData),
    content: content.trim(),
  };
}

export function getMDXData<M extends z.ZodRawShape>(
  dir: string,
  schema: z.ZodObject<M>
) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file), schema);
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}
