"use server";

import { signUpSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/email";

export const SignUp = async (values: z.infer<typeof signUpSchema>) => {
  const validateFields = signUpSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!", details: validateFields.error.errors };
  }

  const { email, password, firstname, lastname, country, state, phonenumber } =
    validateFields.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const existEmail = await getUserByEmail(email);
    if (existEmail) {
      throw new Error("Email already exists");
    }

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: firstname + " " + lastname,
        country,
        state,
        phonenumber,
      },
    });

    const token = await generateVerificationToken(email);
    await sendVerificationEmail(email, token.token, firstname + " " + lastname);

    return { success: "Verification email sent!" };
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
};
