import { NextAuthProvider } from "@/providers/NextAuth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await NextAuthProvider();
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <p>id: {session.user.id}</p>
      <p>email: {session.user.email}</p>
      {children}
    </>
  );
}
