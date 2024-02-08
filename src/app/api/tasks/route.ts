import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { NextAuthProvider } from "@/providers/NextAuth";

export async function GET(req: NextApiRequest, res: NextResponse) {
  const session = await NextAuthProvider();
  if (!session)
    return NextResponse.json({ message: "Unauthorized!" }, { status: 401 });
  return NextResponse.json({ message: "Hello from Next.js!" }, { status: 200 });
}
