import z from "zod/v4";

// API Schema

export const ContactEmailSchema = z.object({
  name: z.string("Name is required."),
  email: z.email("Email is required."),
  message: z.string().nonempty("Message cannot be empty."),
});

export type ContactEmailType = z.infer<typeof ContactEmailSchema>;

// MDX header schema

export const TeamMetadataSchema = z.object({
  name: z.string(),
  role: z.string(),
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
});
