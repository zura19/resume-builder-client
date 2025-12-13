import z from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(1, { error: "Name is required" })
    .max(20, {
      error: "Name must be at most 20 characters",
    })
    .min(3, { error: "Name must be at least 3 characters" }),
  email: z.email().min(1, { error: "Email is required" }),
  password: z.string().min(1, { error: "Password is required" }).min(8, {
    error: "Password must be at least 8 characters",
  }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
