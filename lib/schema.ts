import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string({ message: "Full name is required" }).trim(),
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email address" }),
    mobile: z
      .string({ message: "Mobile number is required" })
      .min(10, {
        message: "Mobile number must be at least 10 characters long",
      }),
    password: z
      .string({ message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" }),
    password_confirmation: z
      .string({ message: "Password confirmation is required" })
      .min(6, {
        message: "Password confirmation must be at least 6 characters long",
      }),
    mobile_country_code: z
      .string({ message: "Mobile country code is required" })
      .min(2, {
        message: "Mobile country code must be at least 2 characters long",
      }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });
