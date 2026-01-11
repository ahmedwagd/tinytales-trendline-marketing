import HeroBanner from "@/components/hero-banner";
import VerifyOTPForm from "@/components/verify-otp-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Account",
};

export default function VerifyAccountPage() {
  return (
    <>
      <HeroBanner title="Verify-account" />
      <div className="w-full max-w-md lg:max-w-lg mx-auto pt-4">
        <div className="rounded-lg shadow-md px-4 sm:px-6 lg:px-8 py-4">
          <VerifyOTPForm />
        </div>
      </div>
    </>
  );
}
