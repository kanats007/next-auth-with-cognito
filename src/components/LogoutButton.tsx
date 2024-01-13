"use client";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button
      className="mt-4 bg-red-500 hover:bg-red-300 active:scale-90 transition-all duration-200 text-white py-2 px-4 rounded-full mx-auto"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
};
