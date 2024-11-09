import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const signUpSchema = z.object({
  firstname: z.string().min(1, { message: "First Name is required" }),
  lastname: z.string().min(1, { message: "Last Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid Email"),
  password: z
    .string()
    .min(8, "length should be minimum 8")
    .max(15, "length should not be greater than 15"),
  country: z.string(),
  phonenumber: z
    .string()
    .min(10, { message: "Phone Number must be at least 10 digits" })
    .max(15, { message: "Phone Number must not exceed 15 digits" })
    .regex(phoneRegex, { message: "Phone Number must be numeric" }),
  state: z.string(),
});

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid Email"),
  password: z.string().min(8, "length should be minimum 8"),
});
