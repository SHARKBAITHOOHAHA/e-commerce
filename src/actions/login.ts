"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import axios from "axios";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "invalid fields" };
  }
  const { email, password } = validatedFields.data;

  try {
    const res = await axios.post(
      "http://localhost:3000/users/login/",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // console.log("from the action", res, res.data.subdomain);
    return { success: res.data.subdomain };
  } catch (error) {
    return { error: "error" };
  }
};
