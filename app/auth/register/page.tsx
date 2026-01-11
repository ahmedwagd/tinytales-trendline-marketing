import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-lg shadow-md p-8">
        <h3 className="text-[32px] font-semibold mb-2">Register</h3>
        <p className="text-[#8A8A8A] mb-8">Create your account</p>
      </div>
    </div>
  );
}
