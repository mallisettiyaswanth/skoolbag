import { prisma } from "@/lib/prisma";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const token = await prisma.verificationToken.findUnique({
      where: {
        email,
      },
    });

    return token;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getEmailByVerificationToken = async (token: string) => {
  try {
    const email = await prisma.verificationToken.findUnique({
      where: {
        token,
      },
    });

    return email;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
