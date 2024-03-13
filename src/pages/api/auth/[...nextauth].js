import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { Imprima } from "next/font/google";
import GitHubProvider from "next-auth/providers/github";
export const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: "bcfda3ae3f257dcd3374",
      clientSecret: "process.env.GITHUB_CLIENT_SECRET",
    }),
  ],
};
export default NextAuth(authOption);
