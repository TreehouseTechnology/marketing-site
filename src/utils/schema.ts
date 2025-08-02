import z from "zod/v4";

// API Schema

export const ContactEmailSchema = z
  .strictObject({
    name: z.string().trim(),
    email: z.email().trim(),
    message: z.string().trim(),
  })
  .required();

export type ContactEmailType = z.infer<typeof ContactEmailSchema>;

// MDX header schema

export const TeamMetadataSchema = z.object({
  name: z.string(),
  role: z.string(),
  image: z.string(),
});

export const BlogPostMetadataSchema = z.object({
  title: z.string(),
  publishedAt: z.iso.date(),
  summary: z.string(),
  author: z.string(),
  image: z.url().optional(),
});

export const ProductMetadataSchema = z.object({
  title: z.string(),
  link: z.url().optional(),
  linkText: z.string().default("view"),
  wip: z.boolean().default(false),
});
