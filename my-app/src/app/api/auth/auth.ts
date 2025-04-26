import { MiniKit, verifySiweMessage } from "@worldcoin/minikit-js";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "worldcoin-wallet",
      name: "Worldcoin Wallet",
      type: "credentials",
      credentials: {
        message: { type: "text" },
        signature: { type: "text" },
        address: { type: "text" },
        nonce: { type: "text" },
      },
      async authorize(credentials) {
        if (
          !credentials?.signature ||
          !credentials?.message ||
          !credentials?.address ||
          !credentials?.nonce
        ) {
          return null;
        }
        try {
          const validMessage = await verifySiweMessage(
            {
              status: "success",
              message: credentials.message,
              signature: credentials.signature,
              address: credentials.address,
              version: 1,
            },
            credentials.nonce
          );

          if (!validMessage.isValid || !validMessage.siweMessageData.address) {
            return null;
          }

          const userProfile = await MiniKit.getUserByAddress(
            validMessage.siweMessageData.address
          );
          console.log({
            id: validMessage.siweMessageData.address.toLowerCase(),
            address: validMessage.siweMessageData.address.toLowerCase(),
            name: userProfile.username,
            image: userProfile.profilePictureUrl,
          });
          return {
            id: validMessage.siweMessageData.address.toLowerCase(),
            address: validMessage.siweMessageData.address.toLowerCase(),
            name: userProfile.username,
            image: userProfile.profilePictureUrl,
          };
        } catch (e) {
          console.error("Error verifying message:", e);
          return null;
        }
      },
    },
  ],
  callbacks: {
    redirect() {
      return process.env.NEXT_PUBLIC_APP_URL as string;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.address = token.sub;
      }
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  pages: {
    signIn: "/",
  },
};
