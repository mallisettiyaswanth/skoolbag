"use server";

import { prisma } from "@/lib/prisma";

export const verifyToken = async ({ otp }: { otp: string }) => {
  try {
    console.log(otp);
    const tokenRecord = await prisma.verificationToken.findUnique({
      where: { token: otp },
    });

    if (!tokenRecord) {
      throw new Error("Token is invalid!");
    }

    if (tokenRecord.expires < new Date()) {
      await prisma.verificationToken.delete({ where: { token: otp } });
      throw new Error("Token expired, try resending the token");
    }

    await prisma.user.update({
      where: {
        email: tokenRecord.email,
      },
      data: {
        emailVerified: new Date(),
      },
    });

    await prisma.verificationToken.delete({
      where: { token: otp },
    });

    return { success: "Ready to go😉" };
  } catch (err) {
    console.error("Verification error:", err);
    throw err;
  }
};
