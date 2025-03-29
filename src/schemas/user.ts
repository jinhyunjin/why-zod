import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  admin: z.boolean().default(false),
  role: z.enum(["admin", "user"]).default("user"),
  createdAt: z.date().default(new Date()),
  updatedAt: z.date().default(new Date()),
});

type User = z.infer<typeof userSchema>;
