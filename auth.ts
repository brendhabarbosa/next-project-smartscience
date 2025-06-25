
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import fs from "fs";
import path from "path";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
  interface User {
    role: string;
    id: string;
  }
}

const filePath = path.join(process.cwd(), "data", "users.json");

export const { auth, signIn, handlers, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const user = users.find(
          (u: { email: string; password: string }) =>
            u.email === credentials?.email &&
            u.password === credentials?.password
        );
        console.log("Authorize user:", user);
        if (!user) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, 
        };
      },
    }),
  ],
  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.role = user.role;
      console.log("JWT user:", user);
    }
    return token;
  },
  async session({ session, token }) {
    if (token) {
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      console.log("Session user:", session.user);
    }
    return session;
  },
},
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});
