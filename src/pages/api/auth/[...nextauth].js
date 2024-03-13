import NextAuth from "next-auth";
import { Imprima } from "next/font/google";
import GitHubProvider from "next-auth/providers/github";
export const authOption = {
  providers: [
    GitHubProvider({
      clientId: "bcfda3ae3f257dcd3374",
      clientSecret: "process.env.GITHUB_CLIENT_SECRET",
    }),
  ],
};
export default NextAuth(authOption);
