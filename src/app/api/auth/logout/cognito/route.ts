import { NextApiRequest, NextApiResponse } from "next";

// ログアウトエンドポイント　https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/logout-endpoint.html
const url = `https://kanats-test.auth.ap-northeast-1.amazoncognito.com/logout?client_id=${process.env.COGNITO_CLIENT_ID}&logout_uri=http://localhost:3000/login`;

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return new Response(JSON.stringify({ url }), {
    status: 200,
    headers: { Location: url },
  });
}
