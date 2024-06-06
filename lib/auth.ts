import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { XataAdapter } from "@auth/xata-adapter";
import { getXataClient } from "./xata";

const xata = getXataClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  //adapter: XataAdapter(xata),
  pages: { signIn: "/signin" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }) {
        if (!email) return null;
        const user = await xata.db.nextauth_users.filter({ email }).getFirst();
        if (!user) return null;
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
});
