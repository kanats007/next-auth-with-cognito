import NextAuth, { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

/**
 * @see https://next-auth.js.org/providers/cognito
 */
export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.COGNITO_ISSUER ?? "",
    }),
    // ...add more providers here
  ],
};
const handler = NextAuth(authOptions);

// https://next-auth.js.org/configuration/initialization#route-handlers-app
export { handler as GET, handler as POST };
