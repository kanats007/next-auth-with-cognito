"use client";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="mt-4 bg-blue-500 hover:bg-blue-300 active:scale-90 transition-all duration-200 text-white py-2 px-4 rounded-full mx-auto"
    >
      Sign in
    </button>
  );
};
