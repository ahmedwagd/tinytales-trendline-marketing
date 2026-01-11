"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useVerifyAccountMutation } from "@/hooks/use-auth";
import { verifyOTPSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

export type VerifyOTPFormType = z.infer<typeof verifyOTPSchema>;

export default function VerifyOTPForm() {
  const { mutate, isPending } = useVerifyAccountMutation();
  const router = useRouter();

  const form = useForm<VerifyOTPFormType>({
    resolver: zodResolver(verifyOTPSchema),
    defaultValues: {
      code: "",
    },
  });
  const handleSubmit = async (data: VerifyOTPFormType) => {
    mutate(data, {
      onSuccess: (response: any) => {
        toast.success("Account verified successfully!");
        router.push("/auth/login");
      },
      onError: (error: any) => {
        const errMsg = error.response?.data?.message || error.message;
        toast.error(errMsg);
      },
    });
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col justify-center items-center space-y-4"
        >
          <FormField
            name="code"
            render={({ field }) => (
              <InputOTP
                minLength={6}
                maxLength={6}
                value={field.value}
                onChange={field.onChange}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isPending}
          >
            {isPending ? "Verifying OTP...." : "Verify OTP"}
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center">
        <div className="flex w-full items-center justify-center">
          <p className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#020202] font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
