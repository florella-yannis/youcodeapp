import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"
import GithubProvider from "next-auth/providers/github"


export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  theme: {
    logo: '/images/logo-text.png',
  },
  providers: [GithubProvider],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      session.user.image = user.image;
      return session;
    },
  },
});