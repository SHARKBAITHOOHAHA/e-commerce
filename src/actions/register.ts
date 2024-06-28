"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/data/user";
import axios from "axios";
import { redirect } from "next/navigation";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "invalid fields" };
  }

  const { email, password, name, domain } = validatedFields.data;

  try {
    const res = await axios.post(
      "http://localhost:3000/users/",
      {
        name: name,
        subdomain: domain,
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
  // console.log(res.data);
  // } catch (error) {
  //   return { error: "something when wrong" };
  // }

  // redirect("/dashboard");

  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  // const hashedPassword = await bcrypt.hash(password, 10);

  // const existingUser = await getUserByEmail(email);
  // if (existingUser) {
  //   return { error: "Email is already taken" };
  // }
  // await db.user.create({
  //   data: {
  //     name,
  //     email,
  //     password: hashedPassword,
  //   },
  // });

  //TODO: send verification email
};
