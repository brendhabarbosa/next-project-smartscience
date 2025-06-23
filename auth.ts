// next-auth.config.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export const { auth, signIn, handlers, signOut } = NextAuth( {
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
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
});
