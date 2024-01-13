import { getServerSession } from "next-auth/next";
import { config } from "@/app/api/auth/[...nextauth]/route";

export const NextAuthProvider = async (): Promise<boolean> => {
  const session = await getServerSession(config);
  return session ? true : false;
};
