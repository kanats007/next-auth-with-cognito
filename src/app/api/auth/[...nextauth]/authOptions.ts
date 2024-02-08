import { NextAuthOptions } from "next-auth";
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
  jwt: {
    // second × min × hour × day
    maxAge: 60 * 60 * 1 * 1,
  },
  callbacks: {
    async session({ session, token, user }) {
      // cognitoで管理しているユーザーID
      session.user.id = token.sub;
      return session;
    },
  },
  logger: {
    error(code, metadata) {
      // console.error(code, metadata);
    },
    warn(code) {
      // console.warn(code);
    },
    debug(code, metadata) {
      // console.debug(code, metadata);
    },
  },
};
