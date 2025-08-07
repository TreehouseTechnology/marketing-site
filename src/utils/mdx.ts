import fs from "fs";
import path from "path";
import * as z from "zod/v4";
import parseFrontMatter from "@/utils/parseFrontMatter";

/**
 * Gets a list of files in the provided directory.
 * @param dir The path to search
 * @returns An array of MDX files in `dir`.
 */
function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile<M extends z.ZodRawShape>(
  path: fs.PathOrFileDescriptor,
  schema: z.ZodObject<M>
) {
  let rawContent = fs.readFileSync(path, "utf-8");
  return parseFrontMatter(rawContent, schema);
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
