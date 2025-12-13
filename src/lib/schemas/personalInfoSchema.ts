import z from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, { error: "Name is required" }),
  email: z.email().min(1, { error: "Email is required" }),
  phone: z.string().min(1, { error: "Phone is required" }),
  address: z.string().min(1, { error: "Address is required" }),
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
