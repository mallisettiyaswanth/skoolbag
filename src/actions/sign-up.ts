"use server";

import { signUpSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getUserByEmail } from "@/data/user";

export const SignUp = async (values: z.infer<typeof signUpSchema>) => {
  const validateFields = signUpSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password, firstname, lastname, country, state, phonenumber } =
    validateFields.data;

  const hashedPassword = await bcrypt.hash(password, 12);

  const existEmail = await getUserByEmail(email);

  if (existEmail) {
    return { error: "Email already exists!" };
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstname,
      lastname,
      country,
      state,
      phonenumber,
    },
  });

  console.log("user created");

  // TODO: send verification token

  return { success: "Email Sent!" };
};
