import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(1, "Password is required"),
});
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);
export const RegisterSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("Invalid Email"),
  password: z.string(),
  domain: z.string().min(1, "Domain is required"),
});
