import { LoginFormType } from "@/components/login-form";
import { RegisterFormType } from "@/components/register-form";
import { VerifyOTPFormType } from "@/components/verify-otp-form";
import { postData } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: RegisterFormType) => postData("/auth/register", data),
  });
};
// verify account
export const useVerifyAccountMutation = () => {
  return useMutation({
    mutationFn: (data: VerifyOTPFormType) =>
      postData("/auth/verify-email", data),
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginFormType) => postData("/auth/login", data),
  });
};

// logout
export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: () => postData("/auth/logout", {}),
  });
};
