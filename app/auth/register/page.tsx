import HeroBanner from "@/components/heroBanner";
import { Metadata } from "next";
import RegisterForm from "@/components/register-form";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <>
      <HeroBanner title="Register" />
      <div className="w-full max-w-md lg:max-w-lg mx-auto pt-4">
        <div className="rounded-lg shadow-md px-4 sm:px-6 lg:px-8 py-4">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
