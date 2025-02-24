import { Metadata } from "next";

import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default function Page() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-lg p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">Admin Login</h1>
        <div className="mb-6 flex justify-center"></div>
        <LoginForm />
        <div className="mt-4 text-center"></div>
      </div>
    </main>
  );
}
