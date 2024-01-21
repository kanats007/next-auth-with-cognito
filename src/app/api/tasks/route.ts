import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextApiRequest, res: NextResponse) {
  const cookieStore = cookies();
  return NextResponse.json({ error: "Hello from Next.js!" }, { status: 200 });
}
