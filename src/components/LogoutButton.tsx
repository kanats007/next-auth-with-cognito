"use client";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  const handleLogout = async () => {
    signOut({
      // リロードを無効する https://next-auth.js.org/getting-started/client#using-the-redirect-false-option-1
      redirect: false,
    });
    // ログアウトエンドポイント　　https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/logout-endpoint.html
    window.location.href =
      "https://kanats-test.auth.ap-northeast-1.amazoncognito.com/logout?client_id=5oekukqv98q8ab32hd4h734v7d&logout_uri=http://localhost:3000/login";
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
