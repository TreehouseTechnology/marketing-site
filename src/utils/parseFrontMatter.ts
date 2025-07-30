import * as z from "zod/v4";

export function parseFrontMatter<M extends z.ZodRawShape>(
  fileContent: string,
  schema: z.ZodObject<M>
) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");

  const record: Record<string, string> = {};
  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    record[key.trim()] = value;
  });

  const parseResult = schema.parse(record);

  return { metadata: parseResult, content };
}

export default parseFrontMatter;
