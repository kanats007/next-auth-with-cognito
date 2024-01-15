import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const NextAuthProvider = async () => {
  const session = await getServerSession(authOptions);
  return session ?? false;
};
