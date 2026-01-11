"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { AuthContextProvider } from "./auth-context";

const queryClient = new QueryClient();

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{children}</AuthContextProvider>
      <Toaster position="bottom-right" richColors />
    </QueryClientProvider>
  );
}
