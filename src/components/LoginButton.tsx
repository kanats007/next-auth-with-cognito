"use client";
import { getCsrfToken } from "next-auth/react";

const signIn = async () => {
  const res = await fetch("http://localhost:3000/api/auth/signin/cognito", {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // @ts-expect-error
    body: new URLSearchParams({
      csrfToken: await getCsrfToken(),
      json: true,
    }),
  });
  const data = await res.json();
  const url = data.url;
  window.location.href = url;
};

export const LoginButton = () => {
  return <button onClick={() => signIn()}>Sign in</button>;
};
