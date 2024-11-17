import { getVerificationTokenByEmail } from "@/data/verification-tokens";
import { prisma } from "./prisma";

export const generateVerificationToken = async (email: string) => {
  const token = Math.floor(Math.random() * 9999);
  const expires = new Date(new Date().getTime() + 10 * 60 * 1000);
  const tokenEists = await getVerificationTokenByEmail(email);
  if (tokenEists) {
    await prisma.verificationToken.delete({
      where: {
        email,
      },
    });
  }
  const sentToken = await prisma.verificationToken.create({
    data: {
      token: token + "",
      expires,
      email,
    },
  });

  return sentToken;
};
