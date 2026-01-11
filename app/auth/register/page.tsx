import HeroBanner from "@/components/heroBanner";
import { Metadata } from "next";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div className="">
      <HeroBanner title="Register" />
      <div className="w-full max-w-md mt-8 ">
        <div className="w-full flex justify-center rounded-lg shadow-md px-4 sm:px-6 lg:px-8 py-4">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
