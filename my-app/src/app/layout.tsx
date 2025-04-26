import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/providers/session-provider";
import MiniKitProvider from "@/providers/minikit-provider";
import { ErudaProvider } from "@/providers/eruda-provider";
import "./globals.css";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Token Factory App",
  description: "Create your erc20 tokens",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#f5e9e2" />
      <body className={inter.className}>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "12px",
            background: "#fff",
            color: "#333",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "16px",
          },
          success: {
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
            style: {
              border: "1px solid #fecaca",
              background: "#fef2f2",
            },
          },
        }}
      />
        <ErudaProvider>
          <SessionProvider>
            <MiniKitProvider>{children}</MiniKitProvider>
          </SessionProvider>
        </ErudaProvider>
        
      </body>
    </html>
  );
}
