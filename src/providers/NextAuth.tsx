import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";

export const NextAuthProvider = async () => {
  const session = await getServerSession(authOptions);
  return session ?? false;
};
