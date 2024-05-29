import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
// Own logic for dealing with plaintext password strings; be careful!
import saltAndHashPassword from "@/app/utils/password";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

    authorize: async (credentials) => {
        let user = null;

        if (!credentials) {
            throw new Error("Invalid credentials");
        }

        const pwHash = saltAndHashPassword(credentials.password);

        user = await getUserFromDb(credentials.email, pwHash);

        if (!user) {
            throw new Error("No user found");
        }

        return user;
    },
    }),
  ],
});
