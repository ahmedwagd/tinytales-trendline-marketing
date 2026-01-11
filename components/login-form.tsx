"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/hooks/use-auth";
import { loginSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

export type LoginFormType = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { mutate, isPending } = useLoginMutation();
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSubmit = async (data: LoginFormType) => {
    console.log(data);
    mutate(data, {
      onSuccess: (response: any) => {
        if (response?.data?.token) {
          localStorage.setItem("token", response.data.token);
        }
        toast.success("Login successful!");
        form.reset();
        redirect("/", RedirectType.replace);
      },
      onError: (error: any) => {
        const errMsg = error.response?.data?.message || error.message;
        console.log(errMsg);
        toast.error(errMsg);
      },
    });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2 left-3 z-10 px-1 text-xs text-[#020202]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    placeholder="Enter your email"
                    className="text-xs text-[#020202] font-medium w-full rounded-[10px] border-muted-foreground/15"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2 left-3 z-10 px-1 text-xs text-[#020202]">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="Enter your password"
                    className="text-xs text-[#020202] font-medium w-full rounded-[10px] border-muted-foreground/15"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isPending}
          >
            {isPending ? "Logging in...." : "Login"}
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center">
        <div className="flex w-full items-center justify-center">
          <p className="text-muted-foreground text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-[#020202] font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
