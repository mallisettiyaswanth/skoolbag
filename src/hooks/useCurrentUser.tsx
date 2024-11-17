"use client";

import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";

export type UserWithAvatar = {
  image?: string;
  name: string;
  email: string;
  role: UserRole;
  id: String;
};

const useCurrentUser = (): UserWithAvatar | null => {
  const session = useSession();

  console.log(session);

  if (!session) return null;

  return session.data?.user as UserWithAvatar | null;
};

export default useCurrentUser;
