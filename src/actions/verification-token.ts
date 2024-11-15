import { prisma } from "@/lib/prisma";

export const verifyToken = async (token: string) => {
  try {
    const tokenRecord = await prisma.verificationToken.findUnique({
      where: { token },
    });

    if (!tokenRecord) {
      throw new Error("Token is invalid!");
    }

    if (tokenRecord.expires < new Date()) {
      await prisma.verificationToken.delete({ where: { token } });
      throw new Error("Token expired, try resending the token");
    }

    await prisma.verificationToken.delete({
      where: { token },
    });

    return { success: "Ready to go😉" };
  } catch (err) {
    console.error("Verification error:", err);
    throw err;
  }
};
