"use server";

import { signIn } from "@/auth";
import { DEFUALT_LOGIN_REDIRECT } from "@/routes";
import { signInSchema } from "@/schemas";
import { z } from "zod";
import { AuthError } from "next-auth";
import { prisma } from "@/lib/prisma";

export const signIntoApp = async (values: z.infer<typeof signInSchema>) => {
  const validateFields = signInSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password } = validateFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser?.emailVerified) {
    throw new Error(
      "Email is not verified. If you have the token, go through the token verification page instead"
    );
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFUALT_LOGIN_REDIRECT,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          throw new Error("Invalid Credentials!");
        default:
          throw new Error("Something went wrong!");
      }
    }
    throw err;
  }

  return { success: "Email Sent!" };
};
