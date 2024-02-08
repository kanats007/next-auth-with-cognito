"use client";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut({
      // リロードを無効する https://next-auth.js.org/getting-started/client#using-the-redirect-false-option-1
      redirect: false,
    });
    // ログアウトエンドポイント
    const res = await fetch("http://localhost:3000/api/auth/logout/cognito");
    const data = await res.json();
    const url = data.url;
    window.location.replace(url);
  };
  return (
    <button
      className="mt-4 bg-red-500 hover:bg-red-300 active:scale-90 transition-all duration-200 text-white py-2 px-4 rounded-full mx-auto"
      onClick={handleLogout}
    >
      Sign out
    </button>
  );
};
