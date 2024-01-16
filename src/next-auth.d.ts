import { JWT as NextAuthJWT } from "next-auth/jwt";
import {
  DefaultSession,
  DefaultUser,
  Profile as DefaultProfile,
} from "next-auth";

/** @see https://scrapbox.io/naoki85/NextAuth.js_%E3%81%A8_AWS_Cognito_%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E8%AA%8D%E8%A8%BC%E3%82%92%E3%81%99%E3%82%8B */
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    error?: string;
    user: {
      id?: string;
      idToken?: string;
      accessToken?: string;
      accessTokenExpires?: number;
      refreshToken?: string;
      groups?: string[];
      familyName?: string;
      firstName?: string;
    } & DefaultSession["user"];
  }

  interface Profile extends DefaultProfile {
    "cognito:groups"?: string[];
    family_name?: string;
    first_name?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends NextAuthJWT {
    id?: string;
    idToken?: string;
    accessToken?: string;
    accessTokenExpires?: number;
    refreshToken?: string;
    groups?: string[];
    familyName?: string;
    firstName?: string;
  }
}
