import z from "zod";

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(1, { error: "Name is required" })
      .max(20, {
        error: "Name must be at most 20 characters",
      })
      .min(3, { error: "Name must be at least 3 characters" }),
    email: z.email().min(1, { error: "Email is required" }),
    password: z.string().min(1, { error: "Password is required" }).min(6, {
      error: "Password must be at least 6 characters",
    }),
  })
  .refine((data) => data.fullName.split(" ").length >= 2, {
    message: "Full name must contain first and last name",
    path: ["fullName"],
  });

export type SignupSchema = z.infer<typeof signupSchema>;
