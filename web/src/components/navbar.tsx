"use client"
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar() {
  const { user } = useUser();
  return (
    <nav className="flex p-2 items-center justify-between">
      <h1 className="text-2xl font-bold">MusicPair</h1>
      {
        !user ?
          ( <LoginButton /> )
        : ( <LogoutButton /> )
      }
    </nav>
  )
}
