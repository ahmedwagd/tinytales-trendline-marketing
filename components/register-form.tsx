"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type RegisterFormType = z.infer<typeof registerSchema>;

import { useRegisterMutation } from "@/hooks/use-auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/auth-context";

export default function RegisterForm() {
  const { mutate, isPending } = useRegisterMutation();
  const { login } = useAuth();
  const router = useRouter();

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      password_confirmation: "",
      mobile_country_code: "971",
    },
  });
  const handleSubmit = async (data: RegisterFormType) => {
    mutate(data, {
      onSuccess: (response: any) => {
        if (response?.data?.token && response?.data?.user) {
          login(response.data.user, response.data.token);
        } else if (response?.data?.token) {
          // Fallback if user is not in response, though login() expects user
          localStorage.setItem("token", response.data.token);
        }

        toast.success(response.message);
        router.push("/auth/verify-account");
      },
      onError: (error: any) => {
        const errMsg = error.response?.data?.message || error.message;
        toast.error(errMsg);
      },
    });
  };
  const countryCodes = [
    { code: "971", country: "United Arab Emirates" },
    { code: "1", country: "United States" },
    { code: "44", country: "United Kingdom" },
    { code: "91", country: "India" },
    { code: "86", country: "China" },
    { code: "81", country: "Japan" },
    { code: "33", country: "France" },
    { code: "49", country: "Germany" },
    { code: "39", country: "Italy" },
    { code: "34", country: "Spain" },
    { code: "61", country: "Australia" },
    { code: "55", country: "Brazil" },
    { code: "27", country: "South Africa" },
  ];

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2 left-3 z-10 px-1 text-xs text-[#020202]">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Enter your full name"
                    className="text-xs text-[#020202] font-medium w-full rounded-[10px] border-muted-foreground/15"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          {/* country code and phone number */}
          <div className="flex items-center gap-4">
            <FormField
              name="mobile_country_code"
              render={({ field }) => (
                <FormItem className="relative w-1/3">
                  <FormLabel className="absolute -top-2 left-3 z-10 px-1 text-xs text-[#020202]">
                    Country Code
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="min-w-2/3 w-2/3 max-w-2/3">
                        <SelectValue placeholder="Select country code" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="">
                      {countryCodes.map(({ code, country }) => (
                        <SelectItem
                          key={code}
                          value={code}
                          className="text-xs text-[#020202] font-medium w-fit"
                        >
                          +{code} - {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="mobile"
              render={({ field }) => (
                <FormItem className="relative flex-1">
                  <FormLabel className="absolute -top-2 left-3 z-10 px-1 text-xs text-[#020202]">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      placeholder="Enter your phone number"
                      className="text-xs text-[#020202] font-medium w-full rounded-[10px] border-muted-foreground/15"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
          <FormField
            name="password_confirmation"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2 left-3 z-10 px-1 text-xs text-[#020202]">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="Confirm your password"
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
            {isPending ? "Registering...." : "Register"}
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
