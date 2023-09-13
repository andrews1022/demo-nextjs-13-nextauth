import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import type { AuthOptions } from "next-auth";

export const options: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username: ", type: "text", placeholder: "jdoe" },
        password: { label: "Password: ", type: "password", placeholder: "password" }
      },
      async authorize(credentials, req) {
        const user = {
          id: "22",
          name: "John Doe",
          email: "jdoe@example.com",
          password: "nextauth"
        };

        if (credentials?.username === user.name && credentials.password === user.password) {
          return user;
        } else {
          return null;
        }
      }
    })
  ]
};
