import axios from "@/lib/axios";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  jwt: {},
  providers: [
    Credentials({
      name: "Ce",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials.password) return null;
        const { username, password } = credentials;
        const res = await axios.post("/auth/login", {
          username,
          password,
        });
        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }
        const user = await res.data;
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
  