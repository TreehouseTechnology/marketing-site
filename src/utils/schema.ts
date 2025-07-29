import z from "zod/v4";

export const ContactEmailSchema = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string().nonempty(),
});

export type ContactEmailType = z.infer<typeof ContactEmailSchema>;
