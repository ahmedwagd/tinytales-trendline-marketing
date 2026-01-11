import HeroBanner from "@/components/hero-banner";
import LoginForm from "@/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <>
      <HeroBanner title="Login" />
      <div className="w-full max-w-md lg:max-w-lg mx-auto pt-4">
        <div className="rounded-lg shadow-md px-4 sm:px-6 lg:px-8 py-4">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
