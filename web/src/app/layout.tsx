import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MusicPair",
  description: "A web app that allows Spotify users to find people with similar music taste and their playlists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
